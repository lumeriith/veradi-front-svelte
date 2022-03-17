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

<Card class="py-3" style="display:flex; gap:10px; border:none;">
  <Row>
	{#each SubjectContents as content}
  
  <Col xs="6" sm="4" md="3" xl="2" class="py-1" style="text-align:center;">
    <Row>
		<Button outline href={content.src} style="border:0; outline:0;">
      <span style="color:#606060;">
        <h5>{content.title}</h5>
      </span>  
    </Button>
  </Row>
    </Col>
	{/each}
</Row>
</Card>
