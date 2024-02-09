import { writable } from 'svelte/store';

export const loginState = writable({ keep: false, userId: -1 });

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