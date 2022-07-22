<script>
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import NewQuestionForm from '$lib/components/question/NewQuestionForm.svelte';
	import QuestionList from '$lib/components/question/QuestionList.svelte';
	import bookContextKey from './bookContextKey';
	import BookQnaStatistics from '../../question/BookQnaStatistics.svelte';

	import { getContext } from 'svelte';

	const book = getContext(bookContextKey);
	let version = 0;
</script>

<div
	class="tw-py-12"
	style="background-color: {book.theme.bg}; color: {book.theme.body}; --book-qna-primary: {book
		.theme.primary}; --book-qna-secondary: {book.theme.secondary}"
>
	<NarrowContainer>
		<header class="tw-font-heading tw-text-5xl tw-mb-7">교재 Q&A</header>
		<BookQnaStatistics />
		<div class="tw-h-8" />
		<NewQuestionForm bookId={book.id} on:submit={() => version++} />
		<div class="tw-h-8" />
		{#key version}
			<QuestionList bookId={book.id} />
		{/key}
	</NarrowContainer>
</div>
