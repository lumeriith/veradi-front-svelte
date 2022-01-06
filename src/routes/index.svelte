<script>
    const patternVue = "/img/pattern_svelte.png";
    import { Button, Modal } from 'sveltestrap/src';
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

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
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
              target="_blank"
              class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Get started
            </a>
            <a
              href="https://github.com/creativetimofficial/notus-svelte?ref=ns-index"
              class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              target="_blank"
            >
              Github Star
            </a>
          </div>
        </div>
      </div>
    </div>
  
    <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        src="{patternVue}"
        alt="..."
    />
  </section>
    <Button color="primary" on:click={toggle}>Hello World!</Button>
    <Modal body {isOpen} {toggle} header="Hello World!">
      <p>There's a song that we're singing. Come on</p>
      <img
        src="https://i.ytimg.com/vi/NUJIRujygvY/hqdefault.jpg"
        alt="Come on Get Happy"
        class="img-fluid"
      />
    </Modal>