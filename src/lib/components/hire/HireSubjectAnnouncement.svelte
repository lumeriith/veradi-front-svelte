<script>
	import { Button, Container, Col, Row, Form, Image } from 'sveltestrap';

	import veradiUrls from '$lib/data/veradiUrls.js';
	import img_team from '$lib/static/img/hire/team.svg';
	import img_procedure from '$lib/static/img/hire/procedure.png';
	import img_procedure1 from '$lib/static/img/hire/procedure1.png';
	import img_procedure2 from '$lib/static/img/hire/procedure2.png';
	import img_hireSubjectPhoto from '$lib/static/img/hire/hireSubjectPhoto.png';
	import img_hireProcess from '$lib/static/img/hire/hireProcess.png';
	import img_hireProcess1 from '$lib/static/img/hire/hireProcess1.png';
	import img_hireProcess2 from '$lib/static/img/hire/hireProcess2.png';
	import TabButtons from '../TabButtons.svelte';
	import NarrowContainer from '../NarrowContainer.svelte';
	import BluePillButton from '../BluePillButton.svelte';
	import ContentItem from './subject/ContentItem.svelte';

	export let subjectName, subjectIntro, subjectIntroUrl;
	export let applicationDate, applicationIntake;
	export let task, requirement, prefer;

	const items = [
		['수학팀', veradiUrls.hireSubject.math],
		['생활과윤리팀', veradiUrls.hireSubject.lifeethics],
		['사회문화팀', veradiUrls.hireSubject.socialculture],
		['물리학Ⅰ팀', veradiUrls.hireSubject.physics],
		['화학Ⅰ팀', veradiUrls.hireSubject.chemistry],
		['생명과학Ⅰ팀', veradiUrls.hireSubject.biology],
		['지구과학Ⅰ팀', veradiUrls.hireSubject.earthscience]
	];

	const headingClasses = 'tw-font-bold tw-text-xl tw-mt-14 tw-mb-3';
</script>

<div class="tw-h-20" />
<NarrowContainer>
	<header class="tw-font-heading tw-text-3xl">
		<div class="-tw-mb-2">베라디와 함께할,</div>
		<div>열정적인 당신을 기다립니다</div>
	</header>
	<div class="tw-h-5" />
	<TabButtons buttons={items} />
	<div class="tw-h-8" />
</NarrowContainer>

<div
	class="tw-bg-cover tw-bg-center tw-py-8 md:tw-py-0 md:tw-h-60"
	style="background-image:url('{img_hireSubjectPhoto}')"
>
	<NarrowContainer class="tw-h-full">
		<div
			class="tw-h-full tw-flex tw-flex-col md:tw-flex-row tw-gap-4 md:tw-gap-16 tw-justify-center tw-items-center tw-text-center md:tw-text-left"
		>
			<header class="tw-font-heading tw-text-2xl tw-whitespace-nowrap md:tw-w-36">
				<div>베라디 {subjectName}팀</div>
				<div>모집 요강</div>
			</header>
			<main class="tw-font-semibold tw-text-lg md:tw-flex-1">
				<div class="tw-py-2">
					{#each subjectIntro.split('\n') as para}
						<p class="tw-mb-2">{para}</p>
					{/each}
				</div>
				<div class="tw-flex tw-gap-4 tw-flex-wrap tw-justify-center md:tw-justify-start">
					<BluePillButton href={subjectIntroUrl}>{subjectName}팀 소개보기</BluePillButton>
					<BluePillButton>지원서류 다운로드</BluePillButton>
				</div>
			</main>
		</div>
	</NarrowContainer>
</div>

<NarrowContainer>
	<header class={headingClasses}>모집개요</header>
	<section class="tw-flex tw-flex-col tw-gap-2">
		<ContentItem title="접수기간">{applicationDate}</ContentItem>
		<ContentItem title="지원규모">{applicationIntake}</ContentItem>
	</section>

	<header class={headingClasses}>담당업무</header>
	<div class="tw-whitespace-pre-line" style="line-height: 1.8;">{task}</div>

	<header class={headingClasses}>자격요건</header>
	<section class="tw-flex tw-flex-col tw-gap-6">
		<ContentItem title="자격사항" class="tw-whitespace-pre-line" style="line-height: 1.8;"
			>{requirement}</ContentItem
		>
		<ContentItem title="우대사항" class="tw-whitespace-pre-line" style="line-height: 1.8;"
			>{prefer}</ContentItem
		>
	</section>

	<header class={headingClasses}>근무형태</header>
	<section class="tw-flex tw-flex-col tw-gap-3">
		<ContentItem title="근무 일시">주 5일 (탄력근무제)</ContentItem>
		<ContentItem title="근무 시간">오전 10시 ~ 오후 22시 (자율 출근)</ContentItem>
		<ContentItem title="근무지">서울특별시 강남구 역삼동 607-13 삼정빌딩 3F</ContentItem>
		<ContentItem title="급여">협의</ContentItem>
	</section>

	<header class={headingClasses}>급여 및 근무관련 조건</header>
	<section class="tw-text-[#707070]">
		<div>프리랜서 및 도급 계약 가능, 능력에 따라 건당 용역료 지급</div>
		<div>인턴 기간 한해서 소정의 급여가 제공됩니다</div>
	</section>
</NarrowContainer>
<div class="tw-h-24" />
