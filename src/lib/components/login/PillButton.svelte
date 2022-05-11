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
	class="tw-flex-1 tw-max-w-[220px] tw-font-bold tw-py-2"
	on:click
	id={buttonId}
	style="background-color:{color}; border:none; border-radius:18px;"
	>{title}
</Button>
