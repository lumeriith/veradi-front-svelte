<script>
	import { fly, fade } from 'svelte/transition';
	import { Container, Row, Form } from 'sveltestrap';
	import veradiUrls from '$lib/data/veradiUrls.js';
	import MemberCard from '$lib/components/introduction/MemberCard.svelte';
	import TabButtons from '$lib/components/TabButtons.svelte';
	import TeamIntro from '$lib/components/introduction/TeamIntro.svelte';
	import TeamHireLink from '$lib/components/introduction/TeamHireLink.svelte';

	import SwiperCoverFlow from '$lib/components/style/swiper/coverflow/SwiperCoverFlow.svelte';

	import sampleTeamPic from '$lib/static/img/introduction/sampleTeamPic.jpg';
	import NarrowContainer from '../NarrowContainer.svelte';

	export let hireUrl = veradiUrls.hireBiology;
	export let teamName = '생명과학팀';
	export let teamTitle = '차세대 교육팀';
	export let teamIntro = '팀 설명입니다.';
	export let teamPhoto = sampleTeamPic;
	export let hireTitle = '지금 지원하세요';
	export let hireIntro = '오직 베라디 생명과학에서만 가능한 길, 당신도 동참하세요.';
	export let members = [
		{
			name: '홍길동',
			rank: '대표 팀장 (서울)',
			education: '어떤대학교 어떤학과',
			bgColor: '#c5fbee'
		}
	];
	export let hashTags = [
		{
			content: '완벽한 DB',
			fontColor: '#072f47',
			bgColor: '#cdf3ff'
		}
	];

	const items = [
		['수학팀', veradiUrls.introMath],
		['생활과윤리팀', veradiUrls.introLifeethics],
		['사회문화팀', veradiUrls.introSocialculture],
		['물리학Ⅰ팀', veradiUrls.introPhysics],
		['화학Ⅰ팀', veradiUrls.introChemistry],
		['생명과학Ⅰ팀', veradiUrls.introBiology],
		['지구과학Ⅰ팀', veradiUrls.introEarthscience]
	];

	$: buttonName = teamName + ' 채용공고';
</script>

<NarrowContainer class="tw-mt-10">
	<TabButtons buttons={items} />
	<hr />
	<div in:fly={{ duration: 500, y: 50 }}>
		<TeamIntro
			photo={teamPhoto}
			title={teamTitle}
			subject={teamName}
			introduction={teamIntro}
			{hashTags}
		/>
	</div>
	<div class="tw-flex tw-justify-center">
		<div
			class="tw-mt-20 tw-inline-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-6 tw-gap-y-10 tw-ml-4 md:tw-px-12"
		>
			{#each members as member, i}
				<div
					in:fly={{ delay: 300 + (600 / members.length) * i, duration: 300, y: 50 }}
					class="tw-flex tw-justify-center"
				>
					<MemberCard
						team={teamName}
						name={member.name}
						rank={member.rank}
						education={member.education}
						letterSpacing={member.letterSpacing}
						bgColor={member.bgColor}
						important={member.important}
					/>
				</div>
			{/each}
		</div>
	</div>

	<h3 class="tw-font-heading tw-mt-28 tw-mb-0 tw-pb-0">
		<span class="tw-text-[#3c9fcb]">VERADI</span> 인에게 묻습니다
	</h3>
</NarrowContainer>
<SwiperCoverFlow />
<TeamHireLink title={hireTitle} introduction={hireIntro} button={buttonName} url={hireUrl} />
