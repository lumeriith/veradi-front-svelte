<script>
	import { animTrigger, animItem, animFade } from '$lib/utils/scrollEffects';
	import HireApplicationProcedureItem from './HireApplicationProcedureItem.svelte';
	import Icon from '@iconify/svelte';

	const items = [
		{ text: '서류전형', bg: '#2c82c4' },
		{ text: '1차 면접', bg: '#2f92df' },
		{ text: '2차 면접', bg: '#3aaaff' },
		{ text: '입원면접', bg: '#71c1ff' },
		{ text: '최종합격', bg: '#a6d8fe' }
	];
</script>

<div class="tw-flex tw-justify-between tw-items-center" use:animTrigger>
	{#each items as item, i}
		<div use:animItem={i} class="tw-flex-1">
			<HireApplicationProcedureItem text={item.text} bg={item.bg} index={i} />
		</div>
		{#if i < items.length - 1}
			<div use:animFade={{ duration: 1500 }}>
				<Icon
					icon="akar-icons:chevron-right"
					class="tw-text-xl sm:tw-text-3xl md:tw-text-6xl tw-text-[#d1d0d2]"
				/>
			</div>
		{/if}
	{/each}
</div>
