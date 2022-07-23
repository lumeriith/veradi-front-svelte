<script>
	import { getTestString, testLoadData } from '$lib/utils/testData';

	import { Jumper } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';
	import AnswerMark from './AnswerMark.svelte';
	import QuestionMark from './QuestionMark.svelte';
	import PhotoList from './PhotoList.svelte';
	import ItemFooter from './ItemFooter.svelte';
	import { getBookQuestionReplies } from '$lib/firebase/bookQuestions';
	import { isLoggedIn } from '$lib/store';

	export let id = '';

	let request = new Promise(() => {});
	$: {
		if ($isLoggedIn) {
			request = getBookQuestionReplies(id);
		}
	}
</script>

{#await request}
	<div class="tw-flex tw-justify-center tw-items-center">
		<Jumper size={40} color="var(--book-qna-primary)" />
	</div>
{:then response}
	<div class="tw-flex tw-flex-col tw-gap-9" in:fade={{ duration: 200 }}>
		{#each response as reply, i}
			{#if i === 0}
				<div class="tw-flex">
					<div class="tw-pt-1 tw-ml-8 tw-flex-1" style="line-height: 160%;">
						{reply.content}
						<PhotoList photos={reply.photos} />
						<ItemFooter {reply} />
					</div>
				</div>
			{:else}
				<div class="tw-flex">
					<div class="tw-w-7">
						{#if reply.isQuestion}
							<QuestionMark />
						{:else}
							<AnswerMark />
						{/if}
					</div>
					<div class="tw-pt-1 tw-ml-1 tw-flex-1" style="line-height: 160%;">
						{reply.content}
						<PhotoList photos={reply.photos} />
						<ItemFooter {reply} showRating={!reply.isQuestion} />
					</div>
				</div>
			{/if}
		{/each}
	</div>
{/await}
