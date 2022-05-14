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

	export let introduction = 'How about?';
	export let title = 'VERADI';
	export let content = '인에게 묻습니다';
</script>

<Row>
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<h3 style="color:#707070;">{introduction}</h3>
		<h1>
			<span style="color:#3c9fcb;">{title}</span>
			{content}
		</h1>
	</div>
</Row>
