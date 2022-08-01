<script>
	import MultiClamp from 'multi-clamp';
	import { onMount } from 'svelte';

	let container;

	let _class = '';

	export { _class as class };
	export let style = '';

	export let ellipsis = '...';
	export let clamp = 3;
	export let reverse = false;
	export let splitByWords = false;
	export let disableCssClamp = false;
	export let onClampStart = () => {};
	export let onClampEnd = () => {};

	onMount(() => {
		new MultiClamp(container, {
			ellipsis,
			clamp,
			reverse,
			splitByWords,
			disableCssClamp,
			onClampStart,
			onClampEnd
		});
	});
</script>

<div bind:this={container} class={_class} {style}>
	<slot />
</div>
