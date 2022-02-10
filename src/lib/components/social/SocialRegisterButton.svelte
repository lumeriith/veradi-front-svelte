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
		<span class="d-block d-sm-none" style="color:gray; letter-spacing:-1.4px; font-size:15px">{text}</span>
		<span class="d-none d-sm-block" style="color:gray; letter-spacing:0px; font-size:16px">{text}</span>
	</div>
</Button>
