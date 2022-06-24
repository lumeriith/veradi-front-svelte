<script>
	import veradiUrls from '$lib/data/veradiUrls.js';
	import BaseNavBar from './BaseNavBar.svelte';

	const items = [
		{
			text: '팀 소개',
			children: [
				{ text: '수학팀', href: veradiUrls.introduction.math },
				{ text: '생활과윤리팀', href: veradiUrls.introduction.lifeethics },
				{ text: '사회문화팀', href: veradiUrls.introduction.socialculture },
				{ text: '물리학Ⅰ팀', href: veradiUrls.introduction.physics },
				{ text: '화학Ⅰ팀', href: veradiUrls.introduction.chemistry },
				{ text: '생명과학Ⅰ팀', href: veradiUrls.introduction.biology },
				{ text: '지구과학Ⅰ팀', href: veradiUrls.introduction.earthscience }
			]
		},
		{
			text: '문제집',
			children: [
				{ text: '전체', href: veradiUrls.contents.all },
				{ text: '수학', href: veradiUrls.contents.math },
				{ text: '화학', href: veradiUrls.contents.chemistry },
				{ text: '사회문화', href: veradiUrls.contents.socialculture },
				{ text: '생활과윤리', href: veradiUrls.contents.lifeethics },
				{ text: '생명과학', href: veradiUrls.contents.biology },
				{ text: '지구과학', href: veradiUrls.contents.earthscience }
			]
		},
		{
			text: '학습/입시',
			children: []
		},
		{
			text: 'QnA',
			href: veradiUrls.qna
		}
	];

	const extItems = [{ text: '채용', href: veradiUrls.hireIndex }];
</script>

<BaseNavBar {items} {extItems} />
