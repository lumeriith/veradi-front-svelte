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

  export let title, text;
  export let src="/img/test.png";
</script>



<Col xs="2" sm="2" class="d-md-none"/>
<Col xs="8" sm="8" md="4" lg="4" xl="4" xxl="4" class="pt-3" style="text-align:center;">
  <div class="py-3">
    <Image thumbnail src={src} style="display:inline-block; height:150px; width:150px;"/>
  </div>
  <span style="letter-spacing:-1px; word-break:keep-all;">
    <h4>{title}</h4>
    <div>{text}</div>
  </span>
</Col>
<Col xs="2" sm="2" class="d-md-none"/>