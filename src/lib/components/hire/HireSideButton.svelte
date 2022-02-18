<script>
	import {
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
	import { SubjectContents } from './constants/SubjectContents.svelte';
</script>

<h4 class="pt-5" style="color:gray">[다른 팀 공고 보기]</h4>
<Card class="py-2" style="display:flex; gap:10px; border:none; background-color:#e1f5ff;">
  <Row>
	{#each SubjectContents as content}
  
  <Col xs="6" sm="4" md="3" xl="2" class="py-1">
      <Card>
		<Button href={content.src}>{content.title}</Button>
    </Card>
    </Col>
	{/each}
</Row>
</Card>
