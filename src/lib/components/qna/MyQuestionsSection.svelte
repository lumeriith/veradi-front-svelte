<script>
	import QuestionList from '../question/QuestionList.svelte';
	import BookSelect from './BookSelect.svelte';

	let bookId = -1;
</script>

<header class="tw-font-heading tw-text-3xl tw-mb-1">내가 쓴 질문</header>
<div class="tw-flex tw-justify-end tw-py-3 -tw-mb-9">
	<BookSelect bind:bookId />
</div>
<QuestionList showFavorites {bookId} />
