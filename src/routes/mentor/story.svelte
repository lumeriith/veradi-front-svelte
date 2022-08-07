<script>
	import FlatInput from '$lib/components/FlatInput.svelte';
	import FlatSelect from '$lib/components/FlatSelect.svelte';
	import PostListView from '$lib/components/mentor/PostListView.svelte';
	import SectionTopArea from '$lib/components/mentor/SectionTopArea.svelte';
	import FlatSearchInput from '$lib/components/FlatSearchInput.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	import test0 from '$lib/static/img/mentor/test0.jpg';
	import test1 from '$lib/static/img/mentor/test1.jpg';
	import test2 from '$lib/static/img/mentor/test2.png';
	import test3 from '$lib/static/img/mentor/test3.jpg';
	import test4 from '$lib/static/img/mentor/test4.jpg';

	const test = [];
	for (let i = 0; i < 5; i++) {
		test.push({
			title: '여러분들에게 꼭 하고싶은 이야기를 담은 정시 합격 수기',
			content:
				'오답은 단순히 틀린 문제들에 대해서만 하는 것이 아닙니다. 저 같은 경우, 기출이나 N제, 또는 실모를 풀 때 문제를 틀리지 않았더라도 아리송하거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 무조건 그 선치나 문제에 체크표시를 했습니다.',
			thumb: test0,
			author: '김영재',
			authorTitle: '서울대 기계공학과',
			postDate: new Date(),
			views: 12,
			favorites: 20
		});
	}

	test[1].title = '생각날때마다 한번씩 보면 좋은 글귀들';
	test[1].thumb = test1;
	test[2].title =
		'포기하지 마세요 여러분!!!! 3수 끝에 도달한 고지에 대해 n수생 분들에게 드리고 싶은 이야기';
	test[2].thumb = test2;
	test[3].title = '정시 파이터를 고민하는 여러분들께 (수능 공부법, 논술, 학종 총정리)';
	test[3].thumb = test3;
	test[4].title = '서울대학교 의예과 진학 이야기';
	test[4].thumb = test4;
</script>

<SectionTopArea class="tw-flex tw-gap-3">
	<FlatSelect>
		<option value="">학교</option>
		<option value="">서울대학교</option>
	</FlatSelect>
	<FlatSelect>
		<option value="">입시</option>
	</FlatSelect>
	<div class="tw-flex-1" />
	<FlatSelect>
		<option value="">제목</option>
		<option value="">제목+내용</option>
	</FlatSelect>
	<FlatSearchInput />
</SectionTopArea>
<PostListView posts={test} />
<div class="tw-flex tw-justify-center tw-mt-8">
	<Pagination value={1} pageCount={4} />
</div>
