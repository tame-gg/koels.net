export const pageEnhancementStyles = `
html {
  view-transition-name: root;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 280ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

::view-transition-old(root) {
  animation-name: koels-page-out;
}

::view-transition-new(root) {
  animation-name: koels-page-in;
}

@keyframes koels-page-out {
  to {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(-6px) scale(0.99);
  }
}

@keyframes koels-page-in {
  from {
    opacity: 0;
    filter: blur(12px);
    transform: translateY(10px) scale(0.99);
  }
}

html.koels-route-leaving body {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(-6px) scale(0.992);
  transition:
    opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 180ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

.koels-live-strip {
  width: min(100%, 580px);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 26px;
  opacity: 0;
  animation: fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
}

.koels-live-card {
  position: relative;
  min-height: 72px;
  padding: 14px 15px;
  border: 1px solid rgba(64, 200, 255, 0.16);
  border-radius: 10px;
  background:
    linear-gradient(135deg, rgba(64, 200, 255, 0.07), rgba(0, 255, 204, 0.03)),
    rgba(2, 10, 24, 0.58);
  box-shadow: inset 0 1px 0 rgba(232, 248, 255, 0.04);
  overflow: hidden;
}

.koels-live-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(232, 248, 255, 0.06), transparent);
  transform: translateX(-120%);
  animation: koels-card-sheen 4.8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes koels-card-sheen {
  0%, 58% { transform: translateX(-120%); }
  78%, 100% { transform: translateX(120%); }
}

.koels-live-kicker,
.project-preview-kicker {
  font-family: var(--mono, monospace);
  font-size: 0.55rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(200, 240, 255, 0.38);
}

.koels-live-value {
  margin-top: 8px;
  font-size: 1rem;
  font-weight: 800;
  color: #e8f8ff;
  line-height: 1.15;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.koels-live-sub {
  margin-top: 5px;
  font-family: var(--mono, monospace);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  color: rgba(200, 240, 255, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-preview {
  position: relative;
  min-height: 112px;
  margin: 2px 0 4px;
  border: 1px solid rgba(64, 200, 255, 0.12);
  border-radius: 10px;
  background:
    radial-gradient(circle at 20% 10%, rgba(64, 200, 255, 0.16), transparent 32%),
    linear-gradient(135deg, rgba(2, 18, 38, 0.9), rgba(2, 8, 16, 0.72));
  overflow: hidden;
  transform: translateZ(0);
}

.project-preview::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(64, 200, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(64, 200, 255, 0.045) 1px, transparent 1px);
  background-size: 18px 18px;
  mask-image: linear-gradient(to bottom, black, transparent 92%);
  pointer-events: none;
}

.project-preview-inner {
  position: relative;
  z-index: 1;
  height: 100%;
  min-height: 112px;
  padding: 13px;
}

.preview-calc .calc-display {
  height: 30px;
  border-radius: 7px;
  padding: 6px 10px;
  background: rgba(232, 248, 255, 0.08);
  color: #00ffcc;
  font-family: var(--mono, monospace);
  font-size: 0.82rem;
  font-weight: 700;
  text-align: right;
  box-shadow: inset 0 1px 0 rgba(232, 248, 255, 0.05);
}

.preview-calc .calc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-top: 10px;
}

.preview-calc .calc-key {
  min-height: 18px;
  display: grid;
  place-items: center;
  border-radius: 5px;
  background: rgba(200, 240, 255, 0.14);
  color: rgba(232, 248, 255, 0.72);
  font-family: var(--mono, monospace);
  font-size: 0.56rem;
  font-weight: 700;
}

.preview-calc .calc-key.hot {
  background: linear-gradient(135deg, #40c8ff, #00ffcc);
  color: #020810;
}

.preview-vanta .stat-row {
  display: grid;
  grid-template-columns: 40px 1fr 34px;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
  font-family: var(--mono, monospace);
  font-size: 0.58rem;
  color: rgba(200, 240, 255, 0.55);
}

.preview-vanta .bar {
  height: 5px;
  border-radius: 99px;
  background: rgba(200, 240, 255, 0.1);
  overflow: hidden;
}

.preview-vanta .bar i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ff4655, #40c8ff);
}

.preview-conduit .flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9px;
  align-items: center;
  margin-top: 17px;
}

.preview-conduit .node {
  min-height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(0, 255, 204, 0.16);
  border-radius: 9px;
  background: rgba(0, 255, 204, 0.05);
  font-family: var(--mono, monospace);
  font-size: 0.58rem;
  color: rgba(232, 248, 255, 0.82);
}

.preview-silk .chip-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 13px;
}

.preview-silk .mini-chip {
  padding: 7px 8px;
  border-radius: 999px;
  border: 1px solid rgba(64, 200, 255, 0.14);
  font-family: var(--mono, monospace);
  font-size: 0.54rem;
  color: rgba(200, 240, 255, 0.58);
  background: rgba(64, 200, 255, 0.05);
}

.project-card:hover .project-preview {
  border-color: rgba(64, 200, 255, 0.26);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
}

@media (max-width: 900px) {
  .koels-live-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .koels-live-strip {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root),
  html.koels-route-leaving body,
  .koels-live-card::after {
    animation: none !important;
    transition: none !important;
  }
}

/* ===== koels preview redesign: Radar (Live Ops) + Globe (Signal Earth) ===== */
.kp-radar, .kp-globe { min-height: 128px; height: 128px; }
.kp-grid::before { content:""; position:absolute; inset:0; pointer-events:none;
  background-image:linear-gradient(rgba(64,200,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(64,200,255,0.05) 1px,transparent 1px);
  background-size:20px 20px; -webkit-mask-image:radial-gradient(120% 120% at 50% 30%,black,transparent 90%); mask-image:radial-gradient(120% 120% at 50% 30%,black,transparent 90%); }
.kp-chip { position:absolute; display:inline-flex; align-items:center; gap:5px; padding:3px 8px; border-radius:999px;
  font-family:var(--mono,monospace); font-size:0.48rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
  background:rgba(3,8,18,0.7); border:1px solid rgba(255,255,255,0.08); color:rgba(200,240,255,0.5);
  -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px); z-index:6; white-space:nowrap; }
.kp-chip .d { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
.kp-chip.alert { color:#ff8a8a; border-color:rgba(255,71,87,0.32); background:rgba(255,71,87,0.1); }
.kp-chip.alert .d { background:#ff5f56; box-shadow:0 0 8px #ff5f56; animation:kp-blink 1.6s ease infinite; }
.kp-chip.live .d { background:#00ffcc; box-shadow:0 0 8px #00ffcc; animation:kp-blink 1.8s ease infinite; }
@keyframes kp-blink { 0%,100%{opacity:1} 50%{opacity:0.25} }

/* Radar */
.kp-radar { background:radial-gradient(circle at 50% 46%,rgba(64,200,255,0.12),transparent 52%),linear-gradient(150deg,#06182e,#03101f 60%,#020a14); }
.kp-coast { position:absolute; inset:0; width:100%; height:100%; }
.kp-stage { position:absolute; left:50%; top:44%; width:92px; height:92px; transform:translate(-50%,-50%); }
.kp-cell { position:absolute; border-radius:50%; filter:blur(6px); mix-blend-mode:screen; animation:kp-breathe 4.6s ease-in-out infinite; }
@keyframes kp-breathe { 0%,100%{transform:scale(0.92);opacity:0.78} 50%{transform:scale(1.06);opacity:1} }
.kp-scope { position:absolute; border-radius:50%; border:1px solid rgba(64,200,255,0.22); }
.kp-scope::before, .kp-scope::after { content:""; position:absolute; border-radius:50%; border:1px solid rgba(64,200,255,0.16); inset:22%; }
.kp-scope::after { inset:42%; }
.kp-sweep { position:absolute; border-radius:50%; overflow:hidden; -webkit-mask:radial-gradient(circle,transparent 0 6%,black 7% 100%); mask:radial-gradient(circle,transparent 0 6%,black 7% 100%); }
.kp-sweep::before { content:""; position:absolute; inset:0; border-radius:50%; background:conic-gradient(from 0deg,rgba(0,255,204,0.55),rgba(64,200,255,0.14) 26deg,transparent 60deg); animation:kp-spin 3.4s linear infinite; }
@keyframes kp-spin { to{transform:rotate(360deg)} }
.kp-cross { position:absolute; background:rgba(64,200,255,0.18); }
.kp-ping { position:absolute; border-radius:50%; background:#ff5f56; animation:kp-ping 2.2s ease-out infinite; }
@keyframes kp-ping { 0%{box-shadow:0 0 0 0 rgba(255,95,86,0.45)} 70%,100%{box-shadow:0 0 0 10px rgba(255,95,86,0)} }
.kp-legend { position:absolute; left:9px; bottom:30px; z-index:6; display:flex; gap:6px; }
.kp-legend i { width:13px; height:5px; border-radius:999px; display:block; }
.kp-timeline { position:absolute; left:9px; right:9px; bottom:8px; z-index:6; display:flex; align-items:center; gap:7px; }
.kp-play { width:16px; height:16px; border-radius:50%; flex-shrink:0; display:grid; place-items:center; background:rgba(64,200,255,0.16); border:1px solid rgba(64,200,255,0.4); }
.kp-play::before { content:""; border-style:solid; border-width:3.5px 0 3.5px 5px; border-color:transparent transparent transparent #40c8ff; margin-left:1px; }
.kp-track { flex:1; height:3px; border-radius:999px; background:rgba(200,240,255,0.12); position:relative; overflow:hidden; }
.kp-track::after { content:""; position:absolute; inset:0; width:46%; border-radius:999px; background:linear-gradient(90deg,#0078c8,#40c8ff,#00ffcc); animation:kp-scrub 3.6s ease-in-out infinite; }
@keyframes kp-scrub { 0%,100%{width:30%} 50%{width:82%} }
.kp-time { font-family:var(--mono,monospace); font-size:0.48rem; letter-spacing:0.06em; color:#40c8ff; flex-shrink:0; }

/* Globe */
.kp-globe { background:radial-gradient(circle at 78% 16%,rgba(0,255,204,0.08),transparent 36%),radial-gradient(circle at 18% 84%,rgba(255,93,115,0.06),transparent 40%),linear-gradient(160deg,#040d1c,#020810 70%); }
.kp-stars { position:absolute; inset:0; opacity:0.7; background-repeat:no-repeat;
  background-image:radial-gradient(1px 1px at 20% 30%,#cfeaff,transparent),radial-gradient(1px 1px at 70% 20%,#bfe5ff,transparent),radial-gradient(1px 1px at 85% 60%,#fff,transparent),radial-gradient(1px 1px at 40% 75%,#cfeaff,transparent),radial-gradient(1px 1px at 55% 45%,#a9dbff,transparent),radial-gradient(1px 1px at 12% 60%,#fff,transparent); }
.kp-orbit { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
.kp-gstage { position:absolute; left:50%; top:50%; height:86%; aspect-ratio:1; transform:translate(-50%,-50%); }
.kp-earth { position:absolute; inset:0; border-radius:50%; overflow:hidden;
  background-image:url('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
  background-size:200% 100%; background-repeat:repeat-x;
  box-shadow:inset -14px -9px 26px rgba(2,8,16,0.85),inset 12px 8px 22px rgba(145,243,255,0.18),0 0 26px rgba(64,200,255,0.32);
  background-position:-50% 0; }
.kp-earth::after { content:""; position:absolute; inset:0; border-radius:50%; background:radial-gradient(circle at 34% 30%,rgba(120,200,255,0.22),transparent 38%),radial-gradient(circle at 72% 74%,rgba(2,6,13,0.55),transparent 60%); }
.kp-atmo { position:absolute; left:50%; top:50%; height:94%; aspect-ratio:1; border-radius:50%; border:1px solid rgba(145,243,255,0.3); box-shadow:0 0 24px rgba(64,200,255,0.4),0 0 54px rgba(64,200,255,0.12); transform:translate(-50%,-50%); pointer-events:none; }
.kp-gmark { position:absolute; width:7px; height:7px; border-radius:50%; z-index:4; transform:translate(-50%,-50%); }
.kp-gmark::after { content:""; position:absolute; inset:-3px; border-radius:50%; border:1.5px solid currentColor; animation:kp-gping 2.2s ease-out infinite; }
@keyframes kp-gping { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(3.2);opacity:0} }
.kp-gmark.q { background:#40c8ff; color:#40c8ff; box-shadow:0 0 9px #40c8ff; }
.kp-gmark.s { background:#ff5f56; color:#ff5f56; box-shadow:0 0 9px #ff5f56; }
.kp-gmark.f { background:#ff9d4d; color:#ff9d4d; box-shadow:0 0 9px #ff9d4d; }
.kp-gmark.v { background:#ffd75e; color:#ffd75e; box-shadow:0 0 9px #ffd75e; }
.kp-stat { position:absolute; left:9px; bottom:9px; z-index:6; display:flex; align-items:baseline; gap:6px; padding:5px 10px; border-radius:9px; background:rgba(3,8,18,0.72); border:1px solid rgba(64,200,255,0.18); -webkit-backdrop-filter:blur(6px); backdrop-filter:blur(6px); }
.kp-stat b { font-size:0.95rem; font-weight:800; color:#e8f8ff; letter-spacing:-0.02em; }
.kp-stat span { font-family:var(--mono,monospace); font-size:0.46rem; letter-spacing:0.12em; text-transform:uppercase; color:rgba(200,240,255,0.5); }

/* ===== Domain migration notice (only shown on koels.site) ===== */
.koels-domain-notice {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 1000;
  width: min(560px, calc(100vw - 28px));
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 14px 13px 16px;
  border-radius: 14px;
  border: 1px solid rgba(64, 200, 255, 0.22);
  background: linear-gradient(135deg, rgba(6, 22, 46, 0.94), rgba(2, 10, 24, 0.94));
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
  color: #e8f8ff;
  opacity: 1;
  animation: koels-notice-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}
.koels-domain-notice.is-leaving {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: none;
}
@keyframes koels-notice-in {
  from { opacity: 0; transform: translateX(-50%) translateY(12px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.koels-domain-notice__text {
  flex: 1;
  min-width: 0;
  font-size: 0.8rem;
  line-height: 1.45;
  color: rgba(232, 248, 255, 0.85);
}
.koels-domain-notice__text strong {
  color: #ffffff;
  font-weight: 700;
}
.koels-domain-notice__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.koels-domain-notice__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 15px;
  border-radius: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-decoration: none;
  white-space: nowrap;
  color: #02101f;
  background: linear-gradient(135deg, #40c8ff, #00ffcc);
  box-shadow: 0 6px 18px rgba(64, 200, 255, 0.28);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}
.koels-domain-notice__btn:hover { transform: translateY(-1px); box-shadow: 0 9px 22px rgba(64, 200, 255, 0.38); }
.koels-domain-notice__btn:focus-visible { outline: 2px solid #9bf3ff; outline-offset: 2px; }
.koels-domain-notice__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(64, 200, 255, 0.18);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(200, 240, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.koels-domain-notice__close:hover { background: rgba(64, 200, 255, 0.12); color: #ffffff; border-color: rgba(64, 200, 255, 0.4); }
.koels-domain-notice__close:focus-visible { outline: 2px solid #9bf3ff; outline-offset: 2px; }
@media (max-width: 520px) {
  .koels-domain-notice { flex-wrap: wrap; gap: 11px; padding: 13px; }
  .koels-domain-notice__text { flex-basis: 100%; font-size: 0.78rem; }
  .koels-domain-notice__actions { width: 100%; justify-content: space-between; }
  .koels-domain-notice__btn { flex: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .koels-domain-notice { animation: none !important; }
  .koels-domain-notice.is-leaving { transition: none !important; }
}
`;

export const pageEnhancementScript = `
(function () {
  const LANYARD_USER_ID = '1135328814394785903';
  // Coordinates for the local weather card (Omaha, NE) — no place name is shown.
  const WEATHER_LAT = 41.2565;
  const WEATHER_LON = -95.9345;

  const WEATHER_CODES = {
    0: { label: 'Clear', icon: '☀️' },
    1: { label: 'Mostly clear', icon: '🌤️' },
    2: { label: 'Partly cloudy', icon: '⛅' },
    3: { label: 'Cloudy', icon: '☁️' },
    45: { label: 'Foggy', icon: '🌫️' },
    48: { label: 'Foggy', icon: '🌫️' },
    51: { label: 'Drizzle', icon: '🌦️' },
    53: { label: 'Drizzle', icon: '🌦️' },
    55: { label: 'Drizzle', icon: '🌦️' },
    56: { label: 'Freezing drizzle', icon: '🌧️' },
    57: { label: 'Freezing drizzle', icon: '🌧️' },
    61: { label: 'Rainy', icon: '🌧️' },
    63: { label: 'Rainy', icon: '🌧️' },
    65: { label: 'Heavy rain', icon: '🌧️' },
    66: { label: 'Freezing rain', icon: '🌧️' },
    67: { label: 'Freezing rain', icon: '🌧️' },
    71: { label: 'Snow', icon: '🌨️' },
    73: { label: 'Snow', icon: '🌨️' },
    75: { label: 'Heavy snow', icon: '🌨️' },
    77: { label: 'Snow grains', icon: '🌨️' },
    80: { label: 'Showers', icon: '🌦️' },
    81: { label: 'Showers', icon: '🌦️' },
    82: { label: 'Heavy showers', icon: '⛈️' },
    85: { label: 'Snow showers', icon: '🌨️' },
    86: { label: 'Snow showers', icon: '🌨️' },
    95: { label: 'Thunderstorm', icon: '⛈️' },
    96: { label: 'Thunderstorm', icon: '⛈️' },
    99: { label: 'Thunderstorm', icon: '⛈️' }
  };

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  function enhanceTransitions() {
    window.addEventListener('pageshow', function () {
      document.documentElement.classList.remove('koels-route-leaving');
    });

    document.addEventListener('click', function (event) {
      const anchor = event.target.closest && event.target.closest('a[href]');
      if (!anchor) return;
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (anchor.target && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;

      event.preventDefault();
      document.documentElement.classList.add('koels-route-leaving');
      window.setTimeout(function () {
        window.location.href = url.href;
      }, 150);
    });
  }

  function setLiveCard(id, value, sub) {
    const valueEl = document.querySelector('[data-live-value="' + id + '"]');
    const subEl = document.querySelector('[data-live-sub="' + id + '"]');
    if (valueEl) valueEl.textContent = value;
    if (subEl) subEl.textContent = sub || '';
  }

  function enhanceHome() {
    const hero = document.querySelector('.hero');
    const projectsGrid = document.querySelector('.projects-grid');
    if (!hero || !projectsGrid || document.querySelector('.koels-live-strip')) return;

    const strip = document.createElement('div');
    strip.className = 'koels-live-strip';
    strip.setAttribute('aria-label', 'Live site status');
    strip.innerHTML =
      '<div class="koels-live-card"><div class="koels-live-kicker">Local time</div><div class="koels-live-value" data-live-value="time">--:--</div><div class="koels-live-sub" data-live-sub="time">America/Chicago</div></div>' +
      '<div class="koels-live-card"><div class="koels-live-kicker">Weather</div><div class="koels-live-value" data-live-value="weather">Checking...</div><div class="koels-live-sub" data-live-sub="weather">local conditions</div></div>' +
      '<div class="koels-live-card"><div class="koels-live-kicker">Now</div><div class="koels-live-value" data-live-value="now">Syncing...</div><div class="koels-live-sub" data-live-sub="now">live presence</div></div>';

    const actions = hero.querySelector('.hero-actions');
    if (actions) actions.insertAdjacentElement('afterend', strip);
    else hero.appendChild(strip);

    function updateTime() {
      const now = new Date();
      setLiveCard('time', now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }), now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    }

    async function updateWeather() {
      try {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + WEATHER_LAT + '&longitude=' + WEATHER_LON +
          '&current=temperature_2m,weather_code&temperature_unit=fahrenheit';
        const response = await fetch(url, { cache: 'no-store' });
        const data = await response.json();
        const current = data && data.current;
        if (!current || !Number.isFinite(current.temperature_2m)) {
          setLiveCard('weather', 'Unavailable', 'weather check failed');
          return;
        }
        const temp = Math.round(current.temperature_2m);
        const condition = WEATHER_CODES[current.weather_code] || { label: 'Unknown', icon: '' };
        setLiveCard('weather', temp + '°F', (condition.icon ? condition.icon + ' ' : '') + condition.label);
      } catch (error) {
        setLiveCard('weather', 'Unavailable', 'weather check failed');
      }
    }

    function renderPresence(data) {
      const STATUS_META = {
        online: { label: 'Online', icon: '🟢' },
        idle: { label: 'Idle', icon: '🌙' },
        dnd: { label: 'Do Not Disturb', icon: '⛔' },
        offline: { label: 'Offline', icon: '⚫' }
      };
      if (!data) {
        setLiveCard('now', 'Offline', 'presence unavailable');
        return;
      }
      const status = STATUS_META[data.discord_status] || STATUS_META.offline;
      const activities = Array.isArray(data.activities) ? data.activities : [];
      const byType = function (type) { return activities.find(function (a) { return a && a.type === type && a.name; }); };

      if (data.listening_to_spotify && data.spotify) {
        setLiveCard('now', '🎧 ' + (data.spotify.song || 'Spotify'), data.spotify.artist ? 'by ' + data.spotify.artist : 'on Spotify');
        return;
      }
      const game = byType(0);
      if (game) {
        setLiveCard('now', '🎮 ' + game.name, game.details || game.state || ('Playing · ' + status.label));
        return;
      }
      const streaming = byType(1);
      if (streaming) {
        setLiveCard('now', '🔴 ' + streaming.name, streaming.details || streaming.state || 'Streaming');
        return;
      }
      const watching = byType(3);
      if (watching) {
        setLiveCard('now', '📺 ' + watching.name, watching.details || watching.state || 'Watching');
        return;
      }
      const custom = activities.find(function (a) { return a && a.type === 4 && a.state; });
      if (custom) {
        const emoji = custom.emoji && custom.emoji.name && !custom.emoji.id ? custom.emoji.name + ' ' : '';
        setLiveCard('now', emoji + custom.state, status.label);
        return;
      }
      setLiveCard('now', status.icon + ' ' + status.label, 'Discord presence');
    }

    async function updatePresence() {
      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/' + LANYARD_USER_ID, { cache: 'no-store' });
        const payload = await response.json();
        renderPresence(payload && payload.data);
      } catch (error) {
        setLiveCard('now', 'Unavailable', 'presence check failed');
      }
    }

    // Live presence via Lanyard's WebSocket (pushes updates instantly),
    // with REST polling as an automatic fallback if the socket is unavailable.
    function connectPresence() {
      let socket, heartbeat, pollTimer, reconnectTimer;

      function startPolling() {
        if (pollTimer) return;
        updatePresence();
        pollTimer = window.setInterval(updatePresence, 15000);
      }
      function stopPolling() {
        if (pollTimer) { window.clearInterval(pollTimer); pollTimer = null; }
      }

      function open() {
        try {
          socket = new WebSocket('wss://api.lanyard.rest/socket');
        } catch (error) {
          startPolling();
          return;
        }
        socket.addEventListener('message', function (event) {
          let msg;
          try { msg = JSON.parse(event.data); } catch (error) { return; }
          if (msg.op === 1) {
            const interval = msg.d && msg.d.heartbeat_interval ? msg.d.heartbeat_interval : 30000;
            heartbeat = window.setInterval(function () {
              if (socket && socket.readyState === 1) socket.send(JSON.stringify({ op: 3 }));
            }, interval);
            socket.send(JSON.stringify({ op: 2, d: { subscribe_to_id: LANYARD_USER_ID } }));
            return;
          }
          if (msg.op === 0 && (msg.t === 'INIT_STATE' || msg.t === 'PRESENCE_UPDATE')) {
            stopPolling();
            renderPresence(msg.d);
          }
        });
        socket.addEventListener('error', function () { startPolling(); });
        socket.addEventListener('close', function () {
          if (heartbeat) { window.clearInterval(heartbeat); heartbeat = null; }
          startPolling();
          window.clearTimeout(reconnectTimer);
          reconnectTimer = window.setTimeout(open, 8000);
        });
      }

      if ('WebSocket' in window) open();
      else startPolling();
    }

    updateTime();
    updateWeather();
    connectPresence();
    window.setInterval(updateTime, 30000);
    window.setInterval(updateWeather, 600000);
  }

  function previewMarkup(projectName) {
    const name = projectName.toLowerCase();
    if (name.includes('radar')) {
      return '<div class="project-preview kp-radar kp-grid"><svg class="kp-coast" viewBox="0 0 300 128" preserveAspectRatio="none" aria-hidden="true"><path d="M-5 74 C40 64 64 78 96 70 C128 62 150 80 182 72 C214 64 252 78 305 66" fill="none" stroke="rgba(64,200,255,0.16)" stroke-width="1.2"/><path d="M-5 100 C46 92 78 104 120 96 C168 86 206 102 305 92" fill="none" stroke="rgba(64,200,255,0.1)" stroke-width="1"/><path d="M70 44 C96 37 120 47 150 40 C186 32 214 45 250 38" fill="none" stroke="rgba(64,200,255,0.1)" stroke-width="1"/></svg><div class="kp-stage"><div class="kp-cell" style="left:26px;top:26px;width:40px;height:40px;background:radial-gradient(circle,#1fae6b,transparent 70%)"></div><div class="kp-cell" style="left:33px;top:33px;width:26px;height:26px;background:radial-gradient(circle,#ffd75e,transparent 66%);animation-delay:-1.2s"></div><div class="kp-cell" style="left:39px;top:39px;width:14px;height:14px;background:radial-gradient(circle,#ff5f56,transparent 62%);animation-delay:-0.6s"></div><div class="kp-scope" style="left:4px;top:4px;width:84px;height:84px"></div><div class="kp-sweep" style="left:4px;top:4px;width:84px;height:84px"></div><span class="kp-cross" style="left:4px;top:46px;width:84px;height:1px"></span><span class="kp-cross" style="left:46px;top:4px;width:1px;height:84px"></span><div class="kp-ping" style="left:43.5px;top:43.5px;width:5px;height:5px"></div></div><div class="kp-chip alert" style="left:9px;top:9px"><span class="d"></span>2 Severe</div><div class="kp-chip live" style="right:9px;top:9px"><span class="d"></span>Live</div><div class="kp-legend"><i style="background:linear-gradient(90deg,#2cc84a,#74ec63)"></i><i style="background:linear-gradient(90deg,#f6df4d,#ffb432)"></i><i style="background:linear-gradient(90deg,#ff8a2b,#ff3b30)"></i></div><div class="kp-timeline"><span class="kp-play"></span><span class="kp-track"></span><span class="kp-time">−45m</span></div></div>';
    }
    if (name.includes('globe')) {
      return '<div class="project-preview kp-globe"><div class="kp-stars"></div><svg class="kp-orbit" viewBox="0 0 300 128" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M86 54 Q150 0 214 62" fill="none" stroke="rgba(0,255,204,0.5)" stroke-width="1.2" stroke-dasharray="3 4" stroke-linecap="round"/><path d="M92 82 Q150 124 208 76" fill="none" stroke="rgba(255,95,86,0.45)" stroke-width="1.2" stroke-dasharray="3 4" stroke-linecap="round"/></svg><div class="kp-atmo"></div><div class="kp-gstage"><div class="kp-earth"></div><span class="kp-gmark q" style="left:34%;top:36%"></span><span class="kp-gmark v" style="left:70%;top:42%"></span><span class="kp-gmark s" style="left:64%;top:64%"></span><span class="kp-gmark f" style="left:40%;top:68%"></span></div><div class="kp-stat"><b>146</b><span>events · 24h</span></div><div class="kp-chip live" style="right:9px;top:9px"><span class="d"></span>Feeds</div></div>';
    }
    if (name.includes('calculator')) {
      return '<div class="project-preview preview-calc"><div class="project-preview-inner"><div class="project-preview-kicker">Premium math</div><div class="calc-display">128 / 4 = ?</div><div class="calc-grid"><span class="calc-key">7</span><span class="calc-key">8</span><span class="calc-key">9</span><span class="calc-key hot">÷</span><span class="calc-key">4</span><span class="calc-key">5</span><span class="calc-key">6</span><span class="calc-key hot">×</span><span class="calc-key">1</span><span class="calc-key">2</span><span class="calc-key">3</span><span class="calc-key hot">=</span></div></div></div>';
    }
    if (name.includes('vanta')) {
      return '<div class="project-preview preview-vanta"><div class="project-preview-inner"><div class="project-preview-kicker">Tracker concept</div><div class="stat-row"><span>ACS</span><span class="bar"><i style="width:72%"></i></span><span>248</span></div><div class="stat-row"><span>HS%</span><span class="bar"><i style="width:48%"></i></span><span>28%</span></div><div class="stat-row"><span>RR</span><span class="bar"><i style="width:84%"></i></span><span>+18</span></div></div></div>';
    }
    if (name.includes('conduit')) {
      return '<div class="project-preview preview-conduit"><div class="project-preview-inner"><div class="project-preview-kicker">Network path</div><div class="flow"><div class="node">Client</div><div class="node">Proxy</div><div class="node">Server</div></div></div></div>';
    }
    if (name.includes('silkmc')) {
      return '<div class="project-preview preview-silk"><div class="project-preview-inner"><div class="project-preview-kicker">Compatibility</div><div class="chip-grid"><span class="mini-chip">Paper</span><span class="mini-chip">Folia</span><span class="mini-chip">Bukkit</span><span class="mini-chip">Spigot</span></div></div></div>';
    }
    return '';
  }

  function enhanceProjectCards() {
    document.querySelectorAll('.project-card').forEach(function (card) {
      if (card.querySelector('.project-preview')) return;
      const name = (card.querySelector('.project-name')?.textContent || '').trim();
      const html = previewMarkup(name);
      if (!html) return;
      const top = card.querySelector('.project-top');
      if (top) top.insertAdjacentHTML('afterend', html);
    });
  }

  // Soft domain migration notice. Rendered only when the page is served from
  // the legacy koels.site domain; koels.net visitors never see it. Uses fixed
  // positioning so showing/dismissing it never reflows page content, and
  // remembers dismissal in localStorage for 30 days.
  function domainNotice() {
    var host = window.location.hostname;
    if (host !== 'koels.site' && host !== 'www.koels.site') return;
    if (document.querySelector('.koels-domain-notice')) return;

    var STORAGE_KEY = 'koels-site-notice-dismissed';
    try {
      var until = parseInt(window.localStorage.getItem(STORAGE_KEY) || '', 10);
      if (until && Date.now() < until) return;
    } catch (error) {}

    var target = 'https://koels.net' + window.location.pathname + window.location.search;

    var notice = document.createElement('div');
    notice.className = 'koels-domain-notice';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Domain migration notice');

    var text = document.createElement('div');
    text.className = 'koels-domain-notice__text';
    text.innerHTML = 'This website has moved to <strong>koels.net</strong>. The koels.site domain will be retired in the future. Please update your bookmarks and use koels.net going forward.';

    var actions = document.createElement('div');
    actions.className = 'koels-domain-notice__actions';

    var link = document.createElement('a');
    link.className = 'koels-domain-notice__btn';
    link.href = target;
    link.textContent = 'Go to koels.net';

    var close = document.createElement('button');
    close.className = 'koels-domain-notice__close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Dismiss notice');
    close.innerHTML = '&times;';

    function dismiss() {
      notice.classList.add('is-leaving');
      try {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now() + 30 * 24 * 60 * 60 * 1000));
      } catch (error) {}
      window.setTimeout(function () {
        if (notice.parentNode) notice.parentNode.removeChild(notice);
      }, 320);
    }

    close.addEventListener('click', dismiss);

    actions.appendChild(link);
    actions.appendChild(close);
    notice.appendChild(text);
    notice.appendChild(actions);
    document.body.appendChild(notice);
  }

  onReady(function () {
    enhanceTransitions();
    enhanceHome();
    enhanceProjectCards();
    domainNotice();
  });
})();
`;
