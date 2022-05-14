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
		<Col class="tw-flex tw-items-start">
			<Image src={img_iconQ} style="width:50px; margin-right:20px" />
			<h5 class="tw-whitespace-nowrap">
				<b class="tw-mr-2 tw-w-12" style="color:grey;">[{questionTitle}]</b>&nbsp
			</h5>
			<h5>
				{questionContents}
			</h5>
		</Col>
	</Row>
	<Row>
		<Col class="tw-flex tw-items-start">
			<Image src={img_iconA} style="width:50px; margin-right:20px" />
			<h5>
				{answerContents}
			</h5>
		</Col>
	</Row>
</AccordionItem>
