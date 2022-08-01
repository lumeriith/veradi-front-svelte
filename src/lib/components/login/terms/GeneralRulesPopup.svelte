<script>
	import { Card, Input, Alert, Image } from 'sveltestrap';

	// https://github.com/vinodnimbalkar/svelte-pdf#how-to-use-it-in-sapper-with-ssr-enabled
	// 참고하여 수정함

	let PdfViewer;

	import close from '$lib/static/img/default/close.svg';
	import generalRulesPdf from '$lib/static/pdf/register/VeradiGeneralRules.pdf';
	import { onMount } from 'svelte';

	export let onClose = () => {};

	onMount(async () => {
		const module = await import('svelte-pdf');
		PdfViewer = module.default;
	});
</script>

<Card class="tw-absolute z-10 tw-rounded-none sm:tw-rounded-xl tw-align-middle">
	<row class="tw-justify-end tw-flex">
		<a>
			<Image src={close} style="width:5%" />
		</a>
	</row>
	<div>
		<svelte:component this={PdfViewer} url={generalRulesPdf} />
	</div>
</Card>
