<script>
	import FlatInput from '$lib/components/FlatInput.svelte';
	import FlatSelect from '$lib/components/FlatSelect.svelte';
	import PostListView from '$lib/components/mentor/PostListView.svelte';
	import SectionTopArea from '$lib/components/mentor/SectionTopArea.svelte';
	import Icon from '@iconify/svelte';
	import testImg from '$lib/static/img/mentor/test.jpg';
	import PostCardView from '$lib/components/mentor/PostCardView.svelte';
	import FlatSearchInput from '$lib/components/FlatSearchInput.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	const test = [];
	for (let i = 0; i < 4; i++) {
		test.push({
			category: '[생활과 윤리]',
			title: '23학년도 6월 평가원 모의고사 10번, 12번, 19번 풀이',
			author: '김영재',
			authorTitle: '서울대 기계공학과',
			content:
				'1컷이 47, 2컷이 46인 시험이었습니다. 2컷이 46인데, 1컷이 50이 아니라는 것은 킬러 문제 하나가 위력을 발휘했다는 말이 됩니다. 이번 모의고사에서는 19번 문제가 그 역할을 했다고 볼 수 있겠네요. 이번 시험의 특이한 점이 하나 더 있다면, 어려운 문제가 더 있다는 점입니다. 이러한 문제같은 경우에는 킬러 문제가 아닌 비 킬러 문제로 불리며',
			thumb: testImg,
			postDate: new Date(),
			views: 12,
			favorites: 20
		});
	}
</script>

<SectionTopArea class="tw-flex tw-gap-3">
	<FlatSelect>
		<option value="">영역별</option>
	</FlatSelect>
	<FlatSelect>
		<option value="">년도별</option>
	</FlatSelect>
	<FlatSelect>
		<option value="">기출문제</option>
	</FlatSelect>
	<div class="tw-flex-1" />
	<FlatSearchInput />
</SectionTopArea>
<PostCardView posts={test} />
<div class="tw-flex tw-justify-center tw-mt-2">
	<Pagination value={1} pageCount={4} />
</div>
