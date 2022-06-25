<script>
	import veradiUrls from '$lib/data/veradiUrls.js';

	import '$lib/notusTemplate/styles/index.css';
	import '$lib/notusTemplate/styles/tailwind.css';

	import 'bootstrap/dist/css/bootstrap.min.css';

	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import BottomNav from '$lib/components/nav/BaseBottomNav.svelte';
	import BaseNavBar from '$lib/components/nav/BaseNavBar.svelte';
	onMount(() => AOS.init());

	const items = [
		{
			text: '팀 소개',
			href: veradiUrls.introduction.index,
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
			href: veradiUrls.contents.index,
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
			href: '#'
		},
		{
			text: 'QnA',
			href: veradiUrls.qna
		}
	];

	const extItems = [{ text: '채용', href: veradiUrls.hireIndex }];
</script>

<BaseNavBar {items} {extItems} />
<slot />
<BottomNav {items} />
