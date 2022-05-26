<script>
	import { Button, Container, Col, Image } from 'sveltestrap';
	import { SubjectContents } from '../constants/SubjectContents.svelte';
</script>

<div
	class="tw-flex tw-gap-x-2 lg:tw-gap-x-12 tw-gap-y-2 lg:tw-gap-y-6 tw-flex-wrap tw-justify-center lg:tw-justify-start"
>
	{#each SubjectContents as subject}
		<button
			href={subject.src}
			class="tw-pt-4 tw-pb-3 tw-w-28 lg:tw-w-36 tw-h-auto tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-rounded-xl"
		>
			<img class="tw-w-16 lg:tw-w-20 tw-mb-4" src={subject.img} alt="" />
			<div class="tw-font-semibold tw-text-lg lg:tw-text-xl">{subject.title}</div>
		</button>
	{/each}
</div>

<style>
	button {
	}

	button:hover {
		background-color: #eee;
	}
</style>
