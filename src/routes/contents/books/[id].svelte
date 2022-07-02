<script>
	import { page } from '$app/stores';
	import BookPage from '$lib/components/contents/books/BookPage.svelte';
	import books from '$lib/data/contents/books';

	$: book = books.find((b) => b.id == $page.params.id);
</script>

<BookPage {book} />
