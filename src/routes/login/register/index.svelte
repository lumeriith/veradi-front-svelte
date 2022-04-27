<script>
	import SocialRegisterButton from '$lib/components/social/SocialRegisterButton.svelte';
	import IconInput from '$lib/components/social/IconInput.svelte';
	import PillButton from '$lib/components/social/PillButton.svelte';
	import MainError from '$lib/components/social/MainError.svelte';
	import {
		Alert,
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
		Image
	} from 'sveltestrap/src';

  import img_logo from '$lib/static/img/logo/veradi.png';
  import img_veradi from '$lib/static/img/login/veradi.svg';
  import img_email from '$lib/static/img/login/email.png';
  import img_password from '$lib/static/img/login/password.png';
  import img_google from '$lib/static/img/login/google.png';
  import img_kakao from '$lib/static/img/login/kakao.png';

	let inputName, inputEmail, inputPassword;
	let registerError = false;

	const REGISTER_VALIDATION_CHECKS = [
		{
			message: '이름을 입력해주세요.',
			isWrong: () => inputName == ''
		},
		{
			message: '이름은 한글로 입력되어야 합니다.',
			isWrong: () => !checkNameStandard(inputName)
		},
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

	let registerErrorText = '';

	function onRegisterClick() {
		registerError = false;
		for (let i = 0; i < REGISTER_VALIDATION_CHECKS.length; i++) {
			const val = REGISTER_VALIDATION_CHECKS[i];
			if (!val.isWrong()) continue;
			registerErrorText = val.message;
			registerError = true;
			break;
		}
	}

	function checkEmailStandard(str) {
		let reg_email =
			/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		return reg_email.test(str);
	}

	function checkNameStandard(str) {
		let regExp = /[가-힣]/g;
		return regExp.test(str);
	}
</script>

<Container class="py-4" style="transition:0.6s;" data-aos="zoom-out">
	<Row>
		<Col xs="0" sm="1" md="2" lg="3" xl="3" />
		<Col xs="12" sm="10" md="8" lg="6" xl="6">
			<Card style="align:center; box-shadow: 2px 2px 7px;">
				<CardHeader>
					<CardTitle style="text-align:center; margin-top:5pt;">회원가입</CardTitle>
				</CardHeader>
				<CardBody>
					<Row>
						<Col xs="1" sm="1" md="1" lg="1" xl="1" />
						<Col xs="10" sm="10" md="10" lg="10" xl="10">
							<Form on:submit={(e) => e.preventDefault()}>
								<Row class="pb-3" style="text-align:center">
									<Image
										alt="veardiLogo"
										src={img_logo}
										style="height:45px; width:auto; margin-left:-15px;"
									/>
									<Image
										alt="veardiLogo"
										src={img_veradi}
										style="height:40px; width:auto; margin-top:5px; margin-left:-10px"
									/>
								</Row>
								<IconInput
									title="Name"
									type="name"
									name="name"
									inputId="exampleName"
									placeholder="이름"
									iconUrl={img_email}
									bind:value={inputName}
								/>
								<IconInput
									title="Email Address"
									type="email"
									name="email"
									inputId="exampleEmail"
									placeholder="이메일"
									iconUrl={img_email}
									bind:value={inputEmail}
								/>
								<IconInput
									title="Password"
									type="password"
									name="password"
									inputId="examplePassword"
									placeholder="비밀번호"
									iconUrl={img_password}
									size="25"
									position="12"
									bind:value={inputPassword}
								/>
								<Row class="pb-3" style="margin-top:-10px">
									<FormGroup style="margin-left:-12px; font-size:16px; display:flex;">
										<Input id="c1" type="checkbox" />
										<Form style="font-size:14px; letter-spacing:-1px;">
											<span>베라디 </span>
											<a href="http://www.naver.com">이용 약관</a>
											<span> 및 </span>
											<a href="http://www.naver.com">개인정보 취급방침</a><span
												>에 대한 내용을 모두 확인하였으며, 이에 동의합니다.</span
											>
										</Form>
									</FormGroup>
								</Row>
								<MainError isState={registerError} title="회원가입 오류" text={registerErrorText} />
								<PillButton
									on:click={onRegisterClick}
									title="회원가입"
									color="#42B9FF"
									buttonId="awesome"
								/>
								<!--------------------------------------------------------------------->
								<Row class="py-1 pt-3">
									<hr />
								</Row>
								<Row style="gap:7px;">
									<SocialRegisterButton
										href="http://www.google.com"
										url={img_google}
										text="Google로 회원가입하기"
									/>
									<SocialRegisterButton
										href="http://www.kakao.com"
										url={img_kakao}
										text="Kakao로 회원가입하기"
									/>
								</Row>
							</Form>
						</Col>
						<Row data-aos="fade-right" style="transition:1s" class="pt-3">
							<Form style="text-align:right; font-size:14px; letter-spacing:-1px; color:gray;">
								<span>이미 회원이신가요?</span>
								<a href="/login">로그인 하기</a>
							</Form>
						</Row>
						<Col xs="1" sm="1" md="1" lg="1" xl="1" />
					</Row>
				</CardBody>
				<Row />
			</Card>
		</Col>
		<Col xs="0" sm="1" md="2" lg="3" xl="3" />
	</Row>
</Container>
