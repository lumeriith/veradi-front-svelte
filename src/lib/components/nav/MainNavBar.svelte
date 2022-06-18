<script>
	import { VeradiUrl } from '../url/VeradiUrl.svelte';
	import BaseNavBar from './BaseNavBar.svelte';

	const items = [
		{
			text: '팀 소개',
			children: [
				{ text: '수학팀', href: VeradiUrl.introMath },
				{ text: '생활과윤리팀', href: VeradiUrl.introLifeethics },
				{ text: '사회문화팀', href: VeradiUrl.introSocialculture },
				{ text: '물리학Ⅰ팀', href: VeradiUrl.introPhysics },
				{ text: '화학Ⅰ팀', href: VeradiUrl.introChemistry },
				{ text: '생명과학Ⅰ팀', href: VeradiUrl.introBiology },
				{ text: '지구과학Ⅰ팀', href: VeradiUrl.introEarthscience }
			]
		},
		{
			text: '문제집',
			children: []
		},
		{
			text: '학습/입시',
			children: []
		},
		{
			text: 'QnA',
			href: VeradiUrl.contentsQna
		}
	];

	const extItems = [{ text: '채용', href: VeradiUrl.hireIndex }];
</script>

<BaseNavBar {items} {extItems} />
