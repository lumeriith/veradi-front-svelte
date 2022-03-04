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
  export let title;
  export let subject;
  export let introduction;
</script>

<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.5s;">
<Row>
<h2 class="py-4">
  <span>
    {title}
  </span>
  <span style="color:#3c9fcb;">
    {subject}
  </span>
</h2>
<div class="py-1">
  <span style="color:grey;">
    {introduction}
  </span>
</div>
</Row>
</div>