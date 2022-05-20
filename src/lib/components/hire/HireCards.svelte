<script>
	import { animTrigger, animFlyUp } from '$lib/utils/scrollEffects';

	import {
		Row,
		Card,
		Carousel,
		CarouselControl,
		CarouselIndicators,
		CarouselItem
	} from 'sveltestrap';
	import { HireCardInfo } from '$lib/components/hire/constants/HireCardInfo.svelte';

	let activeIndex = 0;

	$: slideTitle = HireCardInfo[activeIndex].title;
	$: slideText = HireCardInfo[activeIndex].text;
</script>

<!------------------- PC MODE ------------------->
<div class="tw-hidden sm:tw-flex tw-justify-center">
	<div class="tw-flex tw-flex-wrap tw-gap-y-12 tw-justify-around tw-gap-x-8 tw-max-w-4xl">
		{#each HireCardInfo as content}
			<div class="tw-w-56 tw-text-center" use:animTrigger use:animFlyUp={{ offset: 50 }}>
				<img
					src={content.img}
					alt=""
					class="tw-rounded-full"
					style="display:inline-block; height:120px; width:120px; margin-bottom:25px;"
				/>
				<span class="tw-flex tw-flex-col tw-gap-2.5">
					<div class="tw-text-xl tw-font-semibold">{content.title}</div>
					<div style="line-height: 160%;">{content.text}</div>
				</span>
			</div>
		{/each}
	</div>
</div>
<!------------------- MOBILE MODE ------------------->
<div class="tw-block sm:tw-hidden">
	<Row>
		<Carousel dark items={HireCardInfo} bind:activeIndex>
			<CarouselIndicators
				bind:activeIndex
				items={HireCardInfo}
				style="transform: translateY(25px); opacity: 0.5;"
			/>
			<div class="carousel-inner">
				{#each HireCardInfo as item, index}
					<CarouselItem bind:activeIndex itemIndex={index}>
						<Card class="pb-4" style="align-items:center; border:none;">
							<img src={item.img} alt="" class="tw-rounded-full" style="width:60%;" />
						</Card>
					</CarouselItem>
				{/each}
			</div>
			<CarouselControl direction="prev" bind:activeIndex items={HireCardInfo} />
			<CarouselControl direction="next" bind:activeIndex items={HireCardInfo} />
		</Carousel>
		<h4 class="pt-3 tw-font-semibold">{slideTitle}</h4>
		<div>{slideText}</div>
	</Row>
</div>
