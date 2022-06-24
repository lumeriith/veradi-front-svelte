<script>
	import veradiUrls from '$lib/data/veradiUrls.js';
	import TabButtonItem from './TabButtonItem.svelte';

	export let buttons = [];
</script>

<div
	class="tw-flex tw-gap-x-4 tw-gap-y-2 tw-flex-wrap tw-justify-center lg:tw-justify-start lg:tw-max-w-lg"
>
	{#each buttons as [name, href]}
		<TabButtonItem {href}>{name}</TabButtonItem>
	{/each}
</div>
