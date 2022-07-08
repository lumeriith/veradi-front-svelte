<script>
	import { getTestString, testLoadData } from '$lib/utils/testData';
	import { comment } from 'postcss';

	import { Jumper } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';
	import BookQnaAnswerMark from './AnswerMark.svelte';
	import BookQnaQuestionMark from './QuestionMark.svelte';

	const comments = [
		{
			type: 1,
			content: getTestString('answer', 10, 60) + '\n\n' + getTestString('answer', 10, 80),
			photos: []
		},
		{
			type: 0,
			content: getTestString('question', 8, 15)
		},
		{
			type: 1,
			content: getTestString('answer', 10, 40),
			photos: []
		}
	];
</script>

{#await testLoadData(getTestString('question', 30, 30) + '\n\n' + getTestString('question', 5, 30))}
	<div class="tw-flex tw-justify-center tw-items-center">
		<Jumper size={40} color="var(--book-qna-primary)" />
	</div>
{:then data}
	<div class="tw-flex tw-flex-col tw-gap-6" in:fade={{ duration: 200 }}>
		<div class="tw-ml-8">
			{data}
		</div>
		{#each comments as comment}
			<div class="tw-flex">
				<div class="tw-w-7">
					{#if comment.type === 0}
						<BookQnaQuestionMark />
					{:else}
						<BookQnaAnswerMark />
					{/if}
				</div>
				<div class="tw-pt-1 tw-ml-1 tw-flex-1">{comment.content}</div>
			</div>
		{/each}
	</div>
{/await}
