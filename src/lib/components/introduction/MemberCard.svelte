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
	export let name, rank, education;
	export let letterSpacing = -1;
	export let bgColor = 'white';
</script>

<Row class="d-block d-sm-none" />
<Col xs="1" class="d-block d-sm-none" />
<Col class="py-3" xs="10" sm="6" md="4" lg="4" xl="3">
	<div data-aos="flip-up" data-aos-easing="linear" style="transition:1.0s;">
		<Card
			style="padding:25px 20px 35px 20px; box-shadow:1.5px 1.5px 3px 3px gray; background-color:{bgColor};"
		>
			<h4>{name}</h4>
			<h5 class="py-1" style="color:gray;">{rank}</h5>
			<div class="pt-4" style="color:lightslategrey; letter-spacing:{letterSpacing}px;">
				{education}
			</div>
		</Card>
	</div>
</Col>
<Col xs="1" class="d-block d-sm-none" />
