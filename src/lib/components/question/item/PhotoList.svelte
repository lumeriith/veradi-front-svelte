<script>
	import PhotoItem from './PhotoItem.svelte';

	export let photos = [{ url: '', thumb: '' }];
</script>

{#if photos && photos.length > 0}
	<div class="tw-flex tw-gap-2 tw-flex-wrap tw-mt-3 tw-mb-2 tw-justify-center sm:tw-justify-start">
		{#each photos as photo}
			<PhotoItem {photo} />
		{/each}
	</div>
{/if}
