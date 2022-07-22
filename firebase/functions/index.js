const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const firestore = admin.firestore();

exports.createUserRole = functions.auth.user().onCreate(async (user) => {
	await firestore.collection('users').doc(user.uid).create({ role: 'student' });
	return { success: true };
});

exports.removeUserRole = functions.auth.user().onDelete(async (user) => {
	await firestore.collection('users').doc(user.uid).delete();
	return { success: true };
});

exports.ping = functions.https.onCall(() => {
	return { pong: 'pong!' };
});

exports.createBookQuestion = functions.https.onCall(async (data, context) => {
	const { bookId, title, content } = data;
	if (!context.auth || !context.auth.uid) {
		throw new functions.https.HttpsError('unauthenticated', '로그인이 필요합니다.');
	}

	if (
		typeof bookId !== 'number' ||
		typeof title !== 'string' ||
		typeof content !== 'string' ||
		bookId < 0 ||
		!title ||
		!content
	) {
		throw new functions.https.HttpsError('invalid-argument', '제목과 내용을 모두 작성해주세요.');
	}

	// Question 생성
	const docRef = firestore.collection('bookQuestions').doc();
	await docRef.create({
		author: context.auth.uid,
		title: title,
		bookId: bookId,
		answers: 0,
		favorite: new Date(0),
		postDate: admin.firestore.FieldValue.serverTimestamp()
	});

	// 첫 Reply 생성
	await docRef.collection('replies').doc().create({
		author: context.auth.uid,
		content: content,
		isQuestion: true,
		modifyDate: admin.firestore.FieldValue.serverTimestamp(),
		postDate: admin.firestore.FieldValue.serverTimestamp()
	});

	return {
		success: true
	};
});

exports.deleteBookQuestion = functions.https.onCall(async (data, context) => {
	const { questionId } = data;
	if (!context.auth || !context.auth.uid) {
		throw new functions.https.HttpsError('unauthenticated', '로그인이 필요합니다.');
	}
	const docRef = firestore.collection('bookQuestions').doc(questionId);
	const doc = await docRef.get();
	if (doc.get('author') != context.auth.uid) {
		throw new functions.https.HttpsError(
			'permission-denied',
			'자신의 게시물만 삭제할 수 있습니다.'
		);
	}

	console.log(`${context.auth.uid} 유저가 bookQuestions/${questionId}를 삭제합니다.`);

	await firestore.recursiveDelete(docRef);

	return {
		success: true
	};
});

exports.incrementUserBookQuestionCounter = functions.firestore
	.document('bookQuestions/{questionId}')
	.onCreate(async (snap, context) => {
		const data = snap.data();
		const userRef = firestore.collection('users').doc(data.author);
		const field = {};
		field['numOfQuestionsInBook' + data.bookId] = admin.firestore.FieldValue.increment(1);
		await userRef.update(field);

		return {
			success: true
		};
	});

exports.decrementUserBookQuestionCounter = functions.firestore
	.document('bookQuestions/{questionId}')
	.onDelete(async (snap, context) => {
		const data = snap.data();
		const userRef = firestore.collection('users').doc(data.author);
		const field = {};
		field['numOfQuestionsInBook' + data.bookId] = admin.firestore.FieldValue.increment(-1);
		await userRef.update(field);

		return {
			success: true
		};
	});
