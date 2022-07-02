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

  let date = new Date().toString();
  let exportData = null;

	const data = {
		night: 'fdfdfdfdfd',
		fwefw: '날나ㅣㅡ리늗fdsfsfsdfsdfsdfsdfsdfssdf',
    fkfkfkfk: [ "fdfdfdf", "fdfdfdfdfd" ],
    example: tsDate(date)
	};

  function get() {
    exportData = getBoard('col','doc2');
    console.log(exportData);
  }

</script>

<NarrowContainer
	>새 페이지.
	<Button on:click={() => setBoard('col', 'doc2', data)}>아니</Button>
	<Button on:click={() => deleteBoard('col', 'doc')}>삭제</Button>
  <Button on:click={() => get()}>가져오기</Button>
</NarrowContainer>

<SwiperCard />
