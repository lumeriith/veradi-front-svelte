<script>
	const img = {
		mainPhoto: '/img/main/mainPhoto.png',
		veradi: '/svg/landing/veradi.svg'
	};
	import { Container, Col, Row, Image, Form, Button } from 'sveltestrap/src';

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
					<Image src={img.veradi} style="margin-left: 10px; width:90%;" />
				</div>
				<span style="letter-spacing:-1px; word-break: keep-all;">
					<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
						<h4 class="py-1">노하우와 기술력의 집결체인 프리미엄 컨텐츠로</h4>
					</div>
					<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
						<h4 class="py-1">수험생에게 새로운 시각과</h4>
					</div>
					<div data-aos="fade-right" data-aos-easing="linear" style="transition:2.0s;">
						<h4 class="py-1">승리로 가는 가장 빠른 길을 선사합니다.</h4>
					</div>
				</span>
			</div>
		</Col>
		<Col sm="12" md="5" style="text-align:center;">
			<div data-aos="zoom-in" data-aos-easing="linear" style="transition:2.0s;">
				<Image src={img.mainPhoto} style="margin-left: 10px; width:90%;" />
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
					<h5>베라디의 끝없는 본질을 향한 탐구정신으로 수험생들에게 더 나은,</h5>
					<h5>더 진화된 프리미엄 컨텐츠를 제공하여</h5>
					<h5>수험생들의 미래에 기여하고자 하는 우리의 사명이 담겨 있습니다.</h5>
					<h5>밤낮을 가리지 않는 열정과 사명감으로, 그리고 기술력과 서비스로</h5>
				</span>
				<h4 class="py-3" style="">
					단 한 명의 수험생도 놓치지 않고 우리가 그려가는
					<span style="color:#3c9fcb;"> 'fast way to victory' </span>
					에 함께하고자 합니다.
				</h4>
			</div>
		</Container>
	</div>
</Form>
<Container class="py-5">
	<Row class="py-3">
		<h4>Fast way to Victory</h4>
		<h1>
			<b>
				<span style="color:#3c9fcb;">VERADI</span>
				의 가치
			</b>
		</h1>
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
	</Row>
	<Row class="py-2">
		<VeradiValueImage />
		<VeradiValueImage />
		<VeradiValueImage />
		<VeradiValueImage />
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
					href="/hire/intro"
          >베라디 1기 지원하기</Button
				>
			</Form>
		</Row>
	</Container>
</Form>
