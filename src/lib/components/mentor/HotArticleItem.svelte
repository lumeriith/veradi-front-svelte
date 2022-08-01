<script>
	export let category = '';
	export let title = '';
	export let content = '';
	export let href = '#';
</script>

<a
	class="tw-flex-1 tw-px-5 tw-py-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-text-center tw-bg-[#f5f5f5] tw-rounded-xl"
	{href}
>
	<div class="tw-text-sm tw-font-semibold tw-text-[#57a2e3]">{category}</div>
	<header class="tw-font-heading tw-text-lg tw-h-12">{title}</header>
	<main class="tw-h-24 tw-my-2">
		<div
			class="tw-text-sm tw-text-[#575d5e] tw-overflow-hidden"
			style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; line-height: 180%;"
		>
			{content}
		</div>
	</main>
	<div class="tw-underline">더보기</div>
</a>

<style>
	a {
		color: #363636;
		text-decoration: none;
		transition: transform 0.1s, box-shadow 0.1s, filter 0.1s;
	}

	a:hover {
		transform: scale(1.02);
		box-shadow: 0 0 16px #0001, 0 0 2px #0003;
		filter: brightness(1.03);
	}

	a:active {
		transform: scale(1.01);
		filter: brightness(0.99);
	}
</style>
