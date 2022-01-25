<script>
	const svgVue = [
		'/svg/landing/ground.svg',
		'/svg/landing/leftBoard.svg',
		'/svg/landing/rightBoard.svg',
		'/svg/landing/veradiTitle1.svg',
		'/svg/landing/veradiTitle2.svg',
		'/svg/landing/veradiTitle3.svg',
    '/svg/landing/man.svg'
	];
	import { Container, Col, Row, Image } from 'sveltestrap/src';
</script>

<!---
<div style="background-image: url({sgvVue[0]}); height: 500px; background-position: center 60%; background-size: 140%; background-repeat: no-repeat;">
-->

<Image alt=".." src={svgVue[0]} draggable="false" style="position:absolute; width:100%;" />

<Container>
  <Row style="position:relative">
    <p class="py-5" />
    <Col sm=0 md=0 lg=1/>
    <Col sm=4 md=4 lg=4 xl=5>
      <p class="py-4" />
      <Image alt=".." src={svgVue[3]} draggable="false" />
      <p class="py-3" />
      <Image alt=".." src={svgVue[4]} draggable="false" />
      <p class="py-4" />
      <Image alt=".." src={svgVue[5]} draggable="false" />
    </Col>
    <Col sm=2 md=2>
      <Image alt=".." src={svgVue[6]} draggable="false" style="position:absolute; float:right; height:85%" />
    </Col>
  </Row>
</Container>







<!---
    <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        src="{sgvVue[0]}"
        alt="..."
    />
    <img
        class="float-left"
        src="{sgvVue[1]}"
        alt="..."
    />
      <section class="header relative pt-16 items-center flex h-screen max-h-860-px">
    <div class="container mx-auto items-center flex flex-wrap">
      <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
        <div class="pt-32 sm:pt-0">
          <h2 class="font-semibold text-4xl text-blueGray-600">
            Veradi
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            고3 재학생들이
            수능 당일 평소보다 1-2등급씩 떨어져 재수했던 현실을 바꾸어

            시대인재 컨텐츠와 함께 지금은

            반 10등 학생과 전교권 학생의
            과목별 수능성적 차이가 거의 없는 흔한 사례들과 함께

            오히려 고3 재학생들이 재수생 이상의 최상의 실적을 배출하며

            시대인재는
            좋은 강의일지라도 직면하게 되는 결과적 불확실성을 넘어서

            상대적 강좌 선택에 따른 기회가치의 최적화는 물론
            학생 자신의 궁극의 시간가치와 결과가치를 구현합니다.
          </p>
          <div class="mt-12">
          </div>
        </div>
      </div>
    </div>
  </section>
    -->
<style>
	:global(.go-to-veradi) {
		background-color: rgba(248, 113, 113, 0.7);
	}
</style>
