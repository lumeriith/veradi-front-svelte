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

	export let isState;
	export let text;
</script>

<Alert
	color="danger"
	style="transition:0.5s;"
	data-aos="fade-right"
	isOpen={isState}
	toggle={() => (isState = false)}
>
	<div class="d-block d-sm-none" style="letter-spacing:-4px; font-size:6px;">{text}</div>
	<div class="d-none d-sm-block" style="letter-spacing:-4px; font-size:6px;">{text}</div>
</Alert>
