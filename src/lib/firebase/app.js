import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, deleteDoc, Timestamp, onSnapshot } from 'firebase/firestore';

export let app = null;
export let db = null;

export function initFirebase() {
	if (app) return;
	const firebaseConfig = {
		apiKey: 'AIzaSyDw_Ru1IqTODNmcNzgVdW0isbFfK87Shdk',
		authDomain: 'veradi-firebase.firebaseapp.com',
		projectId: 'veradi-firebase',
		storageBucket: 'veradi-firebase.appspot.com',
		messagingSenderId: '311495749476',
		appId: '1:311495749476:web:48c7194598cd7f1e43d471',
		measurementId: 'G-YJ6FSE2ZSP'
	};
	app = initializeApp(firebaseConfig);
	db = getFirestore(app);
}

export async function setBoard(collect, document, data) {
	await setDoc(doc(db, collect, document), data);
}

export async function deleteBoard(collect, document) {
	await deleteDoc(doc(db, collect, document));
}

export function getBoard(collect, document) {
	let unsub = [];
	onSnapshot(doc(db, collect, document), (doc) => {
		unsub.push({ ...doc.data(), id: doc.id });
	});
	return unsub;
}

export function tsDate(date) {
	return Timestamp.fromDate(new Date(date));
}
