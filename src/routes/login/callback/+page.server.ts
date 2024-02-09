import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, cookies }) => {

    /**
     * @type {URLSearchParams}
     */
    const params = url.searchParams;
    let userId = params.get("userId");

    if (!userId) {
        return { login: false, href: "/login" };
    }

    cookies.set("userId", userId, { path: "/" });

    return { userId, login: true, href: "/" };
}