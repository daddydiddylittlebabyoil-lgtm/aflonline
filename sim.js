/* Headless AFL match. No page, no pictures. The browser and the Node server both run this.
   Same seed and same inputs always finish on the same score. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AFLSim = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const DT = 1 / 30;
  const A = 87.5, B = 75, GOAL_X = A - 3.5, QUARTER = 90;
  const HOME_SPOTS = [[-62,-14],[-66,0],[-62,14],[-42,-30],[-45,0],[-42,30],[-4,-44],[-14,-16],[-14,16],[-2,0],[-26,0],[-4,44],[42,-30],[45,0],[42,30],[62,-14],[66,0],[62,14]];
  const inOval = (x, z, inset = 0) => (x / (A - inset)) ** 2 + (z / (B - inset)) ** 2 <= 1;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const hypot = (x, z) => Math.hypot(x, z);
  const dist = (a, b) => hypot(a.x - b.x, a.z - b.z);
  const wrap = a => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function padSide(list) {
    const out = (list || []).slice(0, 18).map(p => ({
      id: p.id, name: p.name || 'Player', rating: p.rating || 70,
      kic: p.kic || 70, mar: p.mar || 70, spd: p.spd || 70, end: p.end || 70, pos: p.pos || 'MID'
    }));
    while (out.length < 18) out.push({id: -out.length, name: 'Rookie', rating: 62, kic: 60, mar: 60, spd: 64, end: 62, pos: 'MID'});
    return out;
  }

  function makeSide(list, team, rand) {
    const spots = team === 'home' ? HOME_SPOTS : HOME_SPOTS.map(([x, z]) => [-x, z]);
    return list.map((d, i) => {
      const hx = spots[i][0] * (A / 82.5), hz = spots[i][1] * (B / 67.5);
      return {team, idx: i, d, hx, hz, x: hx, z: hz, vx: 0, vz: 0, face: team === 'home' ? 0 : Math.PI, stam: 1, exh: false, stun: 0, cd: 0, lock: 0, carryT: 0, decide: 0.8 + rand() * 0.8};
    });
  }

  function create(opts) {
    const rand = mulberry32(opts.seed >>> 0);
    const home = makeSide(padSide(opts.home), 'home', rand);
    const away = makeSide(padSide(opts.away), 'away', rand);
    return {
      rand, home, away, all: home.concat(away),
      active: {home: 7, away: 7},
      ball: {ph: 'loose', x: 0, z: 0, h: 2.4, vh: 6, vx: 0, vz: 0, dur: 1, apex: 4, el: 0, kind: 'kick', untouched: false},
      carrier: null, lastKicker: null, lastTouch: 'home', receiver: null,
      kickLock: 0, pickupCD: 0.6, wind: null, charge: {home: 0, away: 0}, kickDown: {home: 0, away: 0},
      score: {home: {g: 0, b: 0}, away: {g: 0, b: 0}},
      qtr: 1, time: QUARTER, over: false, dead: 0, pending: null, wait: 1.2, t: 0
    };
  }

  const atkOf = t => t === 'home' ? 1 : -1;
  const mates = (m, p) => p.team === 'home' ? m.home : m.away;
  const opps = (m, p) => p.team === 'home' ? m.away : m.home;
  const roleOf = p => p.idx <= 2 ? 'FB' : p.idx <= 5 ? 'HB' : (p.idx === 6 || p.idx === 11) ? 'WING' : p.idx === 9 ? 'RUC' : p.idx >= 15 ? 'FF' : p.idx >= 12 ? 'HF' : 'MID';

  function movePlayer(p, dx, dz, sprint, scale, dt) {
    p.stun = Math.max(0, p.stun - dt); p.cd = Math.max(0, p.cd - dt); p.lock = Math.max(0, p.lock - dt);
    if (p.stun > 0) { dx = dz = 0; sprint = false; }
    const len = hypot(dx, dz), want = sprint && !p.exh && len > 0.1;
    if (want) { p.stam -= 0.30 * (1.3 - p.d.end / 100) * dt; if (p.stam <= 0) { p.stam = 0; p.exh = true; } }
    else { p.stam = Math.min(1, p.stam + 0.12 * dt); if (p.exh && p.stam > 0.25) p.exh = false; }
    const top = (6.5 + (p.d.spd - 70) * 0.12) * scale * (want ? 1.3 : 1);
    const l = Math.max(1, len), e = Math.min(1, (4 + p.d.spd * 0.07) * dt);
    p.vx += (dx / l * top - p.vx) * e; p.vz += (dz / l * top - p.vz) * e;
    const nx = p.x + p.vx * dt, nz = p.z + p.vz * dt;
    if (inOval(nx, nz, 1)) { p.x = nx; p.z = nz; }
    else if (inOval(nx, p.z, 1)) { p.x = nx; p.vz = 0; }
    else if (inOval(p.x, nz, 1)) { p.z = nz; p.vx = 0; }
    else p.vx = p.vz = 0;
    if (hypot(p.vx, p.vz) > 0.6) p.face += wrap(Math.atan2(p.vz, p.vx) - p.face) * Math.min(1, 12 * dt);
  }
  function goTo(p, x, z, sprint, scale, dt) {
    const dx = x - p.x, dz = z - p.z, d = hypot(dx, dz);
    if (d < 0.6) movePlayer(p, 0, 0, false, scale, dt);
    else movePlayer(p, dx / d * Math.min(1, d / 3), dz / d * Math.min(1, d / 3), sprint, scale, dt);
  }
  function nearest(pt, group, excl) {
    let b = null, bd = 1e9;
    for (const p of group) { if (p === excl) continue; const d = dist(p, pt); if (d < bd) { bd = d; b = p; } }
    return b;
  }
  function release(m, p) { m.carrier = null; m.lastKicker = p; m.kickLock = 0.8; m.receiver = null; }
  function kickMax(p) { return 34 + (p.d.kic - 49) * 0.92; }
  function gather(m, p) {
    m.carrier = p; m.receiver = null; m.ball.ph = 'held'; m.ball.vx = m.ball.vz = m.ball.h = m.ball.vh = 0;
    p.carryT = 0; m.lastTouch = p.team;
    m.active[p.team] = p.idx;
  }
  function launchKick(m, p, aim, power) {
    const skill = p.d.kic / 100, b = m.ball, atk = atkOf(p.team);
    const dgx = GOAL_X * atk - p.x;
    const atGoal = dgx * atk > 0 && Math.abs(dgx) < 78;
    let err = (1 - skill) * 0.28 * (0.4 + 0.6 * power);
    let a0 = aim;
    if (atGoal && Math.abs(p.z) > 9) a0 = aim + wrap(Math.atan2(-p.z, dgx) - aim) * 0.45;
    const ang = a0 + (m.rand() * 2 - 1) * err;
    const range = 14 + (kickMax(p) - 14) * power, dur = 0.5 + range / 21, sp = range / dur;
    Object.assign(b, {ph: 'flight', kind: 'kick', dur, apex: 4 + range * 0.2, el: 0, untouched: true, vx: Math.cos(ang) * sp, vz: Math.sin(ang) * sp, h: 0.4, vh: 0});
    release(m, p); m.lastTouch = p.team; m.wind = null;
  }
  function launchHand(m, p) {
    const grp = mates(m, p);
    let t = null, best = 1e9, atk = atkOf(p.team);
    for (const o of grp) {
      if (o === p) continue;
      const d = dist(o, p); if (d < 4 || d > 22) continue;
      const s = d - (o.x - p.x) * atk; if (s < best) { best = s; t = o; }
    }
    const aim = t ? Math.atan2(t.z - p.z, t.x - p.x) : p.face;
    const range = t ? dist(t, p) : 12, dur = clamp(range / 16, 0.35, 0.8), sp = range / dur;
    Object.assign(m.ball, {ph: 'flight', kind: 'handpass', dur, apex: 1.5, el: 0, untouched: true, vx: Math.cos(aim) * sp, vz: Math.sin(aim) * sp, h: 0.3, vh: 0});
    release(m, p); m.receiver = t; m.lastTouch = p.team;
  }
  function attemptTackle(m, def, holder) {
    if (def.cd > 0 || def.stun > 0 || m.carrier !== holder) return;
    def.cd = 1.1;
    const chance = clamp(0.48 + (def.d.spd - holder.d.spd) * 0.004, 0.12, 0.88);
    if (m.rand() < chance) {
      Object.assign(m.ball, {ph: 'loose', x: holder.x, z: holder.z, h: 0, vh: 3, vx: Math.cos(holder.face) * 3, vz: Math.sin(holder.face) * 3, untouched: false});
      m.carrier = null; m.kickLock = 0; holder.stun = 1.2; def.stun = 0.7;
    } else def.stun = 0.35;
  }

  function station(m, p) {
    const atk = atkOf(p.team), role = roleOf(p), spot = m.carrier || m.ball;
    const wide = Math.sign(p.hz) || (p.idx % 2 ? 1 : -1);
    const lane = role === 'WING' ? wide * 42 : role === 'MID' ? wide * 8 : wide * 18;
    const lead = role === 'FF' ? 22 : role === 'HF' ? 12 : role === 'MID' ? 0 : -16;
    return {x: clamp(spot.x + atk * lead, -78, 78), z: clamp(lane, -52, 52)};
  }
  function ai(m, p, dt) {
    const c = m.carrier;
    if (c === p) {
      p.carryT += dt;
      const atk = atkOf(p.team), gx = GOAL_X * atk, dg = hypot(gx - p.x, p.z);
      const press = opps(m, p).filter(o => dist(o, p) < 5);
      if (p.carryT > 0.55 && dg < kickMax(p) - 6 && Math.abs(p.z) < 38) { launchKick(m, p, Math.atan2(-p.z * 0.85, gx - p.x), clamp(dg / kickMax(p), 0.35, 1)); return; }
      if (p.carryT > 0.4 && press.length) { launchHand(m, p); return; }
      goTo(p, gx, p.z * 0.5, true, 0.9, dt);
      return;
    }
    if (m.ball.ph === 'loose' || m.ball.ph === 'flight') {
      const pool = mates(m, p).filter(o => o !== p && dist(o, m.ball) < dist(p, m.ball));
      if (pool.length < 2) { goTo(p, m.ball.x, m.ball.z, true, 1, dt); return; }
    }
    if (c && c.team !== p.team && dist(p, c) < 26 && roleOf(p) !== 'FF' && roleOf(p) !== 'FB') {
      goTo(p, c.x, c.z, true, 0.95, dt);
      if (dist(p, c) < 2.6 && p.cd <= 0 && m.rand() < 1.1 * dt) attemptTackle(m, p, c);
      return;
    }
    const s = station(m, p);
    goTo(p, s.x, s.z, dist(p, s) > 18, 0.8, dt);
  }

  function scoreBall(m) {
    const b = m.ball;
    if (inOval(b.x, b.z)) return false;
    if (Math.abs(b.x) > A * 0.84 && Math.abs(b.z) < 9.6) {
      const scorer = b.x > 0 ? 'home' : 'away';
      const own = m.lastKicker && m.lastKicker.team === scorer;
      if (Math.abs(b.z) < 3.2 && b.untouched && own) m.score[scorer].g++;
      else m.score[scorer].b++;
      m.pending = {t: 'centre'}; m.dead = 1.6; b.ph = 'dead'; m.carrier = null; m.wind = null;
      return true;
    }
    m.pending = {t: 'throw', x: b.x, z: b.z, team: m.lastTouch === 'home' ? 'away' : 'home'};
    m.dead = 0.9; b.ph = 'dead'; m.carrier = null;
    return true;
  }
  function restart(m) {
    const r = m.pending; m.pending = null; m.pickupCD = 0.35; m.kickLock = 0; m.lastKicker = null;
    if (!r || r.t === 'centre') {
      for (const p of m.all) { p.x = p.hx; p.z = p.hz; p.vx = p.vz = 0; p.face = p.team === 'home' ? 0 : Math.PI; p.stun = 0; }
      Object.assign(m.ball, {ph: 'loose', x: 0, z: 0, h: 2.2, vh: 6, vx: (m.rand() - 0.5) * 2, vz: (m.rand() - 0.5) * 2, untouched: false});
      m.carrier = null; m.pickupCD = 0.45;
      return;
    }
    const grp = r.team === 'home' ? m.home : m.away;
    const pt = r.t === 'throw' ? {x: clamp(r.x, -A + 8, A - 8), z: clamp(r.z, -B + 8, B - 8)} : {x: -atkOf(r.team) * (A - 10), z: 0};
    const p = nearest(pt, grp); p.x = pt.x; p.z = pt.z; p.vx = p.vz = 0;
    m.ball.x = p.x; m.ball.z = p.z; gather(m, p);
  }

  function human(m, p, inp, dt) {
    const side = p.team;
    movePlayer(p, inp.ax || 0, inp.az || 0, !!inp.sprint, 1, dt);
    if (inp.edge === 'switch') m.active[side] = (m.active[side] + 1) % 18;
    if (inp.edge === 'tackle') {
      const c = m.carrier;
      if (c && c.team !== p.team && dist(p, c) < 3.6) attemptTackle(m, p, c);
    }
    if (m.carrier === p) {
      if (inp.edge === 'hand') launchHand(m, p);
      else if (inp.edge === 'punt') launchKick(m, p, Math.atan2(inp.az || Math.sin(p.face), inp.ax || Math.cos(p.face)), 0.62);
      else if (inp.kick) { m.kickDown[side] = 1; m.charge[side] = Math.min(1, m.charge[side] + dt); }
      else if (m.kickDown[side]) {
        const aim = (inp.ax || inp.az) ? Math.atan2(inp.az, inp.ax) : p.face;
        launchKick(m, p, aim, Math.max(0.25, m.charge[side]));
        m.kickDown[side] = 0; m.charge[side] = 0;
      }
    } else if (!inp.kick) { m.kickDown[side] = 0; m.charge[side] = 0; }
  }

  function updateBall(m, dt) {
    const b = m.ball;
    if (b.ph === 'held' && m.carrier) {
      b.x = m.carrier.x + Math.cos(m.carrier.face) * 0.55;
      b.z = m.carrier.z + Math.sin(m.carrier.face) * 0.55; b.h = 1.05;
    } else if (b.ph === 'flight') {
      b.el += dt; b.x += b.vx * dt; b.z += b.vz * dt;
      const u = Math.min(1, b.el / b.dur); b.h = 4 * b.apex * u * (1 - u);
      if (scoreBall(m)) return;
      if (u >= 1) {
        b.ph = 'loose'; b.h = 0; b.vx *= b.kind === 'handpass' ? 0.3 : 0.45; b.vz *= b.kind === 'handpass' ? 0.3 : 0.45;
        if (b.kind === 'handpass' && m.receiver && dist(m.receiver, b) < 2.8) gather(m, m.receiver);
        m.receiver = null;
      } else if (b.kind === 'kick' && u > 0.55 && b.h < 3.2) {
        for (const p of m.all) {
          if (p === m.lastKicker && m.kickLock > 0) continue;
          if (p.stun > 0 || dist(p, b) > 2.4) continue;
          if (m.rand() < 0.25 + p.d.mar * 0.004) { gather(m, p); break; }
        }
      }
    } else if (b.ph === 'loose') {
      b.x += b.vx * dt; b.z += b.vz * dt;
      if (b.h > 0 || b.vh) { b.h += b.vh * dt; b.vh -= 9.8 * dt; if (b.h <= 0) { b.h = 0; b.vh = 0; } }
      if (b.h === 0) { const f = Math.exp(-2.6 * dt); b.vx *= f; b.vz *= f; }
      if (scoreBall(m)) return;
      if (m.pickupCD <= 0 && b.h < 1.2) {
        let best = null, bd = 1.7;
        for (const p of m.all) {
          if (p === m.lastKicker && m.kickLock > 0) continue;
          if (p.stun > 0 || p.lock > 0) continue;
          const d = dist(p, b); if (d < bd) { bd = d; best = p; }
        }
        if (best) gather(m, best);
      }
    }
  }

  function step(m, inputs) {
    if (m.over) return m;
    const dt = DT;
    m.t += dt;
    if (m.wait > 0) { m.wait -= dt; return m; }
    if (m.pending) { m.dead -= dt; if (m.dead <= 0) restart(m); return m; }
    m.time -= dt; m.kickLock = Math.max(0, m.kickLock - dt); m.pickupCD = Math.max(0, m.pickupCD - dt);
    if (m.time <= 0) {
      if (m.qtr >= 4) { m.over = true; m.ball.ph = 'dead'; return m; }
      m.qtr++; m.time = QUARTER; m.pending = {t: 'centre'}; m.dead = 0.8; return m;
    }
    const ctrl = {home: m.home[m.active.home], away: m.away[m.active.away]};
    for (const p of m.all) {
      const inp = inputs && inputs[p.team];
      if (inp && ctrl[p.team] === p) human(m, p, inp, dt);
      else ai(m, p, dt);
    }
    for (const side of ['home', 'away']) if (inputs && inputs[side]) inputs[side].edge = '';
    updateBall(m, dt);
    return m;
  }

  function snapshot(m) {
    const who = m.carrier ? (m.carrier.team === 'home' ? m.carrier.idx : 18 + m.carrier.idx) : -1;
    const p = [];
    for (const pl of m.all) p.push(Math.round(pl.x * 10) / 10, Math.round(pl.z * 10) / 10, Math.round(pl.face * 100) / 100, Math.round(pl.stam * 100) / 100);
    const b = m.ball;
    return {
      t: Math.round(m.t * 30), q: m.qtr, time: Math.max(0, Math.ceil(m.time)),
      hg: m.score.home.g, hb: m.score.home.b, ag: m.score.away.g, ab: m.score.away.b,
      ball: [Math.round(b.x * 10) / 10, Math.round(b.z * 10) / 10, Math.round(b.h * 10) / 10, b.ph === 'held' ? 0 : b.ph === 'flight' ? 1 : b.ph === 'loose' ? 2 : 3],
      who, ah: m.active.home, aa: m.active.away, over: m.over ? 1 : 0,
      ch: Math.round(m.charge.home * 100) / 100, ca: Math.round(m.charge.away * 100) / 100, p
    };
  }

  function purse(score, side) {
    const hp = score.home.g * 6 + score.home.b, ap = score.away.g * 6 + score.away.b;
    const mine = side === 'home' ? hp : ap, opp = side === 'home' ? ap : hp;
    const goals = side === 'home' ? score.home.g : score.away.g;
    const won = mine > opp, draw = mine === opp;
    const base = (won ? 1600 : draw ? 900 : 500) + goals * 50;
    return {coins: Math.round(base * 4 * (won ? 1.25 : 1)), won, draw};
  }

  return { DT, create, step, snapshot, purse };
});
