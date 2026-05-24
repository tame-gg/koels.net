let container = document.querySelector('#youare-container');

let audio = document.querySelector('#youare-audio');
let ovlap = document.querySelector('#youare-overlap');
let micon = document.querySelector('#youare-micon');

// Overlap global. Can probably be done better.
// https://github.com/Endermanch/youareanidiot.cc 🤫
let overlap = false;

function audioPlay() {
	if (!overlap) {
		audio.currentTime = 0;
		audio.play();
	}
	else {
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
	if (
		audio.duration > 0 && audio.paused &&
		ovlap.duration > 0 && ovlap.paused
	) {
		audioPlay();
	}
	else {
		audioStop();
	}
}

/* 
 * [Aug 2023] Finally, after 3 years have passed, I made the overlapping mechanism.
 * Audio overlapping is necessary for historic accuracy. The original flash version used to randomly overlap the song over itself.
 * I also think it sounds funnier and less respectful when overlapped.
 * Despite the constants .45 and .5, the JS audio jank at times makes it sound nice and random.
 */
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
container.addEventListener('click', () => {
	container.classList.remove('clicky');
});

micon.addEventListener('click', audioSwitch);

// --- SAFE PAYLOAD: Real bouncing popup windows (safer than the original) ---
// Spawns actual popup windows that multiply and bounce around the screen.
// Each popup is the full moron page with audio auto-playing.
// Press ESC at any time to close all windows and stop the payload.
(function() {
	// Detect if this is the main page or a popup
	const urlParams = new URLSearchParams(window.location.search);
	const urlSession = urlParams.get('session');
	const isMain = (window.opener === null && !urlSession);
	
	// Session ID for coordinating kills across windows
	let sessionId;
	if (isMain) {
		sessionId = 'i_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 5);
	} else {
		sessionId = urlSession || 'orphan';
	}

	let payloadActive = false;
	let windows = [];
	let spawnTimer = null;
	let moveRequestId = null;
	let lastMoveTime = 0;
	let pollKillId = null;
	const WIN_W = 500;
	const WIN_H = 400;
	const MAX_CHILDREN = 3; // Max children each window spawns

	// --- Auto-play audio in popups ---
	if (!isMain) {
		// Popup windows try to auto-play immediately
		// (Browsers usually allow autoplay in windows opened via user gesture)
		try {
			if (audio) {
				audio.currentTime = 0;
				const p = audio.play();
				if (p !== undefined) p.catch(() => {});
			}
		} catch (e) {}
		
		// Setup overlap tracking for the popup's own audio
		try {
			if (audio && ovlap) {
				audio.addEventListener('timeupdate', audioOverlap);
				ovlap.addEventListener('timeupdate', audioOverlap);
			}
		} catch (e) {}
	}

	// --- Global kill coordination via localStorage ---
	function getKillKey() {
		return 'ik_' + sessionId;
	}
	
	function signalKill() {
		try {
			localStorage.setItem(getKillKey(), Date.now().toString());
		} catch (e) {}
	}
	
	function checkKillSignal() {
		try {
			const val = localStorage.getItem(getKillKey());
			if (val) {
				const age = Date.now() - parseInt(val, 10);
				if (age < 30000) {
					stopPayload();
					try { window.close(); } catch (e) {}
				}
			}
		} catch (e) {}
	}
	
	function clearKillSignal() {
		try {
			localStorage.removeItem(getKillKey());
		} catch (e) {}
	}

	function startKillPolling() {
		if (pollKillId) return;
		pollKillId = setInterval(checkKillSignal, 250);
	}

	function createPopup() {
		if (!payloadActive) return;
		try {
			const x = Math.floor(Math.random() * Math.max(1, screen.availWidth - WIN_W));
			const y = Math.floor(Math.random() * Math.max(1, screen.availHeight - WIN_H));
			const url = '/moron?session=' + encodeURIComponent(sessionId);

			const win = window.open(
				url,
				'_blank',
				`width=${WIN_W},height=${WIN_H},left=${x},top=${y},toolbar=no,menubar=no,location=no,status=no,resizable=yes,scrollbars=no`
			);

			if (win) {
				windows.push({
					win: win,
					vx: (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 4),
					vy: (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 4)
				});
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

		windows.forEach(state => {
			try {
				if (state.win.closed) return;

				let sx = state.win.screenX !== undefined ? state.win.screenX : (state.win.screenLeft || 0);
				let sy = state.win.screenY !== undefined ? state.win.screenY : (state.win.screenTop || 0);
				let ww = state.win.outerWidth || WIN_W;
				let wh = state.win.outerHeight || WIN_H;

				sx += state.vx;
				sy += state.vy;

				if (sx <= 0) { sx = 0; state.vx = Math.abs(state.vx); }
				if (sy <= 0) { sy = 0; state.vy = Math.abs(state.vy); }
				if (sx + ww >= screen.availWidth) { sx = screen.availWidth - ww; state.vx = -Math.abs(state.vx); }
				if (sy + wh >= screen.availHeight) { sy = screen.availHeight - wh; state.vy = -Math.abs(state.vy); }

				state.win.moveTo(Math.floor(sx), Math.floor(sy));
			} catch (e) {}
		});

		// Clean up closed windows
		windows = windows.filter(w => {
			try { return !w.win.closed; } catch (e) { return false; }
		});

		moveRequestId = requestAnimationFrame(moveWindows);
	}

	function startPayload() {
		if (payloadActive) return;
		payloadActive = true;
		clearKillSignal();
		startKillPolling();
		showKillSwitch();

		let childrenSpawned = 0;
		
		// Spawn children every 2 seconds, up to MAX_CHILDREN
		spawnTimer = setInterval(() => {
			if (!payloadActive) return;
			if (childrenSpawned < MAX_CHILDREN) {
				createPopup();
				childrenSpawned++;
			} else {
				// Done spawning
				clearInterval(spawnTimer);
				spawnTimer = null;
			}
		}, 2000);

		// Popups also spawn one child immediately
		if (!isMain) {
			createPopup();
			childrenSpawned++;
		}

		moveWindows();
	}

	function stopPayload() {
		if (!payloadActive) return;
		payloadActive = false;
		signalKill();

		if (spawnTimer) {
			clearInterval(spawnTimer);
			spawnTimer = null;
		}
		if (moveRequestId) {
			cancelAnimationFrame(moveRequestId);
			moveRequestId = null;
		}
		if (pollKillId) {
			clearInterval(pollKillId);
			pollKillId = null;
		}

		windows.forEach(state => {
			try {
				if (!state.win.closed) {
					state.win.close();
				}
			} catch (e) {}
		});
		windows = [];

		hideKillSwitch();
	}

	// UI: Kill switch hint
	let killSwitchEl = null;
	function showKillSwitch() {
		if (killSwitchEl) return;
		killSwitchEl = document.createElement('div');
		killSwitchEl.style.position = 'fixed';
		killSwitchEl.style.bottom = '14px';
		killSwitchEl.style.left = '50%';
		killSwitchEl.style.transform = 'translateX(-50%)';
		killSwitchEl.style.background = 'rgba(0, 0, 0, 0.9)';
		killSwitchEl.style.color = '#fff';
		killSwitchEl.style.padding = '10px 20px';
		killSwitchEl.style.borderRadius = '8px';
		killSwitchEl.style.fontFamily = "'Times New Roman', serif";
		killSwitchEl.style.fontSize = '15px';
		killSwitchEl.style.zIndex = '99999';
		killSwitchEl.style.pointerEvents = 'none';
		killSwitchEl.style.userSelect = 'none';
		killSwitchEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
		killSwitchEl.textContent = 'Press ESC to stop';
		document.body.appendChild(killSwitchEl);
	}

	function hideKillSwitch() {
		if (killSwitchEl) {
			killSwitchEl.remove();
			killSwitchEl = null;
		}
	}

	// Global ESC handler
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			stopPayload();
			try { window.close(); } catch (e) {}
		}
	});

	// Start payload
	if (isMain) {
		// Main page waits for user click
		container.addEventListener('click', startPayload, { once: true });
	} else {
		// Popup starts automatically after a tiny delay
		setTimeout(startPayload, 100);
	}
})();
