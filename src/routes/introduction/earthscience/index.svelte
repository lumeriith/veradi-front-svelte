<script>
	import { EarthscienceMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { EarthscienceHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireEarthscience}
	teamName="지구과학팀"
	teamTitle="지구의 역사와 진화를 밝히는"
	teamIntro={[
		'베라디 지구과학팀은 복합적인 지식을 통찰에 사용하는 인재들을 좋아합니다.',
		'지구과학은 물리학, 화학, 생물학등 자연과학 뿐 아니라 공학에 대한식이 필요한 만큼 복합성이 높은 학문이라고 할 수 있습니다. 지속적인 오염과 난용으로 황폐화 되어가고 있는 지구를 과학을 이용하여 지속 가능한 발전을 제시하는 등 통찰력이 필요한 인재를 찾습니다.',
		'지구를 탐구하고 개척 하려는 인재들에게는 언제나 열려 있는 저희 지구과학팀은, 여러분들을 기다리고 있습니다.'
	]}
	members={Members}
	hashTags={HashTags}
	hireIntro="지속 가능한 발전을 위한 길, 지구과학팀 동참하세요."
/>
