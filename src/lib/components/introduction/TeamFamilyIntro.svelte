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
	export let subject;
	export let introduction;
</script>

<Row class="py-2">
	<div class="py-3" data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<h3 style="color:#707070;">
			{introduction}
		</h3>
		<h1 style="letter-spacing:-1px;">
			<span style="color:#3c9fcb">{subject} 구성원</span>
			입니다
		</h1>
	</div>
</Row>
