/* AFL Mobile online server. One Node process, no npm install (Node 18+).
   - serves the game files
   - runs lobbies over a WebSocket at /ws
   - runs every match with sim.js and streams it to both coaches
   - hosts the online trade board at /api/market
   Run: node server.js        Health: /healthz        Stats: /api/status */
'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const sim = require('./sim.js');

const PORT = +process.env.PORT || 8787;
const ROOT = __dirname;
const MAX_CLIENTS = +process.env.MAX_CLIENTS || 400;
const MAX_ROOMS = +process.env.MAX_ROOMS || 150;
const EXTRA_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim().toLowerCase().replace(/\/$/, '')).filter(Boolean);
const DATA_DIR = process.env.DATA_DIR || process.env.TMPDIR || os.tmpdir();
const WS_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
const MAX_FRAME = 64 * 1024;

/* ---------- static files ---------- */
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.glb': 'model/gltf-binary', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon'
};
const PUBLIC_FILES = new Set(['index.html', 'style.css', 'config.js', 'hacks.js', 'sim.js', 'game.js', 'net.js', 'mpmarket.js']);
const PUBLIC_DIRS = ['assets/', 'photos/', 'vendor/'];
const COMPRESS = new Set(['.html', '.js', '.css', '.json', '.svg']);
const gzCache = new Map();

function publicPath(urlPath) {
  let rel;
  try { rel = decodeURIComponent(urlPath); } catch (e) { return null; }
  if (rel.includes('\0') || rel.includes('\\')) return null;
  rel = path.posix.normalize('/' + rel).slice(1);
  if (!rel) rel = 'index.html';
  if (rel.startsWith('..')) return null;
  if (!PUBLIC_FILES.has(rel) && !PUBLIC_DIRS.some(d => rel.startsWith(d))) return null;
  const abs = path.join(ROOT, rel);
  if (!abs.startsWith(ROOT + path.sep)) return null;
  return abs;
}

function serveStatic(req, res, urlPath) {
  const abs = publicPath(urlPath);
  if (!abs) { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('not found'); return; }
  fs.stat(abs, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('not found'); return; }
    const ext = path.extname(abs).toLowerCase();
    const head = {
      'Content-Type': TYPES[ext] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': /^\/(assets|photos|vendor)\//.test('/' + path.relative(ROOT, abs).split(path.sep).join('/')) ? 'public, max-age=86400' : 'no-cache'
    };
    const wantsGz = COMPRESS.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
    if (req.method === 'HEAD') { res.writeHead(200, head); res.end(); return; }
    if (wantsGz) {
      const hit = gzCache.get(abs);
      if (hit && hit.mtime === st.mtimeMs) { res.writeHead(200, Object.assign({ 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' }, head)); res.end(hit.buf); return; }
      fs.readFile(abs, (e2, data) => {
        if (e2) { res.writeHead(404); res.end('not found'); return; }
        zlib.gzip(data, (e3, buf) => {
          if (e3) { res.writeHead(200, head); res.end(data); return; }
          gzCache.set(abs, { mtime: st.mtimeMs, buf });
          res.writeHead(200, Object.assign({ 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' }, head));
          res.end(buf);
        });
      });
      return;
    }
    res.writeHead(200, head);
    fs.createReadStream(abs).on('error', () => res.destroy()).pipe(res);
  });
}

/* ---------- origin + rate limiting ---------- */
function originOk(req) {
  const o = req.headers.origin;
  if (!o || o === 'null' || o === 'file://') return true; /* non-browser clients and the Electron app */
  let u; try { u = new URL(o); } catch (e) { return false; }
  if (u.host.toLowerCase() === String(req.headers.host || '').toLowerCase()) return true;
  return EXTRA_ORIGINS.includes(o.toLowerCase().replace(/\/$/, ''));
}
function clientIp(req) {
  const xf = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return xf || (req.socket && req.socket.remoteAddress) || '?';
}
const hits = new Map();
function limited(ip, max) {
  const now = Date.now();
  let h = hits.get(ip);
  if (!h || now > h.reset) { h = { n: 0, reset: now + 60000 }; hits.set(ip, h); }
  return ++h.n > max;
}
setInterval(() => { const now = Date.now(); for (const [k, v] of hits) if (now > v.reset) hits.delete(k); }, 60000).unref();

/* ---------- trade board ---------- */
const marketPath = path.join(DATA_DIR, 'afl-market.json');
let market = { next: 1, listings: [], pay: {} };
try {
  const m = JSON.parse(fs.readFileSync(marketPath, 'utf8'));
  if (m && Array.isArray(m.listings)) market = { next: m.next | 0 || 1, listings: m.listings, pay: m.pay && typeof m.pay === 'object' ? m.pay : {} };
} catch (e) { /* first run */ }
let marketTimer = 0;
function saveMarket() {
  if (marketTimer) return;
  marketTimer = setTimeout(() => {
    marketTimer = 0;
    fs.writeFile(marketPath, JSON.stringify(market), () => {});
  }, 500);
}
const COACH_RE = /^[a-zA-Z0-9]{6,24}$/;
const MAX_PRICE = 50000000;

function readBody(req, cb) {
  let size = 0; const parts = [];
  req.on('data', c => { size += c.length; if (size > 8192) { req.destroy(); return; } parts.push(c); });
  req.on('end', () => { try { cb(null, JSON.parse(Buffer.concat(parts).toString() || '{}')); } catch (e) { cb(e); } });
  req.on('error', () => cb(new Error('read')));
}
function json(res, code, obj, extra) {
  const body = JSON.stringify(obj);
  res.writeHead(code, Object.assign({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }, extra || {}));
  res.end(body);
}
function cleanCard(p) {
  if (!p || typeof p !== 'object') return null;
  const id = p.id | 0, lvl = p.lvl | 0, asc = p.asc | 0;
  if (id < 0 || id > 99999 || lvl < 0 || lvl > 99 || asc < 0 || asc > 20) return null;
  return { id, lvl, asc };
}
function marketGet(coach) {
  const listings = market.listings.slice(-200).reverse().map(l => ({ id: l.id, price: l.price, player: l.player, mine: l.coach === coach }));
  return { listings };
}
function marketPost(body) {
  const coach = String(body.coach || '');
  if (!COACH_RE.test(coach)) return [400, { error: 'Bad coach id.' }];
  const op = body.op;
  if (op === 'list') {
    const price = body.price, card = cleanCard(body.player);
    if (!Number.isInteger(price) || price < 0 || price > MAX_PRICE) return [400, { error: 'Price must be 0 to 50,000,000.' }];
    if (!card) return [400, { error: 'Bad player.' }];
    if (market.listings.filter(l => l.coach === coach).length >= 12) return [400, { error: 'You can only have 12 listings at once.' }];
    if (market.listings.length >= 2000) return [503, { error: 'The board is full. Try later.' }];
    if (market.listings.some(l => l.coach === coach && l.player.id === card.id)) return [400, { error: 'You already listed that player.' }];
    const id = market.next++;
    market.listings.push({ id, coach, price, player: card, t: Date.now() });
    saveMarket();
    return [200, { ok: true, id }];
  }
  if (op === 'buy' || op === 'cancel') {
    const id = body.id | 0;
    const i = market.listings.findIndex(l => l.id === id);
    if (i < 0) return [404, { error: 'That listing is gone.' }];
    const l = market.listings[i];
    if (op === 'buy') {
      if (l.coach === coach) return [400, { error: 'That is your own listing.' }];
      market.listings.splice(i, 1);
      market.pay[l.coach] = (market.pay[l.coach] || 0) + l.price;
      saveMarket();
      return [200, { player: l.player, price: l.price }];
    }
    if (l.coach !== coach) return [403, { error: 'Not your listing.' }];
    market.listings.splice(i, 1);
    saveMarket();
    return [200, { player: l.player }];
  }
  if (op === 'claim') {
    const coins = market.pay[coach] | 0;
    if (coins) { delete market.pay[coach]; saveMarket(); }
    return [200, { coins }];
  }
  return [400, { error: 'Unknown request.' }];
}

/* ---------- http ---------- */
const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const query = new URLSearchParams(req.url.split('?')[1] || '');

  if (url === '/healthz') { res.writeHead(200, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' }); res.end('ok'); return; }

  if (url.startsWith('/api/')) {
    const cors = {};
    const o = req.headers.origin;
    if (o) {
      if (!originOk(req)) { json(res, 403, { error: 'Origin not allowed.' }); return; }
      cors['Access-Control-Allow-Origin'] = o === 'null' || o === 'file://' ? '*' : o;
      cors['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
      cors['Access-Control-Allow-Headers'] = 'content-type';
      cors.Vary = 'Origin';
    }
    if (req.method === 'OPTIONS') { res.writeHead(204, cors); res.end(); return; }
    if (url === '/api/status') {
      let playing = 0, open = 0;
      for (const r of rooms.values()) { if (r.phase === 'play') playing++; if (isOpen(r)) open++; }
      json(res, 200, { online: clients.size, rooms: rooms.size, playing, open }, cors); return;
    }
    if (url === '/api/market') {
      if (limited(clientIp(req), 120)) { json(res, 429, { error: 'Slow down.' }, cors); return; }
      if (req.method === 'GET') {
        const coach = String(query.get('coach') || '');
        json(res, 200, marketGet(COACH_RE.test(coach) ? coach : ''), cors); return;
      }
      if (req.method === 'POST') {
        readBody(req, (err, body) => {
          if (err || !body || typeof body !== 'object') { json(res, 400, { error: 'Bad request.' }, cors); return; }
          const [code, out] = marketPost(body);
          json(res, code, out, cors);
        });
        return;
      }
    }
    json(res, 404, { error: 'Not found.' }, cors); return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return; }
  serveStatic(req, res, url);
});

/* ---------- websocket framing ---------- */
function frame(opcode, payload) {
  const len = payload.length;
  let head;
  if (len < 126) head = Buffer.from([0x80 | opcode, len]);
  else if (len < 65536) { head = Buffer.alloc(4); head[0] = 0x80 | opcode; head[1] = 126; head.writeUInt16BE(len, 2); }
  else { head = Buffer.alloc(10); head[0] = 0x80 | opcode; head[1] = 127; head.writeBigUInt64BE(BigInt(len), 2); }
  return Buffer.concat([head, payload]);
}
function sendRaw(socket, buf) { if (socket && !socket.destroyed && socket.writable) { try { socket.write(buf); } catch (e) { /* closing */ } } }
function send(c, obj) { if (c && c.socket) sendRaw(c.socket, frame(1, Buffer.from(JSON.stringify(obj)))); }

function attach(socket, onMsg, onClose) {
  let buf = Buffer.alloc(0), closed = false, fragOp = 0, frag = [], fragLen = 0;
  const done = () => { if (closed) return; closed = true; onClose(); };
  socket.on('data', chunk => {
    buf = Buffer.concat([buf, chunk]);
    while (buf.length >= 2) {
      const fin = (buf[0] & 128) !== 0, opcode = buf[0] & 15, masked = (buf[1] & 128) !== 0;
      let len = buf[1] & 127, off = 2;
      if (len === 126) { if (buf.length < 4) return; len = buf.readUInt16BE(2); off = 4; }
      else if (len === 127) { if (buf.length < 10) return; len = Number(buf.readBigUInt64BE(2)); off = 10; }
      if (len > MAX_FRAME || !masked) { socket.destroy(); done(); return; }
      if (buf.length < off + 4 + len) return;
      const mask = buf.subarray(off, off + 4);
      const payload = Buffer.from(buf.subarray(off + 4, off + 4 + len));
      for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i & 3];
      buf = buf.subarray(off + 4 + len);
      if (opcode === 8) { try { socket.end(frame(8, Buffer.alloc(0))); } catch (e) { /* gone */ } done(); return; }
      if (opcode === 9) { sendRaw(socket, frame(10, payload)); continue; }
      if (opcode === 10) { socket.emit('pong-seen'); continue; }
      if (opcode === 1 || opcode === 0) {
        if (opcode === 1) { fragOp = 1; frag = []; fragLen = 0; }
        else if (!fragOp) continue;
        frag.push(payload); fragLen += payload.length;
        if (fragLen > MAX_FRAME) { socket.destroy(); done(); return; }
        if (fin) {
          const text = Buffer.concat(frag).toString();
          fragOp = 0; frag = []; fragLen = 0;
          try { onMsg(JSON.parse(text)); } catch (e) { /* bad json */ }
        }
      }
    }
  });
  socket.on('close', done);
  socket.on('error', () => { socket.destroy(); done(); });
}

/* ---------- lobbies ---------- */
const clients = new Set();
const rooms = new Map();
const watchers = new Set();
const SIDE_EDGES = new Set(['', 'hand', 'tackle', 'punt', 'switch']);

const clampN = (v, lo, hi, d) => { v = +v; return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
function cleanName(s) { return String(s || 'Coach').replace(/[\u0000-\u001f<>&"'`]/g, '').trim().slice(0, 18) || 'Coach'; }
function cleanSquad(arr) {
  if (!Array.isArray(arr) || arr.length < 18) return null;
  return arr.slice(0, 18).map(p => {
    p = p && typeof p === 'object' ? p : {};
    return {
      id: p.id | 0, name: cleanName(p.name || 'Player').slice(0, 24), rating: clampN(p.rating, 1, 130, 70),
      kic: clampN(p.kic, 1, 130, 70), mar: clampN(p.mar, 1, 130, 70), spd: clampN(p.spd, 1, 130, 70), end: clampN(p.end, 1, 130, 70),
      pos: String(p.pos || 'MID').replace(/[^A-Za-z]/g, '').slice(0, 6) || 'MID'
    };
  });
}
const avg = squad => Math.round(squad.reduce((a, p) => a + p.rating, 0) / squad.length);

function newCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for (let tries = 0; tries < 50; tries++) {
    let s = '';
    for (let i = 0; i < 4; i++) s += alphabet[crypto.randomInt(alphabet.length)];
    if (!rooms.has(s)) return s;
  }
  return null;
}
const isOpen = r => r.public && r.phase === 'lobby' && r.host && !r.guest;
function lobbyList() {
  const out = [];
  for (const r of rooms.values()) if (isOpen(r)) out.push({ code: r.code, name: r.host.name, club: r.host.club, ovr: r.host.ovr });
  return out.slice(0, 40);
}
let lobbyTimer = 0;
function broadcastLobbies() {
  if (lobbyTimer) return;
  lobbyTimer = setTimeout(() => {
    lobbyTimer = 0;
    if (!watchers.size) return;
    const msg = { type: 'lobbies', list: lobbyList() };
    for (const c of watchers) send(c, msg);
  }, 150);
}
const seatInfo = c => c ? { name: c.name, club: c.club, ovr: c.ovr, ready: !!c.ready } : null;
function pushRoom(room) {
  const base = { type: 'room', code: room.code, public: room.public, phase: room.phase, host: seatInfo(room.host), guest: seatInfo(room.guest) };
  if (room.host) send(room.host, Object.assign({ you: 'host' }, base));
  if (room.guest) send(room.guest, Object.assign({ you: 'guest' }, base));
  broadcastLobbies();
}
function destroyRoom(room) {
  clearTimeout(room.timer);
  rooms.delete(room.code);
  broadcastLobbies();
}
function emptyInput() { return { ax: 0, az: 0, sprint: 0, kick: 0, edge: '', n: 0 }; }

function startCountdown(room) {
  room.phase = 'count';
  let n = 3;
  const tickDown = () => {
    if (room.phase !== 'count') return;
    if (n <= 0) { startMatch(room); return; }
    for (const c of [room.host, room.guest]) send(c, { type: 'count', n });
    n--;
    room.timer = setTimeout(tickDown, 1000);
  };
  pushRoom(room);
  tickDown();
}
function cancelCountdown(room) {
  if (room.phase !== 'count') return;
  clearTimeout(room.timer);
  room.phase = 'lobby';
  for (const c of [room.host, room.guest]) send(c, { type: 'count', n: 0 });
}

function startMatch(room) {
  clearTimeout(room.timer);
  room.phase = 'play';
  const seed = crypto.randomBytes(4).readUInt32BE(0);
  room.id = crypto.randomBytes(8).toString('hex');
  room.match = sim.create({ seed, home: room.host.squad, away: room.guest.squad });
  room.inputs = { home: emptyInput(), away: emptyInput() };
  room.lastN = { home: 0, away: 0 };
  room.finished = false;
  room.acc = 0; room.last = Date.now();
  for (const c of [room.host, room.guest]) { c.ready = false; c.rematch = false; }
  const msg = {
    type: 'go', id: room.id, seed,
    home: room.host.squad, away: room.guest.squad,
    homeClub: room.host.club, awayClub: room.guest.club,
    homeName: room.host.name, awayName: room.guest.name,
    ground: room.host.ground || 'mcg'
  };
  send(room.host, Object.assign({ side: 'home' }, msg));
  send(room.guest, Object.assign({ side: 'away' }, msg));
  broadcastLobbies();
}

function leaveRoom(c) {
  const room = c.room;
  if (!room) return;
  c.room = null; c.ready = false; c.rematch = false;
  const other = room.host === c ? room.guest : room.host;
  if (room.phase === 'play' || room.phase === 'done') {
    if (other) { send(other, { type: 'bye', reason: 'The other coach left.' }); other.room = null; other.ready = false; other.rematch = false; }
    destroyRoom(room);
    return;
  }
  clearTimeout(room.timer);
  room.phase = 'lobby';
  if (room.host === c) { room.host = other; room.guest = null; } else room.guest = null;
  if (!room.host) { destroyRoom(room); return; }
  room.host.ready = false;
  pushRoom(room);
}

function handle(c, msg) {
  if (!msg || typeof msg !== 'object') return;
  const now = Date.now();
  if (now > c.rateReset) { c.rateReset = now + 1000; c.rate = 0; }
  if (++c.rate > 150) return;
  const room = c.room;

  if (msg.type === 'in') {
    if (!room || room.phase !== 'play' || !room.match) return;
    const side = room.host === c ? 'home' : 'away';
    const inp = room.inputs[side];
    inp.ax = clampN(msg.ax, -1, 1, 0); inp.az = clampN(msg.az, -1, 1, 0);
    inp.sprint = msg.sprint ? 1 : 0; inp.kick = msg.kick ? 1 : 0;
    const n = msg.n | 0;
    if (n !== room.lastN[side]) { room.lastN[side] = n; inp.edge = SIDE_EDGES.has(msg.edge) ? msg.edge : ''; }
    return;
  }
  if (msg.type === 'watch') { watchers.add(c); send(c, { type: 'lobbies', list: lobbyList() }); return; }
  if (msg.type === 'unwatch') { watchers.delete(c); return; }
  if (msg.type === 'leave') { leaveRoom(c); return; }

  if (msg.type === 'create' || msg.type === 'join') {
    if (room) { send(c, { type: 'err', text: 'You are already in a lobby.' }); return; }
    const squad = cleanSquad(msg.squad);
    if (!squad) { send(c, { type: 'err', text: 'Your solo lineup needs 18 players.' }); return; }
    c.name = cleanName(msg.name); c.squad = squad; c.club = clampN(msg.club, 0, 99, 0) | 0;
    c.ground = /^[a-z0-9_-]{1,16}$/.test(String(msg.ground || '')) ? msg.ground : 'mcg';
    c.ovr = avg(squad); c.ready = false; c.rematch = false;
    if (msg.type === 'create') {
      if (rooms.size >= MAX_ROOMS) { send(c, { type: 'err', text: 'The server is full right now. Try again in a minute.' }); return; }
      const code = newCode();
      if (!code) { send(c, { type: 'err', text: 'Could not make a lobby. Try again.' }); return; }
      const r = { code, public: !!msg.public, phase: 'lobby', host: c, guest: null, match: null, timer: 0 };
      rooms.set(code, r); c.room = r;
      pushRoom(r);
      return;
    }
    const code = String(msg.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    const r = rooms.get(code);
    if (!r) { send(c, { type: 'err', text: 'No lobby with that code.' }); return; }
    if (r.guest || r.phase !== 'lobby') { send(c, { type: 'err', text: r.phase === 'lobby' ? 'That lobby is full.' : 'That match has already started.' }); return; }
    r.guest = c; c.room = r; r.host.ready = false;
    pushRoom(r);
    return;
  }

  if (!room) return;

  if (msg.type === 'ready') {
    if (room.phase !== 'lobby' && room.phase !== 'count') return;
    c.ready = !!msg.ready;
    if (!c.ready) cancelCountdown(room);
    pushRoom(room);
    if (room.phase === 'lobby' && room.host && room.guest && room.host.ready && room.guest.ready) startCountdown(room);
    return;
  }
  if (msg.type === 'kick') {
    if (room.host !== c || !room.guest || room.phase === 'play' || room.phase === 'done') return;
    const g = room.guest;
    cancelCountdown(room);
    room.guest = null; g.room = null; g.ready = false;
    send(g, { type: 'kicked' });
    room.host.ready = false;
    pushRoom(room);
    return;
  }
  if (msg.type === 'visibility') {
    if (room.host !== c) return;
    room.public = !!msg.public;
    pushRoom(room);
    return;
  }
  if (msg.type === 'rematch') {
    if (room.phase !== 'done') return;
    c.rematch = true;
    const other = room.host === c ? room.guest : room.host;
    if (other) send(other, { type: 'rematch', them: true });
    if (room.host.rematch && room.guest && room.guest.rematch) startMatch(room);
  }
}

/* ---------- websocket upgrade ---------- */
server.on('upgrade', (req, socket) => {
  const url = req.url.split('?')[0];
  const key = req.headers['sec-websocket-key'];
  if (url !== '/ws' || !key || String(req.headers.upgrade || '').toLowerCase() !== 'websocket') { socket.destroy(); return; }
  if (!originOk(req)) { socket.end('HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n'); return; }
  if (clients.size >= MAX_CLIENTS) { socket.end('HTTP/1.1 503 Service Unavailable\r\nConnection: close\r\n\r\n'); return; }
  const accept = crypto.createHash('sha1').update(key + WS_GUID).digest('base64');
  socket.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + accept + '\r\n\r\n');
  socket.setNoDelay(true);
  const c = { socket, name: 'Coach', squad: null, club: 0, ground: 'mcg', ovr: 0, ready: false, rematch: false, room: null, rate: 0, rateReset: 0, seen: Date.now() };
  clients.add(c);
  socket.on('data', () => { c.seen = Date.now(); });
  socket.on('pong-seen', () => { c.seen = Date.now(); });
  attach(socket, msg => handle(c, msg), () => {
    leaveRoom(c);
    watchers.delete(c);
    clients.delete(c);
  });
});

/* ---------- match loop: fixed 30 Hz sim, snapshots to both coaches ---------- */
setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    if (room.phase !== 'play' || !room.match) continue;
    room.acc += Math.min(0.2, (now - room.last) / 1000);
    room.last = now;
    let steps = 0;
    while (room.acc >= sim.DT && steps < 4) {
      if (!room.match.over) sim.step(room.match, room.inputs);
      room.acc -= sim.DT; steps++;
    }
    if (!steps) continue;
    const snap = Object.assign({ type: 'snap' }, sim.snapshot(room.match));
    send(room.host, snap); send(room.guest, snap);
    if (room.match.over && !room.finished) {
      room.finished = true; room.phase = 'done';
      const hp = sim.purse(room.match.score, 'home'), ap = sim.purse(room.match.score, 'away');
      const s = room.match.score;
      const over = { type: 'over', id: room.id, hg: s.home.g, hb: s.home.b, ag: s.away.g, ab: s.away.b, homeCoins: hp.coins, awayCoins: ap.coins };
      send(room.host, over); send(room.guest, over);
      broadcastLobbies();
    }
  }
}, 10);

/* keep proxies awake and drop dead sockets */
setInterval(() => {
  const now = Date.now();
  for (const c of clients) {
    if (now - c.seen > 75000) { c.socket.destroy(); continue; }
    sendRaw(c.socket, frame(9, Buffer.alloc(0)));
  }
}, 25000).unref();

function shutdown() {
  for (const c of clients) { try { c.socket.end(frame(8, Buffer.alloc(0))); } catch (e) { /* gone */ } }
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 1500).unref();
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

server.listen(PORT, '0.0.0.0', () => {
  console.log('AFL online on http://127.0.0.1:' + PORT);
  console.log('Same Wi-Fi: open http://<your-ip>:' + PORT + ' on both machines, Kick Off, Online.');
  console.log('Other networks, free: cloudflared tunnel --url http://127.0.0.1:' + PORT);
});
