<script>
	import Icon from '@iconify/svelte';
	export let pageCount = 0;
	export let value = 0;
</script>

{#if pageCount > 0}
	<div class="tw-text-xl tw-flex tw-justify-center tw-items-center tw-gap-2">
		<button class="tw-p-1">
			<Icon icon="akar-icons:chevron-left" />
		</button>
		{#each [1, 2, 3, 4] as i}
			<button class="tw-p-1">{i}</button>
		{/each}
		<button>
			<Icon icon="akar-icons:chevron-right" />
		</button>
	</div>
{/if}
