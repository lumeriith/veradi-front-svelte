<script>
	import Icon from '@iconify/svelte';
	import autoExpandTextArea from '$lib/utils/autoExpandTextArea';

	export let disabled = false;

	let titleInput, contentArea;

	function titleInputKeyDown(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			contentArea.setSelectionRange(0, 0);
			contentArea.focus();
		}
	}

	function contentAreaKeyDown(e) {
		if (e.keyCode === 8 && contentArea.selectionStart === 0 && contentArea.selectionEnd === 0) {
			e.preventDefault();
			let end = titleInput.value.length;
			titleInput.setSelectionRange(end, end);
			titleInput.focus();
		}
	}
</script>

<form
	on:submit|preventDefault
	class={disabled ? 'tw-pointer-events-none tw-opacity-70 tw-saturate-0 tw-select-none' : ''}
>
	<div class="tw-bg-[#aaa2] tw-flex tw-flex-col tw-items-start tw-gap-2 tw-mb-4">
		<input
			bind:this={titleInput}
			on:keydown={titleInputKeyDown}
			class="tw-px-4 tw-pt-4 tw-text-xl"
			placeholder="제목을 입력해주세요"
		/>
		<div class="tw-h-0.5 tw-ml-4 tw-w-[200px] tw-bg-[#aaa6]" />
		<textarea
			bind:this={contentArea}
			use:autoExpandTextArea
			on:keydown={contentAreaKeyDown}
			class="tw-px-4 tw-pt-1 tw-pb-4"
			style="line-height: 160%;"
			placeholder="내용을 입력해주세요. 문의글은 자신만 볼 수 있습니다."
		/>
		<div>
			<button
				class="tw-p-4 tw-flex tw-gap-1.5 tw-justify-center tw-items-center tw-text-[#aaa] photo"
				><Icon icon="bxs:camera" />첨부파일</button
			>
		</div>
	</div>
	<div class="tw-flex tw-justify-end">
		<button class="tw-flex tw-justify-center tw-items-center tw-gap-1.5 submit"
			><Icon icon="bi:pencil-square" /><span>질문하기</span></button
		>
	</div>
</form>

<style>
	button.photo:hover {
		filter: brightness(10.1s);
	}

	button.photo:active {
		filter: brightness(0.8);
	}

	button.submit {
		color: white;
		background-color: var(--book-qna-primary);
		border-radius: 5px;
		padding: 4px 12px;
		transition: filter 0.1s, transform 0.1s;
	}

	button.submit:hover {
		filter: brightness(1.2);
	}

	button.submit:active {
		filter: brightness(0.9);
		transform: scale(0.95);
	}

	input,
	textarea {
		background-color: transparent;
		width: 100%;
		outline: none;
		border: none;
		box-shadow: none;
		resize: none;
	}
</style>
