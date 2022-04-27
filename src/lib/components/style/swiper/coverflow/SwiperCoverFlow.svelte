<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
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
		Image
	} from 'sveltestrap/src';
  // Import Swiper styles
  import "swiper/css";

  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  import "./style.css";
  // import required modules
  import { Autoplay, EffectCoverflow, Pagination } from "swiper";

  import dotIcon from '$lib/static/img/introduction/dotIcon.png';
  import {IntroductionSwiperInfo} from "$lib/components/introduction/constants/IntroductionSwiperInfo.svelte";
</script>


  <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"auto"}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    autoplay:3000,
  }}
  pagination={true}
  modules={[Autoplay, EffectCoverflow, Pagination]}
  class="mySwiper"
>

    {#each IntroductionSwiperInfo as info}
    <SwiperSlide>
    <Card style="padding: 20px 40px 20px 40px; border-radius:20px; box-shadow: 2px 2px 3px 3px #cccccc;">
      <Image class="pb-3" src={dotIcon} style="width:30px;"/>
      <div style="color:#707070; line-height:180%;">{info.content}</div>
      <div class="py-3" style="color:#555555;"><b>{info.name}</b></div>
    </Card>
    </SwiperSlide>
    {/each}
</Swiper>