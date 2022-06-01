<script>
	import { animTrigger, animScale } from '$lib/utils/scrollEffects';
	import HireVisionItem from './HireVisionItem.svelte';
	import vision0 from '$lib/static/img/hire/index/vision0.jpg';
	import vision1 from '$lib/static/img/hire/index/vision1.jpg';
	import vision2 from '$lib/static/img/hire/index/vision2.jpg';
	import vision3 from '$lib/static/img/hire/index/vision3.jpg';
	import NarrowContainer from '../NarrowContainer.svelte';

	const items = [
		{
			img: vision0,
			title: '컨텐츠 혁신을\n일으킵니다',
			content: '앞선 기술력을 바탕으로\n압도적인 퀄리티의 컨텐츠를\n개발하고 검증합니다.'
		},
		{
			img: vision1,
			title: '리더를\n양성합니다',
			content: '젊고 혁신적인\n컨텐츠 전문가 집단 속에서\n세상을 변화시킬 리더를 양성합니다.'
		},
		{
			img: vision2,
			title: '지식을\n나눕니다',
			content: '수많은 수험생들의 멘토가 되어\n개인의 지식을\n공공의 지식으로 확장시킵니다.'
		},
		{
			img: vision3,
			title: '세상을\n변화시킵니다',
			content: '컨텐츠의 혁신을 통해\n교육을 변화시키고\n나아가 세상을 변화시킵니다.'
		}
	];
</script>

<NarrowContainer>
	<div
		class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6 md:tw-gap-8"
		use:animTrigger
		use:animScale={{ startScale: 0.9 }}
	>
		{#each items as item}
			<HireVisionItem img={item.img} title={item.title} content={item.content} />
		{/each}
	</div>
</NarrowContainer>
