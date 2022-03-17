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
		hirePhoto: '/img/hire/hirePhoto.png',
		hireProcess: '/img/hire/hireProcess.png'
	};
  import { VeradiUrl } from '../url/veradiUrl.svelte';

	export let subjectName, subjectIntroHref;
	export let applicationDate, applicationIntake;
	export let requirement, prefer;
	export let etc;
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
<Form style="background-image:url('{img.hirePhoto}'); background-size:cover;">
	<Container class="py-4" style="position:relative;">
		<Row class="py-3">
			<Col sm="1" />
			<Col sm="4" class="pt-1">
				<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
					<span style="color:#333333;">
						<h2><b>베라디 물리학 1팀</b></h2>
						<h2><b>모집 요강</b></h2>
					</span>
				</div>
			</Col>
			<Col sm="6">
				<div data-aos="flip-left" data-aos-easing="linear" style="transition:2.0s;">
					<h5 style="word-break:keep-all; line-height:160%;">
						입시 교육 컨텐츠의 미래와 여러분의 찬란한 20대를 물리학 1팀에서 함께 합시다
					</h5>
				</div>
				<Row class="pt-3">
					<Col xs="12" sm="6" class="pb-3" style="text-align:center;">
						<div data-aos="flip-down" data-aos-easing="linear" style="transition:2.0s;">
							<Button href="{VeradiUrl.introPhysics}"
								style="border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%; background-color:#17a2ff; border:0; word-break:keep-all;"
								>물리학 1팀 소개보기</Button
							>
						</div>
					</Col>
					<Col xs="12" sm="6" class="pb-3" style="text-align:center;">
						<div data-aos="flip-down" data-aos-easing="linear" style="transition:2.0s;">
							<Button
								style="border-radius: 10% 10% 10% 10% / 50% 50% 50% 50%; background-color:#17a2ff; border:0; word-break:keep-all;"
								>지원서류 다운로드</Button
							>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
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
						<h5>2022.03.16 ~ 30</h5>
					</Col>
				</Row>
				<Row class="pt-3">
					<Col sm="3" md="2">
						<h5><b>지원규모</b></h5>
					</Col>
					<Col style="color:#707070;">
						<h5>10명 (경력 및 내규에 따라 적용)</h5>
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
			<span style="color:#707070;">
				<h5><b>- 과학 실전 모의고사 출제 및 검수</b></h5>
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
					<h5><b>자격사항</b></h5>
				</Col>
				<Col style="color:#707070;">
					<h5>1. 관련학과 전공자(과학계열)</h5>
					<h5>2. 고졸 이상 학력 소지자</h5>
					<h5>3. 수능 2등급 이상</h5>
					<h5>4. 수능 물리학 1등급 성적표 제출</h5>
				</Col>
			</Row>
			<Row class="pt-3">
				<Col sm="3" md="2">
					<h5><b>우대사항</b></h5>
				</Col>
				<Col style="color:#707070;">
					<h5>1. 유관업무 경험자 (인턴, 알바)</h5>
					<h5>2. 장기근무 가능한 자</h5>
					<h5>3. 대학교 저학년</h5>
					<h5>4. 교육 분야에 종사한 경험이 있는 사람</h5>
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
			<Image class="pb-4" src={img.hireProcess} />
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
