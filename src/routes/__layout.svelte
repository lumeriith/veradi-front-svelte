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
	import { isLoggedIn } from '$lib/store';

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
			href: veradiUrls.contents.list.index,
			children: [
				{ text: '전체', href: veradiUrls.contents.list.all },
				{ text: '수학', href: veradiUrls.contents.list.math },
				{ text: '화학', href: veradiUrls.contents.list.chemistry },
				{ text: '사회문화', href: veradiUrls.contents.list.socialculture },
				{ text: '생활과윤리', href: veradiUrls.contents.list.lifeethics },
				{ text: '생명과학', href: veradiUrls.contents.list.biology },
				{ text: '지구과학', href: veradiUrls.contents.list.earthscience }
			]
		},
		{
			text: '입시 멘토링',
			href: veradiUrls.mentor.index,
			children: [
				{ text: '합격 스토리', href: veradiUrls.mentor.story },
				{ text: '입시 노하우', href: veradiUrls.mentor.knowhow },
				{ text: '기출분석', href: veradiUrls.mentor.analysis }
			]
		},
		{
			text: '나의 강의실',
			href: veradiUrls.qna.index,
			children: [
				{ text: '전체', href: veradiUrls.qna.all },
				{ text: '질문하기', href: veradiUrls.qna.submit },
				{ text: '내가 쓴 질문', href: veradiUrls.qna.myquestions },
				{ text: '학습/입시', href: veradiUrls.qna.study },
				{ text: '나의 문제집', href: veradiUrls.qna.mybooks }
			]
		}
	];

	const extItems = [{ text: '채용', href: veradiUrls.hireIndex }];

	onMount(() => {
		AOS.init();
	});
</script>

<BaseNavBar {items} {extItems} />
{#key $isLoggedIn}
	<slot />
{/key}
<BottomNav {items} />
