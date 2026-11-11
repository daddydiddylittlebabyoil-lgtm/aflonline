/* Online friendlies. Each coach brings the solo lineup saved on their phone.
   A 4-letter room only swaps the handshake. The match itself is direct, phone to phone. */
(function () {
  const $ = id => document.getElementById(id);
  const ICE = [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun.cloudflare.com:3478'] }];
  let selfId = '', room = '', name = 'Coach', wantHost = true, iHost = false, side = null;
  let remote = '', remoteReady = null, readySent = false, pc = null, polite = false;
  let makingOffer = false, ignoreOffer = false, stateCh = null, relCh = null;
  let cursor = 0, pollTimer = null, closed = false, sim = null, snap = null, seenAt = 0;
  let simAcc = 0, sendAcc = 0, sendN = 1, done = false, miss = 0, linkedAt = 0;
  const pendingIce = [];
  const pred = { x: 0, z: 0, on: 0 };
  const inputs = { home: emptyIn(), away: emptyIn() };

  function emptyIn() { return { ax: 0, az: 0, sprint: 0, kick: 0, edge: '', n: 0, _n: 0 }; }
  function api(path) {
    const host = location.hostname.toLowerCase();
    const prefixed = host === 'preview.grok.genai.mil' || host === 'preview.grok.mil' || host === 'preview.grokgsac.com';
    const m = prefixed && location.pathname.match(/^\/hds-[a-z0-9]+-\d+-[a-z0-9]+/i);
    return (m ? m[0] : '') + path;
  }
  function say(t) { const n = $('mpNote'); if (n) n.textContent = t; }
  function code() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let s = '';
    for (let i = 0; i < 4; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
    return s;
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

  function open() {
    const hk = window.__hk;
    if (!hk || !hk.get() || !hk.get().lineup) { return; }
    const meta = mineMeta();
    if (meta.squad.length < 18) {
      const el0 = document.createElement('div'); el0.id = 'mpanel';
      el0.innerHTML = `<div class="mpcard"><b class="it">PLAY A MATE</b><p>Pick a full solo 18 first. Online uses that exact side, levels and all.</p><div class="mprow"><button type="button" class="kbtn" id="mpClose">CLOSE</button></div></div>`;
      document.body.appendChild(el0);
      $('mpClose').onclick = () => el0.remove();
      return;
    }
    reset();
    let el = $('mpanel');
    if (!el) { el = document.createElement('div'); el.id = 'mpanel'; document.body.appendChild(el); }
    const preset = (new URLSearchParams(location.search).get('room') || '').toUpperCase();
    el.innerHTML = `<div class="mpcard"><b class="it">PLAY A MATE</b>
      <p>You bring the 18 you earned in solo (avg ${meta.ovr}). Their career stays on their phone. Yours stays on yours. Nobody shares a login.</p>
      <p>One of you hosts: leave the code blank and hit Play. The other types that code. After you publish, send them the same link, then the code.</p>
      <div class="mpcode" id="mpBig">${preset || '----'}</div>
      <label>YOUR NAME</label><input id="mpName" maxlength="18" value="${localStorage.getItem('aflMpName') || 'Coach'}">
      <label>ROOM CODE</label><input id="mpCode" maxlength="4" placeholder="Blank = you host" value="${preset}" autocomplete="off">
      <div class="mprow"><button type="button" class="kbtn" id="mpClose">CLOSE</button><button type="button" class="go2 it" id="mpHost">PLAY</button></div>
      <p id="mpNote"></p></div>`;
    $('mpClose').onclick = () => { leave(false); el.remove(); };
    $('mpHost').onclick = connect;
  }

  function reset() {
    closed = true;
    if (pollTimer) clearTimeout(pollTimer);
    if (pc) { try { pc.close(); } catch (e) {} }
    selfId = ''; room = ''; remote = ''; remoteReady = null; readySent = false;
    pc = null; stateCh = null; relCh = null; cursor = 0; sim = null; snap = null;
    side = null; done = false; miss = 0; makingOffer = false; ignoreOffer = false;
    pendingIce.length = 0; pred.on = 0; simAcc = 0; sendAcc = 0; linkedAt = 0;
    inputs.home = emptyIn(); inputs.away = emptyIn();
    closed = false;
  }

  function connect() {
    const meta = mineMeta();
    if (meta.squad.length < 18) { say('Your solo lineup needs 18 players.'); return; }
    name = ($('mpName').value || 'Coach').trim().slice(0, 18) || 'Coach';
    localStorage.setItem('aflMpName', name);
    const typed = ($('mpCode').value || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    wantHost = !typed;
    room = typed || code();
    selfId = 'p' + Math.random().toString(36).slice(2, 12).replace(/[^a-z0-9]/g, 'a');
    const big = $('mpBig'); if (big) big.textContent = room;
    const box = $('mpCode'); if (box) box.value = room;
    say(wantHost ? 'Waiting for the other coach. Give them this code.' : 'Looking for that room…');
    poll();
  }

  function poll() {
    if (closed || !room) return;
    const q = new URLSearchParams({ room, peer: selfId, name, since: String(cursor) });
    fetch(api('/api/rtc?' + q)).then(r => {
      if (!r.ok) throw new Error('bad');
      return r.json();
    }).then(body => {
      if (closed) return;
      const peers = body.peers || [];
      const others = peers.filter(p => p.id !== selfId);
      if (!pc && others.length >= 2) { say('That room is already full.'); return; }
      if (!pc && others.length === 1) dial(others[0].id);
      if (pc && remote && !others.some(p => p.id === remote)) {
        miss++;
        if (miss >= 4 && (sim || snap)) onDrop();
      } else miss = 0;
      const chain = (body.signals || []).reduce((p, sig) => p.then(() => {
        cursor = Math.max(cursor, sig.id | 0);
        return onSignal(sig.from, sig.kind, sig.payload);
      }), Promise.resolve());
      return chain;
    }).catch(() => {
      if (!closed && !pc) say('Lobby is not up yet. Publish the game, then try Play again.');
    }).then(() => {
      if (closed) return;
      const wait = pc && pc.connectionState === 'connected' ? 2000 : 400;
      pollTimer = setTimeout(poll, wait);
    });
  }

  function dial(id) {
    if (pc || closed) return;
    remote = id;
    polite = selfId < id;
    pc = new RTCPeerConnection({ iceServers: ICE });
    pc.onicecandidate = e => { if (e.candidate) signal('ice', e.candidate.toJSON()); };
    pc.onconnectionstatechange = () => {
      if (!pc) return;
      if (pc.connectionState === 'connected') linkedAt = performance.now();
      if (pc.connectionState === 'failed') say('Could not open a direct link. Same Wi-Fi works best. Hit Play again.');
      if (pc.connectionState === 'disconnected' && (sim || snap)) onDrop();
    };
    pc.ondatachannel = e => attach(e.channel);
    pc.onnegotiationneeded = async () => {
      try {
        makingOffer = true;
        await pc.setLocalDescription();
        await signal('offer', pc.localDescription.toJSON());
      } catch (e) { /* next negotiation retries */ }
      finally { makingOffer = false; }
    };
    if (!polite) {
      attach(pc.createDataChannel('state', { ordered: false, maxRetransmits: 0 }));
      attach(pc.createDataChannel('reliable', { ordered: true }));
    }
    say('Found them. Linking…');
  }

  function attach(ch) {
    if (ch.label === 'state') stateCh = ch; else relCh = ch;
    ch.onmessage = e => onWire(e.data);
    ch.onopen = () => {
      if (stateCh && stateCh.readyState === 'open' && relCh && relCh.readyState === 'open') sendReady();
    };
  }

  async function signal(kind, payload) {
    if (!remote) return;
    await fetch(api('/api/rtc'), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ op: 'signal', room, from: selfId, to: remote, kind, payload })
    });
  }

  async function flushIce() {
    while (pendingIce.length && pc && pc.remoteDescription) {
      const c = pendingIce.shift();
      try { await pc.addIceCandidate(c); } catch (e) {}
    }
  }

  async function onSignal(from, kind, payload) {
    if (closed) return;
    if (!pc) dial(from);
    if (from !== remote || !pc) return;
    if (typeof payload === 'string') { try { payload = JSON.parse(payload); } catch (e) { return; } }
    if (kind === 'offer' || kind === 'answer') {
      const collision = kind === 'offer' && (makingOffer || pc.signalingState !== 'stable');
      ignoreOffer = !polite && collision;
      if (ignoreOffer) return;
      if (collision) { try { await pc.setLocalDescription({ type: 'rollback' }); } catch (e) {} }
      await pc.setRemoteDescription(payload);
      if (kind === 'offer') {
        await pc.setLocalDescription();
        await signal('answer', pc.localDescription.toJSON());
      }
      await flushIce();
    } else if (kind === 'ice' && payload) {
      if (pc.remoteDescription) { try { await pc.addIceCandidate(payload); } catch (e) {} }
      else pendingIce.push(payload);
    }
  }

  function sendReady() {
    if (readySent || !relCh || relCh.readyState !== 'open') return;
    readySent = true;
    const meta = mineMeta();
    relCh.send(JSON.stringify({ type: 'ready', name, host: wantHost ? 1 : 0, squad: meta.squad, club: meta.club, ground: meta.ground }));
    say('Linked. Swapping the two lineups…');
    maybeStart();
  }

  function maybeStart() {
    if (sim || !readySent || !remoteReady) return;
    const theyHost = !!remoteReady.host;
    if (wantHost && !theyHost) iHost = true;
    else if (!wantHost && theyHost) iHost = false;
    else iHost = selfId < remote;
    if (!iHost) return;
    const seed = (Math.random() * 0xffffffff) >>> 0;
    begin(seed);
    if (relCh && relCh.readyState === 'open') relCh.send(JSON.stringify({ type: 'go', seed }));
  }

  function begin(seed) {
    const hk = window.__hk, meta = mineMeta();
    side = iHost ? 'home' : 'away';
    const info = {
      side, id: room + seed.toString(16), seed,
      home: iHost ? meta.squad : remoteReady.squad,
      away: iHost ? remoteReady.squad : meta.squad,
      homeClub: iHost ? meta.club : remoteReady.club | 0,
      awayClub: iHost ? remoteReady.club | 0 : meta.club,
      homeName: iHost ? name : remoteReady.name,
      awayName: iHost ? remoteReady.name : name,
      ground: (iHost ? meta.ground : remoteReady.ground) || 'mcg'
    };
    if (iHost && window.AFLSim) {
      sim = AFLSim.create({ seed, home: info.home, away: info.away });
      inputs.home = emptyIn(); inputs.away = emptyIn();
      simAcc = 0;
    }
    const el = $('mpanel'); if (el) el.remove();
    hk.startOnline(info);
  }

  function onWire(raw) {
    let msg; try { msg = JSON.parse(raw); } catch (e) { return; }
    if (msg.type === 'ready') { remoteReady = msg; maybeStart(); return; }
    if (msg.type === 'go') { if (!sim) { iHost = false; begin(msg.seed >>> 0); } return; }
    if (msg.type === 'snap') {
      if (snap && (msg.t | 0) < (snap.t | 0)) return;
      snap = msg; seenAt = performance.now(); return;
    }
    if (msg.type === 'in') { takeRemote(msg); return; }
    if (msg.type === 'over') finish(msg);
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
  function writeSlot(slot, msg) {
    slot.ax = +msg.ax || 0; slot.az = +msg.az || 0; slot.sprint = msg.sprint ? 1 : 0; slot.kick = msg.kick ? 1 : 0;
    const n = msg.n | 0;
    if (msg.edge && n !== slot._n) { slot.edge = msg.edge; slot._n = n; }
  }
  function takeRemote(msg) {
    if (!side) return;
    writeSlot(inputs[side === 'home' ? 'away' : 'home'], msg);
  }

  function match() { return window.__hk && window.__hk.match(); }
  function me() {
    const m = match();
    if (!m || !side || !snap) return null;
    const idx = side === 'home' ? snap.ah : snap.aa;
    return (side === 'home' ? m.home : m.away)[idx];
  }
  function sendInput() {
    if (!match()) return;
    const pkt = inputPacket();
    if (pkt.edge && relCh && relCh.readyState === 'open') { try { relCh.send(JSON.stringify(pkt)); } catch (e) {} }
    if (stateCh && stateCh.readyState === 'open') { try { stateCh.send(JSON.stringify(pkt)); } catch (e) {} }
  }

  function tick(dt) {
    const m = match();
    if (!m) return;
    if (iHost && sim) {
      writeSlot(inputs[side], inputPacket());
      simAcc += Math.min(dt, 0.1);
      let steps = 0;
      while (simAcc >= AFLSim.DT && steps < 6) { AFLSim.step(sim, inputs); simAcc -= AFLSim.DT; steps++; }
      const s = AFLSim.snapshot(sim);
      snap = s; seenAt = performance.now();
      if (stateCh && stateCh.readyState === 'open') {
        try { stateCh.send(JSON.stringify(Object.assign({ type: 'snap' }, s))); } catch (e) {}
      }
      apply(m, s, dt);
      paint(s);
      if (s.over && !done) { done = true; const over = overMsg(s); if (relCh && relCh.readyState === 'open') relCh.send(JSON.stringify(over)); finish(over); }
      return;
    }
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
    const lead = iHost ? Math.min(AFLSim.DT, Math.max(0, simAcc)) : Math.min(0.08, Math.max(0, (performance.now() - seenAt) / 1000));
    const bvx = s.ball[4] || 0, bvz = s.ball[5] || 0;
    const bx = s.ball[0] + (ph === 'held' ? 0 : bvx * lead);
    const bz = s.ball[1] + (ph === 'held' ? 0 : bvz * lead);
    const bh = s.ball[2];
    const bk = iHost ? 1 : Math.min(1, 28 * dt);
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
    const dir = (!iHost && window.__hk) ? window.__hk.inputDir() : [0, 0];
    const stick = Math.hypot(dir[0], dir[1]) > 0.12;
    m.all.forEach((p, i) => {
      const o = i * 6;
      const x = s.p[o], z = s.p[o + 1], face = s.p[o + 2], stam = s.p[o + 3], vx = s.p[o + 4] || 0, vz = s.p[o + 5] || 0;
      let tx = x + vx * lead, tz = z + vz * lead;
      if (!iHost && p === mine && stick) {
        const sprint = window.__hk.keys.has(window.__hk.bind().sprint);
        const top = (6.5 + (p.d.spd - 70) * 0.12) * (sprint ? 1.3 : 1);
        tx = x + dir[0] * top * lead; tz = z + dir[1] * top * lead;
      }
      p.stam = stam; p.exh = stam <= 0;
      p.vx = vx; p.vz = vz; p.face = face;
      const k = iHost ? 1 : Math.min(1, 28 * dt);
      p.x += (tx - p.x) * k; p.z += (tz - p.z) * k;
      const ring = p.model && p.model.userData.ring;
      if (ring) ring.visible = p === mine;
    });
    if (m.online) m.online.ctrl = mine || null;
    const charge = side === 'away' ? s.ca : s.ch;
    m.charge = charge || 0; m.charging = (charge || 0) > 0.02;
    if (s.over) m.over = true;
    void dt;
  }

  function overMsg(s) {
    const score = { home: { g: s.hg, b: s.hb }, away: { g: s.ag, b: s.ab } };
    const homePay = AFLSim.purse(score, 'home'), awayPay = AFLSim.purse(score, 'away');
    const id = (match() && match().online && match().online.id) || (room + 'x');
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
      <p>${note}. Your solo squad is unchanged except the coins and the win.</p><button id="quit">MAIN MENU</button>`;
    o.classList.remove('hide');
    $('quit').onclick = () => leave(true);
  }

  function onDrop() {
    if (closed) return;
    const m = match();
    if (m && m.online && !m.over) {
      const o = $('overlay');
      if (o) {
        o.innerHTML = `<h2 class="it">DISCONNECTED</h2><p>The other coach left, or the direct link dropped.</p><button id="quit">MAIN MENU</button>`;
        o.classList.remove('hide');
        $('quit').onclick = () => leave(true);
      }
    }
    closed = true;
    if (pc) { try { pc.close(); } catch (e) {} }
  }

  function leave(toMenu) {
    const r = room, p = selfId;
    closed = true;
    if (pollTimer) clearTimeout(pollTimer);
    if (pc) { try { pc.close(); } catch (e) {} }
    pc = null; sim = null; snap = null; side = null;
    if (r && p) {
      fetch(api('/api/rtc'), {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ op: 'leave', room: r, peer: p }), keepalive: true
      }).catch(() => {});
    }
    if (toMenu && window.__hk) window.__hk.quit();
  }

  window.AFLNet = { open, tick, leave };
})();
