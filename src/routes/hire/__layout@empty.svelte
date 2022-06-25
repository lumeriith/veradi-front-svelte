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
			text: '회사소개',
			href: veradiUrls.hireIndex
		},
		{
			text: '채용안내',
			href: veradiUrls.hireNotice
		},
		{
			text: '채용공고',
			href: veradiUrls.hireSubject.index,
			children: [
				{ text: '수학팀', href: veradiUrls.hireSubject.math },
				{ text: '생활과윤리팀', href: veradiUrls.hireSubject.lifeethics },
				{ text: '사회문화팀', href: veradiUrls.hireSubject.socialculture },
				{ text: '물리학Ⅰ팀', href: veradiUrls.hireSubject.physics },
				{ text: '화학Ⅰ팀', href: veradiUrls.hireSubject.chemistry },
				{ text: '생명과학Ⅰ팀', href: veradiUrls.hireSubject.biology },
				{ text: '지구과학Ⅰ팀', href: veradiUrls.hireSubject.earthscience }
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
	whiteTextWhenTransparent={false}
	animateBackground={false}
/>
<slot />
<BottomNav {items} />
