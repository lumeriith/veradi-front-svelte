<script>
	import { LifeethicsMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { LifeethicsHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
	import teamPic from '$lib/static/img/introduction/teampics/lifeeth.jpg';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireLifeethics}
	teamName="생활과윤리팀"
	teamTitle="가장 도덕적인"
	teamIntro={`수험생분들께 수능은 인생의 전환점에 해당하는 가장 중요한 시험입니다.
  그래서 다들 수능에서 한 문제라도 더 풀기 위해 노력을 하며, 저희 또한 그러한 역경을 겪었습니다.
  따라서 교육업계에서 목적론적 관점으로 보았을 때, 수험생분들이 가고자 하는 길을 도와드리는 것은 우리에게도 가장 행복한 일이라 생각합니다.
  수능에서 대박이 나는 꿈, 우리도 같이 이룹시다.
	`}
	members={Members}
	hashTags={HashTags}
	hireTitle="수험생분들이 최선의 결과를 가져가는 것"
	hireIntro="그것이 바로 우리가 추구해야 할 목적 아닐까요?"
	teamPhoto={teamPic}
/>
