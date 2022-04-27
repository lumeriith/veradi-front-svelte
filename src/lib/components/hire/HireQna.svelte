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
	} from 'sveltestrap/src';

	export let questionTitle = 'title';
	export let questionContents = 'contents';
	export let answerContents = 'contents';

  import img_iconQ from '$lib/static/img/hire/qna/iconQ.svg';
  import img_iconA from '$lib/static/img/hire/qna/iconA.svg';
</script>

<AccordionItem>
	<Row slot="header">
		<Col sm="2" md="1" lg="1" class="d-none d-sm-block">
			<Image src={img_iconQ} style="width:100px; height:50px;" />
		</Col>
		<Col sm="10" md="11" lg="11">
			<h5>
				<b style="color:grey;">[{questionTitle}]</b>&nbsp
				{questionContents}
			</h5>
		</Col>
	</Row>
	<Row>
		<Col sm="2" md="1" lg="1" class="d-none d-sm-block">
			<Image src={img_iconA} style="width:100px; height:50px;" />
		</Col>
		<Col sm="10" md="11" lg="11">
			<h5>
				{answerContents}
			</h5>
		</Col>
	</Row>
</AccordionItem>
