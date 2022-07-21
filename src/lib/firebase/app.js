import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, deleteDoc, Timestamp, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDw_Ru1IqTODNmcNzgVdW0isbFfK87Shdk',
	authDomain: 'veradi-firebase.firebaseapp.com',
	projectId: 'veradi-firebase',
	storageBucket: 'veradi-firebase.appspot.com',
	messagingSenderId: '311495749476',
	appId: '1:311495749476:web:48c7194598cd7f1e43d471',
	measurementId: 'G-YJ6FSE2ZSP'
};

export const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export async function setBoard(collect, document, data) {
	await setDoc(doc(firestore, collect, document), data);
}

export async function deleteBoard(collect, document) {
	await deleteDoc(doc(firestore, collect, document));
}

export function getBoard(collect, document) {
	let unsub = [];
	onSnapshot(doc(firestore, collect, document), (doc) => {
		unsub.push({ ...doc.data(), id: doc.id });
	});
	return unsub;
}

export function tsDate(date) {
	return Timestamp.fromDate(new Date(date));
}
