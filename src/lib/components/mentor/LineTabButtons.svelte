<script>
	import { page } from '$app/stores';

	export let buttons = [{ href: '', text: '', hash: undefined }];

	function isButtonActive(href, currentUrl) {
		return href.toLowerCase() === currentUrl.toLowerCase();
	}
</script>

<div class="tw-flex tw-gap-3">
	{#each buttons as b}
		<a
			class="tw-text-xl tw-p-2 tw-font-bold {isButtonActive(b.href, $page.url.pathname)
				? 'tw-text-[#3c9fcb]'
				: 'tw-text-[#9f9f9f]'}"
			style="border-bottom: 2px solid {isButtonActive(b.href, $page.url.pathname)
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
