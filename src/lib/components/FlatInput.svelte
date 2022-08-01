<script>
	export let value;
	export let placeholder;
	let _class = '';
	export { _class as class };
</script>

<input class="tw-text-sm {_class}" {placeholder} bind:value />

<style>
	input {
		border: 1px solid #dddddd;
		padding: 4px 12px 4px 12px;
	}
</style>
