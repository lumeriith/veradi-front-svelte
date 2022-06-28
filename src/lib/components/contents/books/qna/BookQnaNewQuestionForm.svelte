<script>
	import Icon from '@iconify/svelte';
</script>

<form on:submit|preventDefault>
	<div class="tw-bg-[#aaa2] tw-p-4 tw-flex tw-flex-col tw-items-start tw-gap-2 tw-mb-4">
		<div class="tw-border-b-2 tw-min-w-[160px] tw-opacity-70 tw-p-1">제목을 입력해주세요</div>
		<div class="tw-opacity-50 tw-p-1">
			내용을 입력해주세요.<br />문의글은 작성 후 비공개로 처리됩니다.
		</div>
	</div>
	<div class="tw-flex tw-justify-end">
		<button class="tw-flex tw-justify-center tw-items-center tw-gap-1.5"
			><Icon icon="bi:pencil-square" /><span>질문하기</span></button
		>
	</div>
</form>

<style>
	button {
		color: white;
		background-color: var(--book-qna-primary);
		border-radius: 5px;
		padding: 4px 12px;
		transition: filter 0.1s, transform 0.1s;
	}

	button:hover {
		filter: brightness(1.2);
	}

	button:active {
		filter: brightness(0.9);
		transform: scale(0.95);
	}
</style>
