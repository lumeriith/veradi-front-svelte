<script>
	import { MathMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { MathHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
	import teamPic from '$lib/static/img/introduction/teampics/math.jpg';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireMath}
	teamName="수학팀"
	teamTitle="논리로 파고드는"
	teamIntro={`우리 팀은 논리적인 생각을 많이 하는 인재들을 좋아합니다.
  평가원이 출제하고자 하는 문제의 논리를 항상 자유롭게 이야기합니다.
  베라디 수학팀은 문제 제작에 대한 즐거움과 토론에 대한 열정이 공존할 때 최고의 성과를 낼 수 있다고 믿습니다.
  순수 수학을 파고드는 우리 수학 팀, 그 팀이 추구하고자 하는 목표를 베라디에서 펼치실 준비가 되셨나요?`}
	members={Members}
	hashTags={HashTags}
	hireTitle={'교육의 혁신을 함께 할\n수학 팀원을 찾습니다.'}
	hireIntro={'수학팀이 추구하는 가치와 문화에\n공감하신다면 지원하세요.'}
	teamPhoto={teamPic}
/>
