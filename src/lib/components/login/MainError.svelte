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

	export let isState;
	export let title;
	export let text;
</script>

<Alert color="danger" style="transition:0.5s;" data-aos="fade-right" isOpen={isState}>
	<div class="alert-heading text-capitalize tw-font-bold tw-text-lg">{title}</div>
	<div>{text}</div>
</Alert>
