<script>
	import { page } from '$app/stores';
	import { animTrigger, animFly } from '$lib/utils/scrollEffects';
	import veradiUrls from '$lib/data/veradiUrls';

	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import TabButtonItem from '$lib/components/TabButtonItem.svelte';
	import SubmitQuestionSection from '$lib/components/qna/SubmitQuestionSection.svelte';
	import MyQuestionsSection from '$lib/components/qna/MyQuestionsSection.svelte';
	import StudySection from '$lib/components/qna/StudySection.svelte';
	import MyBooksSection from '$lib/components/qna/MyBooksSection.svelte';

	const buttons = [
		{ name: '전체', href: veradiUrls.qna.all },
		{ name: '질문하기', href: veradiUrls.qna.submit },
		{ name: '내가 쓴 질문', href: veradiUrls.qna.myquestions },
		{ name: '학습/입시', href: veradiUrls.qna.study },
		{ name: '나의 문제집', href: veradiUrls.qna.mybooks }
	];

	const flySettings = { y: 30, duration: 400 };

	$: showSubmit = $page.params.section === 'all' || $page.params.section === 'submit';
	$: showMyQuestions = $page.params.section === 'all' || $page.params.section === 'myquestions';
	$: showStudy = $page.params.section === 'all' || $page.params.section === 'study';
	$: showMyBooks = $page.params.section === 'all' || $page.params.section === 'mybooks';
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
					<SubmitQuestionSection />
				</div>
			{/if}

			{#if showMyQuestions}
				<div use:animFly={flySettings} use:animTrigger>
					<MyQuestionsSection />
				</div>
			{/if}

			{#if showStudy}
				<div use:animFly={flySettings} use:animTrigger>
					<StudySection />
				</div>
			{/if}

			{#if showMyBooks}
				<div use:animFly={flySettings} use:animTrigger>
					<MyBooksSection />
				</div>
			{/if}
		</NarrowContainer>
	{/key}
</div>

<div class="tw-h-24" />
