import { writable } from 'svelte/store';

const initialState = { profileUrl: "" };

/**
 * @type {import('svelte/store').Writable<typeof initialState>}
 */
export const userState = writable(initialState);