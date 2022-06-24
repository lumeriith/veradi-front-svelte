<script>
	import TabButtons from '$lib/components/TabButtons.svelte';

	const items = [
		['전체', veradiUrls.hireMath],
		['수학', veradiUrls.hireLifeethics],
		['화학', veradiUrls.hireSocialculture],
		['사회문화', veradiUrls.hirePhysics],
		['생활과윤리', veradiUrls.hireChemistry],
		['생명과학', veradiUrls.hireBiology],
		['지구과학', veradiUrls.hireEarthscience]
	];
</script>

<TabButtons buttons={items} />
