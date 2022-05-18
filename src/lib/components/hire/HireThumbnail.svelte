<script>
	import { Col, Image } from 'sveltestrap';

	export let title, text;
	export let src;
</script>

<Col xs="2" sm="2" class="d-md-none" />
<Col xs="8" sm="8" md="4" lg="4" xl="4" xxl="4" class="pt-5" style="text-align:center;">
	<div class="py-3">
		<Image
			thumbnail
			{src}
			style="transition:0.7s; display:inline-block; height:150px; width:150px;"
			data-aos="flip-up"
			data-aos-easing="linear"
		/>
	</div>
	<div
		style="transition:0.7s; letter-spacing:-1.5px; word-break:keep-all;"
		data-aos="flip-left"
		data-aos-easing="linear"
	>
		<h3>{title}</h3>
		<div>{text}</div>
	</div>
</Col>
<Col xs="2" sm="2" class="d-md-none" />
