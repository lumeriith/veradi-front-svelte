<script>
	import { BiologyMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { BiologyHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireBiology}
	teamName="생명과학팀"
	teamTitle="21세기 과학의 중심"
	teamIntro={[
		'베라디 생명과학팀은 다면적인 과학, 상호분야간 이차적인 진보를 사고하는 인재를 선호합니다.',
		'미래지향적인 교육목표와 비전을 통해 환경 보전의 중요성을 인식시키고, 생명 존중의 가치관을 심어주는 전인적인 교육을 하는 생명과학팀은, 삶의 질을 향상시킬 최선의 비전에 대해서 고민합니다.',
		'근본적인 생명 현상의 과정을 이해하는 여정, 베라디와 동행하지 않으실래요?'
	]}
	members={Members}
	hashTags={HashTags}
/>
