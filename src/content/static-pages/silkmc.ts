import type { StaticHtmlDocument } from '@/components/StaticHtmlPage';

export const silkmcDocument: StaticHtmlDocument = {
  head: `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SilkMC - Region-Threaded Minecraft Server Software</title>
  <meta name="description" content="SilkMC is an early Folia-derived Minecraft server platform focused on regional multithreading and practical Paper, Bukkit, and Spigot plugin compatibility." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://koels.site/silkmc" />
  <meta property="og:title" content="SilkMC - Region-Threaded Minecraft Server Software" />
  <meta property="og:description" content="A Folia fork focused on preserving regional multithreading while improving Paper, Bukkit, and Spigot plugin compatibility." />
  <meta property="og:site_name" content="SilkMC" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://koels.site/silkmc" />

  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23020810'/%3E%3Ccircle cx='16' cy='16' r='11' fill='none' stroke='%230060b0' stroke-width='1' opacity='0.5'/%3E%3Ccircle cx='16' cy='16' r='7' fill='none' stroke='%2340c8ff' stroke-width='1.2' opacity='0.75'/%3E%3Ccircle cx='16' cy='16' r='3' fill='%2340c8ff'/%3E%3Cpath d='M16 5 L16 11 M16 21 L16 27 M5 16 L11 16 M21 16 L27 16' stroke='%2340c8ff' stroke-width='1.2' stroke-linecap='round' opacity='0.6'/%3E%3C/svg%3E">

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <noscript><style>.reveal{opacity:1;transform:none}.release-pill{display:none}</style></noscript>

  <style>
    @view-transition { navigation: auto; }

    :root {
      --bg: #020810;
      --bg2: #040e1e;
      --surface: rgba(2,12,28,0.6);
      --surface2: rgba(4,18,38,0.72);
      --border: rgba(0,120,200,0.14);
      --border2: rgba(64,200,255,0.22);
      --text: #c8f0ff;
      --muted: rgba(200,240,255,0.55);
      --dim: rgba(200,240,255,0.3);
      --cyan: #40c8ff;
      --teal: #00ffcc;
      --red: #ff6b7a;
      --amber: #ffbd4a;
      --ease: cubic-bezier(0.16,1,0.3,1);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    a { color: inherit; }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background:
        radial-gradient(circle at 12% 0%, rgba(0,96,176,0.24), transparent 32rem),
        radial-gradient(circle at 84% 8%, rgba(0,255,204,0.09), transparent 28rem),
        radial-gradient(circle at 42% 72%, rgba(64,200,255,0.07), transparent 34rem),
        radial-gradient(circle, rgba(255,255,255,0.016) 1px, transparent 1px);
      background-size: auto, auto, auto, 30px 30px;
      pointer-events: none;
      z-index: 0;
    }
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9990;
      opacity: 0.9;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.026'/%3E%3C/svg%3E");
    }

    .aurora { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
    .ab { position: absolute; border-radius: 50%; filter: blur(120px); }
    .ab1 { width: 680px; height: 520px; opacity: .2; background: radial-gradient(ellipse,#0050c8 0%,transparent 70%); top: -140px; left: -160px; animation: drift1 38s ease-in-out infinite; }
    .ab2 { width: 620px; height: 620px; opacity: .15; background: radial-gradient(ellipse,#003080 0%,transparent 70%); top: -110px; right: -150px; animation: drift2 48s ease-in-out infinite; }
    .ab3 { width: 520px; height: 420px; opacity: .16; background: radial-gradient(ellipse,#00a8b0 0%,transparent 70%); bottom: 15%; left: 18%; animation: drift3 34s ease-in-out infinite; }
    @keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1)} 45%{transform:translate(80px,70px) scale(1.08)} 75%{transform:translate(10px,140px) scale(.94)} }
    @keyframes drift2 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(-80px,100px) scale(1.1)} 70%{transform:translate(-20px,170px) scale(.92)} }
    @keyframes drift3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(70px,-70px) scale(1.08)} }

    nav, main, footer, .stats-strip { position: relative; z-index: 2; }

    nav {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 58px;
      padding: 0 2.5rem;
      background: rgba(2,8,16,0.74);
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
    }
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--dim);
      text-decoration: none;
      transition: color 0.15s;
    }
    .back-link:hover { color: var(--cyan); }
    .nav-right { display: flex; align-items: center; gap: 2rem; }
    .nav-links { display: flex; gap: 1.75rem; list-style: none; }
    .nav-links a {
      color: var(--muted);
      text-decoration: none;
      font-size: 0.82rem;
      transition: color 0.15s;
    }
    .nav-links a:hover { color: var(--text); }
    .nav-gh {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.38rem 0.9rem;
      border-radius: 6px;
      border: 1px solid var(--border2);
      background: var(--surface);
      color: var(--muted);
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 500;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .nav-gh:hover { border-color: var(--cyan); color: var(--text); background: rgba(64,200,255,0.08); }

    .hero {
      max-width: 1180px;
      margin: 0 auto;
      padding: 6.8rem 2.5rem 5rem;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.02fr) minmax(360px, .78fr);
      gap: clamp(2rem, 5vw, 5rem);
      align-items: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.32rem 0.9rem;
      border-radius: 99px;
      border: 1px solid rgba(64,200,255,0.22);
      background: rgba(64,200,255,0.06);
      color: var(--teal);
      font-size: 0.72rem;
      font-weight: 500;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.06em;
      white-space: nowrap;
    }
    .badge-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--teal);
      box-shadow: 0 0 12px rgba(0,255,204,0.7);
      animation: blink 1.4s ease infinite;
    }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }

    h1 {
      max-width: 780px;
      margin: 1.45rem 0 1.25rem;
      color: #e8f8ff;
      font-size: clamp(3rem, 6vw, 5.7rem);
      font-weight: 900;
      line-height: 0.92;
      letter-spacing: -0.04em;
    }
    h1 .accent {
      background: linear-gradient(135deg, var(--cyan) 0%, var(--teal) 58%, var(--cyan) 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 5s linear infinite;
    }
    @keyframes shimmer { to { background-position: 200% center; } }
    .hero-sub {
      max-width: 610px;
      color: var(--muted);
      font-size: 1.02rem;
      line-height: 1.78;
    }
    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 1.7rem;
    }
    .btn-primary,
    .btn-ghost {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      min-height: 43px;
      padding: 0.75rem 1.45rem;
      border-radius: 7px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      transition: 0.2s var(--ease);
    }
    .btn-primary {
      background: var(--cyan);
      color: #010810;
      border: 1px solid var(--cyan);
      box-shadow: 0 0 28px rgba(64,200,255,0.25);
    }
    .btn-primary:hover { background: #2ab0e8; border-color: #2ab0e8; transform: translateY(-1px); }
    .btn-ghost {
      background: transparent;
      color: var(--muted);
      border: 1px solid var(--border2);
    }
    .btn-ghost:hover { color: #e8f8ff; border-color: rgba(64,200,255,0.35); background: rgba(0,120,200,0.08); }
    .hero-note {
      margin-top: 1rem;
      max-width: 560px;
      color: rgba(200,240,255,0.42);
      font-size: 0.86rem;
    }

    .release-panel {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(64,200,255,0.14);
      border-radius: 14px;
      background: linear-gradient(180deg, rgba(2,12,28,0.82), rgba(2,8,16,0.72));
      box-shadow: 0 36px 90px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03);
    }
    .release-panel::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(64,200,255,0.055) 1px, transparent 1px),
        linear-gradient(rgba(64,200,255,0.045) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: linear-gradient(180deg, black, transparent 78%);
      opacity: 0.55;
      pointer-events: none;
    }
    .panel-top {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.15rem;
      border-bottom: 1px solid rgba(64,200,255,0.1);
      background: rgba(255,255,255,0.018);
    }
    .panel-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.64rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--dim);
    }
    .panel-status {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--amber);
    }
    .panel-status i {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--amber);
      box-shadow: 0 0 14px rgba(255,189,74,0.5);
    }
    .panel-body {
      position: relative;
      padding: 1.35rem;
    }
    .release-name {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(64,200,255,0.1);
    }
    .release-name strong {
      color: #e8f8ff;
      font-size: clamp(1.9rem, 3vw, 2.5rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .release-name span {
      font-family: 'JetBrains Mono', monospace;
      color: var(--cyan);
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .signal-list {
      display: grid;
      gap: 0.65rem;
      margin-top: 1rem;
    }
    .signal {
      display: grid;
      grid-template-columns: 18px 1fr auto;
      align-items: center;
      gap: 0.75rem;
      padding: 0.8rem 0;
      border-bottom: 1px solid rgba(64,200,255,0.075);
    }
    .signal:last-child { border-bottom: none; }
    .signal i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--teal);
      box-shadow: 0 0 16px rgba(0,255,204,0.35);
      justify-self: center;
    }
    .signal.warn i { background: var(--amber); box-shadow: 0 0 16px rgba(255,189,74,0.35); }
    .signal.danger i { background: var(--red); box-shadow: 0 0 16px rgba(255,107,122,0.35); }
    .signal b {
      color: #e8f8ff;
      font-size: 0.88rem;
      font-weight: 700;
    }
    .signal span {
      font-family: 'JetBrains Mono', monospace;
      color: var(--dim);
      font-size: 0.59rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .terminal {
      margin-top: 1rem;
      padding: 1rem 1.05rem;
      border: 1px solid rgba(64,200,255,0.1);
      border-radius: 10px;
      background: rgba(0,0,0,0.34);
      color: rgba(200,240,255,0.48);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      line-height: 1.8;
      overflow-x: auto;
    }
    .terminal .ok { color: var(--teal); }
    .terminal .info { color: var(--cyan); }
    .terminal .warn { color: var(--amber); }

    .stats-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    .stat {
      min-width: 0;
      padding: 1.85rem 1rem;
      text-align: center;
      border-right: 1px solid var(--border);
    }
    .stat:last-child { border-right: none; }
    .stat-value {
      display: block;
      color: #e8f8ff;
      font-size: clamp(1.45rem, 2.5vw, 1.95rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .stat-value.c { color: var(--cyan); text-shadow: 0 0 32px rgba(64,200,255,0.3); }
    .stat-value.g { color: var(--teal); text-shadow: 0 0 28px rgba(0,255,204,0.25); }
    .stat-label {
      display: block;
      margin-top: 0.42rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.61rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--dim);
    }

    .section {
      max-width: 1120px;
      margin: 0 auto;
      padding: 6rem 1.5rem;
    }
    .section.split {
      display: grid;
      grid-template-columns: .72fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    .section-tag {
      display: block;
      margin-bottom: 1rem;
      color: var(--cyan);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    .section h2 {
      color: #e8f8ff;
      font-size: clamp(1.9rem, 3.7vw, 3.15rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      line-height: 1.08;
    }
    .section-copy {
      margin-top: 1.1rem;
      color: var(--muted);
      font-size: 0.96rem;
      line-height: 1.78;
    }

    .bento {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
    }
    .card {
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      min-height: 185px;
      padding: 1.55rem;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: rgba(2,12,28,0.55);
      backdrop-filter: blur(16px);
      transition: border-color 0.25s, transform 0.25s var(--ease), box-shadow 0.25s;
    }
    .card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--cyan), transparent);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .card:hover { border-color: var(--border2); transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.4); }
    .card:hover::before { opacity: 1; }
    .c2 { grid-column: span 2; }
    .c3 { grid-column: span 3; }
    .c4 { grid-column: span 4; }
    .c6 { grid-column: span 6; }
    .card-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }
    .card-kicker {
      font-family: 'JetBrains Mono', monospace;
      color: var(--dim);
      font-size: 0.58rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }
    .card-title {
      color: #e8f8ff;
      font-size: 1.02rem;
      font-weight: 750;
      letter-spacing: -0.01em;
    }
    .card-body {
      flex: 1;
      color: var(--muted);
      font-size: 0.875rem;
      line-height: 1.68;
    }
    .card-chip {
      display: inline-flex;
      align-self: flex-start;
      padding: 3px 9px;
      border: 1px solid rgba(0,255,204,0.3);
      border-radius: 99px;
      background: rgba(0,255,204,0.06);
      color: var(--teal);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .card-chip.blue { color: var(--cyan); border-color: rgba(64,200,255,0.3); background: rgba(64,200,255,0.06); }
    .card-chip.red { color: var(--red); border-color: rgba(255,107,122,0.3); background: rgba(255,107,122,0.06); }
    .thread-map {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-top: 0.35rem;
    }
    .thread-cell {
      min-height: 58px;
      border: 1px solid rgba(64,200,255,0.12);
      border-radius: 10px;
      background: rgba(64,200,255,0.045);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(200,240,255,0.32);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .thread-cell.hot { color: var(--teal); border-color: rgba(0,255,204,0.26); background: rgba(0,255,204,0.07); box-shadow: inset 0 0 24px rgba(0,255,204,0.035); }

    .matrix {
      display: grid;
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      background: rgba(2,12,28,0.48);
      backdrop-filter: blur(16px);
    }
    .matrix-row {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.2rem;
      border-bottom: 1px solid rgba(64,200,255,0.09);
    }
    .matrix-row:last-child { border-bottom: none; }
    .matrix-title {
      color: #e8f8ff;
      font-size: 0.94rem;
      font-weight: 700;
    }
    .matrix-desc {
      margin-top: 0.16rem;
      color: var(--muted);
      font-size: 0.82rem;
      line-height: 1.55;
    }
    .matrix-state {
      justify-self: end;
      min-width: 138px;
      padding: 0.35rem 0.75rem;
      border: 1px solid rgba(64,200,255,0.18);
      border-radius: 999px;
      color: var(--cyan);
      background: rgba(64,200,255,0.055);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.12em;
      text-align: center;
      text-transform: uppercase;
    }
    .matrix-state.good { color: var(--teal); border-color: rgba(0,255,204,0.26); background: rgba(0,255,204,0.055); }
    .matrix-state.warn { color: var(--amber); border-color: rgba(255,189,74,0.24); background: rgba(255,189,74,0.055); }

    .steps {
      display: grid;
      gap: 0;
      margin-top: 2.5rem;
      border-top: 1px solid var(--border);
      min-width: 0;
    }
    .step {
      display: grid;
      grid-template-columns: 54px 1fr;
      gap: 1.25rem;
      padding: 1.55rem 0;
      border-bottom: 1px solid var(--border);
      min-width: 0;
    }
    .step > div { min-width: 0; }
    .step-num {
      color: var(--cyan);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.64rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    .step-title {
      color: #e8f8ff;
      font-size: 0.98rem;
      font-weight: 700;
      margin-bottom: 0.35rem;
    }
    .step-desc {
      color: var(--muted);
      font-size: 0.86rem;
      line-height: 1.65;
    }
    .code-block {
      display: block;
      margin-top: 0.8rem;
      padding: 0.9rem 1rem;
      border: 1px solid rgba(64,200,255,0.1);
      border-radius: 8px;
      background: rgba(0,0,0,0.35);
      color: var(--teal);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.76rem;
      line-height: 1.55;
      max-width: 100%;
      overflow-x: auto;
      white-space: pre;
    }

    .release-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      margin-top: 1.2rem;
      padding: 0.6rem 0.78rem;
      border: 1px solid rgba(64,200,255,0.16);
      border-radius: 8px;
      background: rgba(64,200,255,0.04);
      color: rgba(200,240,255,0.58);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .release-pill a { color: var(--cyan); text-decoration: none; }
    .release-pill a:hover { text-decoration: underline; }

    .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 2.5rem 1.5rem;
      text-align: center;
      border-top: 1px solid var(--border);
    }
    .logo-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--teal);
      box-shadow: 0 0 8px var(--teal), 0 0 16px rgba(0,255,204,0.4);
      flex-shrink: 0;
    }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--muted);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-decoration: none;
      text-transform: uppercase;
    }
    .footer-links { display: flex; gap: 1.75rem; flex-wrap: wrap; justify-content: center; }
    .footer-links a { color: var(--dim); font-size: 0.78rem; text-decoration: none; transition: color 0.15s; }
    .footer-links a:hover { color: var(--text); }
    .footer-copy { max-width: 850px; color: var(--dim); font-size: 0.72rem; }

    @media (max-width: 980px) {
      .hero-grid,
      .section.split { grid-template-columns: 1fr; }
      .hero-grid { gap: 2.5rem; }
      .stats-strip { grid-template-columns: repeat(2, 1fr); }
      .stat:nth-child(2) { border-right: none; }
      .stat:nth-child(-n+2) { border-bottom: 1px solid var(--border); }
    }
    @media (max-width: 860px) {
      .c2, .c3, .c4, .c6 { grid-column: span 6; }
      .thread-map { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      nav { padding: 0 1.25rem; }
      .nav-links { display: none; }
      .hero { padding: 5rem 1.25rem 4rem; }
      h1 { font-size: clamp(2.65rem, 13vw, 4.2rem); }
      .hero-actions { flex-direction: column; }
      .release-name { flex-direction: column; align-items: flex-start; }
      .signal { grid-template-columns: 16px 1fr; }
      .signal span { grid-column: 2; }
      .section { padding: 4rem 1.25rem; }
      .matrix-row { grid-template-columns: 1fr; }
      .matrix-state { justify-self: start; min-width: 0; }
      .step { grid-template-columns: 1fr; gap: 0.45rem; }
      .stats-strip { grid-template-columns: 1fr; }
      .stat, .stat:nth-child(2) { border-right: none; border-bottom: 1px solid var(--border); }
      .stat:last-child { border-bottom: none; }
    }
  </style>`,
  body: `<div class="aurora" aria-hidden="true">
  <div class="ab ab1"></div>
  <div class="ab ab2"></div>
  <div class="ab ab3"></div>
</div>

<nav>
  <a href="/" class="back-link">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="flex-shrink:0">
      <path d="M8 2L4 6L8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    koels.site
  </a>
  <div class="nav-right">
    <ul class="nav-links">
      <li><a href="#status">Status</a></li>
      <li><a href="#compat">Compatibility</a></li>
      <li><a href="#setup">Setup</a></li>
    </ul>
    <a class="nav-gh" href="https://github.com/tame-gg/SilkMC" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      GitHub
    </a>
  </div>
</nav>

<main>
  <section class="hero">
    <div class="hero-grid">
      <div class="reveal">
        <div class="badge">
          <span class="badge-dot"></span>
          <span id="badge-text">Alpha build - Folia 26.1.2 base</span>
        </div>
        <h1>Folia speed, <span class="accent">Paper plugin sanity.</span></h1>
        <p class="hero-sub">
          SilkMC is an experimental Folia-derived server fork for owners who want region-threaded performance without turning plugin testing into guesswork.
          It keeps thread ownership visible, compatibility decisions explicit, and unsafe assumptions loud.
        </p>
        <div class="hero-actions">
          <a class="btn-primary" id="download-btn" href="https://github.com/tame-gg/SilkMC/releases/latest">Download latest jar</a>
          <a class="btn-ghost" href="#compat">Read compatibility</a>
          <a class="btn-ghost" href="https://github.com/tame-gg/SilkMC" target="_blank" rel="noopener">View source</a>
        </div>
        <p class="hero-note">Early alpha software. Use a staging server, keep backups, and add plugins in batches you can reason about.</p>
      </div>

      <aside class="release-panel reveal" style="transition-delay:.08s" aria-label="SilkMC release status">
        <div class="panel-top">
          <span class="panel-title">server readiness</span>
          <span class="panel-status"><i></i>alpha</span>
        </div>
        <div class="panel-body">
          <div class="release-name">
            <strong id="release-name">latest</strong>
            <span id="release-channel">paperclip jar</span>
          </div>
          <div class="signal-list">
            <div class="signal">
              <i></i>
              <b>Region threads stay first-class</b>
              <span>folia model</span>
            </div>
            <div class="signal warn">
              <i></i>
              <b>Legacy plugins get clearer paths</b>
              <span>paper/bukkit/spigot</span>
            </div>
            <div class="signal danger">
              <i></i>
              <b>Unsafe behavior should fail loudly</b>
              <span>alpha guardrails</span>
            </div>
          </div>
          <div class="terminal" aria-hidden="true">
            <span class="info">$</span> java -Xms4G -Xmx4G -jar silkmc-paperclip.jar nogui<br />
            <span class="ok">[SilkMC]</span> loading region scheduler<br />
            <span class="ok">[SilkMC]</span> checking plugin metadata<br />
            <span class="warn">[compat]</span> test warnings before production
          </div>
        </div>
      </aside>
    </div>
  </section>

  <div class="stats-strip" id="status">
    <div class="stat">
      <span class="stat-value c" id="stat-release">latest</span>
      <span class="stat-label">public release</span>
    </div>
    <div class="stat">
      <span class="stat-value g">Folia</span>
      <span class="stat-label">regional threading</span>
    </div>
    <div class="stat">
      <span class="stat-value">Paperclip</span>
      <span class="stat-label">runnable jar</span>
    </div>
    <div class="stat">
      <span class="stat-value">GPL-3.0</span>
      <span class="stat-label">open source</span>
    </div>
  </div>

  <section class="section split" id="compat">
    <div>
      <span class="section-tag">Compatibility stance</span>
      <h2>Compatibility work that respects the thread model.</h2>
      <p class="section-copy">
        The point is not to pretend Folia is single-threaded. The point is to make common plugin expectations easier to test,
        easier to diagnose, and less likely to hide a world-corrupting assumption.
      </p>
      <div class="release-pill">
        Latest assets resolve from <a href="https://github.com/tame-gg/SilkMC/releases/latest" target="_blank" rel="noopener">GitHub releases</a>
      </div>
    </div>

    <div class="matrix reveal">
      <div class="matrix-row">
        <div>
          <div class="matrix-title">Folia-aware plugins</div>
          <div class="matrix-desc">Metadata and scheduler expectations remain aligned with the upstream regional model.</div>
        </div>
        <span class="matrix-state good">native path</span>
      </div>
      <div class="matrix-row">
        <div>
          <div class="matrix-title">Paper, Bukkit, and Spigot plugins</div>
          <div class="matrix-desc">SilkMC focuses on startup, lifecycle, scheduler bridging, and clearer failure reporting.</div>
        </div>
        <span class="matrix-state">compat work</span>
      </div>
      <div class="matrix-row">
        <div>
          <div class="matrix-title">Unsafe global-world assumptions</div>
          <div class="matrix-desc">Behavior that cannot be made safe should warn, disable, or fail instead of quietly crossing region ownership.</div>
        </div>
        <span class="matrix-state warn">guarded</span>
      </div>
      <div class="matrix-row">
        <div>
          <div class="matrix-title">Production networks</div>
          <div class="matrix-desc">The project is still alpha, so production use should wait on real staging evidence and backups.</div>
        </div>
        <span class="matrix-state warn">test first</span>
      </div>
    </div>
  </section>

  <section class="section" style="border-top:1px solid var(--border)">
    <span class="section-tag">What changes</span>
    <h2>Less dull than a README. Still honest about the sharp edges.</h2>

    <div class="bento">
      <div class="card c4 reveal">
        <div class="card-head">
          <div>
            <span class="card-kicker">region ownership</span>
            <div class="card-title">A scheduler story you can inspect</div>
          </div>
          <span class="card-chip blue">threaded</span>
        </div>
        <p class="card-body">SilkMC keeps the regional architecture visible instead of flattening it into a fake main-thread world. That makes compatibility work safer to reason about.</p>
        <div class="thread-map" aria-hidden="true">
          <div class="thread-cell hot">region a</div>
          <div class="thread-cell">region b</div>
          <div class="thread-cell hot">region c</div>
          <div class="thread-cell">region d</div>
        </div>
      </div>

      <div class="card c2 reveal" style="transition-delay:.04s">
        <span class="card-kicker">metadata</span>
        <div class="card-title">Smarter plugin loading</div>
        <p class="card-body">Compatibility flags can be interpreted without discarding Folia-aware metadata or upstream expectations.</p>
        <span class="card-chip">startup</span>
      </div>

      <div class="card c2 reveal" style="transition-delay:.08s">
        <span class="card-kicker">diagnostics</span>
        <div class="card-title">Warnings with a purpose</div>
        <p class="card-body">The page and project both frame warnings as test data, so owners know where to look before trusting a plugin stack.</p>
      </div>

      <div class="card c2 reveal" style="transition-delay:.12s">
        <span class="card-kicker">paperclip</span>
        <div class="card-title">Download the runnable jar</div>
        <p class="card-body">The primary call to action resolves to the release asset when GitHub exposes one, with the latest release page as a fallback.</p>
        <span class="card-chip blue">release asset</span>
      </div>

      <div class="card c2 reveal" style="transition-delay:.16s">
        <span class="card-kicker">alpha</span>
        <div class="card-title">No fake guarantees</div>
        <p class="card-body">The copy stays direct: this is not a promise that every plugin works. It is a better compatibility experiment.</p>
        <span class="card-chip red">careful</span>
      </div>
    </div>
  </section>

  <section class="section" id="setup" style="border-top:1px solid var(--border)">
    <span class="section-tag">Setup path</span>
    <h2>Build clean, run paperclip, test in layers.</h2>

    <div class="steps">
      <div class="step reveal">
        <span class="step-num">01</span>
        <div>
          <div class="step-title">Clone and apply patches</div>
          <p class="step-desc">Start from a clean checkout so build failures are about the project, not old local state.</p>
          <code class="code-block">git clone https://github.com/tame-gg/SilkMC.git
cd SilkMC
./gradlew applyAllPatches</code>
        </div>
      </div>

      <div class="step reveal" style="transition-delay:.06s">
        <span class="step-num">02</span>
        <div>
          <div class="step-title">Create the paperclip jar</div>
          <p class="step-desc">Paperclip is the runnable server artifact. The module jar is not the thing to launch.</p>
          <code class="code-block">./gradlew build
./gradlew :silkmc-server:createPaperclipJar</code>
        </div>
      </div>

      <div class="step reveal" style="transition-delay:.12s">
        <span class="step-num">03</span>
        <div>
          <div class="step-title">Run staging before production</div>
          <p class="step-desc">Bring plugins in groups, capture logs, and keep a backup world around while the compatibility layer is still alpha.</p>
          <code class="code-block">java -Xms4G -Xmx4G -jar silkmc-paperclip-26.1.2.local-SNAPSHOT.jar nogui</code>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <a href="/" class="footer-logo">
    <span class="logo-dot"></span>
    Koels.site
  </a>
  <div class="footer-links">
    <a href="/">Home</a>
    <a href="https://github.com/tame-gg/SilkMC" target="_blank" rel="noopener">GitHub</a>
    <a href="https://github.com/tame-gg/SilkMC/releases/latest" target="_blank" rel="noopener">Latest release</a>
  </div>
  <span class="footer-copy">SilkMC is an early alpha project derived from Folia and Paper. Test on backups first while compatibility work is still moving.</span>
</footer>

<script>
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

(async () => {
  try {
    const res = await fetch('https://api.github.com/repos/tame-gg/SilkMC/releases/latest');
    if (!res.ok) return;
    const data = await res.json();
    const tag = data.tag_name || data.name || 'latest';

    const badge = document.getElementById('badge-text');
    const release = document.getElementById('release-name');
    const stat = document.getElementById('stat-release');
    if (badge) badge.textContent = tag + ' - Folia 26.1.2 base';
    if (release) release.textContent = tag.replace('-alpha', '');
    if (stat) stat.textContent = tag.replace('-alpha', '');

    const jar = (data.assets || []).find(asset => /paperclip.*\\.jar$/i.test(asset.name)) || (data.assets || []).find(asset => /\\.jar$/i.test(asset.name));
    const btn = document.getElementById('download-btn');
    const channel = document.getElementById('release-channel');
    if (btn && jar) {
      btn.href = jar.browser_download_url;
      btn.removeAttribute('target');
      btn.removeAttribute('rel');
      btn.setAttribute('download', jar.name);
      btn.textContent = 'Download ' + jar.name.replace(/^silkmc-/, '');
    }
    if (channel && jar) channel.textContent = jar.name.endsWith('.jar') ? 'release asset' : 'latest release';
  } catch (_) {}
})();
</script>`
};
