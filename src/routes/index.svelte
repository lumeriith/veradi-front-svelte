<script>
	import {
		Accordion,
		AccordionItem,
		Alert,
		Button,
		ButtonGroup,
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
	} from 'sveltestrap';

	import SwiperCard from '$lib/components/style/swiper/RatioBreakpoints/SwiperCard.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import { deleteBoard, getBoard, setBoard, tsDate } from '$lib/firebase/app';
	import { ping } from '$lib/firebase/test';

	let date = new Date().toString();
	let exportData = null;

	const data = {
		night: 'fdfdfdfdfd',
		fwefw: '날나ㅣㅡ리늗fdsfsfsdfsdfsdfsdfsdfssdf',
		fkfkfkfk: ['fdfdfdf', 'fdfdfdfdfd'],
		example: tsDate(date)
	};

	function get() {
		exportData = getBoard('col', 'doc2');
		console.log(exportData);
	}

	let testResult = '';

	async function Test() {
		testResult = 'waiting...';
		const response = await ping();
		testResult = response.data.pong;
	}
</script>

<NarrowContainer class="tw-p-4">
	<Button on:click={() => setBoard('col', 'doc2', data)}>Set</Button>
	<Button on:click={() => deleteBoard('col', 'doc')}>Delete</Button>
	<Button on:click={() => get()}>Get</Button>
</NarrowContainer>

<NarrowContainer class="tw-p-4">
	<button
		class="tw-p-4 tw-bg-black tw-text-white"
		disabled={testResult == 'waiting...'}
		on:click={Test}>Test</button
	>
	<div>{testResult}</div>
</NarrowContainer>

<SwiperCard />
