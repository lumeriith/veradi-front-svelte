<script>
	import {
		Accordion,
		AccordionItem,
		Alert,
		Button,
		ButtonGroup,
		Container,
		Col,
		Row,
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Input,
		Form,
		FormGroup,
		Image
	} from 'sveltestrap/src';

	// <------------------- Modify here ----------------->
	import { MathMemberCardInfo as MemberCardInfo } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { MathHashTagInfo as HashTagInfo } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	const hireUrl = VeradiUrl.hireMath;
  const subject = "수학팀";
  const title1 = "교육의 미래를 이끌어갈";
  const introduction1 = "설명문";
  const title2 = "제목"
  const introduction2 = "설명문"
	//

  const buttonName = subject + " 채용공고";
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import MemberCard from '$lib/components/introduction/MemberCard.svelte';
	import TeamHashTag from '$lib/components/introduction/TeamHashTag.svelte';
	import TeamButton from '$lib/components/introduction/TeamButton.svelte';
	import TeamIntro from '$lib/components/introduction/TeamIntro.svelte';
	import TeamFamilyIntro from '$lib/components/introduction/TeamFamilyIntro.svelte';
	import TeamReviewIntro from '$lib/components/introduction/TeamReviewIntro.svelte';
	import TeamHireLink from '$lib/components/introduction/TeamHireLink.svelte';

	import SwiperCoverFlow from '$lib/components/style/swiper/coverflow/SwiperCoverFlow.svelte';

</script>

<Container>
	<Row>
		<Col class="d-none d-sm-block py-4" sm="3" md="2" style="margin-left:-20px; margin-right:10px;">
			<TeamButton />
		</Col>
		<Col xs="12" sm="9" md="10">
			<TeamIntro
				title={title1}
				subject={subject}
				introduction={introduction1}
			/>
			<Row class="py-3">
				{#each HashTagInfo as info}
					<TeamHashTag
						content={info.content}
						fontColor={info.fontColor}
						bgColor={info.bgColor}
						letterSpacing={info.letterSpacing}
					/>
				{/each}
			</Row>
		</Col>
	</Row>
</Container>
<Form class="py-4">
	<Container class="d-none d-sm-block">
		<TeamFamilyIntro introduction="Introduce our Family" subject={subject} />
		<div style="border-top:1px; border-style: solid; border-color:#bbbbbb;" />
		<Row class="py-2">
			{#each MemberCardInfo as info}
				<MemberCard
					name={info.name}
					rank={info.rank}
					education={info.education}
					letterSpacing={info.letterSpacing}
					bgColor={info.bgColor}
				/>
			{/each}
		</Row>
	</Container>
	<Container class="d-block d-sm-none">
		<TeamFamilyIntro introduction="Introduce our Family" subject={subject} />
		<Row class="py-2" style="height:250px; overflow:scroll; overflow-x:hidden; background: linear-gradient( to bottom, #eeeeee, #fbfbfb) ">
			{#each MemberCardInfo as info}
				<MemberCard
					name={info.name}
					rank={info.rank}
					education={info.education}
					letterSpacing={info.letterSpacing}
					bgColor={info.bgColor}
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
	<TeamHireLink
		title={title2}
		introduction={introduction2}
		button={buttonName}
		url={hireUrl}
	/>
</Form>
