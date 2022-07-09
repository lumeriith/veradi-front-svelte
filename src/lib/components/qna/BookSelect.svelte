<script>
	import { Input } from 'sveltestrap';
	import books from '$lib/data/contents/books';
	import { readableNameBySubjectIds } from '$lib/data/subjects';

	export let subjectId = '';
	export let bookId = '';
</script>

<Input
	type="select"
	size="sm"
	class="book-select tw-w-auto"
	bind:value={subjectId}
	on:change={() => (bookId = '')}
>
	<option value="">과목명</option>
	{#each Object.entries(readableNameBySubjectIds) as [id, name] (id)}
		<option value={id}>{name}</option>
	{/each}
</Input>
<div class="tw-w-4" />
<Input
	type="select"
	size="sm"
	class="book-select book-select-subject tw-w-auto"
	disabled={subjectId === ''}
	bind:value={bookId}
>
	<option value="">교재 이름</option>
	{#each books.filter((b) => b.subject === subjectId) as book (book.id)}
		<option value={book.id}>{book.title}</option>
	{/each}
</Input>

<style>
	:global(.book-select) {
		font-size: inherit;
		box-shadow: none !important;
		padding: 4px 40px 4px 10px;
		min-width: 100px;
	}

	:global(.book-select-subject) {
		min-width: 150px;
	}
</style>
