import { writable } from "svelte/store";

const initialState = "";

export const tokenStore = writable<string>(initialState);