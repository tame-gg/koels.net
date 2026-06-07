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
  width: min(100%, 760px);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

.preview-radar {
  background:
    radial-gradient(circle at 44% 56%, rgba(0, 255, 204, 0.2) 0 5%, transparent 6%),
    repeating-radial-gradient(circle at 44% 56%, rgba(64, 200, 255, 0.16) 0 1px, transparent 1px 20px),
    linear-gradient(135deg, rgba(2, 20, 34, 0.95), rgba(4, 10, 24, 0.78));
}

.preview-radar .sweep {
  position: absolute;
  inset: -20%;
  background: conic-gradient(from 0deg at 44% 56%, rgba(0, 255, 204, 0.26), transparent 18%, transparent);
  animation: koels-spin 3.2s linear infinite;
}

.preview-radar .storm {
  position: absolute;
  width: 42px;
  height: 24px;
  border-radius: 999px;
  background: linear-gradient(90deg, #40c8ff, #00ffcc, #ffd166);
  filter: blur(0.2px);
  opacity: 0.82;
}

.preview-radar .storm.one { left: 18%; top: 28%; transform: rotate(-18deg); }
.preview-radar .storm.two { right: 16%; bottom: 22%; transform: rotate(18deg) scale(0.78); }

@keyframes koels-spin {
  to { transform: rotate(360deg); }
}

.preview-globe {
  display: grid;
  place-items: center;
}

.preview-globe .mini-earth {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background:
    radial-gradient(circle at 28% 24%, rgba(232, 248, 255, 0.9), transparent 0 4px, transparent 5px),
    linear-gradient(90deg, rgba(0, 255, 204, 0.25), transparent 28% 72%, rgba(64, 200, 255, 0.22)),
    repeating-linear-gradient(90deg, rgba(64, 200, 255, 0.26) 0 2px, transparent 2px 16px),
    radial-gradient(circle at 45% 50%, #0b385f, #020810 72%);
  box-shadow:
    0 0 38px rgba(64, 200, 255, 0.28),
    inset -18px -8px 30px rgba(0, 0, 0, 0.48);
  animation: koels-float 3.8s ease-in-out infinite;
}

.preview-globe .orbit {
  position: absolute;
  width: 104px;
  height: 104px;
  border: 1px solid rgba(64, 200, 255, 0.18);
  border-radius: 50%;
  transform: rotateX(64deg);
}

@keyframes koels-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.preview-calc .calc-display {
  height: 24px;
  border-radius: 7px;
  padding: 5px 8px;
  background: rgba(232, 248, 255, 0.08);
  color: #00ffcc;
  font-family: var(--mono, monospace);
  font-size: 0.72rem;
  text-align: right;
}

.preview-calc .calc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-top: 10px;
}

.preview-calc .calc-dot {
  height: 13px;
  border-radius: 5px;
  background: rgba(200, 240, 255, 0.14);
}

.preview-calc .calc-dot.hot {
  background: linear-gradient(135deg, #40c8ff, #00ffcc);
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
  .koels-live-card::after,
  .preview-radar .sweep,
  .preview-globe .mini-earth {
    animation: none !important;
    transition: none !important;
  }
}
`;

export const pageEnhancementScript = `
(function () {
  const LANYARD_USER_ID = '1135328814394785903';
  const MC_SERVER = 'koels.online';
  const DISCORD_WIDGET = '1494858459785465896';

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
      '<div class="koels-live-card"><div class="koels-live-kicker">Minecraft</div><div class="koels-live-value" data-live-value="mc">Checking...</div><div class="koels-live-sub" data-live-sub="mc">koels.online</div></div>' +
      '<div class="koels-live-card"><div class="koels-live-kicker">Discord</div><div class="koels-live-value" data-live-value="discord">Checking...</div><div class="koels-live-sub" data-live-sub="discord">server widget</div></div>' +
      '<div class="koels-live-card"><div class="koels-live-kicker">Now</div><div class="koels-live-value" data-live-value="now">Syncing...</div><div class="koels-live-sub" data-live-sub="now">live presence</div></div>';

    const actions = hero.querySelector('.hero-actions');
    if (actions) actions.insertAdjacentElement('afterend', strip);
    else hero.appendChild(strip);

    function updateTime() {
      const now = new Date();
      setLiveCard('time', now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }), now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    }

    async function updateMc() {
      try {
        const response = await fetch('https://api.mcsrvstat.us/3/' + MC_SERVER, { cache: 'no-store' });
        const data = await response.json();
        if (!data || !data.online) {
          setLiveCard('mc', 'Offline', '0 players online');
          return;
        }
        const online = data.players && Number.isFinite(data.players.online) ? data.players.online : 0;
        const max = data.players && Number.isFinite(data.players.max) ? data.players.max : 0;
        setLiveCard('mc', String(online) + ' online', max ? online + ' / ' + max + ' capacity' : 'server is up');
      } catch (error) {
        setLiveCard('mc', 'Unavailable', 'status check failed');
      }
    }

    async function updateDiscord() {
      try {
        const response = await fetch('https://discord.com/api/guilds/' + DISCORD_WIDGET + '/widget.json', { cache: 'no-store' });
        const data = await response.json();
        if (!data || !data.name) {
          setLiveCard('discord', 'Unavailable', 'widget is private');
          return;
        }
        setLiveCard('discord', String(data.presence_count || 0) + ' online', data.name);
      } catch (error) {
        setLiveCard('discord', 'Unavailable', 'Discord check failed');
      }
    }

    async function updatePresence() {
      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/' + LANYARD_USER_ID, { cache: 'no-store' });
        const payload = await response.json();
        const data = payload && payload.data;
        if (!data) {
          setLiveCard('now', 'Offline', 'presence unavailable');
          return;
        }
        if (data.listening_to_spotify && data.spotify) {
          setLiveCard('now', data.spotify.song || 'Spotify', data.spotify.artist || 'listening now');
          return;
        }
        const game = Array.isArray(data.activities) && data.activities.find(function (activity) { return activity && activity.type === 0 && activity.name; });
        if (game) {
          setLiveCard('now', game.name, data.discord_status || 'active');
          return;
        }
        setLiveCard('now', data.discord_status || 'offline', 'Discord presence');
      } catch (error) {
        setLiveCard('now', 'Unavailable', 'presence check failed');
      }
    }

    updateTime();
    updateMc();
    updateDiscord();
    updatePresence();
    window.setInterval(updateTime, 30000);
    window.setInterval(updateMc, 180000);
    window.setInterval(updateDiscord, 60000);
    window.setInterval(updatePresence, 15000);
  }

  function previewMarkup(projectName) {
    const name = projectName.toLowerCase();
    if (name.includes('radar')) {
      return '<div class="project-preview preview-radar"><div class="sweep"></div><div class="storm one"></div><div class="storm two"></div><div class="project-preview-inner"><div class="project-preview-kicker">Live radar</div></div></div>';
    }
    if (name.includes('globe')) {
      return '<div class="project-preview preview-globe"><div class="orbit"></div><div class="mini-earth"></div><div class="project-preview-inner"><div class="project-preview-kicker">Earth feed</div></div></div>';
    }
    if (name.includes('calculator')) {
      return '<div class="project-preview preview-calc"><div class="project-preview-inner"><div class="project-preview-kicker">Premium math</div><div class="calc-display">42.00</div><div class="calc-grid"><span class="calc-dot"></span><span class="calc-dot"></span><span class="calc-dot"></span><span class="calc-dot hot"></span><span class="calc-dot"></span><span class="calc-dot"></span><span class="calc-dot"></span><span class="calc-dot hot"></span><span class="calc-dot"></span><span class="calc-dot"></span><span class="calc-dot"></span><span class="calc-dot hot"></span></div></div></div>';
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

  onReady(function () {
    enhanceTransitions();
    enhanceHome();
    enhanceProjectCards();
  });
})();
`;
