<script>
	import { animTrigger, animScale } from '$lib/utils/scrollEffects';

	import allBooks from '$lib/data/contents/books';
	import veradiUrls from '$lib/data/veradiUrls.js';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import TabButtons from '$lib/components/TabButtons.svelte';
	import ExamItem from './ExamItem.svelte';

	export let filterSubjectId = null;

	const tabs = [
		['전체', veradiUrls.contents.list.all],
		['수학', veradiUrls.contents.list.math],
		['화학', veradiUrls.contents.list.chemistry],
		['사회문화', veradiUrls.contents.list.socialculture],
		['생활과윤리', veradiUrls.contents.list.lifeethics],
		['생명과학', veradiUrls.contents.list.biology],
		['지구과학', veradiUrls.contents.list.earthscience]
	];

	$: books = allBooks.filter((ex) => !filterSubjectId || ex.subject === filterSubjectId);
</script>

<header class="tw-flex tw-items-center tw-flex-col tw-my-16">
	<div class="tw-font-heading tw-text-4xl tw-relative tw-mb-4">
		베라디 문제집
		<div class="tw-absolute -tw-left-4 -tw-right-4 tw-h-3 tw-bottom-1 -tw-z-10 tw-bg-[#d6efff]" />
	</div>
	<div class="tw-text-xl">베라디 전체 교재를 한눈에 살펴 보세요.</div>
</header>
<NarrowContainer
	class="tw-mb-8 tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 tw-items-center lg:tw-items-start"
>
	<div class="tw-text-xl tw-font-heading tw-relative lg:tw-pr-4 tw-hidden lg:tw-block">
		과목선택
		<div
			class="tw-absolute tw-w-0.5 tw-h-full tw-right-0 tw-top-0 tw-bg-[#cecece]"
			style="transform: scaleY(66%)"
		/>
	</div>

	<TabButtons buttons={tabs} class="lg:tw-max-w-2xl" />
</NarrowContainer>

<div class="tw-bg-[#f3f3f3]" use:animTrigger>
	<NarrowContainer
		class="tw-py-6 tw-flex tw-gap-4 tw-flex-wrap tw-justify-center lg:tw-justify-between tw-items-stretch"
	>
		{#each books as book, i}
			<div use:animScale={{ delay: i * 70, startScale: 0.875 }}><ExamItem {book} /></div>
		{/each}
	</NarrowContainer>
</div>
