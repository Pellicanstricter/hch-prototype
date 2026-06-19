/* Shared site behavior for the HCH multi-page prototype.
   Theme is locked to Navy Light (the :root default in site.css) — no switcher.
   - Mobile menu toggle
   - Generic modal open/close helpers
   Include with: <script src="assets/site.js" defer></script> */
(function () {
  'use strict';

  // ---- Password gate (prototype preview protection) ----
  // Password: coco. Stored per browser session once entered.
  var GATE_KEY = 'hch-unlocked';
  var PASSWORD = 'coco';

  function buildGate() {
    if (sessionStorage.getItem(GATE_KEY) === '1') return;
    var gate = document.createElement('div');
    gate.id = 'hch-gate';
    gate.innerHTML =
      '<div class="hch-gate-card">' +
        '<div class="hch-gate-mark"></div>' +
        '<div class="hch-gate-eyebrow">Hahnemann Center · Design Preview</div>' +
        '<h1 class="hch-gate-title">Protected preview</h1>' +
        '<p class="hch-gate-sub">Enter the access password to view the prototype.</p>' +
        '<form class="hch-gate-form" id="hchGateForm">' +
          '<input type="password" id="hchGateInput" placeholder="Password" autocomplete="off" autofocus>' +
          '<button type="submit">Enter preview →</button>' +
          '<div class="hch-gate-error" id="hchGateError">Incorrect password. Please try again.</div>' +
        '</form>' +
      '</div>';
    document.documentElement.style.overflow = 'hidden';
    (document.body || document.documentElement).appendChild(gate);
    var form = document.getElementById('hchGateForm');
    var input = document.getElementById('hchGateInput');
    var err = document.getElementById('hchGateError');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (input.value.trim().toLowerCase() === PASSWORD) {
        sessionStorage.setItem(GATE_KEY, '1');
        gate.remove();
        document.documentElement.style.overflow = '';
      } else {
        err.style.display = 'block';
        input.value = '';
        input.focus();
      }
    });
    if (input) input.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildGate);
  } else {
    buildGate();
  }

  // ---- Mobile menu ----
  window.toggleMenu = function () {
    var menu = document.getElementById('mobileMenu');
    var burger = document.getElementById('hamburger');
    if (menu) menu.classList.toggle('open');
    if (burger) burger.classList.toggle('open');
  };

  // ---- Generic modal helpers (used by stub CTAs) ----
  window.openModal = function (id) {
    var m = document.getElementById(id);
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
  };
  window.closeModal = function (id) {
    var m = document.getElementById(id);
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  };
  window.closeModalOutside = function (e, id) {
    if (e.target === e.currentTarget) window.closeModal(id);
  };
})();
