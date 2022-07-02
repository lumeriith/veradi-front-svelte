import sample0 from '$lib/static/img/contents/covers/sample0.jpg';
import sample1 from '$lib/static/img/contents/covers/sample1.png';
import sample2 from '$lib/static/img/contents/covers/sample2.png';
import sample3 from '$lib/static/img/contents/covers/sample3.png';
import sample4 from '$lib/static/img/contents/covers/sample4.png';
import sample5 from '$lib/static/img/contents/covers/sample5.jpg';

import helios from '$lib/static/img/contents/images/helios.jpg';

import { subjectIds } from '../subjects';

export default [
	{
		id: 0,
		coverImage: sample0,
		subject: subjectIds.chemistry,
		title: 'HeLiOS 실전 모의고사 Season1 3회분',
		subtitle: '2023년 출제 가능성이 높은 신유형을 충분히 다룬 모의고사 3회분',
		theme: {
			bg: '#1a1c28',
			body: '#ffffff',
			primary: '#5585c1',
			secondary: '#fdc465'
		},
		content: {
			image: helios,
			imageSize: 100,
			imageSizeMobile: 180
		}
	},
	{
		id: 1001,
		coverImage: sample1,
		subject: subjectIds.biology,
		title: '생명과학 기출 정리',
		subtitle:
			'보통 두 줄로 이루어진 공간으로, 컨테이너의 크기에 따라 텍스트의 Wrapping이 이루어짐. ',
		theme: {
			bg: '#fff',
			body: '#333333',
			primary: '#2f92df',
			secondary: '#ff0606'
		},
		content: {
			image: '',
			imageSize: 100,
			imageSizeMobile: 180
		}
	},
	{
		id: 1002,
		coverImage: sample2,
		subject: subjectIds.earthscience,
		title: '지구과학 중점 수능개념',
		subtitle: '문제를 충분히 이해하고 분석하여 유사, 응용 문제 대비 가능',
		theme: {
			bg: '#fff',
			body: '#333333',
			primary: '#2f92df',
			secondary: '#ff0606'
		},
		content: {
			image: '',
			imageSize: 100,
			imageSizeMobile: 180
		}
	},
	{
		id: 1003,
		coverImage: sample3,
		subject: subjectIds.math,
		title: '수학 귀신 모의고사',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores.',
		theme: {
			bg: '#fff',
			body: '#333333',
			primary: '#2f92df',
			secondary: '#ff0606'
		},
		content: {
			image: '',
			imageSize: 100,
			imageSizeMobile: 180
		}
	},
	{
		id: 1004,
		coverImage: sample4,
		subject: subjectIds.lifeethics,
		title: '생활과 윤리 수능 돌파',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores.',
		theme: {
			bg: '#fff',
			body: '#333333',
			primary: '#2f92df',
			secondary: '#ff0606'
		},
		content: {
			image: '',
			imageSize: 100,
			imageSizeMobile: 180
		}
	},
	{
		id: 1005,
		coverImage: sample5,
		subject: subjectIds.socialculture,
		title: '사회문화의 모의고사',
		subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores.',
		theme: {
			bg: '#fff',
			body: '#333333',
			primary: '#2f92df',
			secondary: '#ff0606'
		},
		content: {
			image: '',
			imageSize: 100,
			imageSizeMobile: 180
		}
	}
];
