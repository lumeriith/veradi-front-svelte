<script>
	import { fly, fade } from 'svelte/transition';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay } from 'swiper';

	export let title;
	export let subject;
	export let introduction = '';
	export let photo;
	export let hashtags;

	$: isPhotoArray = !!photo.push;
</script>

<div
	class="lg:tw-mt-10 tw-mb-5 tw-flex tw-gap-x-12 tw-gap-y-8 tw-flex-wrap lg:tw-flex-nowrap tw-justify-center"
>
	{#if isPhotoArray}
		<Swiper
			class="tw-w-full tw-h-auto lg:tw-w-[400px] lg:tw-h-64 tw-p-0 tw-m-0"
			spaceBetween={20}
			slidesPerView={1}
			grabCursor={true}
			loop={true}
			centeredSlides={true}
			slidesPerGroup={1}
			autoplay={{
				disableOnInteraction: false
			}}
			speed={500}
			pagination={true}
			modules={[Autoplay]}
		>
			{#each photo as p}
				<SwiperSlide class="tw-w-full tw-h-auto">
					<div
						class="tw-w-full lg:tw-w-[400px] tw-aspect-[3/2] lg:tw-h-full tw-shrink-0 tw-bg-cover tw-bg-center"
						style="background-image: url({p});"
					/>
				</SwiperSlide>
			{/each}
		</Swiper>
	{:else}
		<div
			class="tw-hidden lg:tw-block tw-w-[400px] tw-h-64 tw-shrink-0 tw-bg-cover tw-bg-center"
			style="background-image: url({photo});"
		/>
		<img src={photo} alt="" class="lg:tw-hidden" />
	{/if}

	<div class="tw-px-2 lg:tw-px-0 tw-flex-1 tw-flex tw-flex-col tw-items-start tw-max-w-2xl">
		<h2 class="tw-relative tw-w-auto tw-inline-block tw-font-heading tw-mb-5 tw-whitespace-nowrap">
			{title}
			<span style="color:#3c9fcb;">
				{subject}
			</span>
			<div class="tw-bg-[#d6efff] tw-absolute tw-bottom-0 -tw-left-2 -tw-right-2 tw-h-3 -tw-z-10" />
		</h2>
		<div class="py-1 tw-text-[#333333] tw-font-semibold" style="word-break: keep-all;">
			{#each introduction.split('\n') as intro, i}
				<p in:fly={{ delay: 100 + i * 100, duration: 400, y: 30 }}>{intro}</p>
			{/each}
		</div>
		<div class="tw-flex tw-gap-x-4 tw-gap-y-1 tw-flex-wrap tw-mt-auto tw-font-semibold">
			{#each hashtags as tag, i}
				<div
					class="tw-text-[#72c0ff] tw-"
					in:fade={{ delay: (600 / hashtags.length) * i, duration: 200 }}
				>
					#{tag.content}
				</div>
			{/each}
		</div>
	</div>
</div>
