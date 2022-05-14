<script>
	import { Col, Image } from 'sveltestrap';
	export let src;
</script>

<Col xs="12" sm="6" lg="6" class="pb-5" style="text-align:center;">
	<div data-aos="zoom-in-up" data-aos-easing="linear" style="transition:1.0s;">
		<Image thumbnail {src} style="width:auto" />
	</div>
</Col>
