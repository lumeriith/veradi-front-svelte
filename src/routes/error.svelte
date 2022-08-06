<script>
	import BluePillButton from '$lib/components/BluePillButton.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';

	import errorPng from '$lib/static/img/error/error.png';
</script>

<NarrowContainer
	class="tw-flex tw-gap-4 tw-flex-col-reverse md:tw-flex-row tw-items-center tw-justify-center md:tw-justify-between tw-h-[500px]"
>
	<div class="tw-flex-1 tw-max-w-md">
		<header class="tw-font-heading tw-text-3xl">페이지를 찾을 수 없습니다.</header>
		<hr class="tw-m-0 tw-mt-2 tw-mb-4" />
		<main class="tw-mb-6 tw-text-[#777]">
			요청하신 페이지는 없는 페이지이거나 이동되었습니다.
			<br />링크의 주소를 다시 한번 확인해주시기 바랍니다.
		</main>
		<div class="tw-flex tw-justify-center md:tw-justify-start tw-gap-2">
			<BluePillButton class="tw-px-5 tw-py-2 tw-text-sm" href="/">홈으로</BluePillButton>
			<BluePillButton class="tw-px-5 tw-py-2 tw-text-sm" on:click={() => window.history.back()}
				>이전 페이지</BluePillButton
			>
		</div>
	</div>
	<img src={errorPng} alt="오류 이미지 일러스트" class="tw-w-[60%] md:tw-w-[35%]" />
</NarrowContainer>
