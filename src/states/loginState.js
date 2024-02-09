import { writable } from 'svelte/store';

const localState = localStorage.getItem('loginState');
const initialState = { keep: false, userId: -1 };

/**
 * @type {import('svelte/store').Writable<typeof initialState>}
 */
export const loginState = writable(
    JSON.parse(localStorage.getItem('loginState') || JSON.stringify(initialState))
);

function saveToLocal() {
    localStorage.setItem('loginState', JSON.stringify(loginState));
}

/**
 * 
 * @param {boolean} keep
 * @param {number} userId 
 */
export function setLoginState(keep, userId) {
    loginState.set({ keep, userId });
    saveToLocal();
}

/**
 * 
 * @param {boolean} keep 
 */
export function setKeep(keep) {
    loginState.update(state => {
        state.keep = keep;
        return state;
    });
    saveToLocal();
}

/**
 * 
 * @param {number} userId 
 */
export function setUserId(userId) {
    loginState.update(state => {
        state.userId = userId;
        return state;
    });
    saveToLocal();
}

export function unsetLoginState() {
    loginState.set({ keep: false, userId: -1 });
    saveToLocal();
}