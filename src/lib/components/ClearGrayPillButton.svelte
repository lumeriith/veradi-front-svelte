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
		transition: background-color 0.05s;
		background-color: transparent;
		color: white;
		font-size: 1rem;
		font-weight: 500;
		padding: 8px 36px;
		border-radius: 9999px;
		border: 2px solid white;
		white-space: nowrap;
	}

	button:hover {
		background-color: #afafaf;
		border: 2px solid #afafaf;
	}

	button:active {
		filter: brightness(0.8);
	}
</style>
