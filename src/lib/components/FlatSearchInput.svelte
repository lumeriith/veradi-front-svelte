<script>
	import Icon from '@iconify/svelte';
	import FlatInput from './FlatInput.svelte';

	export let value;
</script>

<div class="tw-relative">
	<FlatInput bind:value class="tw-pr-8" placeholder="통합검색" />
	<button
		class="tw-absolute tw-right-0 tw-pb-1 tw-bottom-0 tw-top-0 tw-w-8 tw-text-[#a6a6a6] tw-flex tw-justify-center tw-items-center tw-text-xl"
		><Icon icon="charm:search" /></button
	>
</div>
