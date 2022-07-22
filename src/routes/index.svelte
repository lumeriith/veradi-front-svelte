<script>
	import SwiperCard from '$lib/components/style/swiper/RatioBreakpoints/SwiperCard.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import { ping } from '$lib/firebase/test';

	let testResult = '';

	async function Test() {
		testResult = 'waiting...';
		const response = await ping();
		testResult = response.data.pong;
	}
</script>

<NarrowContainer class="tw-p-4">
	<button
		class="tw-p-4 tw-bg-black tw-text-white"
		disabled={testResult == 'waiting...'}
		on:click={Test}>Test</button
	>
	<div>{testResult}</div>
</NarrowContainer>

<SwiperCard />
