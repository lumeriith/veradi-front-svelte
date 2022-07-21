<script>
	import HireSubjectAnnouncement from '$lib/components/hire/HireSubjectAnnouncement.svelte';
	import { page } from '$app/stores';
	import subjectHire from '$lib/data/hire/subjectHire';
	import veradiUrls from '$lib/data/veradiUrls';

	$: subjectId = $page.params.subject;
	$: subject = subjectHire[subjectId];
</script>

<HireSubjectAnnouncement
	subjectName={subject.subjectName}
	subjectIntro={subject.subjectIntro}
	subjectIntroUrl={veradiUrls.introduction[subjectId]}
	applicationDate={subject.applicationDate}
	applicationIntake={subject.applicationIntake}
	task={subject.task.join('\n')}
	requirement={subject.requirement.join('\n')}
	prefer={subject.prefer.join('\n')}
/>
