const url = import.meta.env.VITE_BACKEND_URL;

export const addBookmark = async (pageId: number, userId: number) => {
    await fetch(`${url}/api/bookmark/${userId}?placeId=${pageId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const removeBookmark = async (bookmarkId?: number) => {
    if (!bookmarkId) return;

    await fetch(`${url}/api/bookmark/${bookmarkId}`, {
        method: "DELETE",
    });
}