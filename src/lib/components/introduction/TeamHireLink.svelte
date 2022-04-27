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

  import img_mainPhoto from "$lib/static/img/introduction/mainPhoto.png";
</script>

<div data-aos="fade-up" data-aos-easing="linear" style="transition:1.5s;">
<Form class="py-5" style="background-image:url('{img_mainPhoto}'); background-size:cover;">


<Container class="py-5">
  <Col>
	<h3 class="py-3" style="color:#4d4d4d;"><b>{title}</b></h3>
	<h5 class="pb-4" style="color:#707070;">{introduction}</h5>
	<Button style="background-color:#2bc6ff; border:0; border-radius: 20px; padding: 10px 50px 10px 50px;" href={url}>{button}</Button>
</Col>
</Container>

</Form>
</div>