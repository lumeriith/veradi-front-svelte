<script>
	import {
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

  import { BiologyMemberCardInfo as MemberCardInfo } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
  import { BiologyHashTagInfo as HashTagInfo } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
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
    <Col class="d-none d-sm-block py-4" sm="3" md="2" style="margin-left:-30px; margin-right:10px;">
      <TeamButton/>
    </Col>
    <Col xs="12" sm="9" md="10">
      <TeamIntro
        title="차세대 교육팀"
        subject="생명과학"
        introduction="우리 베라디 생명과학 팀은 수능을 볼 미래의 친구들을 위해 끝없이 노력합니다.
        또한 대학생 문화가 뿌리잡고 있어 자유롭게 업무 활동을 하고 있습니다.
        불필요한 업무는 프로그램에 맡기고, 회의 시간에는 서로의 능력을 존중하면서 이야기하며, 업무를 한 만큼 확실한 보상을 약속하는 팀, 그 팀이 바로 생명과학입니다."
      />
      <Row class="py-3">
        {#each HashTagInfo as info}
          <TeamHashTag
            content = {info.content}
            fontColor = {info.fontColor}
            bgColor = {info.bgColor}
          />
        {/each}
      </Row>
    </Col>
  </Row>
</Container>
<Form class="py-4" style="background-color:#edfbfd">
  <Container>
    <TeamFamilyIntro
      introduction="Introduce our Friends"
      subject="생명과학팀"
    />
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
</Form>
<Container class="py-5">
  <TeamReviewIntro/>
  <SwiperCoverFlow/>
</Container>
<Form class="py-5" style="background-color:#edfbfd">
  <TeamHireLink
    title="우리 팀은 준비됬습니다"
    introduction="오직 베라디 생명과학에서만 가능한 길, 당신도 동참하세요"
    button="생명과학팀 채용공고"
    url="/hire/subject/biology"
  />
</Form>