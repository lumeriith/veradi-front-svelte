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
  import { VeradiUrl } from '$lib/components/url/veradiUrl.svelte';
  import HireSubjectAnnouncement from '$lib/components/hire/HireSubjectAnnouncement.svelte';

  // Modify here!
  import { BiologyInfo as subjectInfo } from '$lib/components/hire/constants/SubjectHireInfo.svelte';
  let subjectUrl = VeradiUrl.introBiology;
  // 
</script>

{#each subjectInfo as info}
<HireSubjectAnnouncement 
  subjectName={info.subjectName}
  subjectIntro={info.subjectIntro}
  subjectIntroUrl={subjectUrl}
  applicationDate={info.applicationDate}
  applicationIntake={info.applicationIntake}
  task={info.task.join('\n')}
  requirement={info.requirement.join('\n')}
  prefer={info.prefer.join('\n')}
/>
{/each}