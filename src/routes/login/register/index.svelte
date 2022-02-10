<script>
	import SocialRegisterButton from '$lib/components/social/SocialRegisterButton.svelte';
	import SocialInput from '$lib/components/social/Input.svelte';
  import SocialButton from '$lib/components/social/Button.svelte';
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
		Image
	} from 'sveltestrap/src';

	const img = [
		'/svg/login/login.svg',
		'/img/logo/veradi.png',
		'/svg/login/veradi.svg',
		'/img/login/email.png',
		'/img/login/password.png',
		'/img/login/google.png',
		'/img/login/kakao.png'
	];

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
							<Form>
								<Row class="pb-3" style="text-align:center">
									<Image
										alt="veardiLogo"
										src={img[1]}
										style="height:45px; width:auto; margin-left:-15px;"
									/>
									<Image
										alt="veardiLogo"
										src={img[2]}
										style="height:40px; width:auto; margin-top:5px; margin-left:-10px"
									/>
								</Row>
								<SocialInput
									title="Name"
									type="name"
									name="name"
									inputId="exampleName"
									placeholder="이름"
									url={img[3]}
								/>
								<SocialInput
									title="Email Address"
									type="email"
									name="email"
									inputId="exampleEmail"
									placeholder="이메일"
									url={img[3]}
								/>
								<SocialInput
									title="Password"
									type="password"
									name="password"
									inputId="examplePassword"
									placeholder="비밀번호"
									url={img[4]}
									size="25"
									position="12"
								/>
								<Row class="pb-3">
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
                <SocialButton title="회원가입" color="#42B9FF"/>
								<Row class="py-1 pt-3">
									<hr />
								</Row>
								<Row style="gap:7px;">
									<SocialRegisterButton
										href="http://www.google.com"
										url={img[5]}
										text="Google로 회원가입하기"
									/>
									<SocialRegisterButton
										href="http://www.kakao.com"
										url={img[6]}
										text="Kakao로 회원가입하기"
									/>
								</Row>
							</Form>
						</Col>
						<Row data-aos="fade-right" style="transition:2s" class="pt-3">
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
