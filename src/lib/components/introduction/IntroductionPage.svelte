<script>
	import { fly, fade } from 'svelte/transition';
	import { Container, Row, Form } from 'sveltestrap';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import MemberCard from '$lib/components/introduction/MemberCard.svelte';
	import TeamButtons from '$lib/components/introduction/TeamButtons.svelte';
	import TeamIntro from '$lib/components/introduction/TeamIntro.svelte';
	import TeamHireLink from '$lib/components/introduction/TeamHireLink.svelte';

	import SwiperCoverFlow from '$lib/components/style/swiper/coverflow/SwiperCoverFlow.svelte';

	import sampleTeamPic from '$lib/static/img/introduction/sampleTeamPic.jpg';

	export let hireUrl = VeradiUrl.hireBiology;
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

	$: buttonName = teamName + ' 채용공고';
</script>

<Container class="tw-mt-10">
	<TeamButtons />
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
	<div class="tw-flex tw-gap-x-4 tw-gap-y-10 tw-mt-16 tw-mb-12 tw-flex-wrap tw-justify-center">
		{#each members as member, i}
			<div in:fly={{ delay: 300 + (600 / members.length) * i, duration: 300, y: 50 }}>
				<MemberCard
					team={teamName}
					name={member.name}
					rank={member.rank}
					education={member.education}
					letterSpacing={member.letterSpacing}
					bgColor={member.bgColor}
				/>
			</div>
		{/each}
	</div>
	<h3 class="tw-font-heading tw-mt-28 tw-mb-0 tw-pb-0">
		<span class="tw-text-[#3c9fcb]">VERADI</span> 인에게 묻습니다
	</h3>
</Container>
<SwiperCoverFlow />
<TeamHireLink title={hireTitle} introduction={hireIntro} button={buttonName} url={hireUrl} />
