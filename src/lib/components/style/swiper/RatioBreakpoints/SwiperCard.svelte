<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper styles
  import "swiper/css";

  import "swiper/css/pagination";

  import "./style.css";

  // import required modules
  import { Pagination, Autoplay } from "swiper";
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

  import { SwiperCardInfo } from "$lib/components/style/swiper/RatioBreakpoints/constants/SwiperCardInfo.svelte";

</script>

<Swiper
  slidesPerView={1}
  spaceBetween={10}
  autoplay={{
    delay: 2000,
    disableOnInteraction: true,
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }}
  modules={[Autoplay, Pagination]}
  class="mySwiper"
>
  {#each SwiperCardInfo as info }
    <SwiperSlide>
      <Image src={info} />
    </SwiperSlide>
  {/each}
</Swiper>