<script>
	import { page } from '$app/stores';

	import HotArticleItem from '$lib/components/mentor/HotArticleItem.svelte';
	import LineTabButtons from '$lib/components/mentor/LineTabButtons.svelte';
	import AnalysisSection from '$lib/components/mentor/sections/AnalysisSection.svelte';
	import KnowHowSection from '$lib/components/mentor/sections/KnowHowSection.svelte';
	import StorySection from '$lib/components/mentor/sections/StorySection.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import top_banner from '$lib/static/img/mentor/topbanner.png';

	const testContent =
		'오답은 단순히 틀린 문제들에 대해서만 하는 것이 아닙니다. 저 같은 경우, 기출이나 N제, 또는 실모를 풀 때 문제를 틀리지 않았더라도 아리송하거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 몰라 그냥 찍어버려~~~~ 거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 몰라 그냥 찍어버려~~~~ ';

	let currentSection = 'story';

	const buttons = [
		{ value: 'story', text: '합격 스토리' },
		{ value: 'knowhow', text: '입시 노하우' },
		{ value: 'analysis', text: '기출분석' }
	];
</script>

<NarrowContainer>
	<div class="tw-h-12" />
	<img src={top_banner} alt="배너" />
	<header class="tw-font-heading tw-text-xl tw-mt-16 tw-mb-3">실시간 인기글</header>
	<div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-3">
		<HotArticleItem
			category="합격스토리"
			title="여러분들에게 꼭 하고싶은 이야기를 담은 정시 합격 수기"
			content={testContent}
		/>
		<HotArticleItem category="입시노하우" title="비문학 멘붕상태 탈출하기" content={testContent} />
		<HotArticleItem
			category="기출분석"
			title="2022 9월 모의고사 수학영역 30번"
			content={testContent}
		/>
	</div>
</NarrowContainer>
<div class="tw-h-20" />
<NarrowContainer>
	<div class="tw-px-4"><LineTabButtons {buttons} bind:value={currentSection} /></div>
	{#if currentSection === 'story'}
		<StorySection />
	{:else if currentSection === 'knowhow'}
		<KnowHowSection />
	{:else if currentSection === 'analysis'}
		<AnalysisSection />
	{/if}
</NarrowContainer>
