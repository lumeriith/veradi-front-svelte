<script>
	import SocialLoginButton from '$lib/components/login/SocialLoginButton.svelte';
	import LoginInput from '$lib/components/login/LoginInput.svelte';
	import PillButton from '$lib/components/login/PillButton.svelte';
	import MainError from '$lib/components/login/MainError.svelte';
	import {
		Button,
		Container,
		Col,
		Row,
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Input,
		Form,
		FormGroup,
		Image,
		Alert
	} from 'sveltestrap/src';

	import img_ground from '$lib/static/img/landing/ground.svg';
	import img_man from '$lib/static/img/landing/man.svg';
	import img_login from '$lib/static/img/login/login.svg';
	import img_veradipng from '$lib/static/img/logo/veradi.png';
	import img_veradisvg from '$lib/static/img/login/veradi.svg';
	import img_email from '$lib/static/img/login/email.png';
	import img_password from '$lib/static/img/login/password.png';
	import img_google from '$lib/static/img/login/googleIcon.png';
	import img_kakao from '$lib/static/img/login/kakaoIcon.png';

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
</script>

<div class="tw-flex tw-justify-center tw-p-8">
	<Card
		class="tw-flex tw-flex-row tw-rounded-3xl tw-w-full sm:tw-w-[500px] xl:tw-w-[900px]"
		data-aos="zoom-out"
	>
		<form class="tw-py-8 tw-px-12 tw-w-full xl:tw-w-6/12" on:submit={(e) => e.preventDefault()}>
			<header class="tw-flex tw-gap-2 tw-items-center tw-mb-5">
				<img alt="veardiLogo" src={img_veradipng} class="tw-h-8" />
				<img alt="veardiLogo" src={img_veradisvg} class="tw-h-8" />
			</header>
			<main>
				<div class="tw-flex tw-flex-col tw-gap-4 tw-mb-5">
					<LoginInput
						title="Email Address"
						type="email"
						name="email"
						placeholder="이메일"
						iconUrl={img_email}
						size="23"
						bind:value={inputEmail}
					/>
					<LoginInput
						title="Password"
						type="password"
						name="password"
						placeholder="비밀번호"
						iconUrl={img_password}
						size="20"
						position="12"
						bind:value={inputPassword}
					/>
				</div>
				<div class="tw-flex tw-mb-5 tw-text-sm tw-gap-2 tw-text-gray-500">
					<Input id="c1" type="checkbox" label="로그인 상태 유지" />
					<a href="/login/register" class="tw-ml-auto">회원가입</a>
					<a href="/login/resetPassword">PW 찾기</a>
				</div>
				<MainError isState={loginError} title="로그인 오류" text={loginErrorText} />
				<div class="tw-flex tw-justify-center">
					<PillButton on:click={onLoginClick} title="로그인" color="#42B9FF" />
				</div>
				<hr class="tw-mt-10 tw-mb-4" />
				<div class="tw-flex tw-gap-2">
					<SocialLoginButton href="http://www.google.com" url={img_google} text="Google로 로그인" />
					<SocialLoginButton href="http://www.kakao.com" url={img_kakao} text="Kakao로 로그인" />
				</div>
			</main>
		</form>
		<div class="tw-w-6/12 tw-hidden xl:tw-block">
			<Image alt=".." src={img_man} draggable="false" />
		</div>
	</Card>
</div>

<style>
	a {
		color: gray;
	}
</style>
