<script>
	import { ChemistryMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { ChemistryHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireChemistry}
	teamName="화학팀"
	teamTitle="세상 정(正)답의 응용"
	teamIntro={[
		'베라디 화학팀은 차세대 성장동력을 주도할 실용형 인재들을 좋아합니다.',
		'화학의 복합화는 현대 과학 · 기술의 신조류로 인식되고 있습니다.',
		'이 조류에 선도적 위치의 확보를 위하여 베라디에서 가장 필요한 것은 기초 과학으로 철저히 무장한 인재의 존재입니다.',
		'베라디에서 화학의 개념을 응용해 복합적 사고를 같이 하실 준비가 되셨나요?'
	]}
	members={Members}
	hashTags={HashTags}
/>
