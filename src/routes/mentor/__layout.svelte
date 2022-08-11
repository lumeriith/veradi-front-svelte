<script>
	import { page } from '$app/stores';

	import HotArticleItem from '$lib/components/mentor/HotArticleItem.svelte';
	import LineTabButtons from '$lib/components/mentor/LineTabButtons.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import veradiUrls from '$lib/data/veradiUrls';
	import top_banner from '$lib/static/img/mentor/topbanner.png';

	const testContent =
		'오답은 단순히 틀린 문제들에 대해서만 하는 것이 아닙니다. 저 같은 경우, 기출이나 N제, 또는 실모를 풀 때 문제를 틀리지 않았더라도 아리송하거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 몰라 그냥 찍어버려~~~~ 거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 몰라 그냥 찍어버려~~~~ ';

	const buttons = [
		{ href: veradiUrls.mentor.story, text: '합격 스토리', hash: 'view' },
		{ href: veradiUrls.mentor.knowhow, text: '입시 노하우', hash: 'view' },
		{ href: veradiUrls.mentor.analysis, text: '기출분석', hash: 'view' }
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
			href={veradiUrls.article(123)}
		/>
		<HotArticleItem
			category="입시노하우"
			title="비문학 멘붕상태 탈출하기"
			content={testContent}
			href={veradiUrls.article(123)}
		/>
		<HotArticleItem
			category="기출분석"
			title="2022 9월 모의고사 수학영역 30번"
			content={testContent}
			href={veradiUrls.article(123)}
		/>
	</div>
</NarrowContainer>
<div id="view" />
<div class="tw-h-20" />
<NarrowContainer>
	<div class="tw-px-4"><LineTabButtons {buttons} /></div>
	<slot />
</NarrowContainer>
