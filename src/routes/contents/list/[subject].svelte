<script>
	import { page } from '$app/stores';
	import ContentsPage from '$lib/components/contents/ContentsPage.svelte';
	import { subjectIds } from '$lib/data/subjects';
	$: isAll = $page.params.subject === 'all';
	$: isValidSubject = !!subjectIds[$page.params.subject];
</script>

{#if isAll}
	<ContentsPage />
{:else if isValidSubject}
	<ContentsPage filterSubjectId={$page.params.subject} />
{:else}
	Subject not found
{/if}
