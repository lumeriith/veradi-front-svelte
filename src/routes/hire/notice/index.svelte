<script>
	import { Row, Image } from 'sveltestrap';

	import { animTrigger, animHeading, animBody, animFade } from '$lib/utils/scrollEffects';
	import HireSubjects from '$lib/components/hire/notice/HireSubjects.svelte';

	import img_mainPhoto from '$lib/static/img/hire/hireNoticePhoto.png';
	import NarrowContainer from '$lib/components/NarrowContainer.svelte';
	import HireApplicationProcedure from '$lib/components/hire/notice/HireApplicationProcedure.svelte';
</script>

<!----------------------------------------------------------------------------->
<div
	class="tw-relative tw-bg-cover tw-h-[250px] md:tw-h-[350px] lg:tw-h-[400px]"
	style="background-image: url('{img_mainPhoto}'); background-position: 50% 15%;"
>
	<div class="tw-absolute tw-bg-[#0000003f] tw-inset-0" />
	<div class="tw-absolute tw-inset-0 tw-z-10 tw-flex tw-items-center tw-text-white">
		<NarrowContainer>
			<header
				class="tw-font-heading tw-text-2xl sm:tw-text-4xl md:tw-text-5xl tw-flex tw-flex-col tw-gap-2 md:tw-gap-5 tw-text-center"
				use:animTrigger
			>
				<div use:animHeading={0}>Team Work, 도전, 그리고 성장은</div>
				<div use:animHeading={1}>베라디 구성원들의 일상입니다</div>
			</header>
		</NarrowContainer>
	</div>
</div>
<div class="tw-h-16 md:tw-h-20" />
<!---------------------------------------------------------------->
<NarrowContainer>
	<header
		class="tw-font-heading tw-flex tw-flex-col tw-gap-0.5 tw-text-4xl tw-mb-10"
		use:animTrigger
		use:animHeading
	>
		베라디 8기 지원안내
	</header>
	<section class="tw-mb-10 sm:tw-mb-20" use:animTrigger>
		<header class="tw-font-bold tw-text-2xl tw-my-4">지원절차</header>
		<HireApplicationProcedure />
	</section>
	<section class="tw-mb-10 sm:tw-mb-20" use:animTrigger>
		<header class="tw-font-bold tw-text-2xl tw-my-4" use:animHeading>지원방식</header>
		<div class="tw-font-bold tw-text-lg tw-mb-5" use:animBody={0}>
			지원할 부서의 지원 양식을 다운로드하여 작성 후 메일 주소(example@gmail.com)으로 제출
		</div>
		<div class="tw-flex tw-flex-col tw-gap-2.5">
			<div use:animBody={1}>* 이메일 제목 양식 : [베라디] [8기] [OO팀] [날짜] [이름]</div>
			<div use:animBody={2}>* 모집 기간 : 2022년 06월 21일 ~ 2022년 07월 31일</div>
			<div use:animBody={3}>* 서류 합격자 발표 : 2022년 08월 03일</div>
			<div use:animBody={4}>* 면접 일정은 추후 서류 발표와 함께 개별 통지합니다.</div>
		</div>
	</section>
	<section class="tw-mb-10 sm:tw-mb-20" use:animTrigger>
		<header class="tw-font-bold tw-text-2xl tw-my-4" use:animHeading>지원부서</header>
		<HireSubjects />
	</section>
	<section class="tw-mb-10 sm:tw-mb-20" use:animTrigger>
		<header class="tw-font-bold tw-text-2xl tw-my-4" use:animHeading>유의사항</header>
		<div class="tw-flex tw-flex-col tw-gap-2 tw-text-[#656565]">
			<div use:animBody={0}>
				* 입사지원 서류에서 허위기재 사실이 발견될 경우, 입사가 취소될 수 있습니다.
			</div>
			<div use:animBody={1}>
				* 접수 기한이 명시되어있지 않은 공고는 인재 영입이 완료될 경우 조기 마감될 수 있습니다.
			</div>
			<div use:animBody={2}>* 상황에 따라 1, 2차 면접이 동시 진행될 수 있습니다.</div>
		</div>
	</section>
</NarrowContainer>

<style>
</style>
