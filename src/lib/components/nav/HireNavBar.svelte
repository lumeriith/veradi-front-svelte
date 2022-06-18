<script>
	import { VeradiUrl } from '../url/VeradiUrl.svelte';
	import BaseNavBar from './BaseNavBar.svelte';

	export let whiteTextWhenTransparent = false;
	export let animateBackground = false;

	const items = [
		{
			text: '회사소개',
			href: VeradiUrl.hireIndex
		},
		{
			text: '채용안내',
			href: VeradiUrl.hireNotice
		},
		{
			text: '채용공고',
			children: [
				{ text: '수학팀', href: VeradiUrl.hireMath },
				{ text: '생활과윤리팀', href: VeradiUrl.hireLifeethics },
				{ text: '사회문화팀', href: VeradiUrl.hireSocialculture },
				{ text: '물리학Ⅰ팀', href: VeradiUrl.hirePhysics },
				{ text: '화학Ⅰ팀', href: VeradiUrl.hireChemistry },
				{ text: '생명과학Ⅰ팀', href: VeradiUrl.hireBiology },
				{ text: '지구과학Ⅰ팀', href: VeradiUrl.hireEarthscience }
			]
		},
		{
			text: '자주 묻는 질문',
			href: VeradiUrl.hireQna
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
