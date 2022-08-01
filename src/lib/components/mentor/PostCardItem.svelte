<script>
	import { shortDate } from '$lib/utils/dateToString';
	import MultiClamp from '../MultiClamp.svelte';

	export let thumb = '';
	export let category = '[생활과 윤리]';
	export let title = '23학년도 6월 평가원 모의고사 10번, 12번, 19번 풀이';
	export let author = '김영재';
	export let authorTitle = '서울대 전자전기공학부';
	export let content =
		'1컷이 47, 2컷이 46인 시험이었습니다. 2컷이 46인데, 1컷이 50이 아니라는 것은 킬러 문제 하나가 위력을 발휘했다는 말이 됩니다. 이번 모의고사에서는 19번 문제가 그 역할을 했다고 볼 수 있겠네요. 이번 시험의 특이한 점이 하나 더 있다면, 어려운 문제가 더 있다는 점입니다. 이러한 문제같은 경우에는 킬러 문제가 아닌 비 킬러 문제로 불리며';
	export let favorites = 20;
	export let views = 12;
	export let postDate = new Date();
</script>

<a
	href="#!"
	class="tw-rounded-lg tw-overflow-hidden"
	style="border: 1px solid #e5e5e5; width: calc(50% - 10px)"
>
	<img src={thumb} alt="{title} 이미지" class="tw-object-cover tw-w-full tw-h-48" />
	<div class="tw-px-8 tw-py-4 tw-flex tw-gap-2.5 tw-flex-col" style="border-top: 1px solid #e5e5e5">
		<header class="tw-font-heading">
			<div class="tw-text-sm">{category}</div>
			<div class="tw-text-lg">{title}</div>
		</header>
		<div class="tw-flex tw-gap-4">
			<div class="tw-font-bold">{author}</div>
			<div class="tw-font-semibold">{authorTitle}</div>
		</div>
		<main class="tw-text-sm tw-text-[#575d5e]">
			<MultiClamp clamp={4}>
				{content}
			</MultiClamp>
		</main>
		<div class="tw-text-sm tw-flex tw-gap-2 tw-text-[#a1a1a1]">
			<div>스크랩 <span class="tw-text-[#5bb3ff]">{favorites}</span></div>
			<div>{shortDate(postDate)}</div>
			<div>조회 {views}</div>
		</div>
	</div>
</a>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		background-color: #00000005;
	}

	a:hover header {
		text-decoration: underline;
	}
</style>
