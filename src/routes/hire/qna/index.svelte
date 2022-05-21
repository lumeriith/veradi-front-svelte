<script>
	import {
		Accordion,
		AccordionHeader,
		AccordionItem,
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
		Alert,
		TabContent,
		Table
	} from 'sveltestrap';

	import { QnaInfo } from '$lib/components/hire/constants/QnaInfo.svelte';
	import HireQna from '$lib/components/hire/HireQna.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
</script>

<div class="py-3" style="background-color:#f1faff;">
	<header class="py-5" style="text-align:center;">
		<h1 class="py-2" style="color:#333333;"><b>자주 묻는 질문</b></h1>
		<h2 class="py-2" style="color:#575757;">베라디에 궁금한 점이 있다면</h2>
	</header>
	<NarrowContainer class="py-2">
		<Table>
			<thead style="" />
			<Accordion>
				{#each QnaInfo as info}
					<HireQna
						questionTitle={info.questionTitle}
						questionContents={info.questionContents}
						answerContents={info.answerContents}
					/>
				{/each}
			</Accordion>
		</Table>
	</NarrowContainer>
</div>
<Form class="py-5" style="background-color:whitesmoke">
	<Container class="py-1">
		<div style="margin-left:10px;">
			<h1>추가 질문</h1>
			<h5>추가적인 질문이 있을 시, 웹사이트 하단 이메일 문의창으로 문의 주세요.</h5>
		</div>
	</Container>
</Form>
