import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, cookies }) => {

    /**
     * @type {URLSearchParams}
     */
    const params = url.searchParams;
    let accessToken = params.get("accessToken");

    if (!accessToken) {
        return { login: false, href: "/login" };
    }

    cookies.set("accessToken", accessToken, { path: "/" });

    return { accessToken, login: true, href: "/" };
}