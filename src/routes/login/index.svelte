<script>
	import SocialLoginButton from '$lib/components/social/SocialLoginButton.svelte';
	import IconInput from '$lib/components/social/IconInput.svelte';
	import PillButton from '$lib/components/social/PillButton.svelte';
	import MainError from '$lib/components/social/MainError.svelte';
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
  import img_google from '$lib/static/img/login/google.png';
  import img_kakao from '$lib/static/img/login/kakao.png';




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

	function checkEmail(str) {
		return false;
	}

	function checkKorStandard(str) {
		let regExp = /[가-힣]/g;
		return regExp.test(str);
	}

	function checkPassword(str) {
		return false;
	}
</script>

<Container class="py-4" style="transition:0.6s;" data-aos="zoom-out">
	<Row>
		<Col xs="0" sm="1" md="2" lg="3" xl="1" />
		<Col xs="12" sm="10" md="8" lg="6" xl="10">
			<Card style="align:center; box-shadow: 2px 2px 7px;">
				<CardHeader>
					<CardTitle style="text-align:center; margin-top:5pt;">로그인</CardTitle>
				</CardHeader>
				<CardBody>
					<Row>
						<Col xs="1" sm="1" md="1" lg="1" xl="1" />
						<Col xs="10" sm="10" md="10" lg="10" xl="10">
							<Row>
								<Col xl="6">
									<Form on:submit={(e) => e.preventDefault()}>
										<Row class="pb-3" style="text-align:center">
											<Image
												alt="veardiLogo"
												src={img_veradipng}
												style="height:45px; width:auto; margin-left:-15px;"
											/>
											<Image
												alt="veardiLogo"
												src={img_veradisvg}
												style="height:40px; width:auto; margin-top:5px; margin-left:-10px"
											/>
										</Row>
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
											<Col
												xs="12"
												sm="6"
												md="5"
												style="padding-right:0px; margin-bottom:-15px; padding-bottom:-15px;"
											>
												<FormGroup style="margin-left:-12px; font-size:16px;">
													<Input id="c1" type="checkbox" label="로그인 상태 유지" />
												</FormGroup>
											</Col>
											<Col xs="12" sm="6" md="7" align="right" style="margin-right:-13px;">
												<Row>
													<Col xs="12" sm="12" md="6">
														<a
															href="/login/register"
															style="color:gray; margin-right:-12px; padding-right:0px; font-size:15px; letter-spacing:-1px; text-align:right;"
															>회원가입</a
														>
													</Col>
													<Col xs="12" sm="12" md="6">
														<a
															href="/login/resetPassword"
															style="color:gray; margin-right:-12px; padding-right:0px; font-size:15px; letter-spacing:-1px; padding-left:-5px"
															>PW 찾기</a
														>
													</Col>
												</Row>
											</Col>
										</Row>
										<MainError isState={loginError} title="로그인 오류" text={loginErrorText} />
										<PillButton
											on:click={onLoginClick}
											title="로그인"
											color="#42B9FF"
											buttonId="awesome"
										/>
										<!--------------------------------------------------------------------->
										<Row class="py-1 pt-3">
											<hr />
										</Row>
										<Row style="gap:7px;">
											<SocialLoginButton
												href="http://www.google.com"
												url={img_google}
												text="Google로 로그인"
											/>
											<SocialLoginButton
												href="http://www.kakao.com"
												url={img_kakao}
												text="Kakao로 로그인"
											/>
										</Row>
									</Form>
								</Col>
								<Col xl="6" class="d-none d-xl-block">
									<Row style="margin-right:-170px; padding-right:-170px;">
										<Image
											alt=".."
											src={img_man}
											draggable="false"
											style="width:80%; transition:2.0s;"
											data-aos="zoom-in"
										/>
									</Row>
								</Col>
							</Row>
						</Col>
						<Col xs="1" sm="1" md="1" lg="1" xl="1" class="d-xl-none" />
					</Row>
				</CardBody>
				<Row class="pb-2" />
			</Card>
		</Col>
		<Col xs="0" sm="1" md="2" lg="3" xl="1" />
	</Row>
</Container>
