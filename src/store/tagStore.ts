import { writable, type Writable } from "svelte/store";

export const tagStore: Writable<string[]> = writable([]);