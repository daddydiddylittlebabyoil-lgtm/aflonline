# AFL Mobile: online lobbies

Players create or join a lobby, ready up, and the **server runs the match** (`sim.js`) and streams it to both.
Nobody hosts, and there's no WebRTC / NAT trouble, so it works between any two networks.

## Run it locally
```
node server.js            # needs Node 18+, no npm install
```
Open http://localhost:8787 in two browser windows (or two devices on the same Wi-Fi: `http://<your-ip>:8787`).
Pick a club in each, then **Kick Off → ONLINE → Create Lobby**, and join from the other window.

## Put it online (so anyone can play)
The server is one Node process that serves the game *and* the WebSocket on the same port. Any host that runs Node works.

**Render (free tier)**
1. Put this folder in a GitHub repo.
2. Render → New → Blueprint (it reads `render.yaml`) or New → Web Service: runtime Node, start command `node server.js`, health check `/healthz`.
3. Open the `https://….onrender.com` URL it gives you. Send that URL to friends.
   Free instances sleep after ~15 min idle; the first visit after that takes ~30-60 s to wake.

**Fly.io / Railway / any Docker host**: a `Dockerfile` is included (listens on `$PORT`, default 8080).

HTTPS is handled by the host; the game automatically uses `wss://` when the page is `https://`.

## How players use it
- **Create Lobby**: tick/untick "Show it in Open Lobbies". Public lobbies appear live in everyone's list; private ones are code-only.
- Share the **4-letter code** or tap **Copy Invite Link** (`/?room=ABCD` opens the game and auto-joins once they've picked a club).
- Both press **Ready** → 3-2-1 → kick off. Host can **Kick** the guest or flip public/private. If the host leaves, the guest becomes host.
- After the final siren: **Rematch** (both must tap) or **Main Menu**. Coins are paid to each player's own career, once per match.

## Desktop (Electron) build
Electron opens the game from `file://`, so tell it where your server is, in `config.js`:
```js
window.AFL_SERVER = 'https://your-afl-server.onrender.com';
```
(Leave it empty when playing from the server's own URL.)

## Server settings (env vars, all optional)
| var | default | |
|---|---|---|
| `PORT` | 8787 | set automatically by most hosts |
| `MAX_CLIENTS` | 400 | simultaneous connections |
| `MAX_ROOMS` | 150 | simultaneous lobbies |
| `ALLOWED_ORIGINS` | – | comma list of extra sites allowed to open a WebSocket (same-origin and the Electron app are always allowed) |

`/healthz` → `ok`, `/api/status` → `{online, rooms, playing, open}`.

## Notes
- Only `index.html, style.css, *.js (client), assets/, photos/, vendor/` are served; `server.js`, `main.js` and `package.json` are not exposed.
- `hacks.js` (the Ctrl/Cmd money panel) is still loaded by `index.html`. Remove its `<script>` line if you don't want it on a public site.
- Coins live in each player's browser save (as before), so this is built for friendly matches, not a ranked ladder.
