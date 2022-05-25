<script>
	import { SocialcultureMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { SocialcultureHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireSocialculture}
	teamName="사회문화팀"
	teamTitle="항상 해결책을 제시하는"
	teamIntro={[
		'수능장에서 우리를 곤혹스럽게 만들었던 영역은 항상 자료 분석 문제였습니다.',
		'이 한두 개 문제 차이로 등급이 바뀌는 냉혹한 현실에서 싸우고 있습니다.',
		'이제는 당황하지 않아도 됩니다. 그러한 일이 발생하지 않게, 새로운 유형에 대비할 수 있게 도와드릴게요.'
	]}
	members={Members}
	hashTags={HashTags}
  hireTitle="현 수능의 대비책을 알고 있는 당신"
	hireIntro="바람직한 수험 생활의 변화로 이끌어 주실 수 있나요?"
/>
