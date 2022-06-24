<script>
	import { EarthscienceMemberCardInfo as Members } from '$lib/components/introduction/constants/MemberCardInfo.svelte';
	import { EarthscienceHashTagInfo as HashTags } from '$lib/components/introduction/constants/TeamHashTagInfo.svelte';
	import veradiUrls from '$lib/data/veradiUrls.js';
	import IntroductionPage from '$lib/components/introduction/IntroductionPage.svelte';
	import teamPic from '$lib/static/img/introduction/teampics/earth.jpg';
</script>

<IntroductionPage
	hireUrl={veradiUrls.hireEarthscience}
	teamName="지구과학팀"
	teamTitle="드넓은 통찰력을 가진"
	teamIntro={`우리 팀은 한 때 수험생이였던 그 시절을 또렷이 기억하시는 분들을 모집합니다.
  그 어떠한 별보다 더 빛나기 위해, 수험생분들께서는 지구과학Ⅰ이라는 "30분"을 위해 다들 열심히 공부합니다.
  우리 또한 그 기억을 되살려 장인의 정신으로 그 누구보다 뛰어난 퀄리티를 내기 위해 노력하는 팀, 누구보다 더 보람찬 일을 하는 팀, 수험생 시절을 기억하며 초심을 잃지 않는 팀, 그 팀이 바로 지구과학Ⅰ팀입니다.`}
	members={Members}
	hashTags={HashTags}
	hireTitle="새벽에 가장 밝은 샛별 같은 당신"
	hireIntro="우리 지구과학 팀과 함께 하실건가요?"
	teamPhoto={teamPic}
/>
