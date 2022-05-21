<script>
	import { animTrigger, animBody } from '$lib/utils/scrollEffects';
	import imgGrowChange from '$lib/static/img/hire/index/growChange.png';
	import imgGrowContent from '$lib/static/img/hire/index/growContent.png';
	import imgGrowRevolutionize from '$lib/static/img/hire/index/growRevolutionize.png';
	import HireGrowthItem from './HireGrowthItem.svelte';

	const items = [
		{
			img: imgGrowContent,
			title: '프리미엄 교육 컨텐츠 제공',
			content: '최고, 최대, 그리고 최선의 프리미엄 교육 컨텐츠를 제공하고자 노력하고 있습니다'
		},
		{
			img: imgGrowRevolutionize,
			title: '교육의 혁신을 위한 노력',
			content: '수험생 여러분에게 성장의 경험을 선사하고자 밤낮 없이 고민하고 있습니다'
		},
		{
			img: imgGrowChange,
			title: '입시의 패러다임 변화',
			content:
				'매년 200% 이상을 상회하는 놀라운 성장률로 수능 입시의 패러다임을 변화시키고 있습니다'
		}
	];
</script>

<div
	use:animTrigger
	class="tw-flex tw-gap-12 tw-items-center md:tw-items-start md:tw-justify-between tw-flex-col md:tw-flex-row"
>
	<div use:animBody={0}><HireGrowthItem info={items[0]} class="md:tw-mt-56" /></div>
	<div use:animBody={1}>
		<HireGrowthItem info={items[1]} class="md:tw-mt-28" />
	</div>
	<div use:animBody={2}>
		<HireGrowthItem info={items[2]} />
	</div>
</div>
