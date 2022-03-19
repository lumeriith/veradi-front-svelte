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
		team: '/svg/hire/team.svg',
		procedure: '/img/hire/procedure.png',
		procedure1: '/img/hire/procedure1.png',
		procedure2: '/img/hire/procedure2.png',
		hireSubjectPhoto: '/img/hire/hireSubjectPhoto.png',
		hireProcess: '/img/hire/hireProcess.png',
    hireProcess1: '/img/hire/hireProcess1.png',
    hireProcess2: '/img/hire/hireProcess2.png',
	};


	export let subjectName, subjectIntro, subjectIntroUrl;
	export let applicationDate, applicationIntake;
	export let task, requirement, prefer;
</script>

<Container class="py-5">
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:2.0s;">
		<Row>
			<Col sm="1" />
			<Col xs="10" sm="10">
				<span style="letter-spacing:-1px; word-break:keep-all;">
					<h1><b>베라디와 함께할,</b></h1>
					<h1><b>열정적인 당신을 기다립니다</b></h1>
				</span>
			</Col>
		</Row>
	</div>
	<HireSideButton />
</Container>
<Form style="background-image:url('{img.hireSubjectPhoto}'); background-size:cover;">
	<Container class="py-4" style="position:relative;">
    <div class="py-3 d-none d-xl-block"/>
		<Row class="py-3">
			<Col sm="1" />
			<Col sm="4" class="pt-1 pb-2">
				<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
					<span style="color:#333333; word-break:keep-all; text-shadow:1px 1px 1px gray;">
						<h2><b>베라디 {subjectName}팀 모집요강</b></h2>
					</span>
				</div>
			</Col>
			<Col sm="6">
				<div data-aos="flip-left" data-aos-easing="linear" style="transition:2.0s;">
					<h4 style="word-break:keep-all; line-height:160%;">
						{subjectIntro}
					</h4>
				</div>
				<Row class="pt-3">
					<Col xs="12" sm="6" class="pb-3" style="text-align:center;">
						<div data-aos="flip-down" data-aos-easing="linear" style="transition:2.0s;">
							<Button href="{subjectIntroUrl}"
								style="border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%; background-color:#17a2ff; border:0; word-break:keep-all; letter-spacing:-1px;"
								>{subjectName}팀 소개보기</Button
							>
						</div>
					</Col>
					<Col xs="12" sm="6" class="pb-3" style="text-align:center;">
						<div data-aos="flip-down" data-aos-easing="linear" style="transition:2.0s;">
							<Button
								style="border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%; background-color:#17a2ff; border:0; word-break:keep-all; letter-spacing:-1px;"
								>지원서류 다운로드</Button
							>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
    <div class="py-3 d-none d-xl-block"/>
	</Container>
</Form>
<Container class="py-5">
	<div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
		<Row class="py-5">
			<Col sm="1" />
			<Col sm="10">
				<h3 style="color:#3597e3; text-shadow: 1px 1px 1px gray;"><b>모집개요</b></h3>
				<Row class="pt-3">
					<Col sm="3" md="2">
						<h5><b>접수기간</b></h5>
					</Col>
					<Col style="color:#707070;">
						<h5>{applicationDate}</h5>
					</Col>
				</Row>
				<Row class="pt-3">
					<Col sm="3" md="2">
						<h5><b>지원규모</b></h5>
					</Col>
					<Col style="color:#707070;">
						<h5>{applicationIntake}</h5>
					</Col>
				</Row>
			</Col>
		</Row>
	</div>
  <div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
	<Row class="py-5">
		<Col sm="1" />
		<Col sm="10">
			<h3 class="pb-3" style="color:#3597e3; text-shadow: 1px 1px 1px gray;"><b>담당업무</b></h3>
			<span style="color:#707070; white-space:pre-line; ">
				<h5 style="line-height:160%;"><b>{task}</b></h5>
			</span>
		</Col>
	</Row>
  </div>
  <div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
	<Row class="py-5">
		<Col sm="1" />
		<Col sm="10">
			<h3 style="color:#3597e3; text-shadow: 1px 1px 1px gray;"><b>자격요건</b></h3>
			<Row class="pt-3">
				<Col sm="3" md="2">
					<h5 style="line-height:160%"><b>자격사항</b></h5>
				</Col>
				<Col>
					<h5 style="color:#707070; white-space:pre-line; line-height:160%;">{requirement}</h5>
				</Col>
			</Row>
			<Row class="pt-3">
				<Col sm="3" md="2">
					<h5 style="line-height:160%"><b>우대사항</b></h5>
				</Col>
				<Col>
					<h5 style="color:#707070; white-space:pre-line; line-height:160%;">{prefer}</h5>
				</Col>
			</Row>
		</Col>
	</Row>
  </div>
  <div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
	<Row class="py-5">
		<Col sm="1" />
		<Col sm="10">
			<h3 class="pb-3" style="color:#3597e3; text-shadow: 1px 1px 1px gray;">
				<b>급여 및 근무관련 조건</b>
			</h3>
			<span style="color:#707070;">
				<h5>프리랜서 및 도급 계약 가능, 능력에 따라 건당 용역료 지급</h5>
				<h5>인턴 기간 한해서 소정의 급여가 제공됩니다</h5>
			</span>
		</Col>
	</Row>
  </div>
  <div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
	<Row class="py-5">
		<Col sm="1" />
		<Col sm="10">
			<h3 class="pb-3" style="color:#3597e3; text-shadow: 1px 1px 1px gray;">
				<b>채용 프로세스</b>
			</h3>
			<Image class="pb-4 d-none d-sm-block" src={img.hireProcess} />
      <div class="pb-4 d-block d-sm-none">
        <Image src={img.hireProcess1}/>
        <Image src={img.hireProcess2}/>
      </div>
			<span style="color:#707070; letter-spacing:-1px;">
				<div>
					* 빠른 성장을 하고 있는 입시 교육 컨텐츠 회사인 만큼 입사하시면 많은 기회와 성장을 할 수
					있습니다.
				</div>
				<div>* 면접 일정은 추후 통보됩니다.</div>
			</span>
		</Col>
	</Row>
  </div>
</Container>
