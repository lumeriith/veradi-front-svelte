<script>
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import NewQuestionForm from '$lib/components/question/NewQuestionForm.svelte';
	import QuestionList from '$lib/components/question/QuestionList.svelte';
	import bookContextKey from './bookContextKey';
	import BookQnaStatistics from '../../question/BookQnaStatistics.svelte';

	import { getContext } from 'svelte';

	const defaultBook = {
		id: 0,
		image: '',
		subject: '',
		title: '',
		subtitle: '',
		theme: {
			bg: '#fff',
			body: '#000',
			primary: '#f00',
			secondary: '#0f0'
		}
	};
	const book = getContext(bookContextKey);
</script>

<div
	class="tw-py-12"
	style="background-color: {book.theme.bg}; color: {book.theme.body}; --book-qna-primary: {book
		.theme.primary}; --book-qna-secondary: {book.theme.secondary}"
>
	<NarrowContainer>
		<header class="tw-font-heading tw-text-5xl tw-mb-7">교재 Q&A</header>
		<div class="tw-text-2xl tw-font-bold tw-mb-5"># 화학 HeLios 모의고사</div>
		<BookQnaStatistics />
		<div class="tw-h-8" />
		<NewQuestionForm />
		<div class="tw-h-8" />
		<QuestionList />
	</NarrowContainer>
</div>
