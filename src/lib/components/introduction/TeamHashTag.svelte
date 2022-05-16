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
	export let content;
	export let fontColor = '#072f47';
	export let bgColor = '#97cadb';
	export let letterSpacing = '-1';
</script>

<Button
	disabled
	class="tw-whitespace-nowrap"
	style="border: 1px;; color:{fontColor}; background-color:{bgColor}; box-shadow:1.5px 1.5px 1.5px 1.5px; letter-spacing:{letterSpacing}px;"
	>#{content}</Button
>
