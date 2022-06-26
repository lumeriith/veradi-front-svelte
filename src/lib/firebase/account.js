import { app } from './app';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	setPersistence,
	browserLocalPersistence,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';

import { isLoggedIn } from '$lib/store';

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

export async function loginWithGoogle() {
	const provider = new GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	const auth = getAuth();
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// ...
      console.log(credential);
      console.log(token);
      console.log(user);
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
}
