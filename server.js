/* AFL online: static file host + lobby server + authoritative match server.
   Zero dependencies. Run:  node server.js   (PORT env var is honoured)
   - Serves the game files over HTTP.
   - Players connect with a WebSocket on the same host/port, create or join a lobby,
     ready up, and the server runs the match (sim.js) and streams snapshots to both. */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');
const sim = require('./sim.js');

const PORT = +process.env.PORT || 8787;
const ROOT = __dirname;
const MAX_CLIENTS = +process.env.MAX_CLIENTS || 400;
const MAX_ROOMS = +process.env.MAX_ROOMS || 150;
const EXTRA_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
const COUNTDOWN = 3;
const IDLE_INPUT_MS = 1000;
const DEAD_AFTER_MS = 50000;

/* ---------------- static files ---------------- */
const TYPES = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.glb': 'model/gltf-binary', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon'};
const GZIP_TYPES = new Set(['.html', '.js', '.css', '.json', '.svg', '.glb']);
const TOP_FILES = new Set(['index.html', 'style.css', 'sim.js', 'game.js', 'net.js', 'hacks.js', 'config.js']);
const PUBLIC_DIRS = new Set(['assets', 'photos', 'vendor']);
const gzCache = new Map();

function resolvePublic(urlPath) {
  let rel;
  try { rel = decodeURIComponent(urlPath); } catch (e) { return null; }
  rel = rel.replace(/^\/+/, '') || 'index.html';
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT + path.sep)) return null;
  const parts = path.relative(ROOT, file).split(path.sep);
  if (parts.some(p => p.startsWith('.'))) return null;
  if (parts.length === 1 ? !TOP_FILES.has(parts[0]) : !PUBLIC_DIRS.has(parts[0])) return null;
  return file;
}

function serveStatic(req, res) {
  const url = req.url.split('?')[0];
  if (url === '/healthz') { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('ok'); return; }
  if (url === '/api/status') {
    res.writeHead(200, {'Content-Type': 'application/json', 'Cache-Control': 'no-store'});
    res.end(JSON.stringify(stats()));
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return; }
  const file = resolvePublic(url);
  if (!file) { res.writeHead(404, {'Content-Type': 'text/plain'}); res.end('not found'); return; }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, {'Content-Type': 'text/plain'}); res.end('not found'); return; }
    const ext = path.extname(file).toLowerCase();
    const etag = 'W/"' + st.size.toString(16) + '-' + Math.floor(st.mtimeMs).toString(16) + '"';
    const revalidate = ext === '.html' || ext === '.js' || ext === '.css';
    const headers = {
      'Content-Type': TYPES[ext] || 'application/octet-stream',
      'ETag': etag, 'Last-Modified': st.mtime.toUTCString(), 'Accept-Ranges': 'bytes',
      'Cache-Control': revalidate ? 'no-cache' : 'public, max-age=86400', 'X-Content-Type-Options': 'nosniff'
    };
    if (req.headers['if-none-match'] === etag) { res.writeHead(304, headers); res.end(); return; }
    const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (range && (range[1] || range[2])) {          // audio needs byte ranges on Safari
      let start = range[1] ? +range[1] : Math.max(0, st.size - +range[2]);
      let end = range[1] && range[2] ? Math.min(+range[2], st.size - 1) : st.size - 1;
      if (start > end || start >= st.size) { res.writeHead(416, {'Content-Range': 'bytes */' + st.size}); res.end(); return; }
      headers['Content-Range'] = 'bytes ' + start + '-' + end + '/' + st.size;
      headers['Content-Length'] = end - start + 1;
      res.writeHead(206, headers);
      if (req.method === 'HEAD') { res.end(); return; }
      fs.createReadStream(file, {start, end}).on('error', () => res.destroy()).pipe(res);
      return;
    }
    const wantsGz = GZIP_TYPES.has(ext) && st.size > 1024 && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    if (wantsGz) {
      const key = file + ':' + etag, hit = gzCache.get(key);
      const send = buf => {
        headers['Content-Encoding'] = 'gzip'; headers['Content-Length'] = buf.length; headers['Vary'] = 'Accept-Encoding';
        res.writeHead(200, headers); res.end(req.method === 'HEAD' ? undefined : buf);
      };
      if (hit) { send(hit); return; }
      fs.readFile(file, (e2, data) => {
        if (e2) { res.writeHead(500); res.end(); return; }
        zlib.gzip(data, {level: 6}, (e3, gz) => {
          if (e3) { res.writeHead(500); res.end(); return; }
          for (const k of gzCache.keys()) if (k.startsWith(file + ':')) gzCache.delete(k);
          gzCache.set(key, gz); send(gz);
        });
      });
      return;
    }
    headers['Content-Length'] = st.size;
    res.writeHead(200, headers);
    if (req.method === 'HEAD') { res.end(); return; }
    fs.createReadStream(file).on('error', () => res.destroy()).pipe(res);
  });
}

/* ---------------- tiny WebSocket layer ---------------- */
const MAX_FRAME = 256 * 1024;
function frame(opcode, payload) {
  const len = payload.length;
  let head;
  if (len < 126) head = Buffer.from([0x80 | opcode, len]);
  else if (len < 65536) { head = Buffer.alloc(4); head[0] = 0x80 | opcode; head[1] = 126; head.writeUInt16BE(len, 2); }
  else { head = Buffer.alloc(10); head[0] = 0x80 | opcode; head[1] = 127; head.writeBigUInt64BE(BigInt(len), 2); }
  return Buffer.concat([head, payload]);
}
function rawSend(socket, buf) { try { if (!socket.destroyed) socket.write(buf); } catch (e) {} }
function send(c, obj, droppable) {
  if (!c || !c.socket || c.socket.destroyed) return;
  if (droppable && c.socket.writableLength > 256 * 1024) return;   // slow client: skip snapshots, never queue them
  rawSend(c.socket, frame(1, Buffer.from(JSON.stringify(obj))));
}
function attach(c, onMsg, onClose) {
  const socket = c.socket;
  let buf = Buffer.alloc(0), parts = null, closed = false;
  const done = () => { if (closed) return; closed = true; onClose(); };
  const kill = () => { try { socket.destroy(); } catch (e) {} done(); };
  socket.on('data', chunk => {
    c.lastSeen = Date.now();
    buf = Buffer.concat([buf, chunk]);
    while (buf.length >= 2) {
      const fin = (buf[0] & 128) !== 0, opcode = buf[0] & 15;
      const masked = (buf[1] & 128) !== 0;
      let len = buf[1] & 127, off = 2;
      if (len === 126) { if (buf.length < 4) return; len = buf.readUInt16BE(2); off = 4; }
      else if (len === 127) { if (buf.length < 10) return; len = Number(buf.readBigUInt64BE(2)); off = 10; }
      if (!masked || len > MAX_FRAME) { kill(); return; }
      if (buf.length < off + 4 + len) return;
      const mask = buf.subarray(off, off + 4);
      const payload = Buffer.from(buf.subarray(off + 4, off + 4 + len));
      for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i & 3];
      buf = buf.subarray(off + 4 + len);
      if (opcode === 8) { rawSend(socket, frame(8, Buffer.alloc(0))); try { socket.end(); } catch (e) {} done(); return; }
      if (opcode === 9) { rawSend(socket, frame(10, payload)); continue; }
      if (opcode === 10) continue;
      if (opcode === 1 || opcode === 0) {
        if (opcode === 1) parts = [payload]; else if (parts) parts.push(payload);
        if (parts && parts.reduce((n, p) => n + p.length, 0) > MAX_FRAME) { kill(); return; }
        if (fin && parts) {
          const whole = Buffer.concat(parts); parts = null;
          let msg = null;
          try { msg = JSON.parse(whole.toString('utf8')); } catch (e) {}
          if (msg && typeof msg === 'object') { try { onMsg(msg); } catch (e) { console.error('handler error', e); } }
        }
      }
    }
  });
  socket.on('end', () => { try { socket.end(); } catch (e) {} done(); });   // peer vanished: free the seat now, not after a timeout
  socket.on('close', done);
  socket.on('error', done);
  return kill;
}

/* ---------------- state ---------------- */
const clients = new Set();
const rooms = new Map();
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function newCode() {
  for (let n = 0; n < 50; n++) {
    let s = '';
    for (let i = 0; i < 4; i++) s += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
    if (!rooms.has(s)) return s;
  }
  return null;
}
const num = (v, lo, hi, d) => { v = +v; return Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.round(v))) : d; };
const cleanText = (s, max, d) => (String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f<>&"'`]/g, '').trim().slice(0, max)) || d;
function cleanSquad(list) {
  if (!Array.isArray(list) || list.length < 18) return null;
  return list.slice(0, 18).map(p => {
    p = p || {};
    return {id: num(p.id, -1e6, 1e6, 0), name: cleanText(p.name, 28, 'Player'), rating: num(p.rating, 30, 110, 70), kic: num(p.kic, 30, 110, 70), mar: num(p.mar, 30, 110, 70), spd: num(p.spd, 30, 110, 70), end: num(p.end, 30, 110, 70), pos: cleanText(p.pos, 6, 'MID')};
  });
}
function cleanProfile(msg) {
  const squad = cleanSquad(msg.squad);
  if (!squad) return null;
  const ovr = Math.round(squad.reduce((a, p) => a + p.rating, 0) / squad.length);
  return {name: cleanText(msg.name, 16, 'Coach'), squad, ovr, club: num(msg.club, 0, 99, 0), ground: /^[a-z0-9_-]{1,16}$/i.test(msg.ground || '') ? msg.ground : 'mcg'};
}
const pub = (c, ready) => c ? {name: c.p.name, club: c.p.club, ovr: c.p.ovr, ground: c.p.ground, ready: !!ready} : null;

function stats() {
  let playing = 0, open = 0;
  for (const r of rooms.values()) { if (r.phase === 'play') playing++; else if (r.phase === 'lobby' && r.public && !(r.seats.home && r.seats.away)) open++; }
  return {online: clients.size, rooms: rooms.size, playing, open};
}
function listLobbies() {
  const out = [];
  for (const r of rooms.values()) {
    if (!r.public || r.phase !== 'lobby') continue;
    const h = r.seats.home, a = r.seats.away;
    if (h && a) continue;
    const who = h || a;
    if (who) out.push({code: r.code, name: who.p.name, club: who.p.club, ovr: who.p.ovr, ground: who.p.ground});
  }
  return out;
}
let listQueued = false;
function pushLobbyList() {
  if (listQueued) return;
  listQueued = true;
  setTimeout(() => {
    listQueued = false;
    const msg = Object.assign({type: 'lobbies', list: listLobbies()}, stats());
    for (const c of clients) if (c.browsing && !c.room) send(c, msg);
  }, 400);
}

function roomState(room, side) {
  return {
    type: 'lobby', code: room.code, phase: room.phase, public: room.public, you: side, count: room.count,
    home: pub(room.seats.home, room.ready.home), away: pub(room.seats.away, room.ready.away)
  };
}
function tellRoom(room) {
  for (const side of ['home', 'away']) if (room.seats[side]) send(room.seats[side], roomState(room, side));
  pushLobbyList();
}
function stopCountdown(room) {
  if (room.cdTimer) { clearInterval(room.cdTimer); room.cdTimer = null; }
  room.count = 0;
}
function destroyRoom(room) {
  stopCountdown(room);
  rooms.delete(room.code);
  for (const side of ['home', 'away']) { const c = room.seats[side]; if (c) { c.room = null; c.seat = null; } }
  room.seats.home = room.seats.away = null;
  room.match = null; room.phase = 'dead';
  pushLobbyList();
}

function leaveRoom(c) {
  const room = c.room;
  if (!room) return;
  const side = c.seat, other = side === 'home' ? room.seats.away : room.seats.home;
  room.seats[side] = null; c.room = null; c.seat = null;
  if (room.phase === 'play' || room.phase === 'over') {
    if (other) send(other, {type: 'bye', reason: 'The other coach left'});
    destroyRoom(room);
    return;
  }
  stopCountdown(room);
  room.ready.home = room.ready.away = false;
  if (!other) { destroyRoom(room); return; }
  if (side === 'home') { room.seats.home = other; room.seats.away = null; other.seat = 'home'; }   // guest becomes host
  tellRoom(room);
}

function startCountdown(room) {
  stopCountdown(room);
  room.count = COUNTDOWN;
  tellRoom(room);
  room.cdTimer = setInterval(() => {
    if (!(room.seats.home && room.seats.away && room.ready.home && room.ready.away)) { stopCountdown(room); tellRoom(room); return; }
    room.count--;
    if (room.count <= 0) { stopCountdown(room); startMatch(room); }
    else tellRoom(room);
  }, 1000);
}

function startMatch(room) {
  const H = room.seats.home, A = room.seats.away;
  if (!H || !A) return;
  const seed = crypto.randomBytes(4).readUInt32BE(0);
  room.id = room.code + crypto.randomBytes(6).toString('hex');
  room.phase = 'play';
  room.match = sim.create({seed, home: H.p.squad, away: A.p.squad});
  room.inputs = {home: emptyInput(), away: emptyInput()};
  room.queue = {home: [], away: []};
  room.lastIn = {home: Date.now(), away: Date.now()};
  room.lastN = {home: -1, away: -1};
  room.rematch = {home: false, away: false};
  room.acc = 0n; room.lastTick = process.hrtime.bigint();
  room.ready.home = room.ready.away = false;
  const go = {
    type: 'go', id: room.id, seed, code: room.code,
    home: H.p.squad, away: A.p.squad, homeClub: H.p.club, awayClub: A.p.club,
    homeName: H.p.name, awayName: A.p.name, ground: H.p.ground || 'mcg'
  };
  send(H, Object.assign({side: 'home'}, go));
  send(A, Object.assign({side: 'away'}, go));
  pushLobbyList();
}
function emptyInput() { return {ax: 0, az: 0, sprint: 0, kick: 0, edge: ''}; }

/* ---------------- messages ---------------- */
function hello(c) { send(c, Object.assign({type: 'welcome', id: c.id}, stats())); }

function onMessage(c, msg) {
  // token bucket: ~90 msgs/s sustained is far above what a real client sends
  const now = Date.now();
  c.tokens = Math.min(150, c.tokens + (now - c.tokAt) * 0.09); c.tokAt = now;
  if (c.tokens < 1) { if (++c.strikes > 300) c.kill(); return; }
  c.tokens -= 1;

  switch (msg.type) {
    case 'in': {
      const room = c.room;
      if (!room || room.phase !== 'play' || !room.match) return;
      const inp = room.inputs[c.seat];
      inp.ax = Math.max(-1, Math.min(1, +msg.ax || 0)); inp.az = Math.max(-1, Math.min(1, +msg.az || 0));
      inp.sprint = msg.sprint ? 1 : 0; inp.kick = msg.kick ? 1 : 0;
      room.lastIn[c.seat] = now;
      const n = msg.n | 0;
      if (n !== room.lastN[c.seat]) {
        room.lastN[c.seat] = n;
        const edge = String(msg.edge || '');
        if (edge === 'hand' || edge === 'tackle' || edge === 'punt' || edge === 'switch') {
          const q = room.queue[c.seat]; if (q.length < 4) q.push(edge);
        }
      }
      return;
    }
    case 'ping': send(c, {type: 'pong', t: msg.t}); return;
    case 'browse':
      c.browsing = !!msg.on;
      if (c.browsing) send(c, Object.assign({type: 'lobbies', list: listLobbies()}, stats()));
      return;
    case 'create': {
      if (c.room) return;
      const p = cleanProfile(msg);
      if (!p) { send(c, {type: 'err', text: 'You need a full 18-player lineup to play online'}); return; }
      if (rooms.size >= MAX_ROOMS) { send(c, {type: 'err', text: 'The server is full right now. Try again in a minute'}); return; }
      const code = newCode();
      if (!code) { send(c, {type: 'err', text: 'Could not make a lobby. Try again'}); return; }
      c.p = p;
      const room = {code, phase: 'lobby', public: msg.public !== false, seats: {home: c, away: null}, ready: {home: false, away: false}, count: 0, cdTimer: null, match: null};
      rooms.set(code, room);
      c.room = room; c.seat = 'home';
      tellRoom(room);
      return;
    }
    case 'join': {
      if (c.room) return;
      const code = String(msg.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
      const room = rooms.get(code);
      if (!room) { send(c, {type: 'err', text: 'No lobby with the code ' + (code || '----')}); return; }
      if (room.phase !== 'lobby') { send(c, {type: 'err', text: 'That match has already started'}); return; }
      if (room.seats.home && room.seats.away) { send(c, {type: 'err', text: 'That lobby is full'}); return; }
      const p = cleanProfile(msg);
      if (!p) { send(c, {type: 'err', text: 'You need a full 18-player lineup to play online'}); return; }
      c.p = p;
      const side = room.seats.home ? 'away' : 'home';
      room.seats[side] = c; c.room = room; c.seat = side;
      stopCountdown(room); room.ready.home = room.ready.away = false;
      tellRoom(room);
      return;
    }
    case 'ready': {
      const room = c.room;
      if (!room || room.phase !== 'lobby') return;
      room.ready[c.seat] = !!msg.ready;
      if (room.seats.home && room.seats.away && room.ready.home && room.ready.away) startCountdown(room);
      else { stopCountdown(room); tellRoom(room); }
      return;
    }
    case 'vis': {
      const room = c.room;
      if (!room || room.phase !== 'lobby' || c.seat !== 'home') return;
      room.public = !!msg.public; tellRoom(room); return;
    }
    case 'kick': {
      const room = c.room;
      if (!room || room.phase !== 'lobby' || c.seat !== 'home' || !room.seats.away) return;
      const g = room.seats.away;
      room.seats.away = null; g.room = null; g.seat = null;
      stopCountdown(room); room.ready.home = room.ready.away = false;
      send(g, {type: 'kicked'});
      tellRoom(room);
      return;
    }
    case 'leave': leaveRoom(c); send(c, {type: 'left'}); return;
    case 'rematch': {
      const room = c.room;
      if (!room || room.phase !== 'over') return;
      room.rematch[c.seat] = !!msg.on;
      for (const side of ['home', 'away']) send(room.seats[side], {type: 'rq', home: room.rematch.home, away: room.rematch.away});
      if (room.rematch.home && room.rematch.away) startMatch(room);
      return;
    }
  }
}

/* ---------------- match loop ---------------- */
const STEP_NS = BigInt(Math.round(sim.DT * 1e9));
function finishRoom(room) {
  room.phase = 'over';
  const m = room.match, hp = sim.purse(m.score, 'home'), ap = sim.purse(m.score, 'away');
  const over = {type: 'over', id: room.id, hg: m.score.home.g, hb: m.score.home.b, ag: m.score.away.g, ab: m.score.away.b, homeCoins: hp.coins, awayCoins: ap.coins};
  send(room.seats.home, over); send(room.seats.away, over);
  pushLobbyList();
}
setInterval(() => {
  const now = Date.now(), t = process.hrtime.bigint();
  for (const room of rooms.values()) {
    if (room.phase !== 'play' || !room.match) continue;
    let dt = t - room.lastTick; room.lastTick = t;
    if (dt > 250000000n) dt = 250000000n;                 // never try to catch up more than a quarter second
    room.acc += dt;
    let steps = 0;
    while (room.acc >= STEP_NS && steps < 3) {
      for (const side of ['home', 'away']) {
        const inp = room.inputs[side];
        if (now - room.lastIn[side] > IDLE_INPUT_MS) { inp.ax = inp.az = inp.sprint = inp.kick = 0; }
        if (!inp.edge && room.queue[side].length) inp.edge = room.queue[side].shift();
      }
      sim.step(room.match, room.inputs);
      room.acc -= STEP_NS; steps++;
      if (room.match.over) break;
    }
    if (!steps) continue;
    const snap = Object.assign({type: 'snap'}, sim.snapshot(room.match));
    send(room.seats.home, snap, true); send(room.seats.away, snap, true);
    if (room.match.over) finishRoom(room);
  }
}, 1000 / 60);

setInterval(() => {                                       // keepalive + reap dead sockets
  const now = Date.now();
  for (const c of clients) {
    if (now - c.lastSeen > DEAD_AFTER_MS) { c.kill(); continue; }
    rawSend(c.socket, frame(9, Buffer.alloc(0)));
  }
}, 15000);

/* ---------------- http + upgrade ---------------- */
const server = http.createServer(serveStatic);

function originOk(req) {
  const o = req.headers.origin;
  if (!o || o === 'null' || o === 'file://') return true;
  let host = '';
  try { host = new URL(o).host.toLowerCase(); } catch (e) { return false; }
  return host === String(req.headers.host || '').toLowerCase() || EXTRA_ORIGINS.includes(host) || EXTRA_ORIGINS.includes(o.toLowerCase());
}
server.on('upgrade', (req, socket) => {
  const key = req.headers['sec-websocket-key'];
  if (!key || (req.headers.upgrade || '').toLowerCase() !== 'websocket') { socket.destroy(); return; }
  if (!originOk(req)) { socket.write('HTTP/1.1 403 Forbidden\r\n\r\n'); socket.destroy(); return; }
  if (clients.size >= MAX_CLIENTS) { socket.write('HTTP/1.1 503 Service Unavailable\r\n\r\n'); socket.destroy(); return; }
  const accept = crypto.createHash('sha1').update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
  socket.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + accept + '\r\n\r\n');
  socket.setNoDelay(true);
  const c = {id: crypto.randomBytes(4).toString('hex'), socket, room: null, seat: null, p: null, browsing: false, lastSeen: Date.now(), tokens: 150, tokAt: Date.now(), strikes: 0, kill: null};
  clients.add(c);
  c.kill = attach(c, msg => onMessage(c, msg), () => { clients.delete(c); leaveRoom(c); pushLobbyList(); });
  hello(c);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('AFL online listening on port ' + PORT);
  console.log('Local:  http://127.0.0.1:' + PORT);
});
for (const sig of ['SIGTERM', 'SIGINT']) process.on(sig, () => { console.log(sig + ': shutting down'); process.exit(0); });
