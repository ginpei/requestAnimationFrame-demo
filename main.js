const elTimeout = document.querySelector('.js-setTimeout');
const elRAF = document.querySelector('.js-requestAnimationFrame');

const interval = 1000;  // ms
const distance = 500;  // px
const startedAt = Date.now();

function animateWithSetTimeout() {
	const now = Date.now();
	const left = calcLeft(now);
	elTimeout.style.transform = `translateX(${left}px)`;
	setTimeout(animateWithSetTimeout, 1000 / 60);  // 60 fps (Actually no!)
}

function animateWithRequestAnimationFrame() {
	const now = Date.now();
	const left = calcLeft(now);
	elRAF.style.transform = `translateX(${left}px)`;
	requestAnimationFrame(animateWithRequestAnimationFrame);
}

function calcLeft(now) {
	const progress = (now - startedAt) % interval;
	const rate = progress / interval;
	const left = distance * rate;
	return left;
}

animateWithSetTimeout();
animateWithRequestAnimationFrame();
