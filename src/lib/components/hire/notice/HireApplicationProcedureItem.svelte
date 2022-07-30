<script>
	export let text = 'a';
	export let bg = 'white';
	export let index = 0;
</script>

<div
	class="tw-w-full lg:tw-w-32 tw-aspect-square tw-rounded-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center"
	style="background-color: {bg};"
>
	<div class="tw-text-white tw-text-lg lg:tw-text-xl tw-hidden sm:tw-block">0{index + 1}</div>
	<div class="tw-text-white tw-text-xs sm:tw-text-lg lg:tw-text-xl">{text}</div>
</div>
