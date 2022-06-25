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
	} from 'sveltestrap';

	export let url;
	export let text;
	export let href;
  export let event;
</script>

<Button
	on:click={event}
	class="tw-flex-1 tw-rounded-full"
	style="background-color:white; align:center; border-color:silver;"
>
	<div class="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-sm">
		<Image src={url} class="tw-h-6" />
		<span style="color:black;">{text}</span>
	</div>
</Button>
