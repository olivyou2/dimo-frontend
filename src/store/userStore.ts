import type { User } from "$lib/user";
import { writable } from "svelte/store";

const initialState: User = {
    id: 0,
    email: "",
    username: "",
    provider: "",
    providerContent: "",
    profileUrl: "",
    level: 0
};

export const userStore = writable<User>(initialState);