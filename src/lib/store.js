import { writable } from 'svelte/store';

const isLoggedIn = writable(false);
const isLoginPopupShown = writable(false);

export { isLoggedIn, isLoginPopupShown };
