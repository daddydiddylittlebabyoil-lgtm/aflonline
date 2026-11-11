/* Free real-time match host. Run: node server.js
   Serves this folder and a WebSocket on port 8787. No account, no bill.
   A friend on another network: cloudflared tunnel --url http://127.0.0.1:8787 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sim = require('./sim.js');

const PORT = process.env.PORT || 8787;
const ROOT = __dirname;
const TYPES = {'.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.glb': 'model/gltf-binary', '.mp3': 'audio/mpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2'};
const resultsPath = path.join(process.env.TMPDIR || '/tmp', 'afl-mp-results.json');
const rooms = new Map();

function loadResults() { try { return JSON.parse(fs.readFileSync(resultsPath, 'utf8')); } catch (e) { return {}; } }
function saveResults(o) { try { fs.writeFileSync(resultsPath, JSON.stringify(o)); } catch (e) {} }

function send(socket, obj) {
  if (!socket || socket.destroyed) return;
  const payload = Buffer.from(JSON.stringify(obj));
  const len = payload.length;
  let head;
  if (len < 126) head = Buffer.from([0x81, len]);
  else if (len < 65536) { head = Buffer.alloc(4); head[0] = 0x81; head[1] = 126; head.writeUInt16BE(len, 2); }
  else { head = Buffer.alloc(10); head[0] = 0x81; head[1] = 127; head.writeBigUInt64BE(BigInt(len), 2); }
  try { socket.write(Buffer.concat([head, payload])); } catch (e) {}
}
function attach(socket, onMsg, onClose) {
  let buf = Buffer.alloc(0), closed = false;
  const done = () => { if (closed) return; closed = true; onClose(); };
  socket.on('data', chunk => {
    buf = Buffer.concat([buf, chunk]);
    while (buf.length >= 2) {
      const opcode = buf[0] & 15;
      let len = buf[1] & 127, off = 2;
      if (len === 126) { if (buf.length < 4) return; len = buf.readUInt16BE(2); off = 4; }
      else if (len === 127) { if (buf.length < 10) return; len = Number(buf.readBigUInt64BE(2)); off = 10; }
      const masked = (buf[1] & 128) !== 0;
      if (buf.length < off + (masked ? 4 : 0) + len) return;
      let payload = buf.subarray(off + (masked ? 4 : 0), off + (masked ? 4 : 0) + len);
      if (masked) {
        const mask = buf.subarray(off, off + 4);
        payload = Buffer.from(payload);
        for (let i = 0; i < payload.length; i++) payload[i] ^= mask[i & 3];
      }
      buf = buf.subarray(off + (masked ? 4 : 0) + len);
      if (opcode === 8) { socket.end(); done(); return; }
      if (opcode === 9) { try { socket.write(Buffer.from([0x8a, 0])); } catch (e) {} continue; }
      if (opcode === 1) { try { onMsg(JSON.parse(payload.toString())); } catch (e) {} }
    }
  });
  socket.on('close', done);
  socket.on('error', done);
}

function code() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 4; i++) s += alphabet[Math.floor(Math.random() * alphabet.length)];
  return rooms.has(s) ? code() : s;
}
function emptyInput() { return {ax: 0, az: 0, sprint: 0, kick: 0, edge: '', n: 0}; }

function startMatch(room) {
  const seed = crypto.randomBytes(4).readUInt32BE(0);
  room.id = crypto.randomBytes(8).toString('hex');
  room.match = sim.create({seed, home: room.home.squad, away: room.away.squad});
  room.inputs = {home: emptyInput(), away: emptyInput()};
  room.lastN = {home: 0, away: 0};
  const msg = {
    type: 'go', id: room.id, seed,
    home: room.home.squad, away: room.away.squad,
    homeClub: room.home.club, awayClub: room.away.club,
    homeName: room.home.name, awayName: room.away.name,
    ground: room.home.ground || 'mcg'
  };
  send(room.home.socket, Object.assign({side: 'home'}, msg));
  send(room.away.socket, Object.assign({side: 'away'}, msg));
}

function leave(room, side) {
  const other = side === 'home' ? room.away : room.home;
  if (room.code) rooms.delete(room.code);
  if (other && other.socket) send(other.socket, {type: 'bye', reason: 'The other player left'});
  room.match = null;
}

const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/index.html';
  const file = path.normalize(path.join(ROOT, url));
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end('no'); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('not found'); return; }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache'});
    res.end(data);
  });
});

server.on('upgrade', (req, socket) => {
  const key = req.headers['sec-websocket-key'];
  if (!key) { socket.destroy(); return; }
  const accept = crypto.createHash('sha1').update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
  socket.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + accept + '\r\n\r\n');
  let seat = null;
  attach(socket, msg => {
    if (msg.type === 'hello') {
      const want = String(msg.room || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
      let room = want && rooms.get(want);
      if (room && (room.match || (room.home && room.away))) { send(socket, {type: 'err', text: 'That room is already going'}); return; }
      if (!room) {
        room = {code: want || code(), home: null, away: null, match: null};
        rooms.set(room.code, room);
      }
      if (room.match) { send(socket, {type: 'err', text: 'That match has already started'}); return; }
      const who = {socket, name: String(msg.name || 'Coach').slice(0, 18), squad: msg.squad || [], club: msg.club | 0, ground: msg.ground || 'mcg'};
      if (!room.home) { room.home = who; seat = {room, side: 'home'}; send(socket, {type: 'room', code: room.code, side: 'home', wait: !room.away}); }
      else if (!room.away) { room.away = who; seat = {room, side: 'away'}; send(socket, {type: 'room', code: room.code, side: 'away', wait: false}); startMatch(room); }
      else send(socket, {type: 'err', text: 'Room is full'});
      if (room.home && room.away && !room.match) startMatch(room);
      return;
    }
    if (!seat || !seat.room.match) return;
    if (msg.type === 'in') {
      const prev = seat.room.lastN[seat.side];
      const inp = seat.room.inputs[seat.side];
      inp.ax = +msg.ax || 0; inp.az = +msg.az || 0; inp.sprint = msg.sprint ? 1 : 0; inp.kick = msg.kick ? 1 : 0;
      if ((msg.n | 0) !== prev) { inp.edge = msg.edge || ''; seat.room.lastN[seat.side] = msg.n | 0; }
    }
  }, () => { if (seat) leave(seat.room, seat.side); });
});

setInterval(() => {
  for (const room of rooms.values()) {
    if (!room.match || room.match.over && room.finished) continue;
    if (!room.match.over) sim.step(room.match, room.inputs);
    const snap = sim.snapshot(room.match);
    send(room.home.socket, Object.assign({type: 'snap'}, snap));
    send(room.away.socket, Object.assign({type: 'snap'}, snap));
    if (room.match.over && !room.finished) {
      room.finished = 1;
      const book = loadResults();
      const homePay = sim.purse(room.match.score, 'home');
      const awayPay = sim.purse(room.match.score, 'away');
      book[room.id] = {home: homePay.coins, away: awayPay.coins};
      saveResults(book);
      const over = {type: 'over', id: room.id, hg: room.match.score.home.g, hb: room.match.score.home.b, ag: room.match.score.away.g, ab: room.match.score.away.b, homeCoins: homePay.coins, awayCoins: awayPay.coins};
      send(room.home.socket, over);
      send(room.away.socket, over);
    }
  }
}, 1000 / 30);

server.listen(PORT, '0.0.0.0', () => {
  console.log('AFL online on http://127.0.0.1:' + PORT);
  console.log('Same Wi-Fi: open that address on both machines, Kick Off, Online.');
  console.log('Other networks, free: cloudflared tunnel --url http://127.0.0.1:' + PORT);
});
