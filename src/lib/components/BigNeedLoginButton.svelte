<script>
	import { isLoginPopupShown } from '$lib/store';

	import Icon from '@iconify/svelte';
</script>

<button
	class="tw-py-12 tw-flex tw-justify-center tw-items-center tw-flex-col tw-w-full tw-rounded-md"
	on:click={() => isLoginPopupShown.set(true)}
>
	<Icon class="tw-text-4xl tw-mb-2 tw-opacity-80" icon="ic:outline-login" />
	<div class="tw-text-md tw-opacity-60">
		베라디 회원이신가요? <br />로그인 혹은 회원가입이 필요한 페이지입니다.
	</div>
</button>

<style>
	button:hover {
		background-color: #00000007;
	}

	button:active {
		background-color: #0000000f;
	}
</style>
