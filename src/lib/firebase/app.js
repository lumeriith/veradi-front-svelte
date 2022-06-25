import { initializeApp } from 'firebase/app';

export let app = null;

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
}
