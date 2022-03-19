<script>
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
		Image,
		TabContent
	} from 'sveltestrap/src';

	import HireSideButton from '$lib/components/hire/HireSideButton.svelte';
	const img = {
		team: 'svg/hire/team.svg',
		procedure: 'img/hire/procedure.png',
		procedure1: 'img/hire/procedure1.png',
		procedure2: 'img/hire/procedure2.png'
	};

	export let subjectName, subjectIntroHref;
	export let applicationDate, applicationIntake;
	export let requirement, prefer;
	export let etc;
</script>

<Form
	data-aos="fade-up"
	class="py-5"
	style="background-color:#e1f5ff; font-weight:bold; transition:1.0s; "
>
	<div style="position:absolute; text-align:center; margin-top:-20px; width:100%">
		<Image
			class="center"
			src={img.team}
			style="display:inline-block; text-align:center; opacity:0.22; max-height:260px;"
		/>
	</div>
	<Container>
		<Row style="padding-right:0px;">
			<Col xs="1" />
			<Col xs="10" style="position:relative; ">
				<div class="py-3 d-none d-sm-block" />
				<span style="text-align:center; letter-spacing:-1px;">
					<h2>교육의 변화를 열망하는</h2>
					<h1>사람들이 모였다</h1>
				</span>
				<div class="py-3" />
				<Row>
					<Col xs="1" sm="2" md="3" lg="4" />
					<Col xs="10" sm="8" md="6" lg="4">
						<Card style="flex; gap:10px; border:none; background-color:#e1f5ff;">
							<Button href={subjectIntroHref}>{subjectName}팀 소개보기</Button>
							<Button>지원서류 다운로드</Button>
						</Card>
					</Col>
					<Col xs="1" sm="2" md="3" lg="4" />
					<div class="py-3 d-none d-sm-block" />
				</Row>
			</Col>
		</Row>
	</Container>
</Form>
<Container class="py-5">
	<div data-aos="flip-down" style="transition:2.0s;">
		<h1 style="text-align:center;">베라디 {subjectName}팀 모집 요강</h1>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
		<Form class="py-5">
			<h3 class="py-2" style="color:#0845ac;">· 모집개요</h3>
			<Row class="py-1" style="margin-left:8px;">
				<Col xs="12" sm="3" md="2" xxl="1">
					<h5 style="color:grey; line-height:150%;">
						<span>접수기간</span>
					</h5>
				</Col>
				<Col>
					<h5 style="color:black;">
						<div style="white-space:pre-line;  line-height:150%;">{applicationDate}</div>
					</h5>
				</Col>
			</Row>

			<Row class="py-1" style="margin-left:8px;">
				<Col xs="12" sm="3" md="2" xxl="1">
					<h5 style="color:grey; line-height:150%;">
						<span>지원규모</span>
					</h5>
				</Col>
				<Col>
					<h5 style="color:black;">
						<div style="white-space:pre-line;  line-height:150%;">{applicationIntake}</div>
					</h5>
				</Col>
			</Row>
		</Form>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
		<Form class="py-4">
			<h3 class="py-2" style="color:#3284c3;">· 자격요건</h3>
			<Row class="py-1" style="margin-left:8px;">
				<Col xs="12" sm="3" md="2" xxl="1">
					<h5 style="color:grey; line-height:150%;">
						<span>자격사항</span>
					</h5>
				</Col>
				<Col>
					<h5 style="color:black;">
						<div style="white-space:pre-line;  line-height:150%;">{requirement}</div>
					</h5>
				</Col>
			</Row>
			<Row class="py-1" style="margin-left:8px;">
				<Col xs="12" sm="3" md="2" xxl="1">
					<h5 style="color:grey; line-height:150%;">
						<span>우대사항</span>
					</h5>
				</Col>
				<Col>
					<h5 style="color:black;">
						<div style="white-space:pre-line;  line-height:150%;">{prefer}</div>
					</h5>
				</Col>
			</Row>
		</Form>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
		<Form class="py-4">
			<h3 class="py-2" style="color:#3284c3;">· 채용 프로세스</h3>
			<Row class="py-1">
				<Col xs="0" sm="0" md="1" lg="1" xl="1" xxl="3" />
				<Col xs="12" sm="12" md="10" lg="10" xl="10" xxl="8">
					<Row style="text-align:center;">
						<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
							<Image
								src={img.procedure}
								style="display:inline-block; width:100%;"
								class="d-none d-sm-block"
							/>
						</div>
						<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
							<Image
								src={img.procedure1}
								style="display:inline-block; width:88%;"
								class="d-block d-sm-none"
							/>
						</div>
						<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.8s;">
							<Image
								src={img.procedure2}
								style="display:inline-block; width:100%;"
								class="d-block d-sm-none"
							/>
						</div>
					</Row>
				</Col>
			</Row>
			<Row class="py-1">
				<Col xs="0" />
				<Col>
					<h5 style="color:grey;">
						<div style="white-space:pre-line; letter-spacing:-1px; line-height:150%;">
							* 인턴기간에 한해서 소정의 급여가 제공됩니다. * 저도 주세요.
						</div>
					</h5>
				</Col>
			</Row>
		</Form>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
		<Form class="py-4">
			<h3 class="py-2" style="color:#3284c3;">· 기타사항</h3>
			<Row class="py-1" style="margin-left:8px;">
				<Col>
					<h5 style="color:black;">
						<div style="white-space:pre-line;  line-height:150%;">{etc}</div>
					</h5>
				</Col>
			</Row>
		</Form>
	</div>
</Container>
<Form class="py-4" style="background-color:#e1f5ff;">
	<Container class="py-3" style="text-align:center;">
		<div data-aos="zoom-in-up" data-aos-easing="linear" style="transition:1.5s;">
			<span style="color:#575757;">
				<h1>지금도 새로운 역사를</h1>
				<h1>만들고 있습니다</h1>
			</span>
		</div>
	</Container>
	<Container class="py-3" style="text-align:center;">
		<div data-aos="zoom-in-up" data-aos-easing="linear" style="transition:2.5s;">
			<span style="color:#6d6d6d; line-height:150%;">
				<h5>베라디가 만드는 수많은 혁신의 순간들,</h5>
				<h5>당신과 함께 만들고 싶습니다.</h5>
				<h5>지금 당장 베라디에 합류하세요!</h5>
			</span>
		</div>
	</Container>
	<Container>
		<HireSideButton />
	</Container>
</Form>
