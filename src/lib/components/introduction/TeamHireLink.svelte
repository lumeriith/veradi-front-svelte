<script>
	import img_mainPhoto from '$lib/static/img/introduction/mainPhoto.png';
	import { Container, Col } from 'sveltestrap';
	import NarrowContainer from '../NarrowContainer.svelte';

	export let introduction = '내용';
	export let title = '제목';
	export let button = '채용 공고';
	export let url;
</script>

<div
	class="tw-bg-cover tw-bg-center tw-py-6 lg:tw-py-16"
	style="background-image:url('{img_mainPhoto}');"
>
	<NarrowContainer>
		<div class="sm:tw-mb-4 tw-font-heading tw-text-2xl md:tw-text-3xl">{title}</div>
		<div
			class="tw-mb-5 sm:tw-mb-8 tw-font-semibold tw-text-lg md:tw-text-xl tw-text-[#7b7b7b]"
			style="line-height: 1.6;"
		>
			{introduction}
		</div>
		<div class="tw-flex sm:tw-block tw-justify-center ">
			<button href={url}>{button}</button>
		</div>
	</NarrowContainer>
</div>

<style>
	button {
		background-color: #2bc6ff;
		color: white;
		font-weight: 500;
		font-size: large;
		padding: 11px 40px;
		border-radius: 9999px;
		box-shadow: 0 0 8px #0002;
	}

	button:hover {
		filter: brightness(0.95);
	}

	button:active {
		filter: brightness(0.8);
	}
</style>
