let container = document.querySelector('#youare-container');
let audio = document.querySelector('#youare-audio');
let ovlap = document.querySelector('#youare-overlap');
let micon = document.querySelector('#youare-micon');

let overlap = false;

function audioPlay() {
	if (!overlap) {
		audio.currentTime = 0;
		audio.play();
	} else {
		ovlap.currentTime = 0;
		ovlap.play();
	}
	container.removeEventListener('click', audioPlay);
	audio.addEventListener('timeupdate', audioOverlap);
	ovlap.addEventListener('timeupdate', audioOverlap);
	container.classList.remove('clicky');
	micon.src = "/images/speaker.avif";
}

function audioStop() {
	audio.currentTime = 0;
	audio.pause();
	ovlap.currentTime = 0;
	ovlap.pause();
	container.addEventListener('click', audioPlay);
	audio.removeEventListener('timeupdate', audioOverlap);
	ovlap.removeEventListener('timeupdate', audioOverlap);
	container.classList.add('clicky');
	micon.src = "/images/speakerm.avif";
}

function audioSwitch() {
	if (audio.duration > 0 && audio.paused && ovlap.duration > 0 && ovlap.paused) {
		audioPlay();
	} else {
		audioStop();
	}
}

function audioOverlap() {
	if (!overlap && audio.currentTime > audio.duration - .45) {
		ovlap.currentTime = 0;
		ovlap.play();
		overlap = true;
	}
	if (overlap && ovlap.currentTime > ovlap.duration - .5) {
		audio.currentTime = 0;
		audio.play();
		overlap = false;
	}
}

container.addEventListener('click', audioPlay);
container.addEventListener('click', () => container.classList.remove('clicky'));
micon.addEventListener('click', audioSwitch);

// ==========================================================================
// SAFE PAYLOAD: Real bouncing popup windows (aggressive multi-monitor chaos)
// ==========================================================================
(function() {
	const urlParams = new URLSearchParams(window.location.search);
	const urlSession = urlParams.get('session');
	const isPopup = (window.opener !== null || !!urlSession);
	const isMain = !isPopup;

	const sessionId = isMain
		? 'i_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7)
		: (urlSession || 'orphan');

	// -------------------------------------------------------------------------
	// POPUP MODE: play audio, listen for kill, ESC
	// -------------------------------------------------------------------------
	if (isPopup) {
		const killKey = 'ik_' + sessionId;
		let pollId = null;

		function killPopup() {
			if (pollId) { clearInterval(pollId); pollId = null; }
			try {
				const a = document.getElementById('youare-audio');
				const o = document.getElementById('youare-overlap');
				if (a) { a.pause(); a.currentTime = 0; }
				if (o) { o.pause(); o.currentTime = 0; }
			} catch (e) {}
			try { window.close(); } catch (e) {}
		}

		function startPopupAudio() {
			const a = document.getElementById('youare-audio');
			const o = document.getElementById('youare-overlap');
			if (!a) return false;
			let popupOverlap = false;
			function pOverlap() {
				if (!popupOverlap && a.currentTime > a.duration - .45) {
					o.currentTime = 0;
					o.play().catch(() => {});
					popupOverlap = true;
				}
				if (popupOverlap && o.currentTime > o.duration - .5) {
					a.currentTime = 0;
					a.play().catch(() => {});
					popupOverlap = false;
				}
			}
			a.currentTime = 0;
			a.play().catch(() => {});
			a.addEventListener('timeupdate', pOverlap);
			o.addEventListener('timeupdate', pOverlap);
			return true;
		}

		if (!startPopupAudio()) {
			let tries = 0;
			const retry = setInterval(() => {
				if (startPopupAudio() || ++tries > 25) clearInterval(retry);
			}, 50);
		}

		pollId = setInterval(() => {
			try {
				if (localStorage.getItem(killKey)) killPopup();
			} catch (e) { clearInterval(pollId); }
		}, 500);

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				try { localStorage.setItem(killKey, Date.now().toString()); } catch (e) {}
				killPopup();
			}
		});

		return;
	}

	// -------------------------------------------------------------------------
	// MAIN WINDOW MODE: spawn and move all popups
	// -------------------------------------------------------------------------
	let payloadActive = false;
	let windows = [];
	let spawnTimer = null;
	let moveRequestId = null;
	let lastMoveTime = 0;
	let pollKillId = null;
	const WIN_W = 500;
	const WIN_H = 400;
	const SPAWN_INTERVAL = 2000;

	function getKillKey() { return 'ik_' + sessionId; }
	function signalKill() { try { localStorage.setItem(getKillKey(), Date.now().toString()); } catch (e) {} }
	function clearKillSignal() { try { localStorage.removeItem(getKillKey()); } catch (e) {} }

	function doMainCleanup() {
		if (!payloadActive) return;
		payloadActive = false;
		if (spawnTimer) { clearInterval(spawnTimer); spawnTimer = null; }
		if (moveRequestId) { cancelAnimationFrame(moveRequestId); moveRequestId = null; }
		if (pollKillId) { clearInterval(pollKillId); pollKillId = null; }
		audioStop();
		windows.forEach(s => { try { if (!s.win.closed) s.win.close(); } catch (e) {} });
		windows = [];
		hideKillSwitch();
	}

	function triggerPopupAudio(win) {
		if (!win || win.closed) return;
		try {
			const a = win.document.getElementById('youare-audio');
			if (a) { a.currentTime = 0; a.play().catch(() => {}); }
		} catch (e) { setTimeout(() => triggerPopupAudio(win), 100); }
	}

	function getDesktopBounds() {
		const sw = screen.width || 1920;
		const sh = screen.height || 1080;
		// Give a massive canvas so secondary monitors are covered in all directions
		let minX = -sw * 4;
		let minY = -sh * 4;
		let maxX = sw * 5;
		let maxY = sh * 5;
		if (typeof screen.left === 'number')       minX = Math.min(minX, screen.left - sw * 3);
		if (typeof screen.top === 'number')        minY = Math.min(minY, screen.top  - sh * 3);
		if (typeof screen.availLeft === 'number')  minX = Math.min(minX, screen.availLeft - sw * 3);
		if (typeof screen.availTop === 'number')   minY = Math.min(minY, screen.availTop  - sh * 3);
		if (typeof screen.width === 'number')       maxX = Math.max(maxX, (screen.left || 0) + screen.width  + sw * 3);
		if (typeof screen.height === 'number')    maxY = Math.max(maxY, (screen.top  || 0) + screen.height + sh * 3);
		if (typeof screen.availWidth === 'number')  maxX = Math.max(maxX, (screen.availLeft || 0) + screen.availWidth  + sw * 3);
		if (typeof screen.availHeight === 'number') maxY = Math.max(maxY, (screen.availTop  || 0) + screen.availHeight + sh * 3);
		return { minX, minY, maxX, maxY };
	}

	function makeBehavior() {
		// Mix of movement personalities
		const r = Math.random();
		if (r < 0.45) {
			// Rapid chaotic: very fast, frequent zig-zags
			return { speedMin: 18, speedMax: 35, turnChance: 0.08, wiggle: 0.6, label: 'rapid' };
		} else if (r < 0.70) {
			// Fast smooth: fast but straighter
			return { speedMin: 14, speedMax: 24, turnChance: 0.02, wiggle: 0.15, label: 'fast' };
		} else if (r < 0.85) {
			// Jittery: medium speed, lots of twitching
			return { speedMin: 8, speedMax: 16, turnChance: 0.12, wiggle: 1.2, label: 'jitter' };
		} else {
			// Drifter: slow, gentle curves
			return { speedMin: 5, speedMax: 10, turnChance: 0.015, wiggle: 0.25, label: 'slow' };
		}
	}

	function createPopup() {
		try {
			const b = getDesktopBounds();
			const x = b.minX + Math.floor(Math.random() * Math.max(1, b.maxX - b.minX - WIN_W));
			const y = b.minY + Math.floor(Math.random() * Math.max(1, b.maxY - b.minY - WIN_H));
			const url = '/moron?session=' + encodeURIComponent(sessionId);

			const win = window.open(
				url,
				'_blank',
				`width=${WIN_W},height=${WIN_H},left=${x},top=${y},toolbar=no,menubar=no,location=no,status=no,resizable=yes,scrollbars=no`
			);

			if (win) {
				const behavior = makeBehavior();
				const state = {
					win: win,
					// Position
					x: x,
					y: y,
					// Movement
					angle: Math.random() * Math.PI * 2,
					speed: behavior.speedMin + Math.random() * (behavior.speedMax - behavior.speedMin),
					vx: 0,
					vy: 0,
					// Behavior config
					behavior: behavior,
					// Random per-frame twitch accumulator
					acc: 0
				};
				windows.push(state);

				triggerPopupAudio(win);
				win.addEventListener('load', () => triggerPopupAudio(win));
			}
		} catch (e) {}
	}

	function moveWindows() {
		if (!payloadActive) return;

		const now = performance.now();
		if (now - lastMoveTime < 16) {
			moveRequestId = requestAnimationFrame(moveWindows);
			return;
		}
		lastMoveTime = now;

		const b = getDesktopBounds();

		windows.forEach(state => {
			try {
				if (state.win.closed) return;

				const behavior = state.behavior;

				// Accumulate per-frame chaos
				state.acc++;

				// Wiggle the heading slightly every frame for erratic paths
				state.angle += (Math.random() - 0.5) * behavior.wiggle;

				// Periodically pick a new random trajectory
				if (Math.random() < behavior.turnChance) {
					state.angle = Math.random() * Math.PI * 2;
					state.speed = behavior.speedMin + Math.random() * (behavior.speedMax - behavior.speedMin);
				}

				// Convert polar to cartesian
				state.vx = Math.cos(state.angle) * state.speed;
				state.vy = Math.sin(state.angle) * state.speed;

				state.x += state.vx;
				state.y += state.vy;

				// Bounce off bounds with a completely random new direction
				let bounced = false;
				if (state.x <= b.minX) { state.x = b.minX; bounced = true; }
				if (state.y <= b.minY) { state.y = b.minY; bounced = true; }
				if (state.x + WIN_W >= b.maxX)  { state.x = b.maxX - WIN_W;  bounced = true; }
				if (state.y + WIN_H >= b.maxY) { state.y = b.maxY - WIN_H; bounced = true; }

				if (bounced) {
					// Pick a random direction that points away from the wall
					state.angle = Math.random() * Math.PI * 2;
					state.speed = behavior.speedMin + Math.random() * (behavior.speedMax - behavior.speedMin);
					// Nudge away from edge
					state.x += Math.cos(state.angle) * 12;
					state.y += Math.sin(state.angle) * 12;
				}

				state.win.moveTo(Math.round(state.x), Math.round(state.y));
			} catch (e) {}
		});

		windows = windows.filter(w => { try { return !w.win.closed; } catch (e) { return false; } });
		moveRequestId = requestAnimationFrame(moveWindows);
	}

	function startPayload() {
		if (payloadActive) return;
		payloadActive = true;
		clearKillSignal();
		showKillSwitch();

		// Burst-open several windows immediately in the click handler
		// (browsers allow multiple popups when opened synchronously from user gesture)
		for (let i = 0; i < 4; i++) {
			createPopup();
		}

		// Keep spawning more every 2 seconds
		spawnTimer = setInterval(() => {
			if (payloadActive) createPopup();
		}, SPAWN_INTERVAL);

		moveWindows();

		// Listen for kill from any popup
		pollKillId = setInterval(() => {
			try {
				if (localStorage.getItem(getKillKey())) doMainCleanup();
			} catch (e) { if (pollKillId) clearInterval(pollKillId); }
		}, 500);
	}

	function stopPayload() {
		signalKill();
		doMainCleanup();
	}

	let killSwitchEl = null;
	function showKillSwitch() {
		if (killSwitchEl) return;
		killSwitchEl = document.createElement('div');
		killSwitchEl.style.cssText = 'position:fixed;bottom:14px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.9);color:#fff;padding:10px 20px;border-radius:8px;font-family:"Times New Roman",serif;font-size:15px;z-index:99999;pointer-events:none;user-select:none;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
		killSwitchEl.textContent = 'Press ESC to stop';
		document.body.appendChild(killSwitchEl);
	}
	function hideKillSwitch() {
		if (killSwitchEl) { killSwitchEl.remove(); killSwitchEl = null; }
	}

	document.addEventListener('keydown', (e) => { if (e.key === 'Escape') stopPayload(); });
	container.addEventListener('click', startPayload, { once: true });
})();
