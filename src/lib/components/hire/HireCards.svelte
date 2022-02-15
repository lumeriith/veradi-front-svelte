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
		Image
	} from 'sveltestrap/src';
	import { CardContents } from './constants/CardContents.svelte';

</script>

{#each CardContents as content}
	<Col xs="6" sm="4" style="text-align:center;" class="py-2">
		<div class="py-3 align:center;"
    data-aos="zoom-in-up" data-aos-easing="linear" style="transition:1.0s;">
			<Image src={content.img} style="display:inline-block; height:120px; width:120px;" />
		</div>
    <div data-aos="fade-up" data-aos-easing="linear" style="transition:1.0s;">
		<span style="letter-spacing:-1.5px; word-break:keep-all;">
			<h4>{content.title}</h4>
			<div>{content.text}</div>
		</span>
  </div>
	</Col>
{/each}
