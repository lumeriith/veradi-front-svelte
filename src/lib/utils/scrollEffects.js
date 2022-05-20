import './scrollEffects.css';

let io = null;

function observationCallback(entries) {
	entries.forEach((entry) => {
		const target = entry.target;
		if (entry.isIntersecting && !target.classList.contains('se-trigger')) {
			target.classList.add('se-trigger');
		} else if (!entry.isIntersecting && target.classList.contains('se-trigger')) {
			target.classList.remove('se-trigger');
		}
	});
}

function initObserver() {
	if (io) return;
	io = new IntersectionObserver(observationCallback, {
		rootMargin: '-50px'
	});
}

function startObserving(target) {
	initObserver();
	io.observe(target);
}

function stopObserving(target) {
	io.unobserve(target);
}

export function animTrigger(node) {
	startObserving(node);
	return {
		destroy: () => stopObserving(node)
	};
}

function valOrDefault(val, defVal) {
	if (typeof val !== 'undefined') return val;
	return defVal;
}

// ============= Animation Code =============
// 새 애니메이션 추가하려면 이 아래에서 하시면 됩니다.

export function animFlyUp(node, settings = { delay: 0, duration: 500, offset: 30 }) {
	node.classList.add('se-animated');
	node.classList.add('se-flyup');
	node.style.setProperty('--se-delay', valOrDefault(settings.delay, 0) + 'ms');
	node.style.setProperty('--se-duration', valOrDefault(settings.duration, 500) + 'ms');
	node.style.setProperty('--se-offset', valOrDefault(settings.offset, 30) + 'px');
}

// ============== Preset Code ================
// 애니메이션 자체가 아닌 Semantic한 의미의 프리셋이 정의된 공간입니다.

export function animHeading(node, index = 0) {
	return animFlyUp(node, { delay: index * 200 });
}

export function animBody(node, index = 0) {
	return animFlyUp(node, { delay: index * 125 });
}
