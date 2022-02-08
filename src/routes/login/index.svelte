<script>
  import {
	  Button,
	  Container,
    Col,
    Row,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardSubtitle,
		CardText,
		CardTitle,
		Input,
		Form,
		FormGroup,
		Label,
		Image
	} from 'sveltestrap/src';

	const img = [
		'/svg/login/login.svg',
		'/img/logo/veradi.png',
		'/svg/login/veradi.svg',
		'/img/login/email.png',
		'/img/login/password.png'
	];

	const placeholder = [
		'<Image alt="veardiLogo" src="{img[2]}" style="height:40px; width:auto; margin-top:5px; margin-left:-10px"/>'
	]

	const login = async () => {
		const res = await fetch('api/login', {
			method: 'POST',
			body: JSON.stringify({
				username: 'test@test.com',
				password: '12345678'
			})
		});
	};
</script>

<Container class="py-4">
  <Row>
  	<Col xs="1" sm="1" md="2" lg="3" xl="3" />
    <Col xs="10" sm="10" md="8" lg="6" xl="6">
  	<Card style="align:center;">
  	  <CardHeader>
  	  	<CardTitle>로그인</CardTitle>
  	  </CardHeader>
  	  <CardBody>
  	  	<Row>
  	  		<Col xs="1" sm="1" md="1" lg="1" xl="1" />
  	  		<Col xs="10" sm="10" md="10" lg="10" xl="10">
						<Form>
  	  				<Row class="pb-3" style="text-align:center">
								<Image alt="veardiLogo" src="{img[1]}" style="height:45px; width:auto; margin-left:-15px;"/> 
								<Image alt="veardiLogo" src="{img[2]}" style="height:40px; width:auto; margin-top:5px; margin-left:-10px"/> 
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
									"/>
									
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
								"/>
  	  				</Row>
  	  				<Row class="pb-3">
  	  					<Col>
									<FormGroup style="margin-left:-12px;">
										<Input id="c1" type="checkbox" label="로그인 상태 유지"/>
									</FormGroup>
								</Col>
  	  					<Col align="right" style="margin-right:-10px;">
									<a href="http://w3schools.com" style="margin-right:8px; color:gray;">회원가입</a>
									<a href="http://w3schools.com" style="color:gray;">ID/PW 찾기</a>
								</Col>
  	  				</Row>
  	  				<Row class="py-2">
  	  					<Col xs="1" sm="1" md="1" lg="1" xl="1" />
  	  					<Col>
  	  						<Row>
  	  							<Button style="align:center; background-color:#42B9FF;">로그인</Button>
  	  						</Row>
  	  					</Col>
  	  					<Col xs="1" sm="1" md="1" lg="1" xl="1" />
  	  				</Row>
  	  				<Row class="py-3">
								<hr />
  	  				</Row>
  	  				<Row>
  	  					<Col style="text-align:center;">Google</Col>
  	  					<Col style="text-align:center;">KaKao</Col>
  	  				</Row>
						</Form>
  	  		</Col>
  	  		<Col xs="1" sm="1" md="1" lg="1" xl="1" />
  	  	</Row>
  		</CardBody>
  	</Card>
  	</Col>
  </Row>
  <Col xs="1" sm="1" md="2" lg="3" xl="3" />
</Container>
