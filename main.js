const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFileSync } = require('child_process');

/* Reads the real machine model so the game can flag Microsoft Surface laptops
   (pop-up, SHIT QUILTY mode, bad FPS until the resolution is lowered - see game.js). Never throws. */
function isSurface() {
  try {
    if (process.platform === 'win32') {
      const out = execFileSync('powershell', ['-NoProfile', '-Command', '$c = Get-CimInstance Win32_ComputerSystem; $c.Manufacturer + \' \' + $c.Model'], { timeout: 5000, windowsHide: true }).toString();
      return /surface/i.test(out);
    }
  } catch (e) { /* fall through */ }
  return false;
}

// Make sure Chromium actually uses the GPU for WebGL
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-gpu-rasterization');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 800, minWidth: 960, minHeight: 600,
    backgroundColor: '#050b1a', title: 'AFL Mobile',
    webPreferences: { backgroundThrottling: false }
  });
  win.loadFile(path.join(__dirname, 'index.html'), { query: { surface: isSurface() ? '1' : '0' } });
}
app.whenReady().then(() => {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { role: 'appMenu' },
    { label: 'View', submenu: [{ role: 'togglefullscreen' }, { role: 'reload' }, { role: 'toggleDevTools' }] },
    { role: 'windowMenu' }
  ]));
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => app.quit());
