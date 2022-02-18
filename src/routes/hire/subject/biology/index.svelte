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
  import { BiologyInfo } from '$lib/components/hire/constants/SubjectHireInfo.svelte';
  import HireSubjectAnnouncement from '$lib/components/hire/HireSubjectAnnouncement.svelte';
</script>

{#each BiologyInfo as info}
<HireSubjectAnnouncement 
  subjectName={info.subjectName}
  subjectIntroHref={info.subjectIntroHref}
  applicationDate={info.applicationDate}
  applicationIntake={info.applicationIntake}
  requirement={info.requirement.join('\n')}
  prefer={info.prefer.join('\n')}
  etc={info.etc.join('\n')}
/>
{/each}