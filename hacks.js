/* Coin panel for testing. Press Ctrl+Shift+M (Cmd+Shift+M on a Mac) to open or close it.
   It only changes the save on this device. Delete the <script src="hacks.js"> line in
   index.html to remove it from a public build. */
(function () {
  'use strict';
  const fmt = n => Math.round(n || 0).toLocaleString('en-AU');
  let el = null;

  function hk() { return window.__hk && window.__hk.get() ? window.__hk : null; }
  function add(n) {
    const h = hk(); if (!h) return;
    const save = h.get();
    const next = Math.max(0, Math.min(2000000000, (save.coins | 0) + n));
    h.tradePay(next - (save.coins | 0));
  }
  function setTo(n) {
    const h = hk(); if (!h) return;
    h.tradePay(Math.max(0, Math.min(2000000000, n)) - (h.get().coins | 0));
  }
  function refresh() {
    const h = hk();
    const out = el && el.querySelector('#hxNow');
    if (out) out.textContent = h ? fmt(h.get().coins) : 'Pick a club first';
    if (h && h.rerender) h.rerender();
  }
  function build() {
    el = document.createElement('div');
    el.id = 'hxPanel';
    el.style.cssText = 'position:fixed;right:14px;bottom:14px;z-index:99;width:260px;background:#10192b;border:1px solid rgba(247,199,56,.55);border-radius:14px;padding:12px 14px;color:#fff;font:600 14px system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5)';
    const btn = 'font:inherit;font-weight:800;padding:7px 4px;border-radius:8px;border:1px solid #f7c738;background:rgba(247,199,56,.14);color:#f7c738;cursor:pointer';
    el.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center"><b style="letter-spacing:2px;color:#f7c738;font-size:12px">COIN PANEL</b><button id="hxX" style="' + btn + ';padding:2px 8px">×</button></div>'
      + '<div style="margin:8px 0">Coins: <b id="hxNow">-</b></div>'
      + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px"><button data-add="10000" style="' + btn + '">+10K</button><button data-add="100000" style="' + btn + '">+100K</button><button data-add="1000000" style="' + btn + '">+1M</button></div>'
      + '<div style="display:flex;gap:6px;margin-top:8px"><input id="hxAmt" inputmode="numeric" placeholder="Amount" style="flex:1;min-width:0;background:#0b1220;border:1px solid rgba(255,255,255,.16);color:#fff;border-radius:8px;padding:7px 9px;font:inherit"><button id="hxAdd" style="' + btn + '">ADD</button><button id="hxSet" style="' + btn + '">SET</button></div>';
    document.body.appendChild(el);
    el.addEventListener('keydown', e => e.stopPropagation());
    el.addEventListener('keyup', e => e.stopPropagation());
    el.querySelector('#hxX').onclick = toggle;
    el.querySelectorAll('[data-add]').forEach(b => { b.onclick = () => { add(+b.dataset.add); refresh(); }; });
    const amt = () => Math.round(+(el.querySelector('#hxAmt').value || '').replace(/[^0-9]/g, ''));
    el.querySelector('#hxAdd').onclick = () => { const n = amt(); if (n) { add(n); refresh(); } };
    el.querySelector('#hxSet').onclick = () => { const v = el.querySelector('#hxAmt').value; if (v !== '') { setTo(amt()); refresh(); } };
    refresh();
  }
  function toggle() {
    if (el) { el.remove(); el = null; return; }
    build();
  }
  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyM') { e.preventDefault(); toggle(); }
  });
})();
