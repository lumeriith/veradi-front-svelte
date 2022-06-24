<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/effect-coverflow';
	import 'swiper/css/pagination';
	import './style.css';

	// import required modules
	import { FreeMode, Autoplay, EffectCoverflow, Pagination } from 'swiper';

	import dotIcon from '$lib/static/img/introduction/dotIcon.png';
	import swiperInfo from '$lib/data/introduction/swiperInfo';
</script>

<Swiper
	grabCursor={true}
	loop={true}
	slidesPerView={'auto'}
	centeredSlides={true}
	slidesPerGroup={1}
	autoplay={{
		disableOnInteraction: false
	}}
	speed={500}
	spaceBetween={20}
	pagination={true}
	modules={[Autoplay]}
	class="mySwiper"
>
	{#each swiperInfo as info}
		<SwiperSlide
			class="tw-py-3 tw-px-10 tw-h-72 sm:tw-h-64 tw-w-68 sm:tw-w-80 tw-rounded-2xl tw-flex tw-flex-col tw-text-md"
			style="box-shadow: 0 4px 18px #0003;"
		>
			<img class="pb-3 tw-mt-2" src={dotIcon} alt="" style="width:30px;" />
			<div style="color:#707070; line-height:180%;">{info.content}</div>
			<div class="py-3 tw-mt-auto tw-text-lg" style="color:#555555;"><b>{info.name}</b></div>
		</SwiperSlide>
	{/each}
</Swiper>
