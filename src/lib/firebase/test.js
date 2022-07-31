import {} from '$lib/firebase/app'; // init app (side effect)
import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();

export const ping = httpsCallable(functions, 'ping');
