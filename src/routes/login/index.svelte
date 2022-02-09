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
					<CardTitle style="text-align:center; margin-top:5pt;">로그인</CardTitle>
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
													href="http://w3schools.com"
													style="color:gray; margin-right:-12px; padding-right:0px; font-size:15px; letter-spacing:-1px; text-align:right;"
													>회원가입</a
												>
											</Col>
											<Col xs="12" sm="12" md="6">
												<a
													href="http://w3schools.com"
													style="color:gray; margin-right:-12px; padding-right:0px; font-size:15px; letter-spacing:-1px; padding-left:-5px"
													>ID/PW 찾기</a
												>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row class="py-1">
									<Col xs="1" sm="1" md="1" lg="1" xl="1" />
									<Col>
										<Row>
											<Button
												style="align:center; background-color:#42B9FF; border:none; border-radius:21px;"
												>로그인</Button
											>
										</Row>
									</Col>
									<Col xs="1" sm="1" md="1" lg="1" xl="1" />
								</Row>
								<Row class="py-1 pt-3">
									<hr />
								</Row>
								<Row style="gap:7px;">
										<SocialLoginButton href="http://www.google.com" imgUrl={img[5]} text="Google로 로그인" />
										<SocialLoginButton href="http://www.kakao.com" imgUrl={img[6]} text="Kakao로 로그인" />
								</Row>
							</Form>
						</Col>
						<Col xs="1" sm="1" md="1" lg="1" xl="1" />
					</Row>
				</CardBody>
			</Card>
		</Col>
		<Col xs="0" sm="1" md="2" lg="3" xl="3" />
	</Row>
</Container>
