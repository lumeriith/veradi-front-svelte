<script>
	import MultiClamp from '$lib/components/MultiClamp.svelte';
	import Icon from '@iconify/svelte';

	export let title = '강좌 수강 및 학습 중 궁금한 점은 어디에 질문할 수 있나요?';

	let isExpanded = false;
	let isHover = false;
	let isActive = false;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function doNothing() {}
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
		<div class="tw-ml-auto">답변대기</div>

		{#if isExpanded}
			<Icon class="tw-ml-4 tw-shrink-0" icon="akar-icons:chevron-up" />
		{:else}
			<Icon class="tw-ml-4 tw-shrink-0" icon="akar-icons:chevron-down" />
		{/if}
	</header>
	{#if isExpanded}
		<div class="tw-h-4" />
		<main>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, ducimus cum neque perspiciatis
			fugit qui incidunt optio harum corporis modi beatae maiores dicta. Voluptates quas doloribus
			harum, explicabo ipsum aspernatur ab vel. Obcaecati illum nesciunt cupiditate iste voluptatum.
			Sed reiciendis iusto libero commodi et placeat unde culpa quo in modi.
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
