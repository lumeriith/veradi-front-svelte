<script>
	import { PhysicsMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { PhysicsHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
	import teamPic from '$lib/static/img/introduction/teampics/phys.jpg';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hirePhysics}
	teamName="물리학1팀"
	teamTitle="평가원 연구"
	teamIntro={`수능에서 좋은 성적을 거두기 위해서는 문제에서 평가원이 만든 의도를 파악해야 합니다.
  그 요점은 바로 "평가원의 기준"에 있다고 봅니다.
  우리는 그 기준을 파고들기 위해 항상 노력해왔고, 실제로 몇가지 정도의 법칙을 찾아냈습니다.
  거기서 찾는 연구의 결정체는 저희도 볼 때마다 경이롭습니다.
  신세계의 발견 같은 일, 수험생분들에게도 보여줍시다.`}
	members={Members}
	hashTags={HashTags}
	hireTitle="물리학팀 수석 연구원"
	hireIntro="그게 바로 당신입니다"
	teamPhoto={teamPic}
/>
