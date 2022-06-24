<script>
	import { readableNameBySubjectIds } from '$lib/data/subjects';

	export let exam = {
		image: '',
		subject: subjectIds.chemistry,
		title: 'Title Not Found',
		subtitle: 'Subtitle Not Found'
	};
</script>

<div class="item tw-w-72 tw-p-6 tw-rounded-lg tw-flex tw-flex-col tw-cursor-pointer tw-h-full">
	<img
		src={exam.image}
		alt=""
		class="tw-w-full tw-mb-6"
		style="box-shadow: 2px 3px 12px 0px #0005"
	/>

	<main class="tw-flex tw-flex-col tw-gap-2 tw-flex-1">
		<div class="tw-font-bold tw-text-xl">{exam.title}</div>
		<div>{exam.subtitle}</div>
		<div class="tw-font-bold tw-text-lg tw-mt-auto tw-text-[#3c9fcb]">
			{readableNameBySubjectIds[exam.subject]}
		</div>
	</main>
</div>

<style>
	.item {
		transition: background-color 0.2s;
		filter: brightness(1);
	}

	.item img {
		transform: scale(0.98) translateY(0);
		transition: transform 0.2s;
	}

	.item:hover {
		background-color: #fff8;
		filter: brightness(1.02);
	}

	.item:hover img {
		transform: scale(1.03) translateY(-2px);
	}
</style>
