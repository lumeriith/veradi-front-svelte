<script>
	import img_landingMain from '$lib/static/img/landing/landingMain.png';
	import img_landingPhoto1 from '$lib/static/img/landing/landingPhoto1.jpg';
	import img_landingPhoto2 from '$lib/static/img/landing/landingPhoto2.jpg';
	import img_landingPhoto3 from '$lib/static/img/landing/landingPhoto3.jpg';
	import img_landingPhoto4 from '$lib/static/img/landing/landingPhoto4.jpg';
	import img_veradi from '$lib/static/img/landing/veradi.svg';

	import { Container, Col, Row, Image, Form, Button } from 'sveltestrap';

	import { ValueInfo } from '$lib/components/landing/constants/VeradiValueContentInfo.svelte';
	import VeradiValueContent from '$lib/components/landing/VeradiValueContent.svelte';
	import VeradiValueImage from '$lib/components/landing/VeradiValueImage.svelte';
</script>

<Container>
	<Row class="py-5">
		<Col sm="1" md="1" class="d-none d-md-block" />
		<Col sm="12" md="6" style="vertical-align:middle; display:table;">
			<div class="d-none d-sm-block py-2" />
			<div class="d-none d-md-block py-1" />
			<div class="d-none d-lg-block py-4" />
			<div class="d-none d-xl-block py-4" />
			<div class="d-none d-xxl-block py-4" />
			<div style="table-cell;">
				<div data-aos="zoom-out-down" data-aos-easing="linear" style="transition:1.0s;">
					<Image src={img_veradi} style="margin-left: 10px; width:90%;" />
				</div>
				<span style="letter-spacing:-1px; word-break: keep-all;">
					<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
						<h4 class="py-1">프리미엄 컨텐츠의 응용으로</h4>
					</div>
					<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
						<h4 class="py-1">승리로 가는 가장 빠른 길,</h4>
					</div>
					<div data-aos="fade-right" data-aos-easing="linear" style="transition:2.0s;">
						<h4 class="py-1">베라디와 함께하세요.</h4>
					</div>
				</span>
			</div>
		</Col>
		<Col sm="12" md="5" style="text-align:center;">
			<div data-aos="zoom-in" data-aos-easing="linear" style="transition:2.0s;">
				<Image src={img_landingMain} style="margin-left: 10px; width:90%;" />
			</div>
		</Col>
	</Row>
</Container>
<Form class="py-5" style="background-color:#e1f5ff;">
	<div data-aos="zoom-in" data-aos-easing="linear" style="transition:1.0s;">
		<Container>
			<div style="text-align:center;">
				<div class="py-3">
					<h2>
						베라디(Veradi)의 <b>Vera</b>는 <b>진실</b>을, <b>di</b>는 <b>말하다</b>를 뜻합니다.
					</h2>
				</div>
				<span class="py-4" style="color:#808080; letter-spacing:-1px;">
					<h5>교육 컨텐츠 혁신을 이끌어가는 베라디는,</h5>
					<h5>항상 검증된 자료로 수험생들에게 다가가고 있습니다.</h5>
					<h5>수험생들의 미래에 기여하고자 하는 저희의 사명은,</h5>
					<h5>밤낮을 가리지 않고, 포기할 줄 모르는 열정으로 무장 되어 있습니다.</h5>
				</span>
				<h4 class="py-3" style="">
					<span style="color:#3c9fcb;">“The Fastest way to Victory”</span>
					의 여정에 함께 할 수험생 여러분들을 환영합니다.
				</h4>
			</div>
		</Container>
	</div>
</Form>
<Container class="py-5">
	<Row class="py-3">
		<div data-aos="flip-down" data-aos-easing="linear" style="transition:1.0s;">
			<h4>The Fastest Way to Victory</h4>
			<h1>
				<b>
					<span style="color:#3c9fcb;">VERADI</span>
					의 가치
				</b>
			</h1>
		</div>
	</Row>
	<Row class="py-3">
		{#each ValueInfo as info}
			<VeradiValueContent
				titleSpelling={info.titleSpelling}
				title={info.title}
				contentForward={info.contentForward}
				contentBold={info.contentBold}
				contentBackward={info.contentBackward}
				transition={info.transition}
			/>
		{/each}
		<div class="tw-h-4" />
		<h5
			class="py-2"
			data-aos="fade-right"
			data-aos-easing="linear"
			style="color:#bbbbbb; transition:2.4s"
		>
			<h3 class="tw-text-[#3b86c8] tw-font-bold tw-mb-4">VERADI</h3>
			<div class="tw-text-[#707070]">
				<p class="tw-mb-2">
					저희는 포기할 줄 모르는 끝 없는 열정으로, 학생들에게 확실하고 주목할만한 교육 컨텐츠를
					제공 중입니다.
				</p>
				<p>
					변화무쌍한 한국의 입시 제도 안에서 빠르게 성공할 수 있는 길을 제공해주는
					<span style="color:#2d81cb;">VERADI</span>
					는 교육의 혁신을 이끌어가는 중입니다.
				</p>
			</div>
		</h5>
	</Row>
	<Row class="py-2">
		<VeradiValueImage src={img_landingPhoto1} />
		<VeradiValueImage src={img_landingPhoto2} />
		<VeradiValueImage src={img_landingPhoto3} />
		<VeradiValueImage src={img_landingPhoto4} />
	</Row>
</Container>
<Form class="py-5" style="background-color:#e1f5ff;">
	<Container>
		<Row class="py-3" style="text-align:center;">
			<div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
				<span style="word-break:keep-all; ">
					<h1 class="py-2" style="color:#707070;"><b>베라디 1기 1차 공개 채용</b></h1>
					<h4 style="color:#3c9fcb;">1월 31일 24:00까지 지원 가능합니다</h4>
					<h4 style="color:#3c9fcb;">2월 주말 중으로 수습 교육 일정이 있으니 참고 부탁드립니다</h4>
				</span>
			</div>
		</Row>
		<Row class="py-5" style="text-align:center;">
			<Form>
				<Button
					style="background-color:#3c9fcb; border:0; box-shadow:2px 2px 2px 2px gray; font-size:25px;"
					href="/hire/welfare">베라디 1기 지원하기</Button
				>
			</Form>
		</Row>
	</Container>
</Form>
