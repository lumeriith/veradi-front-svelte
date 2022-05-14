<script>
	import {
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

	export let color = '#555555';
	export let title = 'Button';
	export let buttonId;
</script>

<Button
	class="tw-flex-1 tw-py-3 tw-rounded-full tw-border-0"
	on:click
	id={buttonId}
	style="background-color:{color};"
	>{title}
</Button>
