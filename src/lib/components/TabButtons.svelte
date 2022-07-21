<script>
	import TabButtonItem from './TabButtonItem.svelte';

	export let buttons = [];
	let _class = '';
	export { _class as class };
</script>

<div
	class="tw-flex tw-gap-x-3 tw-gap-y-2 tw-flex-wrap tw-justify-center lg:tw-justify-start {_class}"
>
	{#each buttons as [name, href]}
		<TabButtonItem {href}>{name}</TabButtonItem>
	{/each}
</div>
