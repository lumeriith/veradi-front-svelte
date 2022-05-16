<script>
	import { Container, Col, Row, Form } from 'sveltestrap';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import MemberCard from '$lib/components/introduction/MemberCard.svelte';
	import TeamHashTag from '$lib/components/introduction/TeamHashTag.svelte';
	import TeamButton from '$lib/components/introduction/TeamButton.svelte';
	import TeamIntro from '$lib/components/introduction/TeamIntro.svelte';
	import TeamFamilyIntro from '$lib/components/introduction/TeamFamilyIntro.svelte';
	import TeamReviewIntro from '$lib/components/introduction/TeamReviewIntro.svelte';
	import TeamHireLink from '$lib/components/introduction/TeamHireLink.svelte';

	import SwiperCoverFlow from '$lib/components/style/swiper/coverflow/SwiperCoverFlow.svelte';

	export let hireUrl = VeradiUrl.hireBiology;
	export let teamName = '생명과학팀';
	export let teamTitle = '차세대 교육팀';
	export let teamIntro = '팀 설명입니다.';
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

<Container>
	<Row>
		<Col class="d-none d-sm-block py-4" sm="3" md="2" style="margin-left:-20px; margin-right:10px;">
			<TeamButton />
		</Col>
		<Col xs="12" sm="9" md="10">
			<TeamIntro title={teamTitle} subject={teamName} introduction={teamIntro} />
			<Row class="py-3">
				{#each hashTags as tag}
					<TeamHashTag
						content={tag.content}
						fontColor={tag.fontColor}
						bgColor={tag.bgColor}
						letterSpacing={tag.letterSpacing}
					/>
				{/each}
			</Row>
		</Col>
	</Row>
</Container>
<Form class="py-4">
	<Container class="d-none d-sm-block">
		<TeamFamilyIntro introduction="Introduce our Family" subject={teamName} />
		<div style="border-top:1px; border-style: solid; border-color:#bbbbbb;" />
		<Row class="py-2">
			{#each members as member}
				<MemberCard
					name={member.name}
					rank={member.rank}
					education={member.education}
					letterSpacing={member.letterSpacing}
					bgColor={member.bgColor}
				/>
			{/each}
		</Row>
	</Container>
	<Container class="d-block d-sm-none">
		<TeamFamilyIntro introduction="Introduce our Family" subject={teamName} />
		<Row
			class="py-2"
			style="height:250px; overflow:scroll; overflow-x:hidden; background: linear-gradient( to bottom, #eeeeee, #fbfbfb) "
		>
			{#each members as member}
				<MemberCard
					name={member.name}
					rank={member.rank}
					education={member.education}
					letterSpacing={member.letterSpacing}
					bgColor={member.bgColor}
				/>
			{/each}
		</Row>
	</Container>
</Form>
<Container class="py-5">
	<TeamReviewIntro />
	<SwiperCoverFlow />
</Container>
<Form>
	<TeamHireLink title={hireTitle} introduction={hireIntro} button={buttonName} url={hireUrl} />
</Form>
