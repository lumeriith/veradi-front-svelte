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
	} from 'sveltestrap';
	import { fly } from 'svelte/transition';
	import HireSubjects from '$lib/components/hire/HireSubjects.svelte';

	import img_test from '$lib/static/test.png';
	import img_math from '$lib/static/img/hire/subject/math.png';
	import img_physics from '$lib/static/img/hire/subject/physics.png';
	import img_chemistry from '$lib/static/img/hire/subject/chemistry.png';
	import img_biology from '$lib/static/img/hire/subject/biology.png';
	import img_earthscience from '$lib/static/img/hire/subject/earthscience.png';
	import img_procedure from '$lib/static/img/hire/procedure.png';
	import img_procedure1 from '$lib/static/img/hire/procedure1.png';
	import img_procedure2 from '$lib/static/img/hire/procedure2.png';
	import img_mainPhoto from '$lib/static/img/hire/hireNoticePhoto.png';
	import HireSubjectAnnouncement from '$lib/components/hire/HireSubjectAnnouncement.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
</script>

<Form
	class="py-5 d-none d-sm-block"
	style="background-image:url('{img_mainPhoto}'); background-size:cover; margin-top:-65px;"
>
	<div class="py-5" />
	<div class="py-5" style="color:white; text-shadow: 0 0 33px #000; text-align:center;">
		<div in:fly={{ duration: 1000, y: 100 }}>
			<h1 class="tw-font-heading">Team Work, 도전, 그리고 성장은</h1>
			<div class="py-3" />
			<h1 class="tw-font-heading">베라디 구성원들의 일상입니다</h1>
		</div>
	</div>
	<div class="py-3" />
</Form>
<Form
	class="py-5 d-block d-sm-none"
	style="background-image:url('{img_mainPhoto}'); background-size:cover; margin-top:-65px;"
>
	<div class="py-5" />
	<div class="py-5" style="color:white; text-shadow: 0 0 33px #000; text-align:center;">
		<div in:fly={{ duration: 1000, y: 100 }}>
			<h3 class="tw-font-heading">Team Work, 도전, 그리고 성장은</h3>
			<div class="py-3" />
			<h3 class="tw-font-heading">베라디 구성원들의 일상입니다</h3>
		</div>
	</div>
	<div class="py-3" />
</Form>
<!---------------------------------------------------------------->
<NarrowContainer class="py-5">
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<h2 class="py-1"><b>베라디 1기 지원안내</b></h2>
		<h4 class="py-1" style="color:#656565"><b>지원절차</b></h4>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<Image
			src={img_procedure}
			style="display:inline-block; width:100%;"
			class="d-none d-sm-block"
		/>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<Image
			src={img_procedure1}
			style="display:inline-block; width:88%;"
			class="d-block d-sm-none"
		/>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.8s;">
		<Image
			src={img_procedure2}
			style="display:inline-block; width:100%;"
			class="d-block d-sm-none"
		/>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<h2 class="py-3"><b>지원방식</b></h2>
		<h5 class="py-2">
			<b>
				지원할 부서의 지원 양식을 다운로드하여 작성 후 홈페이지 내 기재된 메일 주소(~@gmail.com)로
				제출</b
			>
		</h5>
		<span style="color:#656565; display:block; line-height:200%;">
			<h5 class="py-1">* 이메일 제목 양식 : [베라디] [1기] [ㅇㅇ팀] [날짜] [이름]</h5>
			<h5 class="py-1">* 모집 기간 : 2022년 06월 21일 ~ 2022년 07월 31일 자정까지</h5>
			<h5 class="py-1">* 서류 합격자 발표 : 2022년 08월 03일까지</h5>
			<h5 class="py-1">* 면접 등 추후 일정 안내 : 서류 합격 발표와 함께 개별 통지 예정</h5>
		</span>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<h2 class="py-3"><b>지원부서</b></h2>
		<Row>
			<HireSubjects />
		</Row>
		<div style="color:#656565;">
			* 생활과 윤리팀은 A, B팀, 생명과학팀은 서울팀, 천안팀으로 나뉘어서 모집합니다.
		</div>
	</div>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<h2 class="py-3"><b>채용문의</b></h2>
		<h5 class="py-1" style="color:#656565;">
			채용 관련 문의는 Q&A 게시판 혹은 veradi@gmail.com을 통하여 가능합니다.
		</h5>
	</div>
</NarrowContainer>
