import { app } from './app.cjs';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	setPersistence,
	browserLocalPersistence,
	onAuthStateChanged
} from 'firebase/auth';

import { isLoggedIn } from '$lib/store.cjs';

let user = null;

export function initAccount() {
	const auth = getAuth();
	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) {
			user = currentUser;
			isLoggedIn.set(true);
		} else {
			user = null;
			isLoggedIn.set(false);
		}
	});
}

export async function login(inputEmail, inputPassword) {
	const auth = getAuth(app);
	try {
		await setPersistence(auth, browserLocalPersistence);
		await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export function logout() {
	const auth = getAuth(app);
	signOut(auth);
}
