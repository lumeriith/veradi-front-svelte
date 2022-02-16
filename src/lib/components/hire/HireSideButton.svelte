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

<Card style="flex; gap:15px; border:none; ">
	{#each SubjectContents as content}
		<Button href={content.src}>{content.title}</Button>
	{/each}
</Card>
