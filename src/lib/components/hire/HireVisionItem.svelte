<script>
	export let img = '';
	export let title = '';
	export let content = '';

	let isOpen = false;

	function open() {
		isOpen = true;
	}

	function close() {
		isOpen = false;
	}
</script>

<div
	class="tw-relative tw-aspect-square tw-overflow-hidden tw-rounded-2xl"
	on:mouseenter={open}
	on:mouseleave={close}
>
	<img
		class="-tw-z-20 tw-object-cover tw-h-full tw-absolute {isOpen
			? 'tw-blur-md tw-scale-[1.2]'
			: ''}"
		style="transition: filter 0.5s, transform 0.5s; will-change: transform;"
		src={img}
		alt=""
	/>
	<div
		class="-tw-z-10 tw-absolute tw-inset-0 tw-bg-white {isOpen ? 'tw-opacity-50' : 'tw-opacity-0'}"
		style="transition: opacity 0.5s"
	/>
	<div class="tw-z-10 tw-p-7">
		<header class="tw-font-bold tw-text-2xl sm:tw-text-xl lg:tw-text-2xl tw-mb-4">
			{#each title.split('\n') as t}
				<div>{t}</div>
			{/each}
		</header>
		<main
			class="tw-font-semibold tw-text-md tw-flex tw-flex-col {isOpen
				? 'tw-gap-2 tw-opacity-100'
				: 'tw-gap-0 tw-opacity-0'}"
			style="transition: gap 0.5s, opacity 0.5s"
		>
			{#each content.split('\n') as c}
				<div>{c}</div>
			{/each}
		</main>
	</div>
</div>
