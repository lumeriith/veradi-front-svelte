<script>
	import {
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

  export let color="#555555";
  export let title="Button";
  
</script>

<Row class="py-1">
  <Col xs="1" sm="1" md="1" lg="1" xl="1" />
  <Col>
    <Row>
      <Button
        style="align:center; background-color:{color}; border:none; border-radius:21px;"
        >{title}
      </Button>
    </Row>
  </Col>
  <Col xs="1" sm="1" md="1" lg="1" xl="1" />
</Row>