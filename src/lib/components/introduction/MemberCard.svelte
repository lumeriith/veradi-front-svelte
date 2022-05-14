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
	} from 'sveltestrap';
	export let name, rank, education;
	export let letterSpacing = -1;

	import circle from '$lib/static/img/introduction/circle.svg';
</script>

<Col class="py-3" xs="6" sm="6" md="4" lg="4" xl="3">
	<div>
		<Card style="padding:25px 20px 35px 20px; border:0;">
			<div style="float:left;">
				<Image
					src={circle}
					style="display:inline-block; margin-left: -10px; margin-right: 10px; margin-top: 6.5px; vertical-align:top; width:15px;"
				/>
				<h4 style="display:inline;"><b>{name}</b></h4>
			</div>
			<h5 class="pt-3" style="color:#333333; margin-left: 20px;">{rank}</h5>
			<div
				class="pt-1"
				style="color:lightslategrey; letter-spacing:{letterSpacing}px; margin-left: 20px; word-break:keep-all"
			>
				{education}
			</div>
		</Card>
	</div>
</Col>
