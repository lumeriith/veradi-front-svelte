<script>
	import { isLoggedIn } from '$lib/store';
	import { browser } from '$app/env';
	import { getMyBookQuestions, getNumOfMyBookQuestions } from '$lib/firebase/bookQuestions';

	import { animTrigger, animItem } from '$lib/utils/scrollEffects';
	import { testLoadData } from '$lib/utils/testData';
	import { onAuthStateChanged } from 'firebase/auth';
	import { Jumper } from 'svelte-loading-spinners';
	import QuestionItem from './QuestionItem.svelte';
	import QuestionPagination from './QuestionPagination.svelte';
	import Icon from '@iconify/svelte';

	export let bookId = -1;
	export let showFavorites = false;

	let questionsRequest;
	$: {
		if (browser && $isLoggedIn) {
			questionsRequest = getMyBookQuestions(bookId);
		}
	}

	function favoriteChanged() {
		// 아무것도 안하기. 아무것도 안하는 것이 맞음.
		// 만약 refresh하게 만들면 3페이지 보고 있다가 favorite 표시하면 그 게시물이 화면에서 없어지게 됨.
	}
</script>

<div>
	<div class="tw-mb-3 tw-font-semibold">
		{#if questionsRequest}
			{#await questionsRequest}
				<span style="color: var(--book-qna-primary)">-</span>개의 질문
			{:then response}
				<span style="color: var(--book-qna-primary)">{response.length}</span>개의 질문
			{/await}
		{/if}
	</div>
	<div class="tw-flex tw-flex-col tw-gap-3 tw-mb-4">
		{#if questionsRequest}
			{#await questionsRequest}
				<div class="tw-flex tw-justify-center tw-items-center tw-h-60 tw-bg-[#9991] tw-rounded-xl">
					<Jumper size={40} color="var(--book-qna-primary)" />
				</div>
			{:then response}
				{#if response.length === 0}
					<div
						class="tw-flex tw-flex-col tw-gap-2 tw-justify-center tw-items-center tw-h-60 tw-bg-[#9991] tw-rounded-xl tw-opacity-80"
					>
						<Icon icon="akar-icons:chat-question" class="tw-text-2xl" />
						<div>아직 등록한 질문이 없습니다.</div>
					</div>
				{:else}
					{#each response as r}
						<div use:animTrigger use:animItem>
							<QuestionItem item={r} on:favoriteChange={favoriteChanged} />
						</div>
					{/each}
				{/if}
			{/await}
		{/if}
	</div>
</div>
