<script>
	import { page } from '$app/stores';

	export let buttons = [{ href: '', text: '', hash: undefined }];

	function isUrlEqual(a = '', b = '') {
		if (a.endsWith('/')) a = a.substring(0, a.length - 1);
		if (b.endsWith('/')) b = b.substring(0, b.length - 1);

		a = a.toLowerCase();
		b = b.toLowerCase();

		return a == b;
	}
</script>

<div class="tw-flex tw-gap-3">
	{#each buttons as b}
		<a
			class="tw-text-xl tw-p-2 {isUrlEqual(b.href, $page.url.pathname)
				? 'tw-text-[#3c9fcb] tw-font-bold'
				: 'tw-text-[#9f9f9f] tw-font-semibold'}"
			style="border-bottom: 2px solid {isUrlEqual(b.href, $page.url.pathname)
				? '#3c9fcb'
				: '#3c9fcb00'}; transition: border-bottom 0.1s"
			href={b.hash ? b.href + '#' + b.hash : b.href}>{b.text}</a
		>
	{/each}
</div>

<style>
	a {
		text-decoration: none;
	}

	a:hover {
		filter: brightness(1.2);
	}
	a:active {
		filter: brightness(0.8);
	}
</style>
