<script>
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
		Image,
		Carousel,
		CarouselControl,
		CarouselIndicators,
		CarouselItem,
		CarouselCaption
	} from 'sveltestrap';
	import { HireCardInfo } from '$lib/components/hire/constants/HireCardInfo.svelte';
	
  let activeIndex = 0;

  $: slideTitle = HireCardInfo[activeIndex].title;
  $: slideText = HireCardInfo[activeIndex].text;
</script>

<!------------------- PC MODE ------------------->
<div class="d-none d-sm-block">
	<Row>
		{#each HireCardInfo as content}
			<Col xs="6" sm="4" style="text-align:center;" class="py-4">
				<div
					class="py-3 align:center;"
					data-aos="zoom-in-up"
					data-aos-easing="linear"
					style="transition:1.0s;"
				>
					<Image
						thumbnail
						src={content.img}
						style="display:inline-block; height:120px; width:120px; margin-bottom:10px;"
					/>
					<span style="letter-spacing:-1.5px; word-break:keep-all;">
						<h4>{content.title}</h4>
						<div>{content.text}</div>
					</span>
				</div>
			</Col>
		{/each}
	</Row>
</div>
<!------------------- MOBILE MODE ------------------->
<div class="d-block d-sm-none">
	<Row>
    <Carousel dark items={HireCardInfo} bind:activeIndex>
      <CarouselIndicators bind:activeIndex items={HireCardInfo} style="transform: translateY(15px);"/>
      <div class="carousel-inner">
        {#each HireCardInfo as item, index}
          <CarouselItem bind:activeIndex itemIndex={index}>
            <Card class="pb-4" style="align-items:center; border:none;">
              <Image thumbnail src={item.img} alt={`${item} ${index + 1}`} style="width:75%;"/>
            </Card>
          </CarouselItem>
        {/each}
      </div>
      <CarouselControl direction="prev" bind:activeIndex items={HireCardInfo} />
      <CarouselControl direction="next" bind:activeIndex items={HireCardInfo} />
    </Carousel>
    <h4 class="pt-3">{slideTitle}</h4>
    <div>{slideText}</div>
	</Row>
</div>
