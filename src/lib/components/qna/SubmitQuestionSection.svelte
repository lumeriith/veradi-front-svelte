<script>
	import BookQnaStatistics from '../question/BookQnaStatistics.svelte';
	import NewQuestionForm from '../question/NewQuestionForm.svelte';
	import BookSelect from './BookSelect.svelte';

	let bookId = '';
</script>

<header class="tw-font-heading tw-text-3xl tw-mb-1">질문하기</header>
<div class="tw-text-lg tw-mb-5">베라디에게 자유롭게 질문해주세요.</div>
{#if bookId !== ''}
	<BookQnaStatistics {bookId} />
{/if}
<div class="tw-flex tw-justify-end tw-py-3">
	<BookSelect bind:bookId />
</div>
<NewQuestionForm disabled={bookId === ''} />
