<script>
	import { getTestString, testLoadData } from '$lib/utils/testData';
	import { comment } from 'postcss';

	import { Jumper } from 'svelte-loading-spinners';
	import { fade } from 'svelte/transition';
	import BookQnaAnswerMark from './BookQnaAnswerMark.svelte';
	import BookQnaQuestionMark from './BookQnaQuestionMark.svelte';

	const comments = [
		{
			type: 1,
			content:
				'학습 운영센터 > 공부 질문하기 게시판을 이용해주세요.\n※1:1게시판의 경우 원활한 답변이 이루어지지 않을 수 있습니다.',
			photos: []
		},
		{
			type: 0,
			content: '그러면 질문하기의 디자인은 어떤 식으로 구성이 되는 건가요?'
		},
		{
			type: 1,
			content:
				'그렇습니다. 질문 주신 해동 방식에 대해서는 다음과 같습니다.\n\n다문단으로 이루어진 답변입니다. The rows attribute specifies the visible height of a text area, in lines. Note: The size of a textarea can also be specified by the CSS height and width properties. 그러나 답변하기의 경우 구성이 다음과 같이 진행되며, 실제 사이즈는 시안 사이즈와 다를 수 있습니다. 해동 시 3개월 정도가 소요될 수 있으며, 이 점 유념하여 풀어주시면 되겠습니다.\n\n감사합니다.',
			photos: []
		}
	];
</script>

{#await testLoadData(getTestString(30, 30) + '\n\n' + getTestString(5, 30))}
	<div class="tw-flex tw-justify-center tw-items-center">
		<Jumper size={40} color="var(--book-qna-secondary)" />
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
