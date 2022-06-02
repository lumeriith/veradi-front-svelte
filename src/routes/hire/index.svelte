<script>
	import { animTrigger, animHeading, animBody } from '$lib/utils/scrollEffects';

	import { fade, fly } from 'svelte/transition';

	import HireCards from '$lib/components/hire/HireCards.svelte';

	import img_mainPhoto from '$lib/static/img/introduction/mainPhoto.png';
	import img_bottomBg from '$lib/static/img/hire/index/bottomBg.jpg';

	import HireGrowth from '$lib/components/hire/HireGrowth.svelte';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import HireVision from '$lib/components/hire/HireVision.svelte';
</script>

<!----------------------------------------------------------------------------->
<div
	class="tw-relative tw-bg-cover tw-bg-center tw-h-[250px] md:tw-h-[350px] lg:tw-h-[400px]"
	style="background-image:url('{img_mainPhoto}');"
>
	<div class="tw-absolute tw-bg-[#0000003f] tw-inset-0" />
	<div class="tw-absolute tw-inset-0 tw-z-10 tw-flex tw-items-center tw-text-white">
		<NarrowContainer>
			<header
				class="tw-font-heading tw-text-4xl md:tw-text-5xl tw-flex tw-flex-col"
				in:fade={{ duration: 1000 }}
			>
				<div>교육의 내일을</div>
				<div>함께 만들어갈 인재</div>
			</header>
			<div class="tw-h-4 md:tw-h-8 lg:tw-h-12" />
			<div class="tw-text-lg tw-flex tw-flex-col md:tw-gap-3">
				<div in:fly={{ duration: 700, delay: 400, y: 30 }}>
					열린 태도와 상호간의 존중과 신뢰를 바탕으로
				</div>
				<div in:fly={{ duration: 700, delay: 700, y: 30 }}>새로운 생각과 끊임없는 도전을 통해</div>
				<div in:fly={{ duration: 700, delay: 1000, y: 30 }}>
					베라디와 함께 성장해나갈 인재를 기다립니다.
				</div>
			</div>
		</NarrowContainer>
	</div>
</div>
<div class="tw-h-16 md:tw-h-20" />
<!------------------------------------------------------------------------------>
<NarrowContainer>
	<header class="tw-font-heading tw-flex tw-flex-col tw-gap-0.5" use:animTrigger>
		<div use:animHeading={0} class="tw-text-2xl">베라디는 오늘도</div>
		<div use:animHeading={1} class="tw-text-3xl">성장하고 있습니다</div>
	</header>
	<div class="tw-h-8" />
	<HireGrowth />
</NarrowContainer>
<div class="tw-h-16 md:tw-h-20" />
<!------------------------------------------------------------------------------>
<NarrowContainer>
	<div use:animTrigger use:animHeading class="tw-font-heading tw-text-3xl tw-mb-1.5">
		여러분의 꿈과 열정을 응원합니다
	</div>
	<div use:animTrigger class="tw-font-bold tw-text-lg tw-flex tw-flex-col tw-gap-0.5">
		<div use:animBody={0}>창의적 사고를 바탕으로 도전을 통해</div>
		<div use:animBody={1}>비전을 실현해나갈 인재를 찾습니다.</div>
	</div>
	<div class="tw-h-8" />
</NarrowContainer>
<HireVision />
<div class="tw-h-16 md:tw-h-20" />
<!------------------------------------------------------------------------------>
<NarrowContainer>
	<header use:animTrigger class="tw-font-heading tw-flex tw-flex-col tw-gap-0.5">
		<div use:animHeading={0} class="tw-text-2xl">미래를 이끌어갈 소중한 당신께</div>
		<div use:animHeading={1} class="tw-text-3xl">아낌없이 지원합니다</div>
	</header>
	<div class="tw-h-16" />
	<HireCards />
</NarrowContainer>
<div class="tw-h-16 md:tw-h-20" />
<!------------------------------------------------------------------------------>
<div
	class="tw-relative tw-bg-cover tw-bg-center tw-h-[250px] md:tw-h-[380px] lg:tw-h-[450px]"
	style="background-image:url('{img_bottomBg}');"
>
	<div class="tw-absolute tw-bg-[#0000003f] tw-inset-0" />
	<div class="tw-absolute tw-inset-0 tw-z-10 tw-flex tw-items-center tw-text-white tw-text-center">
		<NarrowContainer>
			<header
				class="tw-font-heading tw-flex tw-flex-col tw-items-center"
				in:fade={{ duration: 1000 }}
			>
				<div class="tw-text-2xl sm:tw-text-3xl md:tw-text-5xl">당신의 역량을 펼치세요</div>
				<div class="tw-text-lg sm:tw-text-xl md:tw-text-3xl">
					베라디에서, 뜨겁게 노력하고 힘차게 비상합시다
				</div>
			</header>
			<div class="tw-h-4 md:tw-h-8 lg:tw-h-12" />
			<div
				class="tw-text-md md:tw-text-lg tw-flex tw-flex-col tw-items-center tw-gap-2 md:tw-gap-3 tw-font-semibold"
			>
				<div in:fly={{ duration: 700, delay: 400, y: 30 }}>
					우리는 혁신을 거듭하고, 리더를 양산하며, 지식을 나눕니다.
				</div>
				<div in:fly={{ duration: 700, delay: 700, y: 30 }}>
					누구보다 치열한 20대를 기꺼이 이 곳, 베라디에서 함께하고 있습니다.
				</div>
			</div>
		</NarrowContainer>
	</div>
</div>
<div class="tw-h-16 md:tw-h-20" />
