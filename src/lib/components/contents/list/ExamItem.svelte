<script>
	import { readableNameBySubjectIds } from '$lib/data/subjects';
	import veradiUrls from '$lib/data/veradiUrls';

	export let book = {
		image: '',
		subject: subjectIds.chemistry,
		title: 'Title Not Found',
		subtitle: 'Subtitle Not Found'
	};
</script>

<a
	class="item tw-w-72 tw-p-6 tw-rounded-lg tw-flex tw-items-center tw-flex-col tw-cursor-pointer tw-h-full"
	href={veradiUrls.contents.books(book.id)}
>
	<img src={book.image} alt="" class="tw-w-[240px] tw-mb-6 tw-h-[320px]" />

	<main class="tw-flex tw-flex-col tw-gap-2 tw-flex-1">
		<div class="tw-font-bold tw-text-xl tw-w-[240px]">
			{book.title}
		</div>
		<div>{book.subtitle}</div>
		<div class="tw-font-bold tw-text-lg tw-mt-auto tw-text-[#3c9fcb]">
			{readableNameBySubjectIds[book.subject]}
		</div>
	</main>
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.item {
		transition: background-color 0.2s;
		filter: brightness(1);
	}

	.item img {
		transform: scale(0.98) translateY(0);
		transition: transform 0.3s, box-shadow 0.3s;
		box-shadow: 2px 3px 6px 0px #0005;
	}

	.item:hover {
		background-color: #fff8;
		filter: brightness(1.02);
	}

	.item:hover img {
		transform: scale(1.02) translateY(-4px);
		box-shadow: 2px 8px 18px 0px #0003;
	}
</style>
