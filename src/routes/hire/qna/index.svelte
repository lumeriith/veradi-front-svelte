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
	<header class="tw-text-center tw-pt-8 tw-pb-4">
		<h1 class="tw-text-3xl"><b>자주 묻는 질문</b></h1>
		<h2 class="tw-text-xl" style="color:#575757;">베라디에 궁금한 점이 있다면</h2>
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
