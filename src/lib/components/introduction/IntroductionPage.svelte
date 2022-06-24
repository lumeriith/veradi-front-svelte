<script>
	import { fly, fade } from 'svelte/transition';
	import { Container, Row, Form } from 'sveltestrap';
	import veradiUrls from '$lib/data/veradiUrls.js';
	import MemberCard from '$lib/components/introduction/MemberCard.svelte';
	import TabButtons from '$lib/components/TabButtons.svelte';
	import TeamIntro from '$lib/components/introduction/TeamIntro.svelte';
	import TeamHireLink from '$lib/components/introduction/TeamHireLink.svelte';

	import teams from '$lib/data/introduction/teams';
	import allHashtags from '$lib/data/introduction/hashtags';
	import allMembers from '$lib/data/introduction/members';

	import SwiperCoverFlow from '$lib/components/style/swiper/coverflow/SwiperCoverFlow.svelte';

	import NarrowContainer from '../NarrowContainer.svelte';

	export let subjectId = 'math';

	// subjectId를 이용해 모든 정보를 추출합니다.
	const hireUrl = veradiUrls.hireSubject[subjectId];
	const { name, title, intro, photo, hireTitle, hireIntro } = teams[subjectId];
	const members = allMembers[subjectId];
	const hashtags = allHashtags[subjectId];
	const items = [
		['수학팀', veradiUrls.introduction.math],
		['생활과윤리팀', veradiUrls.introduction.lifeethics],
		['사회문화팀', veradiUrls.introduction.socialculture],
		['물리학Ⅰ팀', veradiUrls.introduction.physics],
		['화학Ⅰ팀', veradiUrls.introduction.chemistry],
		['생명과학Ⅰ팀', veradiUrls.introduction.biology],
		['지구과학Ⅰ팀', veradiUrls.introduction.earthscience]
	];

	$: buttonName = name + ' 채용공고';
</script>

<NarrowContainer class="tw-mt-10">
	<TabButtons buttons={items} />
	<hr />
	<div in:fly={{ duration: 500, y: 50 }}>
		<TeamIntro {photo} {title} subject={name} introduction={intro} {hashtags} />
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
						team={name}
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
