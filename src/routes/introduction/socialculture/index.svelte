<script>
	import { SocialcultureMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { SocialcultureHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireSocialculture}
	teamName="사회문화팀"
	teamTitle="세상의 질서와 변화를 만들어내는"
	teamIntro={[
		'베라디 사회문화팀은 사회를 이끌어갈 글로벌 리더들을 좋아합니다.',
		'사회문화는 단순한 사회 형상을 이해하는 것으로 그치는 것이 아닌, 문화를 분석할 수 있는 틀들을 응용해야 합니다. 다양한 학문을 바탕으로 인식의 틀을 사용해야 한다는 것이죠. 때문에 베라디 사회문화팀 또한 다양한 학문에 대한 이해가 있는 사람들을 선호하죠. ',
		'세상을 바꾸는 부드러운 힘, 저희 사회문화팀과 같이 가실 준비 되셨나요?'
	]}
	members={Members}
	hashTags={HashTags}
/>
