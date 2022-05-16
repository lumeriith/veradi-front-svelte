<script>
	import { PhysicsMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { PhysicsHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hirePhysics}
	teamName="물리학1팀"
	teamTitle="상상을 실현시키는"
	teamIntro={[
		'베라디 물리학 1팀은 자연 현상의 보편적 법칙을 진정으로 탐구 할 수 있는 인재들을 좋아합니다.',
		'소립자에서 우주 크기까지에 이르는 모든 물질의 성질과 운동을 지배하는 자연의 기본 법칙을 연구하는 물리학은 이론을 바탕으로 상상을 현실로 실현시키기도 하죠.',
		'베라디 물리학1팀은 이렇듯 다양한 상상력을 바탕으로 본인이 추구하는 것을 실현하기를 소망합니다.',
		'가슴 벅찬 호기심로 자연을 배우는 물리학1팀과 함께 여정을 떠나지 않으실래요?'
	]}
	members={Members}
	hashTags={HashTags}
/>
