/* Where the online server lives.
   - Leave this empty when the game is opened from the server itself (your Render / Fly / Railway URL,
     or http://localhost:8787). It then connects back to wherever the page came from.
   - Set it only when the game is opened from somewhere else, e.g. the Electron desktop app (main.js):
       window.AFL_SERVER = 'https://your-afl-server.onrender.com';  */
window.AFL_SERVER = '';
