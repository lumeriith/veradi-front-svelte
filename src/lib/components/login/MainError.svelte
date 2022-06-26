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

<div>
	<Alert color="danger" class="tw-py-2 tw-my-5" isOpen={isState}>
		<h3>{title || '알 수 없는 유형'}</h3>
    <div>{text || '알 수 없는 오류'}</div>
	</Alert>
</div>
