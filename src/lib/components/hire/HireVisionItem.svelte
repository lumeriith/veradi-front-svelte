<script>
	export let img = '';
	export let title = '';
	export let content = '';

	let box = null;

	let isOpen = false;

	function getAspectRatio() {
		return box.clientHeight / box.clientWidth;
	}

	function mouseEnter() {
		let ratio = getAspectRatio();
		if (ratio < 0.9) return;
		isOpen = true;
	}

	function mouseLeave() {
		let ratio = getAspectRatio();
		if (ratio < 0.9) return;
		isOpen = false;
	}

	function click() {
		let ratio = getAspectRatio();
		if (ratio > 0.9) return;
		isOpen = !isOpen;
	}
</script>

<div
	class="tw-relative tw-w-full tw-aspect-[4/3] sm:tw-h-auto sm:tw-aspect-square tw-overflow-hidden tw-rounded-2xl tw-isolate"
	bind:this={box}
	on:mouseenter={mouseEnter}
	on:mouseleave={mouseLeave}
	on:click={click}
>
	<img
		class="-tw-z-20 tw-object-cover tw-w-full tw-h-full tw-absolute {isOpen
			? 'tw-blur-md tw-scale-[1.2]'
			: ''}"
		style="transition: filter 0.5s, transform 0.5s; will-change: transform;"
		src={img}
		alt=""
	/>
	<div
		class="-tw-z-10 tw-absolute tw-inset-0 tw-bg-white {isOpen ? 'tw-opacity-60' : 'tw-opacity-0'}"
		style="transition: opacity 0.5s"
	/>
	<div class="tw-z-10 tw-p-6 sm:tw-p-5 md:tw-p-7">
		<header class="tw-font-bold tw-text-xl sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-mb-5">
			{#each title.split('\n') as t}
				<div>{t}</div>
			{/each}
		</header>
		<main
			class="tw-font-semibold tw-text-md tw-flex tw-flex-col
      {isOpen ? 'tw-gap-2 tw-opacity-100' : 'tw-gap-0 tw-opacity-0'}"
			style="transition: gap 0.5s, opacity 0.5s"
		>
			{#each content.split('\n') as c}
				<div>{c}</div>
			{/each}
		</main>
	</div>
</div>
