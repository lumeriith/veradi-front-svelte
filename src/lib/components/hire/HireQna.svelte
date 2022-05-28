<script>
	import { AccordionItem, Col, Row, Image } from 'sveltestrap';

	import img_iconQ from '$lib/static/img/hire/qna/iconQ.png';
	import img_iconA from '$lib/static/img/hire/qna/iconA.png';

	export let questionTitle = 'title';
	export let questionContents = 'contents';
	export let answerContents = 'contents';
</script>

<AccordionItem>
	<Row slot="header">
		<Col class="tw-flex tw-items-start tw-text-md">
			<Image src={img_iconQ} class="tw-w-12 tw-mr-4" />
			<div class="tw-whitespace-nowrap">
				<b class="tw-mr-2 tw-w-12" style="color:grey;">[{questionTitle}]</b>&nbsp
			</div>
			<div>
				{questionContents}
			</div>
		</Col>
	</Row>
	<Row>
		<Col class="tw-flex tw-items-start">
			<Image src={img_iconA} class="tw-w-12 tw-mr-4" />
			<div>
				{answerContents}
			</div>
		</Col>
	</Row>
</AccordionItem>
