<script>
	import { BiologyMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { BiologyHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import veradiUrls from '$lib/data/veradiUrls.js';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
	import teamPic from '$lib/static/img/introduction/teampics/bio.jpg';
</script>

<IntroductionPage
	hireUrl={veradiUrls.hireBiology}
	teamName="생명과학팀"
	teamTitle="차세대 교육"
	teamIntro={`우리 베라디 생명과학 팀은 수능을 볼 미래의 친구들을 위해 끝없이 노력합니다.
  불필요한 업무는 프로그램에 맡기고, 회의 시간에는 서로의 의견을 존중하면서 자유롭게 이야기하며, 업무를 한 만큼 확실한 보상을 약속하는 팀, 그 팀이 바로 생명과학입니다.`}
	members={Members}
	hashTags={HashTags}
	hireTitle="우리 팀은 준비되었습니다"
	hireIntro="오직 베라디 생명과학에서만 가능한 길, 당신도 동참하세요"
	teamPhoto={teamPic}
/>
