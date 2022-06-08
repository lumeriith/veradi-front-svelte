<script>
	import { ChemistryMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { ChemistryHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
	import teamPic from '$lib/static/img/introduction/teampics/chem.jpg';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireChemistry}
	teamName="화학팀"
	teamTitle="엘리트 클래스"
	teamIntro={`우리 화학팀은 최고가 되고자 노력했던 분들을 찾습니다.
  우리가 화학 수업을 듣고 문제를 풀었을 때, 무심코 들었던 생각들 "여기서 더 어렵게 나오면 어떻게 나왔을까?", "평가원이라면 어떤 논리로 더 난해하게 만들까?"
  최고가 되고자 했던 고민들, 여기 화학팀에서 자유롭게 토론하세요.`}
	members={Members}
	hashTags={HashTags}
	hireTitle="당신이 만들고 싶었던 그 문제"
	hireIntro="저희와 함께 만드세요"
	teamPhoto={teamPic}
/>
