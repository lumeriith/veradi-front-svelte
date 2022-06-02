<script>
	export let href = undefined;
	let _class = '';
	let style = '';
	export { _class as class };
</script>

<a {href}>
	<button class={_class} {style}><slot /></button>
</a>

<style>
	button {
		background-color: #2bc6ff;
		color: white;
		font-size: 1rem;
		font-weight: 500;
		padding: 9px 37px;
		border-radius: 9999px;
		box-shadow: 0 0 8px #0002;
		white-space: nowrap;
	}

	button:hover {
		filter: brightness(0.95);
	}

	button:active {
		filter: brightness(0.8);
	}
</style>
