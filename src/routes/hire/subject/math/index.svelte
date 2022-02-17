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
		Image
	} from 'sveltestrap/src';
  import { MathInfo } from '$lib/components/hire/constants/SubjectHireInfo.svelte';
  import HireSubjectAnnouncement from '$lib/components/hire/HireSubjectAnnouncement.svelte';
</script>

{#each MathInfo as info}
<HireSubjectAnnouncement 
  title={info.title}
  recruitment={info.recruitment.join('\n')}
/>
{/each}