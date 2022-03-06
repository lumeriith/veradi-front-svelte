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
	export let content;
	export let fontColor = '#072f47';
	export let bgColor = '#97cadb';
  export let letterSpacing = '-1';
</script>

<Col class="py-2" xs="6" md="3" lg="2">
	<Button
		disabled
		style="border: 1px;; color:{fontColor}; background-color:{bgColor}; box-shadow:1.5px 1.5px 1.5px 1.5px; letter-spacing:{letterSpacing}px;"
		>#{content}</Button
	>
</Col>
