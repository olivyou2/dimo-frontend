const url = import.meta.env.VITE_BACKEND_URL;

export const addBookmark = async (pageId: number, accessToken: string) => {
    await fetch(`${url}/api/bookmark/?placeId=${pageId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

export const removeBookmark = async (bookmarkId?: number) => {
    if (!bookmarkId) return;

    await fetch(`${url}/api/bookmark/${bookmarkId}`, {
        method: "DELETE",
    });
}