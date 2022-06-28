<script>
	import { page } from '$app/stores';
	import BookPage from '$lib/components/contents/books/BookPage.svelte';
	import books from '$lib/data/contents/books';
</script>

<BookPage book={books[$page.params.id]} />
