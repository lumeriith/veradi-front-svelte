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

exports.deleteBookQuestion = functions
	.runWith({
		timeoutSeconds: 30,
		memory: '128MB'
	})
	.https.onCall(async (data, context) => {
		const { questionId } = data;
		if (!context.auth || !context.auth.uid) {
			throw new functions.https.HttpsError('인증 오류', '로그인이 필요합니다.');
		}
		const docRef = firestore.collection('bookQuestions').doc(questionId);
		const doc = await docRef.get();
		if (doc.get('author') != context.auth.uid) {
			throw new functions.https.HttpsError('권한 오류', '자신의 게시물만 삭제할 수 있습니다.');
		}

		console.log(`${context.auth.uid} 유저가 bookQuestions/${questionId}를 삭제합니다.`);

		await firestore.recursiveDelete(docRef);

		return {
			success: true
		};
	});
