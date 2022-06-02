<script>
	export let title = '';
	let _class = '';
	export { _class as class };
	export let style = '';
	const contentHeadingClasses = 'tw-font-semibold tw-text-[#7b7b7b] tw-w-32';
</script>

<div class="tw-flex">
	<header class={contentHeadingClasses}>{title}</header>
	<main class={_class} {style}>
		<slot />
	</main>
</div>
