<script>
	import { animTrigger, animItem } from '$lib/utils/scrollEffects';
	import { testLoadData } from '$lib/utils/testData';
	import { Jumper } from 'svelte-loading-spinners';
	import QuestionItem from './QuestionItem.svelte';
	import QuestionPagination from './QuestionPagination.svelte';

	const SAMPLE_ARTICLES = [
		{
			id: 0,
			title: '강좌 수강 및 학습 중 궁금한 점은 어디에 질문할 수 있나요?',
			answers: 2,
			favorite: false
		},
		{
			id: 1,
			title: '앞으로 2, 3학기에는 어떤 커리큘럼인지 궁금합니다!',
			answers: 12,
			favorite: false
		},
		{
			id: 2,
			title:
				'전기추1 p.117 첫번째 문제 질문드립니다. 강의에서 "선지5의 새로운 소비층으로 등장한 독자들 = 지문의 여성들" 이라고 설명하셨는데, 지문의 선후관계 : 금속활자 인쇄술의보급 -> 책생산 증가 -> 아무튼 질문 제목을 엄청 길게 해버릴꺼야 이야아ㅏ아ㅏㄴㄹㄴ암ㅎㄴㅁㅇㅎ로ㅓㅈ허ㅗㅈㅂㄱ',
			answers: 0,
			favorite: false
		},
		{
			id: 3,
			title: '도형의 필연성 특강 구매했는데 교재는 어디있죠??',
			answers: 1,
			favorite: true
		},
		{
			id: 4,
			title:
				'New 융합형 문학 독법 훈련’(문학복합) 강의에 3강 이후에 교재는 첨부가 안된거 같습니다!',
			answers: 0,
			favorite: false
		},
		{
			id: 5,
			title: '김강민 선생님의 런칭을 환영합니다♥',
			answers: 0,
			favorite: true
		}
	];

	export let bookId = 0;
	export let start = 0;
	export let step = 5;
	export let showFavorites = false;

	$: request = fetchQuestionList(start, step, showFavorites, bookId);
	function fetchQuestionList(start, step, showFavorites, bookId) {
		return testLoadData(SAMPLE_ARTICLES);
	}
</script>

<div>
	<div class="tw-mb-3 tw-font-semibold">
		<span style="color: var(--book-qna-primary)">10</span>개의 질문
	</div>
	<div class="tw-flex tw-flex-col tw-gap-3 tw-mb-4">
		{#await request}
			<div class="tw-flex tw-justify-center tw-items-center tw-h-80 tw-bg-[#9991] tw-rounded-xl">
				<Jumper size={40} color="var(--book-qna-primary)" />
			</div>
		{:then response}
			{#each response as r}
				<div use:animTrigger use:animItem>
					<QuestionItem item={r} />
				</div>
			{/each}
		{/await}
	</div>
	<QuestionPagination />
</div>
