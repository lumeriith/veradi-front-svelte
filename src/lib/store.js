import { persist, localStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

const isLoggedIn = persist(writable(false), localStorage(), 'isLoggedIn');

export { isLoggedIn };
