<script>
	import ContentsPage from '$lib/components/contents/ContentsPage.svelte';
	import { subjectIds } from '$lib/data/subjects';
</script>

<ContentsPage filterSubjectId={subjectIds.earthscience} />
