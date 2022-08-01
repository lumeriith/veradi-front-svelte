export default {
	// 출판물 QnA 게시판
	qna: {
		index: '/qna/all',
		all: '/qna/all',
		submit: '/qna/submit',
		myquestions: '/qna/myquestions',
		study: '/qna/study',
		mybooks: '/qna/mybooks'
	},
	// 입시 멘토링
	mentor: {
		index: '/mentor/story',
		story: '/mentor/story',
		knowhow: '/mentor/knowhow',
		analysis: '/mentor/analysis'
	},
	// 문제집
	contents: {
		list: {
			index: '/contents/list/all/',
			all: '/contents/list/all/',
			math: '/contents/list/math/',
			chemistry: '/contents/list/chemistry/',
			socialculture: '/contents/list/socialculture/',
			lifeethics: '/contents/list/lifeethics/',
			biology: '/contents/list/biology/',
			earthscience: '/contents/list/earthscience/'
		},
		books: (id) => `/contents/books/${id}`
	},
	// 채용
	hireIndex: '/hire',
	hireNotice: '/hire/notice/',
	hireQna: '/hire/qna/',
	// 채용공고
	hireSubject: {
		index: '/hire/subject/math/',
		math: '/hire/subject/math/',
		physics: '/hire/subject/physics/',
		chemistry: '/hire/subject/chemistry/',
		biology: '/hire/subject/biology/',
		earthscience: '/hire/subject/earthscience/',
		lifeethics: '/hire/subject/lifeethics/',
		socialculture: '/hire/subject/socialculture'
	},
	// 소개
	introduction: {
		index: '/introduction/math/',
		math: '/introduction/math/',
		physics: '/introduction/physics/',
		chemistry: '/introduction/chemistry/',
		biology: '/introduction/biology/',
		earthscience: '/introduction/earthscience/',
		lifeethics: '/introduction/lifeethics/',
		socialculture: '/introduction/socialculture'
	}
};
