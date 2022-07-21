import { getFunctions, httpsCallable } from 'firebase/functions';

const functions = getFunctions();

export const ping = httpsCallable(functions, 'ping');
