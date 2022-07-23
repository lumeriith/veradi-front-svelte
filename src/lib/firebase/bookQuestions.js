import {
	getFirestore,
	doc,
	setDoc,
	deleteDoc,
	Timestamp,
	onSnapshot,
	query,
	collection,
	where,
	getDocs,
	orderBy,
	getDoc
} from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getAuth } from 'firebase/auth';

const functions = getFunctions();
const firestore = getFirestore();
const auth = getAuth();

const callableCreateBookQuestion = httpsCallable(functions, 'createBookQuestion');
export function createBookQuestion(bookId, title, content) {
	return callableCreateBookQuestion({ bookId, title, content });
}

export async function getBookQuestionReplies(questionId) {
	if (!auth.currentUser) throw new Error('Unauthorized');
	if (!questionId) throw new Error('Invalid Argument');

	const q = query(
		collection(firestore, `bookQuestions/${questionId}/replies`),
		orderBy('postDate')
	);

	const docs = await getDocs(q);
	const result = [];
	docs.forEach((doc) => {
		const data = doc.data();
		result.push(data);
	});
	return result;
}

export async function getMyBookQuestions(bookId = -1) {
	if (!auth.currentUser) throw new Error('Unauthorized');
	let q;
	if (bookId === -1) {
		q = query(
			collection(firestore, 'bookQuestions'),
			where('author', '==', auth.currentUser.uid),
			orderBy('postDate'),
			orderBy('favorite')
		);
	} else {
		q = query(
			collection(firestore, 'bookQuestions'),
			where('author', '==', auth.currentUser.uid),
			where('bookId', '==', bookId),
			orderBy('postDate'),
			orderBy('favorite')
		);
	}

	const docs = await getDocs(q);
	const result = [];
	docs.forEach((doc) => {
		const data = doc.data();
		data.id = doc.id;
		result.push(data);
	});
	return result;
}

export async function getNumOfMyBookQuestions(bookId) {
	console.log(auth);
	if (!auth.currentUser) throw new Error('Unauthorized');
	const docRef = doc(firestore, 'users', auth.currentUser.uid);
	const docSnap = await getDoc(docRef);
	return docSnap.data()['numOfQuestionsInBook' + bookId] || 0;
}
