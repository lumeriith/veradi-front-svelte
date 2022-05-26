<script>
	import HireApplicationProcedureItem from './HireApplicationProcedureItem.svelte';

	const items = [
		{ text: '서류전형', bg: '#2c82c4' },
		{ text: '1차 면접', bg: '#2f92df' },
		{ text: '2차 면접', bg: '#3aaaff' },
		{ text: '입원면접', bg: '#71c1ff' },
		{ text: '최종합격', bg: '#a6d8fe' }
	];
</script>

<div class="tw-flex tw-justify-between tw-items-center">
	{#each items as item, i}
		<HireApplicationProcedureItem text={item.text} bg={item.bg} index={i} />
		{#if i < items.length - 1}
			<IconAkarIconsChevronRight
				class="tw-text-xl sm:tw-text-3xl md:tw-text-6xl tw-text-[#d1d0d2]"
			/>
		{/if}
	{/each}
</div>
