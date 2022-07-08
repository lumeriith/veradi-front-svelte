<script>
	import MultiClamp from '$lib/components/MultiClamp.svelte';
	import { getTestString, loadData } from '$lib/utils/testData';
	import Icon from '@iconify/svelte';

	export let title = '강좌 수강 및 학습 중 궁금한 점은 어디에 질문할 수 있나요?';
	export let numOfAnswers = 0;

	let isExpanded = false;
	let isHover = false;
	let isActive = false;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<div
	class="item tw-rounded-lg tw-p-4 {isHover ? 'hover' : ''} {isActive ? 'active' : ''}"
	style="border: 2px solid #aaa3"
>
	<header
		class="tw-flex tw-flex-row tw-items-center tw-cursor-pointer -tw-m-4 tw-p-4"
		on:click={toggleExpand}
		on:mouseenter={() => (isHover = true)}
		on:mouseleave={() => (isHover = false)}
		on:mousedown={() => (isActive = true)}
		on:mouseup={() => (isActive = false)}
	>
		<div class="tw-text-lg tw-font-semibold tw-overflow-hidden tw-flex tw-gap-1 tw-mr-3">
			<div style="color: var(--book-qna-primary)">Q.</div>
			{#if isExpanded}
				<div>{title}</div>
			{:else}
				<MultiClamp clamp={1}>{title}</MultiClamp>
			{/if}
		</div>
		<div class="tw-ml-auto">
			{#if numOfAnswers}
				<span style="color: var(--book-qna-primary)">답변 ({numOfAnswers})</span>
			{:else}
				<span>답변대기</span>
			{/if}
		</div>

		{#if isExpanded}
			<Icon class="tw-ml-4 tw-shrink-0" icon="akar-icons:chevron-up" />
		{:else}
			<Icon class="tw-ml-4 tw-shrink-0" icon="akar-icons:chevron-down" />
		{/if}
	</header>
	{#if isExpanded}
		<div class="tw-h-4" />
		<main>
			{#await loadData(getTestString(10, 30)) then data}
				{data}
			{/await}
		</main>
	{/if}
</div>

<style>
	.item {
		transition: background-color 0.1s;
	}

	.item.hover {
		background-color: #8881;
	}

	.item.active {
		background-color: #8883;
	}
</style>
