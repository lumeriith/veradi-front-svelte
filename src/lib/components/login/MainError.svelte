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
	export let title;
	export let text;
</script>

<div class="tw-h-20">
	<Alert color="danger" class="tw-py-3 tw-my-5" isOpen={isState}>
		<div>{text || '알 수 없는 오류'}</div>
	</Alert>
</div>
