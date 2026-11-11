/* Online trade board. Bench players leave your club at a price you set.
   Anyone else in the game can buy them. The sale sits on the server. */
(function () {
  let timer = 0;
  function $(id) { return document.getElementById(id); }
  function api(path) {
    const host = location.hostname.toLowerCase();
    const prefixed = host === 'preview.grok.genai.mil' || host === 'preview.grok.mil' || host === 'preview.grokgsac.com';
    const m = prefixed && location.pathname.match(/^\/hds-[a-z0-9]+-\d+-[a-z0-9]+/i);
    return String(window.AFL_SERVER || '').replace(/\/+$/, '') + (m ? m[0] : '') + path;
  }
  function coach() {
    let id = localStorage.getItem('aflCoachId');
    if (!id || !/^[a-zA-Z0-9]{6,24}$/.test(id)) {
      id = 'c' + Math.random().toString(36).slice(2, 12).replace(/[^a-z0-9]/g, 'a');
      localStorage.setItem('aflCoachId', id);
    }
    return id;
  }
  function fmt(n) { return Math.round(n || 0).toLocaleString('en-AU'); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&', '<': '<', '>': '>', '"': '"' }[c])); }
  function post(body) {
    return fetch(api('/api/market'), {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body)
    }).then(async r => {
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || 'Market is busy. Try again.');
      return data;
    });
  }
  function cardOf(raw) {
    const hk = window.__hk; if (!hk) return null;
    const pool = hk.pool();
    const p = pool[raw && raw.id];
    if (!p) return null;
    const lvl = raw.lvl | 0, asc = raw.asc | 0;
    const rating = Math.min(p.legacy ? 110 : 99, (p.b ? p.b.rating : p.rating) + lvl);
    return { p, lvl, asc, rating };
  }
  function row(list) {
    const c = cardOf(list.player);
    if (!c) return '';
    const p = c.p;
    const btn = list.mine
      ? `<button type="button" class="kbtn" data-cancel="${list.id}">CANCEL</button>`
      : `<button type="button" class="go2 it" data-buy="${list.id}" data-price="${list.price}" data-pid="${p.id}">BUY</button>`;
    return `<div class="trow"><div><b>${esc(p.name)}</b><small>${esc(p.pos)} · ${c.rating} OVR${c.lvl ? ' · LV ' + c.lvl : ''}${c.asc ? ' · MC ' + c.asc : ''}</small></div><em>● ${fmt(list.price)}</em>${btn}</div>`;
  }
  function paint(listings) {
    const mine = $('tradeMine'), board = $('tradeList');
    if (!mine || !board) return;
    const mineRows = listings.filter(l => l.mine).map(row).join('');
    const other = listings.filter(l => !l.mine).map(row).join('');
    mine.innerHTML = mineRows ? `<h3>YOUR LISTINGS</h3>${mineRows}` : '';
    board.innerHTML = other || '<p class="sub">Nobody is selling right now. List a bench player and set the price.</p>';
  }
  function note(t, bad) {
    const n = $('tradeNote'); if (!n) return;
    n.textContent = t || ''; n.style.color = bad ? '#ff8d93' : '#f7c738';
  }
  function load() {
    if (!$('tradeBoard')) { clearInterval(timer); timer = 0; return Promise.resolve(); }
    return fetch(api('/api/market?coach=' + coach())).then(r => r.json()).then(data => {
      if ($('tradeBoard')) paint(data.listings || []);
    }).catch(() => note('The trade board is not reachable yet.', true));
  }
  function html() {
    const hk = window.__hk;
    const bench = hk && hk.tradeBench ? hk.tradeBench() : [];
    const opts = bench.map(p => `<option value="${p.id}">${esc(p.name)} · ${p.rating} OVR · ${esc(p.pos)}</option>`).join('');
    return `<div id="market"><div class="row-h"><h1 class="big">ONLINE MARKET</h1><span class="r">Your price. Their coins.</span></div>
      <div class="seg" id="secseg">${[['players', 'PLAYERS'], ['shop', 'SHOP'], ['moves', 'MOVES'], ['coaches', 'COACHES'], ['trade', 'ONLINE']].map(([k, n]) => `<button data-sec="${k}" class="${k === 'trade' ? 'on' : ''}">${n}</button>`).join('')}</div>
      <div id="tradeBoard">
        <p class="sub">Sell a bench player for whatever you want. Another coach buys them off this board and the coins come back to you. Lineup players stay put until you bench them.</p>
        <p id="tradeNote"></p>
        <div class="tform">
          <select id="mpSellWho" ${opts ? '' : 'disabled'}>${opts || '<option>No bench players</option>'}</select>
          <input id="mpSellPrice" inputmode="numeric" maxlength="8" placeholder="Your price" value="100000">
          <button type="button" class="go2 it" id="mpSellGo" ${opts ? '' : 'disabled'}>LIST</button>
        </div>
        <div id="tradeMine"></div>
        <h3>FOR SALE</h3>
        <div id="tradeList"><p class="sub">Loading the board…</p></div>
      </div></div>`;
  }
  function mount() {
    if (timer) clearInterval(timer);
    const hk = window.__hk;
    if (hk && hk.tradeClaim) {
      post({ op: 'claim', coach: coach() }).then(data => {
        if (data.coins > 0 && hk.tradePay) {
          hk.tradePay(data.coins);
          note('Collected ' + fmt(data.coins) + ' coins from sales.');
        }
      }).catch(() => {});
    }
    const go = $('mpSellGo');
    if (go) go.onclick = () => {
      const sel = $('mpSellWho'); const priceEl = $('mpSellPrice');
      const id = sel ? +sel.value : -1;
      const price = Math.round(+(priceEl && priceEl.value || '').replace(/[^0-9]/g, ''));
      if (!hk || !Number.isInteger(id)) return;
      if (!Number.isInteger(price) || price < 0 || price > 50000000) { note('Enter a price from 0 to 50,000,000.', true); return; }
      const card = (hk.tradeBench() || []).find(p => p.id === id);
      if (!card) { note('Bench them first. The 18 on the field cannot be listed.', true); return; }
      go.disabled = true;
      post({ op: 'list', coach: coach(), price, player: { id: card.id, lvl: card.lvl | 0, asc: card.asc | 0 } }).then(() => {
        hk.tradeRemove(card.id);
        hk.rerenderTrade('Listed ' + card.name + ' for ' + fmt(price));
      }).catch(e => { note(e.message, true); go.disabled = false; });
    };
    const board = $('tradeBoard');
    if (board) board.onclick = e => {
      const buy = e.target.closest('[data-buy]');
      const cancel = e.target.closest('[data-cancel]');
      if (buy) {
        const price = +buy.dataset.price;
        const id = +buy.dataset.buy;
        if (!hk.tradeCanPay(price)) { note('Not enough coins.', true); return; }
        if (hk.tradeOwns(+buy.dataset.pid)) { note('You already have that player.', true); return; }
        buy.disabled = true;
        post({ op: 'buy', coach: coach(), id }).then(data => {
          if (!hk.tradeAdd(data.player, data.price)) { note('You already have that player. The listing closed.', true); return; }
          hk.rerenderTrade('Signed for ' + fmt(data.price));
        }).catch(err => { note(err.message, true); buy.disabled = false; });
      } else if (cancel) {
        const id = +cancel.dataset.cancel;
        cancel.disabled = true;
        post({ op: 'cancel', coach: coach(), id }).then(data => {
          hk.tradeAdd(data.player, 0);
          hk.rerenderTrade('Listing cancelled. Player is back on your bench.');
        }).catch(err => { note(err.message, true); cancel.disabled = false; });
      }
    };
    load();
    timer = setInterval(load, 4000);
  }
  window.AFLMarket = { html, mount };
})();
