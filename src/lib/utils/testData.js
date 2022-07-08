const TEST_STRING_SAMPLE =
	'6월 대학수학능력시험(수능) 모의평가(모평) 국어와 수학 영역 표준점수 최고점이 불린 지난해 수능과 동일하게 형성됐다 점수가 잘 나오는 과목을 선택해 이동하는 학생 수가 급증하는 등 교육부의 문이과 통합형 수능의 부작용도 고스란히 드러났다 어려운 데다 과목 선택에서 치열한 눈치싸움이 불가피해지면서 올해 수능에서 수험생들의 극심한 혼란이 예상된다 지난달 9일 실시한 6월 수능 모평 채점 결과를 6일 수험생에게 통지했다 선택 과목을 골라 치르는 통합형 수능 2년차인 올해에는 상위권 학생들이 높은 점수를 받을 수 있는 과목으로 이동할 것으로 보인다 국어 영역에서는 이과 학생 중 비교할 때 무려 이나 증가했다 이 과목은 국어 영역의 다른 선택 과목인 ‘화법과작문’에 비해 조금 어렵게 출제돼 표준점수가 높게 형성되는 경향을 보인다 모집 기간은 오는 25일까지다 청소년으로 구성된 5인 이하 동아리(팀)로 신청할 수 있다 서류 평가를 통해 선발된 9개 팀이 프로젝트에 참여한다 제작 및 레이싱 활동을 통해 종합우승, 준우승, 3위 및 우수디자인상을 수여할 예정이다 천연동굴을 찾는 이유는 시원함과 볼거리 때문이다 동굴은 1년 내내 13~15도를 유지한다 에어컨이 가동되는 실내보다 시원하다 반팔이나 반바지 차림으로 동굴에 들어가면 추울 수도 있다 동굴 입구에만 서도 찬 기운이 느껴진다 충북 단양군에 위치한 천연동굴들이 시원함과 볼거리를 모두 갖춰 여름철 관광지로 인기다 찜통더위에서도 동굴 속은 추위를 걱정해야 할 정도니 피서지로 제격이다 아울러 농식품부는 한우농가의 사료비 부담 완화를 위하여 올해 하반기 수입 조사료 할당(쿼터) 물량을 30만 톤 늘렸다 이번 증량으로 2022년 축산농가 및 관련 업계에 대해 총 110만 톤의 수입 조사료 할당(쿼터) 물량이 운용됨에 따라 축산농가 및 관련 업계가 보다 저렴한 가격에 수입산 조사료를 구매할 수 있을 것으로 전망된다'.split(
		' '
	);
const PUNCTUATIONS = '.!?';

export function loadData(data, loadTimeMin = 500, loadTimeMax = 1000, errorRate = 0) {
	const p = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() < errorRate) reject('testData.loadData() Test Error');
			else resolve(data);
		}, Math.random() * (loadTimeMax - loadTimeMin) + loadTimeMin);
	});

	return p;
}

export function getRandomPunctuation() {
	return PUNCTUATIONS[Math.floor(Math.random() * PUNCTUATIONS.length)];
}

export function getTestString(numOfWordsMin, numOfWordsMax = null) {
	let numOfWords = numOfWordsMin;
	if (numOfWordsMax !== null) {
		numOfWords = Math.floor(Math.random() * (numOfWordsMax - numOfWordsMin + 1) + numOfWordsMin);
	}
	const arr = [];
	for (var i = 0; i < numOfWords; i++) {
		arr.push(TEST_STRING_SAMPLE[Math.floor(Math.random() * TEST_STRING_SAMPLE.length)]);
	}
	return arr.join(' ') + getRandomPunctuation();
}
