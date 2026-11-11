/* Online matches. Each coach brings the solo lineup saved on their device.
   The server owns the match (sim.js) and streams it to both coaches. This file is the lobby screen,
   the socket, input sending, and drawing the snapshots the server sends. */
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let ws = null, view = 'browse', name = 'Coach', lobby = null, lobbies = [], side = null;
  let snap = null, seenAt = 0, done = false, sendN = 1, lastSent = '', lastSentAt = 0;
  let wakeTimer = 0, countN = 0, themRematch = false, wantRematch = false, byeSeen = false;
  const pred = { idx: -1, on: 0 };

  function serverBase() { return String(window.AFL_SERVER || '').replace(/\/+$/, ''); }
  function wsUrl() {
    let u;
    try { u = new URL(serverBase() || location.href); } catch (e) { return null; }
    if (u.protocol === 'https:') return 'wss://' + u.host + '/ws';
    if (u.protocol === 'http:') return 'ws://' + u.host + '/ws';
    return null; /* file:// with no AFL_SERVER set */
  }
  function inviteLink(code) {
    const base = serverBase() || (location.origin + location.pathname);
    return base.replace(/\/+$/, '') + '/?room=' + code;
  }
  function say(t) { const n = $('mpNote'); if (n) n.textContent = t || ''; }
  function squad() {
    const hk = window.__hk;
    if (!hk) return [];
    const save = hk.get(), pool = hk.pool();
    if (!save || !save.lineup) return [];
    return save.lineup.map(id => {
      const p = pool[id]; if (!p) return null;
      return { id: p.id, name: p.name, rating: p.rating, kic: p.kic, mar: p.mar, spd: p.spd, end: p.end, pos: p.pos };
    }).filter(Boolean).slice(0, 18);
  }
  function mineMeta() {
    const hk = window.__hk, save = hk.get(), list = squad();
    const ovr = list.length ? Math.round(list.reduce((a, p) => a + (p.rating || 0), 0) / list.length) : 0;
    return { squad: list, club: save.club | 0, ground: save.ground || 'mcg', ovr };
  }
  function savedName() { return (localStorage.getItem('aflMpName') || 'Coach').slice(0, 18); }
  function readName() {
    const el = $('mpName');
    name = ((el && el.value) || name || 'Coach').trim().slice(0, 18) || 'Coach';
    try { localStorage.setItem('aflMpName', name); } catch (e) { /* private mode */ }
    return name;
  }

  /* ---------- socket ---------- */
  function connect(then) {
    if (ws && ws.readyState === 1) { then(); return; }
    if (ws && ws.readyState === 0) { ws.addEventListener('open', then, { once: true }); return; }
    const url = wsUrl();
    if (!url) { say('This copy of the game needs a server address. Set AFL_SERVER in config.js.'); return; }
    say('Connecting…');
    clearTimeout(wakeTimer);
    wakeTimer = setTimeout(() => say('Waking the server. Free hosting sleeps when idle, so this can take up to a minute…'), 4000);
    let sock;
    try { sock = new WebSocket(url); } catch (e) { say('Could not open a connection.'); return; }
    ws = sock;
    sock.onopen = () => {
      clearTimeout(wakeTimer); say('');
      sock.send(JSON.stringify({ type: 'watch' }));
      then();
    };
    sock.onmessage = e => { if (ws !== sock) return; let m; try { m = JSON.parse(e.data); } catch (err) { return; } onMsg(m); };
    sock.onclose = () => {
      if (sock.intentional) return;
      clearTimeout(wakeTimer);
      if (ws === sock) ws = null;
      onDrop();
    };
    sock.onerror = () => { /* onclose follows */ };
  }
  function tx(obj) { if (ws && ws.readyState === 1) { try { ws.send(JSON.stringify(obj)); } catch (e) { /* closing */ } } }

  function closeSocket() {
    clearTimeout(wakeTimer);
    const old = ws;
    ws = null;
    if (!old) return;
    old.intentional = true;
    try { if (old.readyState === 1) old.send(JSON.stringify({ type: 'leave' })); old.close(); } catch (e) { /* gone */ }
  }

  function resetMatchState() {
    snap = null; seenAt = 0; done = false; sendN = 1; lastSent = ''; lastSentAt = 0; side = null;
    themRematch = false; wantRematch = false; byeSeen = false; pred.on = 0; pred.idx = -1;
  }

  /* ---------- lobby screen ---------- */
  function panel() {
    let el = $('mpanel');
    if (!el) { el = document.createElement('div'); el.id = 'mpanel'; document.body.appendChild(el); }
    return el;
  }
  function closePanel() { const el = $('mpanel'); if (el) el.remove(); }

  function open(opts) {
    const hk = window.__hk;
    if (!hk || !hk.get() || !hk.get().lineup) return;
    const meta = mineMeta();
    if (meta.squad.length < 18) {
      const el0 = panel();
      el0.innerHTML = `<div class="mpcard"><b class="it">PLAY A MATE</b><p>Pick a full solo 18 first. Online uses that exact side, levels and all.</p><div class="mprow"><button type="button" class="kbtn" id="mpClose">CLOSE</button></div></div>`;
      $('mpClose').onclick = () => el0.remove();
      return;
    }
    closeSocket();
    resetMatchState();
    lobby = null; lobbies = []; view = 'browse'; countN = 0;
    drawBrowse();
    if (opts && opts.code) {
      const code = String(opts.code).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
      const box = $('mpCode'); if (box) box.value = code;
      joinCode(code);
    } else {
      connect(() => {});
    }
  }

  function drawBrowse() {
    view = 'browse';
    const meta = mineMeta();
    const el = panel();
    el.innerHTML = `<div class="mpcard"><b class="it">PLAY A MATE</b>
      <p>You bring the 18 you earned in solo (avg ${meta.ovr}). Their career stays on their device and yours stays on yours.</p>
      <label>YOUR NAME</label><input id="mpName" maxlength="18" value="${esc(savedName())}" autocomplete="off">
      <div class="mprow mpgap"><button type="button" class="go2 it" id="mpCreate">CREATE LOBBY</button></div>
      <label class="mpchk"><input type="checkbox" id="mpPublic" checked> Show it in Open Lobbies</label>
      <label>JOIN WITH A CODE</label>
      <div class="mprow"><input id="mpCode" maxlength="4" placeholder="ABCD" autocomplete="off" style="text-transform:uppercase"><button type="button" class="kbtn" id="mpJoin">JOIN</button></div>
      <label>OPEN LOBBIES</label>
      <div id="mpList" class="mplist"></div>
      <p id="mpNote"></p>
      <div class="mprow"><button type="button" class="kbtn" id="mpClose">CLOSE</button></div></div>`;
    $('mpClose').onclick = () => { closeSocket(); lobby = null; el.remove(); };
    $('mpCreate').onclick = () => { readName(); connect(() => createLobby()); };
    $('mpJoin').onclick = () => joinCode(($('mpCode').value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4));
    $('mpCode').onkeydown = e => { if (e.key === 'Enter') $('mpJoin').click(); e.stopPropagation(); };
    $('mpName').onkeydown = e => e.stopPropagation();
    paintList();
  }

  function paintList() {
    const box = $('mpList'); if (!box) return;
    if (!lobbies.length) { box.innerHTML = '<div class="mpempty">No open lobbies right now. Create one and share the code.</div>'; return; }
    box.innerHTML = lobbies.map(l => `<div class="mprowl"><div><b>${esc(l.name)}</b><small>avg ${l.ovr | 0} OVR · ${esc(l.code)}</small></div><button type="button" class="kbtn" data-code="${esc(l.code)}">JOIN</button></div>`).join('');
    box.querySelectorAll('[data-code]').forEach(b => { b.onclick = () => joinCode(b.dataset.code); });
  }

  function createLobby() {
    const meta = mineMeta(), pub = $('mpPublic') ? $('mpPublic').checked : true;
    tx({ type: 'create', name: readName(), squad: meta.squad, club: meta.club, ground: meta.ground, public: pub });
  }
  function joinCode(code) {
    if (!code || code.length < 4) { say('Type the 4-letter code.'); return; }
    const meta = mineMeta();
    connect(() => tx({ type: 'join', code, name: readName(), squad: meta.squad, club: meta.club, ground: meta.ground }));
  }

  function slot(label, s, you) {
    if (!s) return `<div class="mpslot empty"><small>${label}</small><b>Waiting for a coach…</b></div>`;
    return `<div class="mpslot${s.ready ? ' rdy' : ''}"><small>${label}${you ? ' · YOU' : ''}</small><b>${esc(s.name)}</b><span>avg ${s.ovr | 0} OVR</span><em>${s.ready ? 'READY' : 'NOT READY'}</em></div>`;
  }
  function drawLobby() {
    if (!lobby) return;
    view = 'lobby';
    const isHost = lobby.you === 'host';
    const me = isHost ? lobby.host : lobby.guest;
    const both = !!(lobby.host && lobby.guest);
    const el = panel();
    const keepNote = ($('mpNote') && $('mpNote').textContent) || '';
    el.innerHTML = `<div class="mpcard"><b class="it">LOBBY</b>
      <div class="mpcode" id="mpBig">${esc(lobby.code)}</div>
      <div class="mprow"><button type="button" class="kbtn" id="mpCopy">COPY INVITE LINK</button></div>
      <div class="mpslots">${slot('HOME', lobby.host, isHost)}${slot('AWAY', lobby.guest, !isHost)}</div>
      ${isHost ? `<label class="mpchk"><input type="checkbox" id="mpPublic" ${lobby.public ? 'checked' : ''}> Show it in Open Lobbies</label>` : ''}
      <div id="mpCount" class="mpcount">${countN > 0 ? countN : ''}</div>
      <p id="mpNote">${esc(keepNote)}</p>
      <div class="mprow">
        <button type="button" class="kbtn" id="mpLeave">LEAVE</button>
        ${isHost && lobby.guest ? '<button type="button" class="kbtn" id="mpKick">KICK</button>' : ''}
        <button type="button" class="go2 it" id="mpReady" ${both ? '' : 'disabled'}>${me && me.ready ? 'UNREADY' : 'READY'}</button>
      </div></div>`;
    if (!both) say(isHost ? 'Waiting for the other coach. Send them the code or the invite link.' : '');
    $('mpLeave').onclick = () => { closeSocket(); lobby = null; drawBrowse(); connect(() => {}); };
    $('mpReady').onclick = () => tx({ type: 'ready', ready: !(me && me.ready) });
    $('mpCopy').onclick = copyInvite;
    const k = $('mpKick'); if (k) k.onclick = () => tx({ type: 'kick' });
    const pb = $('mpPublic'); if (pb) pb.onchange = () => tx({ type: 'visibility', public: pb.checked });
  }
  function copyInvite() {
    if (!lobby) return;
    const link = inviteLink(lobby.code);
    const ok = () => say('Invite link copied. Send it to your mate.');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(link).then(ok, () => say(link));
    else say(link);
  }

  /* ---------- messages from the server ---------- */
  function onMsg(m) {
    if (m.type === 'lobbies') { lobbies = m.list || []; if (view === 'browse') paintList(); return; }
    if (m.type === 'room') {
      lobby = m;
      if (!match()) drawLobby();
      return;
    }
    if (m.type === 'count') {
      countN = m.n | 0;
      const c = $('mpCount'); if (c) c.textContent = countN > 0 ? countN : '';
      if (countN > 0) say('Kick off in…');
      return;
    }
    if (m.type === 'go') { begin(m); return; }
    if (m.type === 'snap') {
      if (snap && (m.t | 0) < (snap.t | 0)) return;
      snap = m; seenAt = performance.now(); return;
    }
    if (m.type === 'over') { if (!done) finish(m); return; }
    if (m.type === 'rematch') {
      themRematch = true;
      const n = $('rmNote'); if (n) n.textContent = 'They want a rematch. Tap REMATCH to go again.';
      return;
    }
    if (m.type === 'kicked') { lobby = null; closeSocket(); drawBrowse(); connect(() => say('The host removed you from the lobby.')); return; }
    if (m.type === 'bye') { onBye(m.reason); return; }
    if (m.type === 'err') { say(m.text || 'Something went wrong.'); return; }
  }

  function disposeScene(m) {
    if (!m || !m.scene) return;
    try {
      m.scene.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) [].concat(o.material).forEach(x => { if (x.map) x.map.dispose(); x.dispose(); });
      });
    } catch (e) { /* already gone */ }
  }

  function begin(m) {
    const hk = window.__hk;
    const old = match();
    resetMatchState();
    side = m.side;
    countN = 0;
    const info = {
      side, id: m.id, seed: m.seed,
      home: m.home, away: m.away, homeClub: m.homeClub | 0, awayClub: m.awayClub | 0,
      homeName: m.homeName, awayName: m.awayName, ground: m.ground || 'mcg'
    };
    closePanel();
    hk.startOnline(info);
    if (old && old !== match()) disposeScene(old);
  }

  /* ---------- during the match ---------- */
  function match() { return window.__hk && window.__hk.match(); }
  function me() {
    const m = match();
    if (!m || !side || !snap || !m.home) return null;
    const idx = side === 'home' ? snap.ah : snap.aa;
    return (side === 'home' ? m.home : m.away)[idx];
  }
  function inputPacket() {
    const hk = window.__hk;
    const dir = hk.inputDir();
    const keys = hk.keys, bind = hk.bind();
    let edge = '';
    if (keys.has(bind.handpass)) { edge = 'hand'; keys.delete(bind.handpass); }
    else if (keys.has(bind.tackle)) { edge = 'tackle'; keys.delete(bind.tackle); }
    else if (keys.has(bind.punt)) { edge = 'punt'; keys.delete(bind.punt); }
    else if (keys.has(bind.cycle) || keys.has(bind.nearest)) { edge = 'switch'; keys.delete(bind.cycle); keys.delete(bind.nearest); }
    return { type: 'in', n: edge ? ++sendN : sendN, ax: Math.round(dir[0] * 100) / 100, az: Math.round(dir[1] * 100) / 100, sprint: keys.has(bind.sprint) ? 1 : 0, kick: keys.has(bind.kick) ? 1 : 0, edge };
  }
  function sendInput() {
    const pkt = inputPacket();
    const sig = pkt.ax + ',' + pkt.az + ',' + pkt.sprint + ',' + pkt.kick;
    const now = performance.now();
    if (pkt.edge || sig !== lastSent || now - lastSentAt > 100) { lastSent = sig; lastSentAt = now; tx(pkt); }
  }

  function tick(dt) {
    const m = match();
    if (!m || !side) return;
    sendInput();
    if (!snap) return;
    apply(m, snap, dt);
    paint(snap);
    if (snap.over && !done) finish(overMsg(snap));
  }

  function paint(s) {
    const clock = $('time'), q = $('qtr'), hs = $('hs'), as = $('as');
    if (clock) clock.textContent = Math.floor(s.time / 60) + ':' + String(s.time % 60).padStart(2, '0');
    if (q) q.textContent = 'Q' + s.q;
    if (hs) hs.textContent = s.hg + '.' + s.hb + ' (' + (s.hg * 6 + s.hb) + ')';
    if (as) as.textContent = s.ag + '.' + s.ab + ' (' + (s.ag * 6 + s.ab) + ')';
    const who = me();
    const nm = $('whoName'); if (nm && who) nm.textContent = who.d.name.toUpperCase() + '  ' + who.d.rating;
  }

  function apply(m, s, dt) {
    const ph = ['held', 'flight', 'loose', 'dead'][s.ball[3]] || 'loose';
    const lead = Math.min(0.08, Math.max(0, (performance.now() - seenAt) / 1000));
    const bvx = s.ball[4] || 0, bvz = s.ball[5] || 0;
    const bx = s.ball[0] + (ph === 'held' ? 0 : bvx * lead);
    const bz = s.ball[1] + (ph === 'held' ? 0 : bvz * lead);
    const bh = s.ball[2];
    const bk = Math.min(1, 28 * dt);
    m.ball.ph = ph;
    m.ball.x += (bx - m.ball.x) * bk;
    m.ball.z += (bz - m.ball.z) * bk;
    m.ball.h += (bh - m.ball.h) * bk;
    m.ball.vx = bvx; m.ball.vz = bvz;
    const who = s.who < 0 ? null : s.who < 18 ? m.home[s.who] : m.away[s.who - 18];
    m.carrier = ph === 'held' ? who : null;
    const idx = side === 'home' ? s.ah : s.aa;
    if (pred.idx !== idx) { pred.on = 0; pred.idx = idx; }
    const mine = me();
    const dir = window.__hk ? window.__hk.inputDir() : [0, 0];
    const stick = Math.hypot(dir[0], dir[1]) > 0.12;
    m.all.forEach((p, i) => {
      const o = i * 6;
      const x = s.p[o], z = s.p[o + 1], face = s.p[o + 2], stam = s.p[o + 3], vx = s.p[o + 4] || 0, vz = s.p[o + 5] || 0;
      let tx2 = x + vx * lead, tz2 = z + vz * lead;
      if (p === mine && stick) {
        const sprint = window.__hk.keys.has(window.__hk.bind().sprint);
        const top = (6.5 + (p.d.spd - 70) * 0.12) * (sprint ? 1.3 : 1);
        tx2 = x + dir[0] * top * lead; tz2 = z + dir[1] * top * lead;
      }
      p.stam = stam; p.exh = stam <= 0;
      p.vx = vx; p.vz = vz; p.face = face;
      const k = Math.min(1, 28 * dt);
      p.x += (tx2 - p.x) * k; p.z += (tz2 - p.z) * k;
      const ring = p.model && p.model.userData.ring;
      if (ring) ring.visible = p === mine;
    });
    if (m.online) m.online.ctrl = mine || null;
    const charge = side === 'away' ? s.ca : s.ch;
    m.charge = charge || 0; m.charging = (charge || 0) > 0.02;
    if (s.over) m.over = true;
  }

  function overMsg(s) {
    const score = { home: { g: s.hg, b: s.hb }, away: { g: s.ag, b: s.ab } };
    const homePay = AFLSim.purse(score, 'home'), awayPay = AFLSim.purse(score, 'away');
    const id = (match() && match().online && match().online.id) || 'x';
    return { type: 'over', id, hg: s.hg, hb: s.hb, ag: s.ag, ab: s.ab, homeCoins: homePay.coins, awayCoins: awayPay.coins };
  }

  function finish(msg) {
    const m = match(); if (m) m.over = true;
    done = true;
    const hk = window.__hk, save = hk.get();
    save.mpPaid = save.mpPaid || {};
    const coins = side === 'away' ? msg.awayCoins : msg.homeCoins;
    const mine = side === 'away' ? msg.ag * 6 + msg.ab : msg.hg * 6 + msg.hb;
    const opp = side === 'away' ? msg.hg * 6 + msg.hb : msg.ag * 6 + msg.ab;
    let note = 'Already paid';
    if (msg.id && !save.mpPaid[msg.id]) {
      save.mpPaid[msg.id] = 1;
      save.coins += coins; save.played = (save.played || 0) + 1;
      if (mine > opp) save.won = (save.won || 0) + 1;
      else if (mine < opp) save.lost = (save.lost || 0) + 1;
      else save.drawn = (save.drawn || 0) + 1;
      hk.persist();
      note = (mine > opp ? '+' : '') + coins.toLocaleString() + ' coins onto this career';
    }
    const o = $('overlay');
    if (!o) return;
    o.innerHTML = `<h2 class="it">${mine > opp ? 'YOU WIN' : mine < opp ? 'YOU LOSE' : 'DRAW'}</h2>
      <div class="big2">${msg.hg}.${msg.hb} (${msg.hg * 6 + msg.hb}) – ${msg.ag}.${msg.ab} (${msg.ag * 6 + msg.ab})</div>
      <p>${note}. Your solo squad is unchanged except the coins and the win.</p>
      <p id="rmNote" style="font-size:16px">${themRematch ? 'They want a rematch. Tap REMATCH to go again.' : ''}</p>
      <button id="rematch">REMATCH</button><button id="quit" class="alt">MAIN MENU</button>`;
    o.classList.remove('hide');
    $('quit').onclick = () => leave(true);
    $('rematch').onclick = () => {
      if (wantRematch || byeSeen) return;
      wantRematch = true;
      tx({ type: 'rematch' });
      $('rematch').textContent = 'WAITING FOR THEM…';
      $('rematch').disabled = true;
    };
    if (byeSeen) { const r = $('rematch'); r.disabled = true; r.textContent = 'THEY LEFT'; }
  }

  function showDisconnected(text) {
    const o = $('overlay');
    if (!o) return;
    o.innerHTML = `<h2 class="it">DISCONNECTED</h2><p>${esc(text)}</p><button id="quit">MAIN MENU</button>`;
    o.classList.remove('hide');
    $('quit').onclick = () => leave(true);
  }

  function onBye(reason) {
    const m = match();
    byeSeen = true;
    if (m && m.online && !m.over && !done) { showDisconnected(reason || 'The other coach left.'); return; }
    if (done) {
      const r = $('rematch'); if (r) { r.disabled = true; r.textContent = 'THEY LEFT'; }
      const n = $('rmNote'); if (n) n.textContent = reason || 'The other coach left.';
      return;
    }
    /* still in the lobby screens */
    lobby = null; drawBrowse();
    connect(() => say(reason || 'The other coach left.'));
  }

  function onDrop() {
    const m = match();
    if (m && m.online && !m.over && !done) { showDisconnected('The connection to the server dropped.'); return; }
    if (done) { const r = $('rematch'); if (r) { r.disabled = true; r.textContent = 'OFFLINE'; } return; }
    if ($('mpanel')) { lobby = null; drawBrowse(); say('Lost the connection to the server. Create or join again.'); }
  }

  function leave(toMenu) {
    closeSocket();
    resetMatchState();
    lobby = null;
    closePanel();
    if (toMenu && window.__hk) window.__hk.quit();
  }

  /* ---------- invite links: /?room=ABCD joins once a club is picked ---------- */
  (function autoJoin() {
    const code = (new URLSearchParams(location.search).get('room') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    if (code.length !== 4) return;
    let tries = 0;
    const timer = setInterval(() => {
      const hk = window.__hk;
      if (++tries > 240) { clearInterval(timer); return; }
      if (!hk || !hk.get() || !hk.get().lineup || match()) return;
      clearInterval(timer);
      try { history.replaceState(null, '', location.pathname); } catch (e) { /* file:// */ }
      open({ code });
    }, 500);
  })();

  window.AFLNet = { open, tick, leave };
})();
