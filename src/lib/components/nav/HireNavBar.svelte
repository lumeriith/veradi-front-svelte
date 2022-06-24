<script>
	import veradiUrls from '$lib/data/veradiUrls.js';
	import BaseNavBar from './BaseNavBar.svelte';

	export let whiteTextWhenTransparent = false;
	export let animateBackground = false;

	const items = [
		{
			text: '회사소개',
			href: veradiUrls.hireIndex
		},
		{
			text: '채용안내',
			href: veradiUrls.hireNotice
		},
		{
			text: '채용공고',
			children: [
				{ text: '수학팀', href: veradiUrls.hireMath },
				{ text: '생활과윤리팀', href: veradiUrls.hireLifeethics },
				{ text: '사회문화팀', href: veradiUrls.hireSocialculture },
				{ text: '물리학Ⅰ팀', href: veradiUrls.hirePhysics },
				{ text: '화학Ⅰ팀', href: veradiUrls.hireChemistry },
				{ text: '생명과학Ⅰ팀', href: veradiUrls.hireBiology },
				{ text: '지구과학Ⅰ팀', href: veradiUrls.hireEarthscience }
			]
		},
		{
			text: '자주 묻는 질문',
			href: veradiUrls.hireQna
		}
	];

	const extItems = [{ text: '베라디 홈페이지', href: '/' }];
</script>

<BaseNavBar
	showCareer
	hideLogin
	alignItems="left"
	gapX="20px"
	{items}
	{extItems}
	{whiteTextWhenTransparent}
	{animateBackground}
/>
