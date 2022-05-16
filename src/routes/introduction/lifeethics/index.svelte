<script>
	import { LifeethicsMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { LifeethicsHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import { VeradiUrl } from '$lib/components/url/VeradiUrl.svelte';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
</script>

<IntroductionPage
	hireUrl={VeradiUrl.hireLifeethics}
	teamName="생활과윤리팀"
	teamTitle="사회에 대한 고찰을 하는"
	teamIntro={[
		'베라디 생활과윤리팀은 사회에 대한 전문적인 고찰을 하는 사람들을 좋아합니다.',
		'생활과 윤리는 형이상학과 인식론에서부터 윤리학과 사회철학에 이르기까지, 다양한 영역들을 이해해야 합니다. 이렇듯 생활과 윤리는, 고유의 복잡성 때문에 단편적으로 이해할 수는 없죠. 저희 베라디 생활과 윤리팀은, 세계사회에 대한 고찰을 하며 함께 성장할 수 있는 사람들로 이루어져 있습니다.',
		'전 학문의 근간을 통찰하는 능력, 저희 베라디에서 함양하시길 바랍니다.'
	]}
	members={Members}
	hashTags={HashTags}
/>
