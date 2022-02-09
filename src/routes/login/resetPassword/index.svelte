<script>
	import SocialLoginButton from '$lib/components/SocialLoginButton.svelte';
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

<Container class="py-4">
	<Row>
		<Col xs="0" sm="1" md="2" lg="3" xl="3" />
		<Col xs="12" sm="10" md="8" lg="6" xl="6">
			<Card style="align:center; box-shadow: 2px 2px 7px;">
				<CardHeader>
					<CardTitle style="text-align:center; margin-top:5pt;">비밀번호 찾기/정정</CardTitle>
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
								<Row class="color:lightgray;">Name</Row>
								<Row class="pb-3">
									<Input
										type="name"
										name="name"
										id="exampleName"
										placeholder="이름"
										style="
		  								background-image: url({img[3]}) ;
		  								background-size: 30px;
		  								background-position: 10px;
		  								background-repeat: no-repeat;
		  								text-align: left;
		  								text-indent: 40px;
											
		  							"
									/>
								</Row>
								<Row class="color:lightgray;">Email Address</Row>
								<Row class="pb-3">
									<Input
										type="email"
										name="email"
										id="exampleEmail"
										placeholder="이메일"
										style="
		  								background-image: url({img[3]}) ;
		  								background-size: 30px;
		  								background-position: 10px;
		  								background-repeat: no-repeat;
		  								text-align: left;
		  								text-indent: 40px;
											
		  							"
									/>
								</Row>
								<Row>Password</Row>
								<Row class="pb-2">
									<Input
										type="password"
										name="password"
										id="examplePassword"
										placeholder="비밀번호"
										style="
		  							background-image: url({img[4]}) ;
		  							background-size: 25px;
		  							background-position: 12px;
		  							background-repeat: no-repeat;
		  							text-align: left;
		  							text-indent: 40px;
	 	  					"
									/>
								</Row>
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
								<Row class="py-1">
									<Col xs="1" sm="1" md="1" lg="1" xl="1" />
									<Col>
										<Row>
											<Button
												style="align:center; background-color:#42B9FF; border:none; border-radius:21px;"
												>회원가입
											</Button>
										</Row>
									</Col>
									<Col xs="1" sm="1" md="1" lg="1" xl="1" />
								</Row>
								<Row class="py-1 pt-3">
									<hr />
								</Row>
								<Row style="gap:7px;">
									<SocialLoginButton
										href="http://www.google.com"
										imgUrl={img[5]}
										text="Google로 로그인"
									/>
									<SocialLoginButton
										href="http://www.kakao.com"
										imgUrl={img[6]}
										text="Kakao로 로그인"
									/>
								</Row>
							</Form>
						</Col>
						<Row class="pt-3">
							<Form style="text-align:right; letter-spacing:-1px; color:gray;">
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
