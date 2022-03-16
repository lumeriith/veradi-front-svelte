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
	} from 'sveltestrap/src';

	import { QnaInfo } from '$lib/components/hire/constants/QnaInfo.svelte';
  import HireQna from '$lib/components/hire/HireQna.svelte';


</script>

<Form class="py-3" style="background-color:#f1faff;">
	<Container class="py-5" style="text-align:center;">
		<h1 class="py-2" style="color:#333333;"><b>자주 묻는 질문</b></h1>
		<h2 class="py-2" style="color:#575757;">베라디에 궁금한 점이 있다면</h2>
	</Container>
	<Container class="py-5" style="background-color:white;">
		<Table>
			<thead style="" />
			<Accordion>
        {#each QnaInfo as info}
        <HireQna
          questionTitle = {info.questionTitle}
          questionContents = {info.questionContents}
          answerContents = {info.answerContents}
        />
        {/each}
			</Accordion>
		</Table>
	</Container>
</Form>
<Form class="py-5" style="background-color:whitesmoke">
	<Container class="py-1">
		<div style="margin-left:10px;">
			<h1>추가 질문</h1>
			<h5>질문 관련 문의는 Q&A 게시판 또는 @gmail.com을 통해서 가능합니다.</h5>
		</div>
	</Container>
</Form>