import type { BookmarkPage, BookmarkResponse } from "$lib/page";
import type { PageServerLoad } from "../$types";

const url = import.meta.env.VITE_BACKEND_URL;

export const load:PageServerLoad = async ({cookies}) => {
    const userId = cookies.get("userId");

    async function fetch_data() {
        const res = await fetch(`${url}/api/bookmark/${userId}`);
        const data:BookmarkResponse = await res.json();

        const bookmarks: BookmarkPage[] = data.bookmarks.map(bookmark => bookmark.place);
        return bookmarks;
    }

    return {
        bookmarkPages: await fetch_data()
    }
};