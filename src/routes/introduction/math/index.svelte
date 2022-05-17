<script>
	import { MathMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { MathHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireMath}
	teamName="수학팀"
	teamTitle="논리로 추상적인 세상을 이해하는"
	teamIntro={[
		'창의적인 생각들을 하는 인재들을 좋아합니다. 수학은 다양한 생각을 바탕으로 다른 학문에 응용을  해야하기 때문이죠.',
		'베라디 수학팀은 팀원이 일에대한 열정과 즐거움이 공존할 때 최고의 성과를 낼 수 있다고 믿습니다. 그렇기에 공생할 수 있는 환경을 만들고자 노력하고 있죠.',
		'순수 수학과 우리 수학팀이 추구하고자 하는 덕목을 베라디에서 펼치실 준비가 되셨나요?'
	]}
	members={Members}
	hashTags={HashTags}
	hireIntro="창의로운 미래의 위한 길, 수학 팀과 함께 하세요"
/>
