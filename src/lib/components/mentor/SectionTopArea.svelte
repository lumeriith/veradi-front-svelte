<script>
	let _class = '';
	export let style = '';
	export { _class as class };
</script>

<div
	class="tw-px-7 tw-py-4 tw-bg-[#f9f9f9] {_class}"
	style="border-bottom: 1px solid #e4e4e4; {style}"
>
	<slot />
</div>
