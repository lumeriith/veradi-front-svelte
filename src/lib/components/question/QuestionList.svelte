<script>
	import { animTrigger, animItem } from '$lib/utils/scrollEffects';
	import QuestionItem from './QuestionItem.svelte';
	import QuestionPagination from './QuestionPagination.svelte';

	const testTitles = `강좌 수강 및 학습 중 궁금한 점은 어디에 질문할 수 있나요?
6평 27번 1번선지 질문입니다.
앞으로 2, 3학기에는 어떤 커리큘럼인지 궁금합니다!
전기추1 p.117 첫번째 문제 질문드립니다. 강의에서 "선지5의 새로운 소비층으로 등장한 독자들 = 지문의 여성들" 이라고 설명하셨는데, 지문의 선후관계 : 금속활자 인쇄술의보급 -> 책생산 증가 -> 아무튼 질문 제목을 엄청 길게 해버릴꺼야 이야아ㅏ아ㅏㄴㄹㄴ암ㅎㄴㅁㅇㅎ로ㅓㅈ허ㅗㅈㅂㄱ
도형의 필연성 특강 구매했는데 교재는 어디있죠??
New 융합형 문학 독법 훈련’(문학복합) 강의에 3강 이후에 교재는 첨부가 안된거 같습니다 !
김강민 선생님의 런칭을 환영합니다♥
현주간지에 있는 상상연구소 자체제작 문항이랑 상상연구소에서 내는 교재에 수록된 지문이랑 중복되는 문항이 있나요?
현주간지를 보면 하루는 강의를 들으라고 하는데 어떻게 강의를 듣나요?
6평해설강의 들은 학생인데요 혹시 영상으로도 올리실계획이 있으신가요
현주간지는 기출과 변형 N제를 모두 포함하고 있습니다!
현주간지 basic 1주 4일차 고난도 독서 3에 4번 문제(p150)`.split('\n');
</script>

<div>
	<div class="tw-mb-3 tw-font-semibold">
		<span style="color: var(--book-qna-primary)">3</span>개의 질문
	</div>
	<div class="tw-flex tw-flex-col tw-gap-3 tw-mb-4">
		{#each [0, 1, 2] as i}
			<div use:animTrigger use:animItem>
				<QuestionItem title={testTitles[i]} numOfAnswers={[0, 1, 2, 3][i]} />
			</div>
		{/each}
	</div>
	<QuestionPagination />
</div>
