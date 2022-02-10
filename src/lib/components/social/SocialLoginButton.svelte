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
	href={href}
	style="background-color:white; align:center; border-color:silver;"
>
	<div style="display: flex; justify-content:center; align-items: center; gap: 10px">
		<Image src={url} style="height:28px;" />
		<span style="color:gray;">{text}</span>
	</div>
</Button>
