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



<Col xs="6" sm="4" style="text-align:center;" class="py-3">
  <div class="py-3 align:center;">
    <Image
      src={src}
      style="display:inline-block; height:120px; width:120px;"
    />
  </div>
  <span style="letter-spacing:-1px; word-break:keep-all;">
    <h3>{title}</h3>
    <div>{text}</div>
  </span>
</Col>