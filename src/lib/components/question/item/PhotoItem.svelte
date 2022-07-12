<script>
	import { fade, scale } from 'svelte/transition';

	export let photo = {
		url: '',
		thumb: ''
	};

	function clickImage(e) {
		e.preventDefault();
		isOpen = true;
	}

	let isOpen = false;
</script>

<a class="tw-w-32 tw-h-32 tw-overflow-hidden" href={photo.url} on:click={clickImage}>
	<img src={photo.thumb} class="tw-w-full tw-h-full tw-object-contain" alt="" />
</a>

{#if isOpen}
	<div class="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-justify-center tw-items-center">
		<div
			transition:fade={{ duration: 100 }}
			class="tw-bg-[#9998] tw-backdrop-blur-sm tw-absolute tw-inset-0"
			on:mousedown={() => (isOpen = false)}
		/>
		<img
			transition:scale={{ duration: 100, start: 0.8 }}
			class="tw-z-10 tw-max-w-[90vw] tw-max-h-[90vh] tw-shadow-2xl"
			src={photo.url}
			alt=""
		/>
	</div>
{/if}

<style>
	a {
		background-color: #9992;
		transition: transform 0.075s, background-color 0.1s;
		cursor: pointer;
	}

	a:hover {
		transform: scale(1.05);
		background-color: #9994;
	}

	a:active {
		transform: scale(1);
		background-color: #9998;
	}
</style>
