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

	export let introduction = "내용";
	export let title = "제목";
	export let button = "채용 공고";
	export let url;
</script>

<div data-aos="fade-up" data-aos-easing="linear" style="transition:1.5s;">
<Container class="py-3" style="text-align:center;">
	<h1 class="py-2" style="color:#4d4d4d;">{title}</h1>
	<h5 class="pb-4" style="color:#707070;">{introduction}</h5>
	<Button style="background-color:#2bc6ff; border:0;" href={url}>{button}</Button>
</Container>
</div>