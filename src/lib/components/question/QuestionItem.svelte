<script>
	import MultiClamp from '$lib/components/MultiClamp.svelte';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import BookQnaCommentForm from './item/CommentForm.svelte';
	import BookQnaQuestionItemContent from './item/QuestionItemContent.svelte';
	import BookQnaQuestionMark from './item/QuestionMark.svelte';

	export let item = { id: 0, title: '', answers: 0, favorite: false };

	$: isFavorite = item.favorite.seconds > 0;
	console.log(item);
	let isExpanded = false;

	let isHover = false;
	let isActive = false;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function clickFavorite(e) {
		e.stopPropagation();
		dispatch('favoriteChange');
		isFavorite = !isFavorite;
	}

	const dispatch = createEventDispatcher();
</script>

<div
	class="item tw-rounded-lg tw-p-4 {isHover && !isExpanded ? 'hover' : ''} {isActive && !isExpanded
		? 'active'
		: ''}"
	style="border: 2px solid #9994"
>
	<header
		class="tw-flex tw-flex-row tw-items-center tw-cursor-pointer -tw-m-4 tw-p-4"
		on:click={toggleExpand}
		on:mouseenter={() => (isHover = true)}
		on:mouseleave={() => (isHover = false)}
		on:mousedown={() => (isActive = true)}
		on:mouseup={() => (isActive = false)}
	>
		<div
			class="tw-text-lg tw-font-semibold tw-overflow-hidden tw-flex tw-items-center tw-gap-1 tw-mr-3"
		>
			<BookQnaQuestionMark />
			<div class="tw-ml-1">
				{#if isExpanded}
					<div>{item.title}</div>
				{:else}
					<MultiClamp clamp={1}>{item.title}</MultiClamp>
				{/if}
			</div>
		</div>
		<div class="tw-ml-auto tw-flex tw-items-center">
			<button class="tw-text-lg tw-mr-2 {isFavorite ? 'active' : ''}" on:click={clickFavorite}>
				{#if isFavorite}
					<Icon icon="codicon:heart-filled" />
				{:else}
					<Icon icon="codicon:heart" />
				{/if}
			</button>
			<div class="tw-min-w-[55px] tw-text-center">
				{#if item.answers}
					<span style="color: var(--book-qna-primary)">답변 ({item.answers})</span>
				{:else}
					<span>답변대기</span>
				{/if}
			</div>
		</div>

		{#if isExpanded}
			<Icon class="tw-ml-4 tw-shrink-0" icon="akar-icons:chevron-up" />
		{:else}
			<Icon class="tw-ml-4 tw-shrink-0" icon="akar-icons:chevron-down" />
		{/if}
	</header>
	{#if isExpanded}
		<div class="tw-h-4" />
		<main class="tw-whitespace-pre-line">
			<BookQnaQuestionItemContent id={item.id} />
			<div class="tw-h-8" />
			<div class="tw-ml-7">
				<BookQnaCommentForm />
			</div>
		</main>
	{/if}
</div>

<style>
	.item {
		transition: background-color 0.1s;
	}

	.item.hover {
		background-color: #8881;
	}

	.item.active {
		background-color: #8883;
	}

	button {
		color: #ff676777;
		transition: color 0.1s;
	}

	button:hover,
	button.active {
		color: #ff4647;
	}
</style>
