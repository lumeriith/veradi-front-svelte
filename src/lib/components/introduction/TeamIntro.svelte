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
	} from 'sveltestrap';

	import { fly, fade } from 'svelte/transition';
	export let title;
	export let subject;
	export let introduction = '';
	export let photo;
	export let hashTags;
</script>

<div
	class="lg:tw-mt-10 tw-mb-5 tw-flex tw-gap-x-14 tw-gap-y-8 tw-flex-wrap lg:tw-flex-nowrap tw-justify-center"
>
	<div class="tw-w-full lg:tw-w-[400px] tw-shrink-0">
		<img src={photo} alt="" />
	</div>
	<div class="tw-px-2 lg:tw-px-0 tw-flex-1 tw-flex tw-flex-col tw-items-start tw-max-w-2xl">
		<h2 class="tw-relative tw-w-auto tw-inline-block tw-font-heading tw-mb-5 tw-whitespace-nowrap">
			{title}
			<span style="color:#3c9fcb;">
				{subject}
			</span>
			<div class="tw-bg-[#d6efff] tw-absolute tw-bottom-0 -tw-left-2 -tw-right-2 tw-h-3 -tw-z-10" />
		</h2>
		<div class="py-1 tw-text-[#333333] tw-font-semibold" style="word-break: keep-all;">
			{#each introduction.split('\n') as intro, i}
				<p in:fly={{ delay: 100 + i * 100, duration: 400, y: 30 }}>{intro}</p>
			{/each}
		</div>
		<div class="tw-flex tw-gap-x-4 tw-gap-y-1 tw-flex-wrap tw-mt-auto">
			{#each hashTags as tag, i}
				<div
					class="tw-text-[#7fc4fd] tw-"
					in:fade={{ delay: (600 / hashTags.length) * i, duration: 200 }}
				>
					#{tag.content}
				</div>
			{/each}
		</div>
	</div>
</div>
