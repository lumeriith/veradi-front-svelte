import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

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

export async function setBoard(collection, document, data) {
  await setDoc(doc(db, collection, document), data);
}

export async function deleteBoard() {

}