const url = import.meta.env.VITE_BACKEND_URL;

export type User = {
    id: number,
    email: string,
    username: string,
    provider: string,
    providerContent: string,
    profileUrl: string,
}

export const getUserProfile = async (userId: Number) => {
    const result = await fetch(`${url}/api/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await result.json();
    const user: User = data.user;

    return user;
};