<script>
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import TeamButton from './TeamButton.svelte';

	export let buttons = [];
</script>

<div
	class="tw-flex tw-gap-x-4 tw-gap-y-2 tw-flex-wrap tw-justify-center lg:tw-justify-start lg:tw-max-w-lg"
>
	{#each buttons as [name, href]}
		<TeamButton {href}>{name}</TeamButton>
	{/each}
</div>
