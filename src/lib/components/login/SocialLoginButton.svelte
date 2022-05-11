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

	export let url;
	export let text;
	export let href;
</script>

<Button
	{href}
	class="tw-flex-1 tw-rounded-xl"
	style="background-color:white; align:center; border-color:silver;"
>
	<div class="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-sm">
		<Image src={url} class="tw-h-7" />
		<span style="color:gray;">{text}</span>
	</div>
</Button>
