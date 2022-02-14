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

	let scrollAxis = 1;
	function updateManOpacity() {
	  scrollAxis = Math.max(Math.min((600-document.documentElement.scrollTop)/400, 1), 0.3)
	}
	
</script>

<svelte:window on:scroll={updateManOpacity} />

<Image alt=".." src={svgVue[0]} draggable="false" style="position:absolute; width:100%; 
margin-top: -64.5px; transition:6.0s;" data-aos="zoom-out" />

<Container>
	<Row style="position:relative; white-space:nowrap;">
		<p class="py-3 d-none d-sm-block" />
		<Col sm="6" md="6" lg="6" xl="5">
			<p class="py-2 d-none d-xs-block" />
			<p class="py-1 d-none d-sm-block" />
			<p class="py-1 d-none d-md-block" />
			<p class="py-1 d-none d-lg-block" />
			<p class="py-1 d-none d-xl-block" />
			<Image alt=".." src={svgVue[3]} draggable="false" style="width:70%; transition:4.0s;" data-aos="zoom-in" />
			<p />
			<Image alt=".." src={svgVue[4]} draggable="false" style="width:70%; transition:1.5s;" data-aos="zoom-in"/>
			<p class="py-2" />
			<Image alt=".." src={svgVue[5]} draggable="false" style="width:100%; transition:1.5s;" data-aos="zoom-in"/>
		</Col>
		<Col sm="6" md="6" lg="6" xl="7">
			<div class="d-sm-none">
				<Image
					alt=".."
					src={svgVue[6]}
					draggable="false"
					style="position:absolute; float:center; width:95%; transition:1.5s;"
					data-aos="fade-up"
				/>
			</div>
			<div class="d-none d-sm-block">
				<Image
					alt=".."
					src={svgVue[6]}
					draggable="false"
					style="position:absolute; float:center; width:50%; transition:1.5s;"
					data-aos="fade-up"
				/>
			</div>
		</Col>
	</Row>
	<Row>Hello!</Row>

</Container>

<style>
	:global(.go-to-veradi) {
		background-color: rgba(248, 113, 113, 0.7);
	}
</style>
