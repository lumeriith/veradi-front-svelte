<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import testuni from '$lib/static/img/article/testuni.png';
	import test0 from '$lib/static/img/article/test0.png';
	import test1 from '$lib/static/img/article/test1.png';
	import test2 from '$lib/static/img/article/test2.png';
	import test3 from '$lib/static/img/article/test3.png';
	import { onMount } from 'svelte';

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] == variable) {
				return pair[1];
			}
		}
		return false;
	}

	let id = null;
	onMount(() => {
		id = getQueryVariable('id');
	});
</script>

<NarrowContainer class="tw-mt-24 tw-mb-24 tw-max-w-3xl">
	<header class="tw-mb-20">
		<div class="tw-text-[#9f9f9f] tw-text-sm tw-font-bold tw-mb-3">기출분석</div>
		<div class="tw-font-heading tw-text-xl">[생활과 윤리]</div>
		<div class="tw-font-heading tw-text-2xl tw-mb-1">
			23학년도 6월 평가원 모의고사 10번, 12번, 19번 풀이
		</div>
		<div class="tw-flex tw-text-sm tw-flex-row tw-gap-2 tw-text-[#a1a1a1] tw-mb-6">
			스크랩 <span class="tw-text-[#5bb3ff]">20</span> 22.07.22 조회 12
		</div>
		<div class="tw-flex tw-items-center tw-gap-2.5">
			<img
				class="tw-rounded-full tw-w-10 tw-h-10"
				style="border: 1px solid #a7a7a7"
				src={testuni}
				alt=""
			/>
			<div class="tw-flex tw-flex-col">
				<div class="tw-font-bold">김영재</div>
				<div class="tw-font-semibold tw-text-sm">서울대 전자전기공학부</div>
			</div>
			<div class="tw-flex-1" />
			<button class="tw-flex tw-items-center tw-gap-1"
				><Icon icon="ant-design:plus-outlined" /> 스크랩</button
			>
		</div>
	</header>

	<main class="article-view">
		현재 게시물 번호는 {id}입니다.
		<img src={test0} alt="" />
		1컷이 47, 2컷이 46인 시험이었습니다. 2컷이 46인데, 1컷이 50이 아니라는 것은 킬러 문제 하나가 위력을
		발휘했다는 말이 됩니다. 이번 모의고사에서는 19번 문제가 그역할을 했다고 볼 수 있겠네요. 이번 시험의
		특이한 점이 하나 더 있다면, 어려운 문제가 몰려 있었다는 점을 꼽을 수 있습니다. 이번 시험에서는 10,
		12, 11, 9번이 오답률 순위 2~5 등을 차지하고 있습니다. 수험생 여러분은 문제를 풀 때 9번부터 4문제가
		연달아 난이도 있는 문제가 출제되니, 멘탈, 시간 관리가 다소 힘들었을 수 있겠다는 생각도 듭니다.

		<h3>**19번**</h3>

		19번 문제의 정답률은 36.2%입니다. 정답은 1번 선지(ㄱ, ㄷ)이었습니다. 여기서 주목해야 할 점은
		오답인 4번 선지(ㄱ, ㄴ, ㄷ)의 선택률이 무려 38.8%로 정답인 1번 선지보다 많은 선택을 받았다는
		것입니다. 즉, 이번 모의고사에서 만점을 가르는 가장 중요한 요소는 19번의 ㄴ선지의 정오를 판단할
		수 있느냐 였습니다. 하지만 19번 선지는 2점짜리 문제였습니다. 난이도에 맞지 않는 배점이었죠.. 즉
		이번 6평은 19번을 틀렸어도 1등급이 나오는 시험이었다는 말입니다. 19번은 자연윤리 문제입니다.
		자연윤리는 매 시험 반드시 출제되고, 벤 다이어그램 유형의 킬러 문제로 나오는 편이니, 정말
		자세하게 공부해야 하는 단원입니다.

		<img src={test1} alt="" />
		ㄴ. B: 모든 동물에게 인간과 동등한 도덕적 지위를 부여하는 것은 옳지 않다. 19번 외에도 정답률이 50%가
		되지 않는 문제는 10번과 12번이 있었습니다. 다만, 이 두 문제는 19번처럼 특정 오답에 선택이 몰리지
		않고, 여러 오답 선지를 골고루 고른 수험생분들이 많았습니다. 고로 10번과 12번은 19번과는 다르게 접근해보도록
		하겠습니다.
		<h3>**10번**</h3>
		<img src={test2} alt="" />
		10번은 교정적 정의 단원에서 출제된 문제입니다. 편의상 형벌 또는 사형 단원이라고 기억하고 있는 분들도
		계실 것이라 생각합니다. 교정적 정의 문제가 여태 그래왔듯 이번에도 3명의 사상가들의 상호 비판 문제로
		출제되었습니다. 개인적으로 상호 비판 문제는 풀 때 신경을 많이 써야 하는, 가장 난이도 있는 문제 유형이라고
		생각합니다.
		<h3>**12번**</h3>
		<img src={test3} alt="" />
		12번은 시민 불복종 단원에서 출제된 문제입니다. 시민 불복종 단원도 앞서 언급한 자연윤리, 교정적 정의
		등과 함께 킬러 문제가 자주 나오는 단원입니다. 정답은 4번(ㄱ, ㄴ, ㄷ)이었고, 가장 많은 선택을 받은
		오답은 1번(ㄱ, ㄴ)이었습니다. ㄷ선지의 정오를 판단할 수 있는지가 중요했습니다. ㄷ. 을: 부정의한 법을
		변혁하고자 불가피하게 다른 법을 위반하는 시문 불복종은 정당화될 수 있다. 갑 사상가는 싱어, 을 사상가는
		롤스
	</main>
</NarrowContainer>

<style>
	button {
		background-color: #35c5f0;
		border-radius: 5px;
		color: white;
		padding: 3px 16px 3px 12px;
		font-weight: bold;
	}

	button:hover {
		filter: brightness(1.1);
	}

	button:active {
		filter: brightness(0.9);
	}

	:global(.article-view) {
		line-height: 160%;
		letter-spacing: 0.1px;
	}

	:global(.article-view img) {
		width: 100%;
		max-width: 600px;
		margin: 24px auto 32px auto;
	}

	:global(.article-view h1, h2, h3, h4, h5, h6) {
		margin-top: 32px;
		margin-bottom: 16px;
	}
</style>
