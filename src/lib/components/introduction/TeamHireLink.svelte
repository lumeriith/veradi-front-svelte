<script>
	import introbottom from '$lib/static/img/introduction/introbottom.jpg';
	import BluePillButton from '../BluePillButton.svelte';
	import NarrowContainer from '../NarrowContainer.svelte';

	export let introduction = '내용';
	export let title = '제목';
	export let button = '채용 공고';
	export let url;
</script>

<div
	class="tw-bg-cover tw-bg-center tw-h-64 sm:tw-h-80 xl:tw-h-[400px]"
	style="background-image:url('{introbottom}');"
>
	<NarrowContainer
		class="tw-flex tw-flex-col tw-items-end tw-text-right tw-h-full tw-justify-center"
	>
		<div
			class="tw-mb-4 tw-font-heading tw-text-xl sm:tw-text-2xl md:tw-text-3xl tw-text-white tw-whitespace-pre-line"
			style="text-shadow: 0 0 16px black;"
		>
			{title}
		</div>
		<div
			class="tw-mb-5 sm:tw-mb-8 tw-font-semibold  tw-text-sm sm:tw-text-md md:tw-text-lg tw-text-white tw-whitespace-pre-line"
			style="line-height: 1.7; text-shadow: 0 0 8px black;"
		>
			{introduction}
		</div>
		<div class="tw-flex sm:tw-block tw-justify-center ">
			<BluePillButton href={url}>{button}</BluePillButton>
		</div>
	</NarrowContainer>
</div>
