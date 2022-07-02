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
  import { setBoard } from '$lib/firebase/app';

  const data = {
    night : "fdfdfdfdfd",
    
    fwefw : "날나ㅣㅡ리늗fdsfsfsdfsdfsdfsdfsdfssdf"
  }

  const col = "col"
  const doc = "doc"
</script>

<NarrowContainer>새 페이지.
  <Button on:click={setBoard(col, doc, data)}>아니</Button>

</NarrowContainer>

<SwiperCard />
