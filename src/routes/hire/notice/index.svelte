<script>
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
		Alert,
		TabContent
	} from 'sveltestrap/src';

	import HireSubjects from '$lib/components/hire/HireSubjects.svelte';
	const img = {
		math: '/img/hire/subject/math.png',
		physics: '/img/hire/subject/physics.png',
		chemistry: '/img/hire/subject/chemistry.png',
		biology: '/img/hire/subject/biology.png',
		earthscience: '/img/hire/subject/earthscience.png',
		procedure: '/img/hire/procedure.png',
		procedure1: '/img/hire/procedure1.png',
		procedure2: '/img/hire/procedure2.png'
	};
</script>

<Container data-aos="fade-right" style="transition:2.0s" class="py-4">
	<Row>
		<Col xs="1" md="1" lg="1" xl="1" xxl="1" />
		<Col xs="10" md="10" lg="10" xl="10" xxl="10">
			<span>
				<h1>가슴 뛰는 미래</h1>
				<h1>목표있는 삶</h1>
			</span>
		</Col>
		<Col xs="1" md="1" lg="1" />
	</Row>
</Container>
<!---------------------------------------------------------------->
<Form
	data-aos="zoom-out"
	data-aos-easing="ease-out-cubic"
	class="py-5"
	style="transition:2.0s; background-color:#e1f5ff;"
>
<Container>
	<Row style="padding-left:0px;">
		<Col xs="1" sm="1" md="1" lg="1" xl="1" xxl="1" />
		<Col xs="10" sm="10" md="5" lg="5" xl="4" xxl="4">
			<span style="">
				<h5 class="py-2">
					서울시 강남구 역삼동, 우리나라에서 가장 바쁘게 돌아가는 동(洞) 중 하나인 이곳에 내노라하는
					인재들이 오늘도 함께하고 있습니다.
				</h5>
				<div class="py-3 d-none d-xxl-block" />
				<h5 class="py-2">
					후배들을 자신들이 지난날 걸어온, 그 목적지를 향한 가장 빠르고 안전한 길로 이끌겠다는
					사명감(使命感) 하나로 똘똘 뭉쳤습니다. 올바른 교육의 방향이 무엇이든 그 길을 기어코
					찾아내서 걸어갑니다.
				</h5>
				<div class="py-3 d-none d-xxl-block" />
				<h5 class="py-2">
					얼굴도 이름도 모르지만 보석같은 청춘을 입시라는 하나의 목표를 향해 보내고 있을 학생
					여러분과 내 손으로, 팀원들과 함께 빚어낸 컨텐츠를 통해 소통하고 싶으시다면 베라디 1기에
					지원 부탁드립니다.
				</h5>
				<div class="py-4 d-block d-md-none" />
			</span>
		</Col>
		<Col xs="1" sm="2" md="1" lg="1" xl="1" xxl="1" />
		<Col xs="1" sm="1" class="d-block d-md-none" style="text-align:center;" />
		<Col
			xs="12"
			sm="12"
			md="5"
			lg="5"
			xl="4"
			xxl="5"
			style="vertical-align:middle; display:inline-block; text-align:center;"
		>
			<Image
				src="/img/test2.png"
				class="pt-2"
				style="max-width:350px; width:100%; display:inline-block;"
			/>
		</Col>
		<Col xs="1" sm="1" md="0" lg="0" xl="1" xxl="1" class="d-none d-md-block"/>
	</Row>
</Container>
</Form>
<!---------------------------------------------------------------->
<Container class="py-5">
	<Row>
		<Col xs="1" sm="1" md="1" lg="1" xl="1" xxl="1" />
		<Col xs="10" sm="10" md="10" lg="10" xl="10" xxl="8">
			<div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
				<h1 class="py-1">베라디 1기 지원안내</h1>
				<h2 class="py-1" style="color:gray">지원절차</h2>
			</div>
		</Col>
		<Col xs="1" sm="1" md="1" lg="1" xl="1" xxl="2" />
	</Row>
	<Row class="pt-3">
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
		<Col xs="0" sm="0" md="1" lg="1" xl="1" xxl="2" />
	</Row>
</Container>
<!---------------------------------------------------------------->
<Form class="py-5" style="background-color:#e1f5ff; ">
	<Container class="py-3" style="padding-left:20px;">
		<div data-aos="flip-left" data-aos-easing="linear" style="transition:1.0s;">
			<Row>
				<Col xs="0" sm="0" md="1" lg="1" xl="1" xxl="1" />
				<Col xs="12" sm="12" md="3" lg="3" xl="3" xxl="3" style="display:table;">
          <div style="display:table-cell; height:100%; align-items:center; color:gray; vertical-align:middle;">
						<h2 style="vertical-align:center;">지원방식</h2>
					</div>
				</Col>
				<Col xs="12" sm="12" md="7" lg="7" xl="7" xxl="6">
					<div style="word-break:keep-all;">
						<h5 class="pb-2">
							지원할 부서의 지원 양식을 다운로드하여 작성 후 홈페이지 내 기재된 메일
							주소(~@gmail.com)로 제출
						</h5>
						<span style="color:gray;">
							<h5>* 이메일 제목 양식 : [베라디] [1기] [OO팀] [날짜] [이름]</h5>
							<h5>* 모집 기간 : 2022년 02월 03일 ~ 2022년 03월 01일 자정까지</h5>
							<h5>* 서류 합격자 발표 : 2022년 03월 03일</h5>
							<h5>* 면접 등 추후 일정 안내 : 개별 공지 예정</h5>
						</span>
					</div>
				</Col>
				<Col xs="0" sm="0" md="1" lg="1" xl="1" xxl="2" />
			</Row>
		</div>
	</Container>
</Form>
<!---------------------------------------------------------------->
<Container class="py-5">
	<Row>
    <Col xs="1" sm="1" class="d-block d-sm-none d-lg-block"/>
		<Col xs="10" sm="10" md="3">
			<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
				<h2 style="margin-left:0px;" class="py-3">지원부서</h2>
			</div>
		</Col>
    <Col xs="1" sm="1" class="d-block d-sm-none d-xl-block"/>
		<Col xs="1" class="d-block d-sm-none"/>
		<Col xs="10" sm="12" md="8" lg="7">
			<Row>
				<HireSubjects />
			</Row>
		</Col>
	</Row>
</Container>
<!---------------------------------------------------------------->
<Form class="py-5" style="background-color:whitesmoke">
	<Container class="py-1">
		<div style="margin-left:10px;">
			<h1>채용문의</h1>
			<h5>채용 관련 문의는 Q&A 게시판 또는 @gmail.com을 통해서 가능합니다.</h5>
		</div>
	</Container>
</Form>
