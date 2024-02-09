import { writable } from 'svelte/store';

const initialState = { keep: false, userId: -1 };

/**
 * @type {import('svelte/store').Writable<typeof initialState>}
 */
export const loginState = writable(initialState);


/**
 * 
 * @param {typeof initialState} state 
 */
export function saveToLocal(state) {
    localStorage.setItem('loginState', JSON.stringify(state || initialState));
}

/**
 * 
 * @param {boolean} keep
 * @param {number} userId 
 */
export function setLoginState(keep, userId) {
    loginState.set({ keep, userId });
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
}

export function unsetLoginState() {
    loginState.set({ keep: false, userId: -1 });
}