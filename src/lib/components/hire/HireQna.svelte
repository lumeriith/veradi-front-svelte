<script>
	import {
		AccordionItem,
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
		Image,
		TabContent
	} from 'sveltestrap';

	export let questionTitle = 'title';
	export let questionContents = 'contents';
	export let answerContents = 'contents';

	import img_iconQ from '$lib/static/img/hire/qna/iconQ.png';
	import img_iconA from '$lib/static/img/hire/qna/iconA.png';
</script>

<AccordionItem>
	<Row slot="header">
    <Col>
			<Image src={img_iconQ} style="width:50px; margin-right:20px; display:inline-block;"/>
			<h5 style="display:inline-block;">
				  <b style="color:grey; width:50px; margin-right:10px;">[{questionTitle}]</b>&nbsp
			</h5>
      <h5 style="display:inline-flex;">
        {questionContents}
      </h5>
    </Col>
	</Row>
	<Row>
		<Col sm="2" md="2" lg="2" class="d-none d-md-block">
			<Image src={img_iconA} style="width:50px; height:50px; margin-left:40px;" />
		</Col>
		<Col sm="10" md="10" lg="10">
			<h5>
				{answerContents}
			</h5>
		</Col>
	</Row>
</AccordionItem>
