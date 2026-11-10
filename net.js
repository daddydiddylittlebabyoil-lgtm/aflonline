/* Online play. Create a lobby (or join one by code / from the open list), ready up, play.
   The match itself runs on the server (server.js) - both coaches just send inputs and draw snapshots,
   so nobody has to "host" and it works across any network. */
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

  let ws = null, wsOpen = false, pingTimer = null, rtt = 0;
  let view = 'browse', lobby = null, list = [], online = 0, note = '';
  let name = 'Coach';
  let side = null, snap = null, seenAt = 0, done = false, inMatch = false;
  let sendAcc = 0, sendN = 1, wantRematch = false, peerGone = false, theyWant = false;
  const pred = { x: 0, z: 0, on: 0 };

  /* ---------- helpers ---------- */
  function wsUrl() {
    const cfg = String(window.AFL_SERVER || '').trim();
    if (cfg) return cfg.replace(/^http/i, 'ws').replace(/\/+$/, '');
    if (location.protocol === 'http:' || location.protocol === 'https:') return (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host;
    return '';
  }
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
  function clubOf(i) { return (window.CLUBS26 || [])[i | 0] || { name: 'Club', short: '---', a: '#2b3a5c', b: '#8fa0c8' }; }
  function badge(i) { const c = clubOf(i); return `<span class="mpbadge" style="background:linear-gradient(135deg,${esc(c.a)} 55%,${esc(c.b)} 55%)"></span>`; }
  function readName() {
    const el = $('mpName');
    if (el) { name = (el.value || '').trim().slice(0, 16) || 'Coach'; try { localStorage.setItem('aflMpName', name); } catch (e) {} }
    return name;
  }
  function say(t) { note = t || ''; const n = $('mpNote'); if (n) n.textContent = note; }
  function send(obj) { if (ws && wsOpen) { try { ws.send(JSON.stringify(obj)); } catch (e) {} } }
  function match() { return window.__hk && window.__hk.match(); }

  /* ---------- connection ---------- */
  function connectOnce() {
    return new Promise((resolve, reject) => {
      const url = wsUrl();
      if (!url) { reject(new Error('nohost')); return; }
      let s;
      try { s = new WebSocket(url); } catch (e) { reject(e); return; }
      const t = setTimeout(() => { try { s.close(); } catch (e) {} reject(new Error('timeout')); }, 15000);
      s.onopen = () => {
        clearTimeout(t); ws = s; wsOpen = true;
        clearInterval(pingTimer);
        pingTimer = setInterval(() => send({ type: 'ping', t: Date.now() }), 8000);
        resolve();
      };
      s.onmessage = e => onWire(e.data);
      s.onerror = () => {};
      s.onclose = () => { clearTimeout(t); if (ws === s) { ws = null; wsOpen = false; clearInterval(pingTimer); onClosed(); } else reject(new Error('closed')); };
    });
  }
  let connecting = null;
  function ensure() {
    if (wsOpen) return Promise.resolve();
    if (connecting) return connecting;
    connecting = (async () => {
      let last = null;
      for (let i = 0; i < 4; i++) {
        say(i ? 'Waking the server… (free hosts can take up to a minute)' : 'Connecting…');
        try { await connectOnce(); say(''); return; } catch (e) { last = e; if (e.message === 'nohost') break; await new Promise(r => setTimeout(r, 1500)); }
      }
      throw last || new Error('failed');
    })();
    const clear = () => { connecting = null; };
    connecting.then(clear, clear);
    return connecting;
  }
  function failText(e) {
    return e && e.message === 'nohost'
      ? 'This copy of the game has no server set. Put your server address in config.js (AFL_SERVER).'
      : 'Could not reach the server. Check your connection and try again.';
  }
  /* run fn once connected (so a tap during "Connecting…" is never lost) */
  function whenReady(fn) {
    if (wsOpen) { fn(); return; }
    ensure().then(() => { if (wsOpen) fn(); }).catch(e => say(failText(e)));
  }
  function disconnect() {
    clearInterval(pingTimer);
    const s = ws; ws = null; wsOpen = false;
    if (s) { try { s.close(); } catch (e) {} }
  }
  function onClosed() {
    if (inMatch && !done) { onDrop('Lost connection to the server'); return; }
    if (inMatch) { peerGone = true; paintRematch(); return; }
    lobby = null; view = 'browse';
    if ($('mpanel')) { render(); say('Lost connection to the server. Try again.'); }
  }

  /* ---------- lobby UI ---------- */
  function panel() {
    let el = $('mpanel');
    if (!el) { el = document.createElement('div'); el.id = 'mpanel'; document.body.appendChild(el); }
    return el;
  }
  function open(opts) {
    const hk = window.__hk;
    if (!hk || !hk.get() || !hk.get().lineup) return;
    const meta = mineMeta();
    if (meta.squad.length < 18) {
      const el0 = panel();
      el0.innerHTML = `<div class="mpcard"><b class="it">PLAY ONLINE</b><p>Pick a full solo 18 first. Online uses that exact side, levels and all.</p><div class="mprow"><button type="button" class="kbtn" id="mpClose">CLOSE</button></div></div>`;
      $('mpClose').onclick = () => el0.remove();
      return;
    }
    try { name = localStorage.getItem('aflMpName') || name; } catch (e) {}
    view = lobby ? 'lobby' : 'browse';
    render();
    ensure().then(() => {
      send({ type: 'browse', on: true });
      if (opts && opts.join) joinCode(opts.join);
    }).catch(e => say(failText(e)));
  }

  function render() {
    const el = panel();
    if (view === 'lobby' && lobby) renderLobby(el); else renderBrowse(el);
  }

  function renderBrowse(el) {
    const meta = mineMeta();
    el.innerHTML = `<div class="mpcard wide"><b class="it">PLAY ONLINE</b>
      <p>You bring the 18 you built in solo (avg ${meta.ovr}). Make a lobby and send your mate the code, or jump into an open one.</p>
      <label>YOUR NAME</label><input id="mpName" maxlength="16" value="${esc(name)}" autocomplete="off">
      <div class="mprow"><button type="button" class="go2 it" id="mpCreate">CREATE LOBBY</button></div>
      <label class="mpchk"><input type="checkbox" id="mpPub" checked><span>Show it in Open Lobbies (untick for private, code only)</span></label>
      <label>JOIN WITH A CODE</label>
      <div class="mprow"><input id="mpCode" maxlength="4" placeholder="ABCD" autocomplete="off" style="text-transform:uppercase;letter-spacing:6px;text-align:center"><button type="button" class="kbtn" id="mpJoin">JOIN</button></div>
      <label>OPEN LOBBIES <em id="mpOnline" class="mpdim"></em></label>
      <div class="mplist" id="mpList"></div>
      <p class="mpnote" id="mpNote"></p>
      <div class="mprow"><button type="button" class="kbtn" id="mpClose">CLOSE</button></div></div>`;
    $('mpClose').onclick = () => { leave(false); el.remove(); };
    $('mpCreate').onclick = () => createLobby();
    $('mpJoin').onclick = () => joinCode(($('mpCode').value || ''));
    $('mpCode').onkeydown = e => { if (e.key === 'Enter') $('mpJoin').click(); e.stopPropagation(); };
    $('mpName').onkeydown = e => e.stopPropagation();
    $('mpCode').oninput = e => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); };
    renderList();
    say(note);
  }

  function renderList() {
    const box = $('mpList'); if (!box) return;
    const on = $('mpOnline'); if (on) on.textContent = online ? '· ' + online + ' online' : '';
    if (!list.length) { box.innerHTML = '<div class="mpempty">No open lobbies right now. Create one!</div>'; return; }
    box.innerHTML = list.map(l => `<div class="mprowl">${badge(l.club)}<div class="mpwho"><b>${esc(l.name)}</b><small>${esc(clubOf(l.club).name)} · OVR ${l.ovr} · ${esc(String(l.ground).toUpperCase())}</small></div><button type="button" class="kbtn" data-code="${esc(l.code)}">JOIN ${esc(l.code)}</button></div>`).join('');
    box.querySelectorAll('[data-code]').forEach(b => b.onclick = () => joinCode(b.dataset.code));
  }

  function seatHTML(p, label, mine) {
    if (!p) return `<div class="mpseat empty"><small>${label}</small><b>Waiting for a coach…</b><span class="mpst">Share the code</span></div>`;
    const c = clubOf(p.club);
    return `<div class="mpseat${p.ready ? ' rdy' : ''}${mine ? ' you' : ''}"><small>${label}${mine ? ' · YOU' : ''}</small>${badge(p.club)}<b>${esc(p.name)}</b><em>${esc(c.name)} · OVR ${p.ovr}</em><span class="mpst">${p.ready ? 'READY ✓' : 'NOT READY'}</span></div>`;
  }
  function renderLobby(el) {
    const L = lobby, me = L.you, mineSeat = L[me], host = me === 'home';
    const both = !!(L.home && L.away);
    const link = (location.protocol === 'http:' || location.protocol === 'https:') ? location.origin + location.pathname + '?room=' + L.code : '';
    const readyTxt = !both ? 'WAITING FOR OPPONENT' : L.count > 0 ? 'KICK OFF IN ' + L.count : mineSeat && mineSeat.ready ? 'READY ✓ (TAP TO UNDO)' : 'READY';
    el.innerHTML = `<div class="mpcard wide"><b class="it">LOBBY</b>
      <div class="mpcode" id="mpBig">${esc(L.code)}</div>
      <div class="mprow"><button type="button" class="kbtn" id="mpCopy">${link ? 'COPY INVITE LINK' : 'COPY CODE'}</button>${host ? `<button type="button" class="kbtn" id="mpVis">${L.public ? '🌐 PUBLIC' : '🔒 PRIVATE'}</button>` : `<span class="mpdim" style="align-self:center;flex:1;text-align:center">${L.public ? 'Public lobby' : 'Private lobby'}</span>`}</div>
      <div class="mpseats">${seatHTML(L.home, 'HOME · ' + String((L.home && L.home.ground) || 'mcg').toUpperCase(), me === 'home')}${seatHTML(L.away, 'AWAY', me === 'away')}</div>
      <p class="mpnote" id="mpNote"></p>
      <div class="mprow"><button type="button" class="kbtn" id="mpLeave">LEAVE</button>${host && L.away ? '<button type="button" class="kbtn" id="mpKick">KICK</button>' : ''}<button type="button" class="go2 it" id="mpReady"${both && !L.count ? '' : ' disabled'}>${readyTxt}</button></div>
      <p class="mpdim" id="mpPing" style="text-align:right;margin:6px 0 0;font-size:12px">${rtt ? 'Ping ' + rtt + ' ms' : ''}</p></div>`;
    $('mpCopy').onclick = () => copyText(link || L.code);
    $('mpLeave').onclick = () => { send({ type: 'leave' }); lobby = null; view = 'browse'; list = []; note = ''; render(); send({ type: 'browse', on: true }); };
    $('mpReady').onclick = () => send({ type: 'ready', ready: !(mineSeat && mineSeat.ready) });
    if ($('mpVis')) $('mpVis').onclick = () => send({ type: 'vis', public: !L.public });
    if ($('mpKick')) $('mpKick').onclick = () => send({ type: 'kick' });
    say(note);
  }
  function copyText(t) {
    const ok = () => say('Copied. Send it to your mate.');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, () => window.prompt('Copy this:', t));
    else window.prompt('Copy this:', t);
  }

  function createLobby() {
    const meta = mineMeta();
    if (meta.squad.length < 18) { say('Your solo lineup needs 18 players.'); return; }
    const pubBox = $('mpPub');
    const msg = { type: 'create', name: readName(), public: pubBox ? pubBox.checked : true, squad: meta.squad, club: meta.club, ground: meta.ground };
    say('Creating lobby…');
    whenReady(() => send(msg));
  }
  function joinCode(code) {
    code = String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    if (code.length !== 4) { say('Lobby codes are 4 letters or numbers.'); return; }
    const meta = mineMeta();
    if (meta.squad.length < 18) { say('Your solo lineup needs 18 players.'); return; }
    const msg = { type: 'join', code, name: readName(), squad: meta.squad, club: meta.club, ground: meta.ground };
    say('Joining ' + code + '…');
    whenReady(() => send(msg));
  }

  /* ---------- messages from the server ---------- */
  function onWire(raw) {
    let msg; try { msg = JSON.parse(raw); } catch (e) { return; }
    switch (msg.type) {
      case 'snap': snap = msg; seenAt = performance.now(); return;
      case 'welcome': online = msg.online | 0; return;
      case 'lobbies': list = msg.list || []; online = msg.online | 0; renderList(); return;
      case 'lobby':
        if (inMatch) return;
        lobby = msg; view = 'lobby'; note = '';
        if ($('mpanel')) render();
        return;
      case 'err': say(msg.text || 'Something went wrong'); return;
      case 'left': return;
      case 'kicked':
        lobby = null; view = 'browse'; note = 'The host removed you from the lobby.';
        if ($('mpanel')) { render(); send({ type: 'browse', on: true }); }
        return;
      case 'go': onGo(msg); return;
      case 'over': finish(msg); return;
      case 'rq': paintRematch(msg); return;
      case 'bye': onBye(msg); return;
      case 'pong': { rtt = Math.max(0, Date.now() - (msg.t | 0)); const p = $('mpPing'); if (p) p.textContent = 'Ping ' + rtt + ' ms'; return; }
    }
  }

  /* ---------- the match ---------- */
  function onGo(msg) {
    const hk = window.__hk;
    side = msg.side; snap = null; pred.on = 0; sendAcc = 0; sendN = 1; done = false; peerGone = false; wantRematch = false; theyWant = false; inMatch = true; seenAt = 0;
    const el = $('mpanel'); if (el) el.remove();
    if (hk.match()) hk.quit();                          // rematch: clear the old match first
    hk.startOnline({
      side: msg.side, id: msg.id, seed: msg.seed, home: msg.home, away: msg.away,
      homeClub: msg.homeClub, awayClub: msg.awayClub, homeName: msg.homeName, awayName: msg.awayName, ground: msg.ground
    });
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
    return { type: 'in', n: edge ? ++sendN : sendN, ax: dir[0], az: dir[1], sprint: keys.has(bind.sprint) ? 1 : 0, kick: keys.has(bind.kick) ? 1 : 0, edge };
  }
  function me() {
    const m = match();
    if (!m || !side || !snap) return null;
    const idx = side === 'home' ? snap.ah : snap.aa;
    return (side === 'home' ? m.home : m.away)[idx];
  }
  function tick(dt) {
    const m = match();
    if (!m || done) return;
    sendAcc += dt;
    const pkt = inputPacket();
    if (pkt.edge || sendAcc > 0.05) { send(pkt); sendAcc = 0; }
    if (!snap) return;
    apply(m, snap, dt);
    paint(snap);
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
    m.ball.ph = ph;
    m.ball.x += (s.ball[0] - m.ball.x) * Math.min(1, 10 * dt);
    m.ball.z += (s.ball[1] - m.ball.z) * Math.min(1, 10 * dt);
    m.ball.h += (s.ball[2] - m.ball.h) * Math.min(1, 10 * dt);
    const who = s.who < 0 ? null : s.who < 18 ? m.home[s.who] : m.away[s.who - 18];
    m.carrier = ph === 'held' ? who : null;
    const mine = me();
    m.all.forEach((p, i) => {
      const x = s.p[i * 4], z = s.p[i * 4 + 1], face = s.p[i * 4 + 2], stam = s.p[i * 4 + 3];
      p.stam = stam; p.exh = stam <= 0;
      if (p === mine) {
        if (!pred.on) { pred.x = x; pred.z = z; pred.on = 1; }
        const dir = window.__hk.inputDir();
        const sprint = window.__hk.keys.has(window.__hk.bind().sprint);
        const top = (6.5 + (p.d.spd - 70) * 0.12) * (sprint ? 1.3 : 1);
        pred.x += dir[0] * top * dt; pred.z += dir[1] * top * dt;
        const err = Math.hypot(pred.x - x, pred.z - z);
        if (err > 4) { pred.x = x; pred.z = z; }
        else { pred.x += (x - pred.x) * Math.min(1, 4 * dt); pred.z += (z - pred.z) * Math.min(1, 4 * dt); }
        p.vx = (pred.x - p.x) / Math.max(dt, 0.016); p.vz = (pred.z - p.z) / Math.max(dt, 0.016);
        p.x = pred.x; p.z = pred.z; p.face = face;
      } else {
        p.vx = (x - p.x) / Math.max(dt, 0.016); p.vz = (z - p.z) / Math.max(dt, 0.016);
        const k = Math.min(1, 12 * dt);
        p.x += (x - p.x) * k; p.z += (z - p.z) * k; p.face = face;
      }
      const ring = p.model && p.model.userData.ring;
      if (ring) ring.visible = p === mine;
    });
    if (m.online) m.online.ctrl = mine || null;
    const charge = side === 'away' ? s.ca : s.ch;
    m.charge = charge || 0; m.charging = (charge || 0) > 0.02;
  }

  function finish(msg) {
    if (done) return;
    done = true;
    const m = match(); if (m) m.over = true;
    const hk = window.__hk, save = hk.get();
    save.mpPaid = save.mpPaid || {};
    const coins = side === 'away' ? msg.awayCoins : msg.homeCoins;
    const mine = side === 'away' ? msg.ag * 6 + msg.ab : msg.hg * 6 + msg.hb;
    const opp = side === 'away' ? msg.hg * 6 + msg.hb : msg.ag * 6 + msg.ab;
    let noteTxt = 'Already paid';
    if (msg.id && !save.mpPaid[msg.id]) {
      save.mpPaid[msg.id] = 1;
      save.coins += coins; save.played = (save.played || 0) + 1;
      if (mine > opp) save.won = (save.won || 0) + 1;
      else if (mine < opp) save.lost = (save.lost || 0) + 1;
      else save.drawn = (save.drawn || 0) + 1;
      hk.persist();
      noteTxt = '+' + coins.toLocaleString() + ' coins onto this career';
    }
    const o = $('overlay');
    if (!o) return;
    o.innerHTML = `<h2 class="it">${mine > opp ? 'YOU WIN' : mine < opp ? 'YOU LOSE' : 'DRAW'}</h2>
      <div class="big2">${msg.hg}.${msg.hb} (${msg.hg * 6 + msg.hb}) – ${msg.ag}.${msg.ab} (${msg.ag * 6 + msg.ab})</div>
      <p>${esc(noteTxt)}. Your solo squad is unchanged except the coins and the win.</p>
      <button id="rematch">REMATCH</button><button id="quit" class="alt">MAIN MENU</button><p id="rmNote" style="font-size:16px;min-height:20px"></p>`;
    o.classList.remove('hide');
    $('quit').onclick = () => leave(true);
    $('rematch').onclick = () => { wantRematch = !wantRematch; send({ type: 'rematch', on: wantRematch }); paintRematch(); };
    paintRematch();
  }
  function paintRematch(rq) {
    if (rq) theyWant = side === 'home' ? !!rq.away : !!rq.home;
    const b = $('rematch'), n = $('rmNote');
    if (!b) return;
    if (peerGone) { b.disabled = true; b.style.opacity = '.4'; b.textContent = 'REMATCH'; if (n) n.textContent = 'The other coach left.'; return; }
    b.textContent = wantRematch ? 'WAITING FOR THEM… (TAP TO CANCEL)' : 'REMATCH';
    if (n) n.textContent = theyWant && !wantRematch ? 'The other coach wants a rematch!' : '';
  }

  function onBye(msg) {
    if (!inMatch) return;
    if (done) { peerGone = true; paintRematch(); return; }
    onDrop((msg && msg.reason) || 'The other coach left');
  }
  function onDrop(reason) {
    const m = match();
    done = true;
    if (m && m.online) m.over = true;
    const o = $('overlay');
    if (o) {
      o.innerHTML = `<h2 class="it">DISCONNECTED</h2><p>${esc(reason || 'The connection dropped.')}</p><button id="quit">MAIN MENU</button>`;
      o.classList.remove('hide');
      $('quit').onclick = () => leave(true);
    }
  }

  function leave(toMenu) {
    send({ type: 'leave' });
    disconnect();
    lobby = null; snap = null; side = null; inMatch = false; done = false; list = []; theyWant = false; wantRematch = false; peerGone = false;
    const el = $('mpanel'); if (el && toMenu) el.remove();
    if (toMenu && window.__hk) window.__hk.quit();
  }

  /* ---------- invite links:  /?room=ABCD ---------- */
  (function deepLink() {
    let code = '';
    try { code = (new URLSearchParams(location.search).get('room') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4); } catch (e) {}
    if (code.length !== 4) return;
    let tries = 0;
    const iv = setInterval(() => {
      const hk = window.__hk;
      if (++tries > 600) { clearInterval(iv); return; }
      if (hk && hk.get() && hk.get().lineup && !hk.match()) {
        clearInterval(iv);
        try { history.replaceState(null, '', location.pathname); } catch (e) {}
        open({ join: code });
      }
    }, 500);
  })();

  window.AFLNet = { open, tick, leave };
})();
