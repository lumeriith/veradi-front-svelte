<script>
	import BookQnaQuestionMark from './BookQnaQuestionMark.svelte';
	import Icon from '@iconify/svelte';
	import autoExpandTextArea from '$lib/utils/autoExpandTextArea';
</script>

<div class="tw-flex tw-gap-1 tw-items-stretch tw-bg-[#aaa2] tw-pl-4 tw-rounded-2xl">
	<div class="tw-mt-[4px]">
		<BookQnaQuestionMark />
	</div>
	<textarea
		use:autoExpandTextArea
		rows="1"
		class="tw-flex-1"
		placeholder="답변에 대한 추가 질문이 있으실 경우, 댓글을 입력하세요."
	/>
	<button>
		<Icon class="tw-text-xl" icon="carbon:send-alt-filled" />
	</button>
</div>

<style>
	button {
		color: var(--book-qna-primary);
		transition: filter 0.1s, transform 0.1s;
		padding: 4px 12px 4px 8px;
	}

	button:hover {
		filter: brightness(1.2);
		transform: scale(1.1);
	}

	button:active {
		filter: brightness(0.8);
		transform: scale(0.9);
	}

	textarea {
		padding: 8px 5px 8px 2px;
		background-color: transparent;
		color: inherit;
		outline: none;
	}

	textarea::placeholder {
		color: inherit;
		opacity: 50%;
	}

	textarea {
		background-color: transparent;
		width: 100%;
		outline: none;
		border: none;
		box-shadow: none;
		resize: none;
	}
</style>
