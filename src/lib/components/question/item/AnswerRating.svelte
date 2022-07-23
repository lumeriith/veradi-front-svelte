<script>
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let rating = -1;

	let isConfirmOpen = false;
	let hoverRating = 3;

	function hoverOutOfStars() {
		if (isConfirmOpen) return;
		hoverRating = 3;
	}

	function hoverInStar(i) {
		if (isConfirmOpen) return;
		hoverRating = i + 1;
	}

	function clickStar(i) {
		hoverRating = i + 1;
		isConfirmOpen = true;
	}

	function giveRating() {
		dispatch('submit', hoverRating);
		isConfirmOpen = false;
	}

	function cancelRating() {
		isConfirmOpen = false;
		hoverRating = 3;
	}
</script>

<div class="tw-flex tw-gap-2 tw-items-center">
	{#if rating > 0}
		<span class="tw-opacity-50 tw-text-sm">평가해주셔서 감사합니다.</span>
		<span class="tw-flex tw-text-lg tw-text-[#ffc400] tw-opacity-70">
			{#each [0, 1, 2, 3, 4] as i (i)}
				<div>
					{#if rating > i}
						<Icon icon="ant-design:star-filled" />
					{:else}
						<Icon icon="ant-design:star-outlined" />
					{/if}
				</div>
			{/each}
		</span>
	{:else}
		<span class="tw-opacity-60 tw-text-sm">답변에 만족하시나요?</span>
		<span class="tw-flex tw-text-lg tw-text-[#ffc400]" on:mouseleave={hoverOutOfStars}>
			{#each [0, 1, 2, 3, 4] as i (i)}
				<div
					class="tw-cursor-pointer"
					on:mouseenter={() => hoverInStar(i)}
					on:click={() => clickStar(i)}
				>
					{#if hoverRating > i}
						<Icon icon="ant-design:star-filled" />
					{:else}
						<Icon icon="ant-design:star-outlined" />
					{/if}
				</div>
			{/each}
		</span>
	{/if}
</div>

{#if isConfirmOpen}
	<div class="tw-text-sm tw-flex tw-gap-3 tw-ml-2">
		<div class="tw-flex tw-gap-2">
			<button on:click={giveRating}>별점주기</button>
			<button on:click={cancelRating}>취소</button>
		</div>
	</div>
{/if}

<style>
	button {
		color: var(--book-qna-primary);
		text-decoration: underline;
	}

	button:hover {
		filter: brightness(1.2);
	}

	button:active {
		filter: brightness(0.9);
	}
</style>
