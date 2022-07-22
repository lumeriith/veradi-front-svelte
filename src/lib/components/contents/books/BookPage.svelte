<script>
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import { onMount, setContext } from 'svelte';
	import bookContextKey from './bookContextKey';
	import BookFooterQna from './BookFooterQna.svelte';

	export let book = {
		id: 0,
		coverImage: '',
		subject: '',
		title: '',
		subtitle: '',
		content: {
			image: '',
			imageSize: 160,
			imageSizeMobile: 210
		},
		theme: {
			bg: '#fff',
			body: '#000',
			primary: '#f00',
			secondary: '#0f0'
		}
	};

	let calculatedSize = book.content.imageSize;

	const SCREEN_MIN_SIZE = 576;
	const SCREEN_MAX_SIZE = 1400;
	function calculateImageSize() {
		let v = (window.innerWidth - SCREEN_MIN_SIZE) / (SCREEN_MAX_SIZE - SCREEN_MIN_SIZE);
		if (v > 1) v = 1;
		if (v < 0) v = 0;
		calculatedSize =
			book.content.imageSize + (1 - v) * (book.content.imageSizeMobile - book.content.imageSize);
	}

	onMount(() => {
		calculateImageSize();
	});

	setContext(bookContextKey, book);
</script>

<svelte:window on:resize={calculateImageSize} />

<div class="tw-overflow-hidden" style="background-color: {book.theme.bg};">
	{#if book.content.image}
		<img
			src={book.content.image}
			style="width:{calculatedSize}%; margin-left: {-(calculatedSize - 100) / 2}%; max-width: none;"
			alt=""
		/>
	{/if}
</div>
<BookFooterQna />
