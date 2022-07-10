<script>
	import { testLoadData } from '$lib/utils/testData';

	import Icon from '@iconify/svelte';
	import { Jumper } from 'svelte-loading-spinners';

	export let bookId = '';

	$: request = testLoadData({
		id: bookId,
		title: '# 화학 HeLiOS 모의고사',
		rating: '98%',
		acceptanceRate: '100%',
		estDays: '1~2'
	});
</script>

{#await request}
	<div class="tw-flex tw-justify-center tw-items-center tw-h-28">
		<Jumper size={40} color="var(--book-qna-primary)" />
	</div>
{:then response}
	<div class="tw-text-2xl tw-font-bold tw-mb-5">
		{response.title}
	</div>
	<div class="tw-flex tw-flex-row tw-gap-x-8 tw-gap-y-2 tw-flex-wrap">
		<div class="tw-text-xl tw-font-semibold">
			답변 만족도
			<span class="tw-underline tw-font-bold" style="color: var(--book-qna-primary)">
				{response.rating}
			</span>
		</div>
		<div class="tw-text-xl tw-font-semibold">
			답변 채택율
			<span class="tw-underline tw-font-bold" style="color: var(--book-qna-primary)">
				{response.acceptanceRate}
			</span>
		</div>

		<div class="tw-w-full tw-opacity-80 tw-flex tw-flex-row tw-items-center tw-gap-1">
			<Icon icon="ant-design:info-circle-outlined" style="color: var(--book-qna-primary)" />
			<div>지금 질문을 올리면, {response.estDays}일안에 답변을 받아볼 수 있습니다.</div>
		</div>
	</div>
{/await}
