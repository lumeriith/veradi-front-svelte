<script>
	import { getTestString, testLoadData } from '$lib/utils/testData';

	import { Jumper } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';
	import BookQnaAnswerMark from './AnswerMark.svelte';
	import AnswerRating from './AnswerRating.svelte';
	import BookQnaQuestionMark from './QuestionMark.svelte';

	export let id = '';

	let request = testLoadData({
		title: '',
		content:
			id +
			'번째 게시물입니다. ' +
			getTestString('question', 30, 30) +
			'\n\n' +
			getTestString('question', 5, 30),
		photos: [],
		comments: [
			{
				id: 912,
				type: 1,
				content: getTestString('answer', 10, 60) + '\n\n' + getTestString('answer', 10, 80),
				photos: [],
				rating: 4
			},
			{
				id: 911,
				type: 0,
				content: getTestString('question', 8, 15),
				rating: -1
			},
			{
				id: 918,
				type: 1,
				content: getTestString('answer', 10, 40),
				photos: [],
				rating: -1
			}
		]
	});

	function isCommentQuestion(c) {
		return c.type === 0;
	}

	function isCommentAnswer(c) {
		return c.type === 1;
	}
</script>

{#await request}
	<div class="tw-flex tw-justify-center tw-items-center">
		<Jumper size={40} color="var(--book-qna-primary)" />
	</div>
{:then response}
	<div class="tw-flex tw-flex-col tw-gap-8" in:fade={{ duration: 200 }}>
		<div class="tw-ml-8" style="line-height: 160%;">
			{response.content}
		</div>
		{#each response.comments as comment}
			<div class="tw-flex">
				<div class="tw-w-7">
					{#if isCommentQuestion(comment)}
						<BookQnaQuestionMark />
					{:else}
						<BookQnaAnswerMark />
					{/if}
				</div>
				<div class="tw-pt-1 tw-ml-1 tw-flex-1" style="line-height: 160%;">
					{comment.content}
					{#if isCommentAnswer(comment)}
						<AnswerRating {comment} />
					{/if}
				</div>
			</div>
		{/each}
	</div>
{/await}
