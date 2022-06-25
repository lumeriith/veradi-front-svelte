<script>
	import SocialLoginButton from '$lib/components/login/SocialLoginButton.svelte';
	import LoginInput from '$lib/components/login/LoginInput.svelte';
	import PillButton from '$lib/components/login/PillButton.svelte';
	import MainError from '$lib/components/login/MainError.svelte';
	import { Card, Input } from 'sveltestrap';
	import Icon from '@iconify/svelte';

	import img_email from '$lib/static/img/login/email.png';
	import img_password from '$lib/static/img/login/password.png';
	import img_google from '$lib/static/img/login/googleIcon.png';
	import img_kakao from '$lib/static/img/login/kakaoIcon.png';
	import { isLoggedIn } from '$lib/store.cjs';
	import { login, logout } from '$lib/firebase/account.cjs';

	export let onClose = () => {
    cardClose();
  };

	let inputEmail, inputPassword;
	let loginError = false;

	const LOGIN_VALIDATION_CHECKS = [
		{
			message: '이메일을 입력해주세요.',
			isWrong: () => inputEmail == ''
		},
		{
			message: '이메일 형식이 맞지 않습니다.',
			isWrong: () => !checkEmailStandard(inputEmail)
		},
		{
			message: '비밀번호를 입력해주세요.',
			isWrong: () => inputPassword == ''
		}
	];

	let loginErrorText = '';

	function onLoginClick() {
		loginError = false;
		for (let i = 0; i < LOGIN_VALIDATION_CHECKS.length; i++) {
			const val = LOGIN_VALIDATION_CHECKS[i];
			if (!val.isWrong()) continue;
			loginErrorText = val.message;
			loginError = true;
			break;
		}
	}

	function checkEmailStandard(str) {
		let reg_email =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		return reg_email.test(str);
	}

	// -------------- firebase - login ------------------- //

	function tryLogin() {
		login(inputEmail, inputPassword).then((didSuceed) => {
			if (didSuceed) {
				onClose();
			} else {
				console.log('ERRORRROROROROR');
			}
		});
	}
</script>

<Card
	class="tw-relative tw-flex tw-flex-row tw-rounded-none sm:tw-rounded-xl tw-w-[100vw] tw-h-[100vh] sm:tw-w-[450px] sm:tw-h-auto tw-shadow-2xl"
>
	<button class="tw-absolute tw-right-0 tw-top-0 tw-p-5" on:click={onClose}>
		<Icon icon="bytesize:close" class="tw-text-sm" />
	</button>
	<form class="tw-py-6 tw-px-10 tw-w-full" on:submit={(e) => e.preventDefault()}>
		<header class="tw-text-center tw-mb-5 tw-text-xl tw-text-slate-600">로그인</header>
		<main>
			<div class="tw-flex tw-flex-col tw-gap-4 tw-mb-5">
				<LoginInput title="이메일" type="email" bind:value={inputEmail} />
				<LoginInput title="비밀번호" type="password" bind:value={inputPassword} />
			</div>
			<Input id="c1" type="checkbox" label="로그인 상태 유지" />

			<MainError isState={loginError} title="로그인 오류" text={loginErrorText} />
			<div class="tw-flex tw-items-stretch tw-flex-col tw-gap-5">
				{#if $isLoggedIn}
					<PillButton on:click={logout} title="로그아웃" color="#5AC2FF" />
				{:else}
					<PillButton on:click={tryLogin} title="로그인" color="#5AC2FF" />
				{/if}
				<div class="tw-flex tw-gap-8">
					<SocialLoginButton url={img_google} text="Google로 로그인" />
					<SocialLoginButton href="http://www.kakao.com" url={img_kakao} text="Kakao로 로그인" />
				</div>
				<div />
				<div class="tw-flex tw-mb-5 tw-text-sm tw-gap-2 tw-text-gray-500 tw-justify-center">
					<a href="/login/register">회원가입</a>
					<div class="tw-w-[1px] tw-bg-slate-300" />
					<a href="/login/resetPassword">비밀번호 찾기</a>
				</div>
			</div>
		</main>
	</form>
</Card>

<style>
	a {
		color: black;
		text-decoration: none;
	}
</style>
