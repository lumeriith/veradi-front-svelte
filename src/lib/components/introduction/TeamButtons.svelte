<script>
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import TeamButton from './TeamButton.svelte';

	const teams = [
		['화학팀', VeradiUrl.introChemistry],
		['생활과윤리팀', VeradiUrl.introLifeethics],
		['수학팀', VeradiUrl.introMath],
		['사회문화팀', VeradiUrl.introSocialculture],
		['물리학1팀', VeradiUrl.introPhysics],
		['생명과학팀', VeradiUrl.introBiology],
		['지구과학팀', VeradiUrl.introEarthscience]
	];
</script>

<div
	class="tw-flex tw-gap-x-4 tw-gap-y-2 tw-flex-wrap tw-justify-center lg:tw-justify-start lg:tw-max-w-lg"
>
	{#each teams as [name, href]}
		<TeamButton {href}>{name}</TeamButton>
	{/each}
</div>
