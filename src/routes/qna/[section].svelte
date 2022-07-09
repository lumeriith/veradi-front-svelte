<script>
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import NewQuestionForm from '$lib/components/question/NewQuestionForm.svelte';
	import QuestionList from '$lib/components/question/QuestionList.svelte';
	import TabButtonItem from '$lib/components/TabButtonItem.svelte';
	import veradiUrls from '$lib/data/veradiUrls';
	import { page } from '$app/stores';

	import { animTrigger, animFly } from '$lib/utils/scrollEffects';
	import BookSelect from '$lib/components/qna/BookSelect.svelte';

	const buttons = [
		{ name: '전체', href: veradiUrls.qna.all },
		{ name: '질문하기', href: veradiUrls.qna.submit },
		{ name: '내가 쓴 질문', href: veradiUrls.qna.myquestions },
		{ name: '학습/입시', href: veradiUrls.qna.study },
		{ name: '나의 문제집', href: veradiUrls.qna.mybooks }
	];

	$: showSubmit = $page.params.section === 'all' || $page.params.section === 'submit';
	$: showMyQuestions = $page.params.section === 'all' || $page.params.section === 'myquestions';
	$: showStudy = $page.params.section === 'all' || $page.params.section === 'study';
	$: showMyBooks = $page.params.section === 'all' || $page.params.section === 'mybooks';

	let submitQuestionBookId = '';
	let myQuestionsBookId = '';

	const flySettings = { y: 30, duration: 400 };
</script>

<div style="--book-qna-primary: #5bb3ff; --book-qna-secondary: #ff0606">
	<header class="tw-flex tw-items-center tw-flex-col tw-my-16">
		<div class="tw-font-heading tw-text-4xl tw-relative tw-mb-4">
			안녕하세요, 박효신님
			<div class="tw-absolute -tw-left-4 -tw-right-4 tw-h-3 tw-bottom-1 -tw-z-10 tw-bg-[#d6efff]" />
		</div>
		<div class="tw-text-lg">활발한 소통으로 필요하거나 궁금했던 정보를 얻으세요.</div>
		<div class="tw-text-lg">
			베라디와의 1:1 상담으로 통해 혼자서는 해결하기 어려운 문제들을 풀어나갈 수 있도록
			도와드립니다.
		</div>
	</header>
	<div class="tw-flex tw-justify-center tw-flex-wrap tw-gap-x-4 tw-gap-y-2 tw-px-8">
		{#each buttons as { name, href }}
			<TabButtonItem {href}>{name}</TabButtonItem>
		{/each}
	</div>
	<div class="tw-h-16" />

	{#key $page.params.section}
		<NarrowContainer class="tw-flex tw-flex-col tw-gap-12">
			{#if showSubmit}
				<div use:animFly={flySettings} use:animTrigger>
					<header class="tw-font-heading tw-text-3xl tw-mb-1">질문하기</header>
					<div class="tw-text-lg tw-mb-5">베라디에게 자유롭게 질문해주세요.</div>
					<div class="tw-flex tw-justify-end tw-py-3">
						<BookSelect bind:bookId={submitQuestionBookId} />
					</div>
					<NewQuestionForm disabled={submitQuestionBookId === ''} />
				</div>
			{/if}

			{#if showMyQuestions}
				<div use:animFly={flySettings} use:animTrigger>
					<header class="tw-font-heading tw-text-3xl tw-mb-1">내가 쓴 질문</header>
					<div class="tw-flex tw-justify-end tw-py-3 -tw-mb-9">
						<BookSelect bind:bookId={myQuestionsBookId} />
					</div>
					<QuestionList showFavorites bookId={myQuestionsBookId} />
				</div>
			{/if}

			{#if showStudy}
				<div use:animFly={flySettings} use:animTrigger>
					<header class="tw-font-heading tw-text-3xl tw-mb-6">학습/입시</header>
					<div
						class="item tw-rounded-lg tw-p-4 tw-flex tw-flex-col tw-gap-1"
						style="border: 2px solid #9994"
					>
						{#each [1, 2, 3] as i}
							<div
								class="tw-border-b-2 tw-p-2 tw-font-bold tw-cursor-pointer"
								style="border: 2px 0 solid #9994"
							>
								학습/입시에 대한 글을 스크랩하고, 모아볼 수 있습니다. 클릭하면 해당 페이지로
								이동합니다.
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if showMyBooks}
				<div use:animFly={flySettings} use:animTrigger>
					<header class="tw-font-heading tw-text-3xl tw-mb-6">나의 문제집</header>
					<div class="item tw-rounded-lg tw-p-4" style="border: 2px solid #9994">
						<div class="tw-h-40" />
					</div>
				</div>
			{/if}
		</NarrowContainer>
	{/key}
</div>

<div class="tw-h-24" />
