/* ============================================================
   MONEY HACK PANEL  (drop this file in the game/ folder)
   Tap Ctrl (Windows) or Cmd (Mac) on its own to open / close.
   ============================================================ */
(function () {
  'use strict';
  if (window.__hackPanelLoaded) return;
  window.__hackPanelLoaded = true;

  const MAX_COINS = 999999999999;           // cap for "Max"
  let frozenAt = null, freezeTimer = null;

  const SAVE_KEY = 'aflUT2026';
  const nf = n => Number(n).toLocaleString('en-US');

  /* Two ways to reach the coins:
     LIVE     - game.js exposes window.__hk (patched game.js): edits happen instantly, no reload.
     FALLBACK - read/write the game's localStorage save and reload the page (works with ONLY hacks.js + index.html). */
  const live = () => { try { return window.__hk && window.__hk.get(); } catch (e) { return null; } };
  function readSave() {
    const l = live(); if (l) return l;
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { return null; }
  }
  const hasSave = () => !!readSave();
  const getCoins = () => { const s = readSave(); return s ? s.coins : 0; };

  function writeCoins(n) {
    n = Math.max(0, Math.min(MAX_COINS, Math.round(n)));
    const l = live();
    if (l) {
      l.coins = n;
      try { window.__hk.persist(); } catch (e) {}
      const pill = document.getElementById('coinTxt'); if (pill) pill.textContent = nf(n);
      try { window.__hk.rerender(); } catch (e) {}
      updateReadout();
      return true;
    }
    const s = readSave(); if (!s) return false;
    s.coins = n;
    localStorage.setItem(SAVE_KEY, JSON.stringify(s));
    toast2('Saved ' + nf(n) + ' — reloading…');
    setTimeout(() => location.reload(), 350);
    return true;
  }

  function setCoins(n) {
    if (!hasSave()) return toast2('Pick a club first (no save yet)');
    if (writeCoins(n) && live()) toast2('Coins set to ' + nf(getCoins()));
  }
  function addCoins(n) {
    if (!hasSave()) return toast2('Pick a club first (no save yet)');
    setCoins(getCoins() + n);
  }

  function setFreeze(on) {
    clearInterval(freezeTimer);
    if (!on) { frozenAt = null; return true; }
    if (!hasSave()) { toast2('Pick a club first (no save yet)'); return false; }
    if (!live()) { writeCoins(MAX_COINS); return false; }   // fallback: just max out + reload
    frozenAt = Math.max(getCoins(), 100000000);
    writeCoins(frozenAt);
    freezeTimer = setInterval(() => {
      const s = live();
      if (s && s.coins !== frozenAt) {
        s.coins = frozenAt;
        const pill = document.getElementById('coinTxt'); if (pill) pill.textContent = nf(frozenAt);
        try { window.__hk.persist(); } catch (e) {}
      }
    }, 100);
    return true;
  }


  /* ---------- AUTO BUILD ---------- */
  function autoBuild(unlockAll) {
    const hk = window.__hk, sv = live();
    if (!hk || !sv) return toast2(hasSave() ? 'Auto-build needs the patched game.js' : 'Pick a club first (no save yet)');
    const POOL = hk.pool(), SLOTS = hk.slots, fits = hk.wantsPos;
    if (unlockAll) sv.owned = POOL.map(p => p.id);
    const cand = sv.owned.map(id => POOL[id]).filter(Boolean);
    const used = new Set(), out = new Array(SLOTS.length).fill(null);
    // fill the scarcest positions first so rucks / mids don't get stolen
    const order = SLOTS.map((w, i) => i).sort((a, b) => (SLOTS[b] === 'RUC') - (SLOTS[a] === 'RUC') || (SLOTS[a] === 'DEF' || SLOTS[a] === 'FWD' ? 0 : 1) - (SLOTS[b] === 'DEF' || SLOTS[b] === 'FWD' ? 0 : 1));
    for (const i of order) {
      const best = cand.filter(p => !used.has(p.id) && fits(SLOTS[i], p)).sort((a, b) => b.rating - a.rating || b.price - a.price)[0];
      if (best) { used.add(best.id); out[i] = best.id; }
    }
    // any slot with no natural fit gets the best remaining player
    for (let i = 0; i < out.length; i++) if (out[i] === null) {
      const best = cand.filter(p => !used.has(p.id)).sort((a, b) => b.rating - a.rating)[0];
      if (best) { used.add(best.id); out[i] = best.id; }
    }
    if (out.some(v => v === null)) return toast2('Not enough players to fill 18 spots');
    sv.lineup = out;
    try { hk.rosterChanged(); } catch (e) { try { hk.persist(); } catch (_) {} }
    try { hk.rerender(); } catch (e) {}
    const ovr = hk.sideRating ? hk.sideRating(out.map(id => POOL[id])) : Math.round(out.reduce((a, id) => a + POOL[id].rating, 0) / out.length);
    toast2((unlockAll ? 'Unlocked everyone · ' : '') + 'Best team built · OVR ' + ovr);
  }

  /* ---------- UI ---------- */
  const css = `
  #hk-panel{position:fixed;top:70px;right:20px;width:280px;z-index:2147483647;background:#0b0f1a;color:#e8ecf5;
    border:2px solid #f7c738;border-radius:12px;font:13px/1.3 system-ui,sans-serif;box-shadow:0 10px 40px rgba(0,0,0,.6);
    user-select:none;display:none}
  #hk-panel.open{display:block}
  #hk-head{cursor:move;padding:10px 12px;background:linear-gradient(90deg,#f7c738,#e29a12);color:#111;font-weight:800;
    letter-spacing:.08em;border-radius:9px 9px 0 0;display:flex;justify-content:space-between;align-items:center}
  #hk-head span.x{cursor:pointer;font-size:16px;padding:0 4px}
  #hk-body{padding:12px;display:flex;flex-direction:column;gap:10px}
  #hk-coins{font-size:20px;font-weight:800;color:#f7c738;text-align:center}
  .hk-row{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
  .hk-row.two{grid-template-columns:1fr 1fr}
  #hk-panel button{background:#1b2336;color:#e8ecf5;border:1px solid #33405f;border-radius:7px;padding:8px 4px;
    font:inherit;font-weight:700;cursor:pointer}
  #hk-panel button:hover{background:#27324d;border-color:#f7c738}
  #hk-panel button.go{background:#22e37b;color:#06210f;border-color:#22e37b}
  #hk-panel button.on{background:#f7c738;color:#111;border-color:#f7c738}
  #hk-panel input{width:100%;box-sizing:border-box;background:#121a2b;color:#fff;border:1px solid #33405f;border-radius:7px;
    padding:8px;font:inherit;font-weight:700;user-select:text}
  #hk-panel label{font-size:11px;color:#8a97b5;text-transform:uppercase;letter-spacing:.08em}
  #hk-toast{text-align:center;color:#22e37b;min-height:16px;font-size:12px}
  #hk-foot{text-align:center;color:#66728f;font-size:11px;padding-bottom:10px}`;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.id = 'hk-panel';
  panel.innerHTML = `
    <div id="hk-head"><span>💰 MONEY HACKS</span><span class="x" id="hk-x">✕</span></div>
    <div id="hk-body">
      <div><label>Current coins</label><div id="hk-coins">—</div></div>
      <div><label>Add coins</label>
        <div class="hk-row" style="margin-top:4px">
          <button data-add="1000">+1K</button><button data-add="10000">+10K</button><button data-add="100000">+100K</button>
          <button data-add="1000000">+1M</button><button data-add="10000000">+10M</button><button data-add="100000000">+100M</button>
        </div></div>
      <div><label>Custom amount</label>
        <input id="hk-custom" type="text" inputmode="numeric" placeholder="e.g. 500000" autocomplete="off">
        <div class="hk-row two" style="margin-top:6px">
          <button id="hk-addc" class="go">ADD</button><button id="hk-setc">SET</button>
        </div></div>
      <div class="hk-row two">
        <button id="hk-max">MAX COINS</button><button id="hk-zero">RESET TO 0</button>
      </div>
      <button id="hk-freeze">♾ INFINITE MONEY: OFF</button>
      <div><label>Team builder</label>
        <div class="hk-row two" style="margin-top:4px">
          <button id="hk-auto" class="go">⚡ AUTO BUILD</button><button id="hk-autoall">UNLOCK ALL + BUILD</button>
        </div>
        <div style="font-size:11px;color:#66728f;margin-top:4px">Auto build = best 18 you own, in the right positions. Unlock all = own every player first.</div>
      </div>
      <div id="hk-toast"></div>
    </div>
    <div id="hk-foot">Tap Ctrl / Cmd to hide</div>`;
  document.body.appendChild(panel);

  const $h = id => panel.querySelector('#' + id);
  let toastT;
  function toast2(msg) { const t = $h('hk-toast'); t.textContent = msg; clearTimeout(toastT); toastT = setTimeout(() => t.textContent = '', 2500); }
  function updateReadout() { $h('hk-coins').textContent = hasSave() ? nf(getCoins()) : 'no save yet'; }
  const parseNum = s => Number(String(s).replace(/[^0-9.]/g, '')) || 0;

  panel.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => addCoins(+b.dataset.add)));
  $h('hk-addc').addEventListener('click', () => { const n = parseNum($h('hk-custom').value); n ? addCoins(n) : toast2('Enter a number'); });
  $h('hk-setc').addEventListener('click', () => { const v = $h('hk-custom').value; v === '' ? toast2('Enter a number') : setCoins(parseNum(v)); });
  $h('hk-max').addEventListener('click', () => setCoins(MAX_COINS));
  $h('hk-zero').addEventListener('click', () => setCoins(0));
  $h('hk-auto').addEventListener('click', () => autoBuild(false));
  $h('hk-autoall').addEventListener('click', () => autoBuild(true));
  $h('hk-x').addEventListener('click', () => toggle(false));
  $h('hk-freeze').addEventListener('click', e => {
    const turnOn = frozenAt === null;
    const ok = setFreeze(turnOn);
    const btn = e.currentTarget;
    btn.classList.toggle('on', turnOn && ok);
    btn.textContent = '♾ INFINITE MONEY: ' + (turnOn && ok ? 'ON' : 'OFF');
    if (ok) toast2(turnOn ? 'Coins locked — spending is free' : 'Unlocked');
  });

  // keep game hotkeys (WASD, etc.) from firing while typing in the panel
  panel.addEventListener('keydown', e => { if (e.target.tagName === 'INPUT') e.stopPropagation(); }, true);
  panel.addEventListener('keyup', e => { if (e.target.tagName === 'INPUT') e.stopPropagation(); }, true);

  // drag by header
  (function () {
    const head = $h('hk-head'); let dx, dy, drag = false;
    head.addEventListener('mousedown', e => { if (e.target.id === 'hk-x') return; drag = true; const r = panel.getBoundingClientRect(); dx = e.clientX - r.left; dy = e.clientY - r.top; e.preventDefault(); });
    addEventListener('mousemove', e => { if (!drag) return; panel.style.left = Math.max(0, e.clientX - dx) + 'px'; panel.style.top = Math.max(0, e.clientY - dy) + 'px'; panel.style.right = 'auto'; });
    addEventListener('mouseup', () => drag = false);
  })();

  function toggle(force) {
    const open = force === undefined ? !panel.classList.contains('open') : force;
    panel.classList.toggle('open', open);
    if (open) updateReadout();
  }

  /* Ctrl / Cmd tapped on its own (no other key pressed with it) toggles the panel.
     This way Ctrl+C, Cmd+R etc. don't pop it open. */
  let modDown = false, modDirty = false;
  addEventListener('keydown', e => {
    if (e.key === 'Control' || e.key === 'Meta') { if (!e.repeat) { modDown = true; modDirty = false; } }
    else if (modDown) modDirty = true;
  }, true);
  addEventListener('keyup', e => {
    if ((e.key === 'Control' || e.key === 'Meta') && modDown) {
      if (!modDirty) toggle();
      modDown = false;
    }
  }, true);
  addEventListener('mousedown', () => { if (modDown) modDirty = true; }, true);

  setInterval(() => { if (panel.classList.contains('open')) updateReadout(); }, 500);
  console.log('%c[hacks] Money panel ready — tap Ctrl / Cmd', 'color:#f7c738;font-weight:bold');
})();
