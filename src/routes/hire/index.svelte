<script>
	import { Container, Col, Row, Form, Image } from 'sveltestrap';
	import { fade, fly } from 'svelte/transition';

	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import HireThumbnail from '$lib/components/hire/HireThumbnail.svelte';
	import HireCards from '$lib/components/hire/HireCards.svelte';

	import img_mainPhoto from '$lib/static/img/introduction/mainPhoto.png';
	import img_test from '$lib/static/img/test.png';

	const img = {
		mainButton: 'svg/hire/mainButton.svg',
		mainTitle1: 'svg/hire/mainTitle1.svg',
		mainTitle2: 'svg/hire/mainTitle2.svg'
	};
</script>

<!----------------------------------------------------------------------------->
<div
	class="tw-relative tw-bg-cover tw-bg-center tw-h-[250px] md:tw-h-[400px] lg:tw-h-[450px]"
	style="background-image:url('{img_mainPhoto}');"
>
	<div class="tw-absolute tw-bg-[#0003] tw-inset-0" />
	<div class="tw-absolute tw-inset-0 tw-z-10 tw-flex tw-items-center tw-text-white">
		<Container class="tw-pl-6 lg:tw-px-20">
			<header
				class="tw-font-heading tw-text-4xl md:tw-text-5xl tw-flex tw-flex-col md:tw-gap-3"
				in:fade={{ duration: 1000 }}
			>
				<div>교육의 내일을</div>
				<div>함께 만들어갈 인재</div>
			</header>
			<div class="tw-h-6 md:tw-h-12 lg:tw-h-20" />
			<div class="tw-text-lg tw-flex tw-flex-col md:tw-gap-3.5">
				<div in:fly={{ duration: 700, delay: 400, y: 30 }}>
					열린 태도와 상호간의 존중과 신뢰를 바탕으로
				</div>
				<div in:fly={{ duration: 700, delay: 700, y: 30 }}>새로운 생각과 끊임없는 도전을 통해</div>
				<div in:fly={{ duration: 700, delay: 1000, y: 30 }}>
					베라디와 함께 성장해나갈 인재를 기다립니다.
				</div>
			</div>
		</Container>
	</div>
</div>
<div class="tw-h-8" />
<!------------------------------------------------------------------------------>
<Container class="tw-px-6 tw-mb-16">
	<div data-aos="fade-right" data-aos-easing="linear" style="transition:1.0s;">
		<header class="tw-font-heading tw-flex tw-flex-col tw-gap-2">
			<div class="tw-text-2xl">미래를 이끌어갈 소중한 당신께</div>
			<div class="tw-text-3xl">아낌없이 지원합니다</div>
		</header>
	</div>
	<div class="tw-h-8" />
	<HireCards />
</Container>
<!---------------------------------------------------------------->
<div class="py-5" style="background-color:whitesmoke">
	<Container class="py-1">
		<div style="margin-left:10px;">
			<h1>채용문의</h1>
			<h5>채용 관련 문의는 Q&A 게시판 또는 @gmail.com을 통해서 가능합니다.</h5>
		</div>
	</Container>
</div>
