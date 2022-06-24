<script>
	import { Button } from 'sveltestrap';
	import { page } from '$app/stores';

	export let href = '';
	$: isActive = isUrlEqual($page.url.pathname, href);

	function isUrlEqual(a = '', b = '') {
		if (a.endsWith('/')) a = a.substring(0, a.length - 1);
		if (b.endsWith('/')) b = b.substring(0, b.length - 1);

		a = a.toLowerCase();
		b = b.toLowerCase();

		return a == b;
	}
</script>

<a {href}>
	<button class={isActive ? 'active' : ''}>
		<slot />
	</button>
</a>

<style>
	button {
		color: #7b7b7b;
		padding: 5px 0px;
		background-color: white;
		width: 110px;
		white-space: nowrap;
		border-radius: 9999px;
		font-weight: bold;
	}

	button.active {
		background-color: #ddf3ff;
		color: #3c9fcb;
	}

	button:hover:not(.active) {
		color: black;
		background-color: #eee;
	}
</style>
