<script>
	import FlatInput from '$lib/components/FlatInput.svelte';
	import FlatSelect from '$lib/components/FlatSelect.svelte';
	import PostListView from '$lib/components/mentor/PostListView.svelte';
	import SectionTopArea from '$lib/components/mentor/SectionTopArea.svelte';
	import Icon from '@iconify/svelte';

	import test0 from '$lib/static/img/mentor/test0.jpg';
	import test1 from '$lib/static/img/mentor/test1.jpg';
	import test2 from '$lib/static/img/mentor/test2.png';
	import test3 from '$lib/static/img/mentor/test3.jpg';
	import test4 from '$lib/static/img/mentor/test4.jpg';

	import Pagination from '$lib/components/Pagination.svelte';

	const test = [];
	for (let i = 0; i < 5; i++) {
		test.push({
			title: '수능 국어 가장 효과적으로 공부하는 법',
			content:
				'오답은 단순히 틀린 문제들에 대해서만 하는 것이 아닙니다. 저 같은 경우, 기출이나 N제, 또는 실모를 풀 때 문제를 틀리지 않았더라도 아리송하거나 찝찝한 부분이 있거나 선지의 정합성을 판단하는 근거와 확실치 않을 때는 무조건 그 선치나 문제에 체크표시를 했습니다.',
			thumb: test0,
			author: '김영재',
			authorTitle: '서울대 전기전자공학부',
			tags: ['국어', '멘탈관리', '시간관리'],
			selectedTag: '국어',
			postDate: new Date(),
			views: 12,
			favorites: 20
		});
	}
	test[1].title = '수학 킬러 문제, 어떻게 접근해야할까?';
	test[1].thumb = test1;
	test[2].title = '사랑하는 학생 여러분들에게 드리는 꿀팁 4가지';
	test[2].thumb = test2;
	test[3].title = '왜 나는 과학을 못할까?';
	test[3].thumb = test3;
	test[4].title = '물2를 대하는 마음가짐';
	test[4].thumb = test4;

	const tags = [
		'국어',
		'수학',
		'화학',
		'사회문화',
		'생활과윤리',
		'생명과학',
		'지구과학',
		'정시',
		'교과',
		'학종',
		'논술',
		'면접팁',
		'멘탈관리',
		'시간관리'
	];

	let selectedTag = undefined;
</script>

<SectionTopArea class="tw-flex tw-justify-center md:tw-py-9 tw-py-5">
	<div class="tw-flex tw-flex-wrap tw-gap-2 tw-justify-center tw-max-w-2xl">
		{#each tags as tag}
			<button
				class="tw-px-3 tw-py-1 {tag === selectedTag ? 'active' : ''}"
				on:click={() => (selectedTag = tag)}>#{tag}</button
			>
		{/each}
	</div>
</SectionTopArea>
<PostListView posts={test} bind:selectedTag />
<div class="tw-flex tw-justify-center tw-mt-8">
	<Pagination value={1} pageCount={4} />
</div>

<style>
	button {
		color: #3c9fcb;
		background-color: white;
		box-shadow: inset 0 0 0 1px #3c9fcb;
		border-radius: 999px;
	}

	button.active {
		font-weight: 600;
		background-color: #ddf3ff;
		box-shadow: none;
	}

	button:hover {
		filter: brightness(0.95);
	}

	button:active {
		filter: brightness(0.92);
	}
</style>
