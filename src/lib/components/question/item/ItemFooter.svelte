<script>
	import { dateAndTime } from '$lib/utils/dateToString';
	import { Tooltip } from 'sveltestrap';

	import AnswerRating from './AnswerRating.svelte';
	export let reply = {
		author: '',
		content: '',
		isQuestion: true,
		modifyDate: { seconds: 0, nanoseconds: 0 },
		postDate: { seconds: 0, nanoseconds: 0 }
	};
	export let showRating = false;
	export let showEditDelete = false;

	const now = new Date();
	let modifiedTextTarget;
	$: postDate = new Date(reply.postDate.seconds * 1000);
	$: modifyDate = new Date(reply.modifyDate.seconds * 1000);
	$: isModified = reply.modifyDate.seconds !== reply.postDate.seconds;
</script>

<div class="tw-flex tw-mt-1 tw-items-center">
	{#if showRating}
		<AnswerRating rating={reply.rating} />
	{:else}
		<div class="tw-flex tw-gap-2 tw-text-sm">
			<button>수정</button>
			<button>삭제</button>
		</div>
	{/if}
	<div class="tw-flex-1" />
	<div class="tw-opacity-60 tw-text-sm">{dateAndTime(postDate)}</div>
	{#if isModified}
		<div bind:this={modifiedTextTarget} class="tw-opacity-60 tw-text-sm">&nbsp;(수정됨)</div>
		<Tooltip target={modifiedTextTarget} placement="top">
			{dateAndTime(modifyDate)}
		</Tooltip>
	{/if}
</div>

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
