const url = import.meta.env.VITE_BACKEND_URL;

export type User = {
    id: number,
    email: string,
    username: string,
    provider: string,
    providerContent: string,
    profileUrl: string,
    level: number
}

export const getUserProfile = async (accessToken: string) => {
    const result = await fetch(`${url}/api/user/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await result.json();
    const user: User = data.user;

    return user;
};