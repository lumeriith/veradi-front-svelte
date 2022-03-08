<script>
	import { Col, Image } from 'sveltestrap/src';
  export let src="/static/img/test.png";
</script>

<Col xs="6" lg="3" class="pb-5" style="text-align:center;" >
  <div data-aos="zoom-in-up" data-aos-easing="linear" style="transition:1.0s;">
    <Image src={src} style="width:auto" />
  </div>
</Col>
