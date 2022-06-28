<script>
	import { page } from '$app/stores';
	import ContentsListPage from '$lib/components/contents/list/ContentsListPage.svelte';
	import { subjectIds } from '$lib/data/subjects';
	$: isAll = $page.params.subject === 'all';
	$: isValidSubject = !!subjectIds[$page.params.subject];
</script>

{#if isAll}
	<ContentsListPage />
{:else if isValidSubject}
	<ContentsListPage filterSubjectId={$page.params.subject} />
{:else}
	Subject not found
{/if}
