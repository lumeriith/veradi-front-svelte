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

  import { MathMemberCardInfo } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
  import { MathHashTagInfo } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
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
        title="교육의 미래를 이끌어갈"
        subject="수학팀"
        introduction="베라디 수학팀은 팀원이 일에서 의미와 즐거움을 느낄 때 최고의 성과를 낼 수 있다고 믿습니다. 
        그 때가 바로 자신의 에너지를 기꺼이 발휘하는 희열과 몰입의 순간이니까요. 
        팀원들이 본인의 일을 사랑하고 일을 통해 일의 의미를 더욱 크게 만들어갈 수 있도록 더불어 협동하는 조직문화를 매 순간 고민하며 만들어가고 있습니다."
      />
      <Row class="py-3">
        {#each MathHashTagInfo as info}
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
      introduction="Introduce our family"
      subject="수학팀"
    />
    <Row class="py-2">
          {#each MathMemberCardInfo as info}
            <MemberCard
              name={info.name}
              rank={info.rank}
              education={info.education}
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
    title="교육의 혁신을 함께할 수학팀원을 찾습니다."
    introduction="수학팀이 추구하는 가치와 문화에 공감하신다면 지원하세요"
    button="수학팀 채용공고"
    url="/hire/subject/chemistry"
  />
</Form>