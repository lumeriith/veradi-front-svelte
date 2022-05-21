<script>
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import TeamButton from './TeamButton.svelte';

	const teams = [
    ['수학팀', VeradiUrl.introMath],
		['생활과윤리팀', VeradiUrl.introLifeethics],
		['사회문화팀', VeradiUrl.introSocialculture],
		['물리학Ⅰ팀', VeradiUrl.introPhysics],
    ['화학Ⅰ팀', VeradiUrl.introChemistry],
		['생명과학Ⅰ팀', VeradiUrl.introBiology],
		['지구과학Ⅰ팀', VeradiUrl.introEarthscience]
	];
</script>

<div
	class="tw-flex tw-gap-x-4 tw-gap-y-2 tw-flex-wrap tw-justify-center lg:tw-justify-start lg:tw-max-w-lg"
>
	{#each teams as [name, href]}
		<TeamButton {href}>{name}</TeamButton>
	{/each}
</div>
