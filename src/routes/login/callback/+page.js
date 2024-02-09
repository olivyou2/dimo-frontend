
/**
 * 
 * @param {*} param0 
 * @returns 
 */
export async function load({ url }) {

    /**
     * @type {URLSearchParams}
     */
    const params = url.searchParams;
    let userId = params.get("userId");

    if (!userId) {
        return { login: false, href: "/login" };
    }

    return { userId, login: true, href: "/" };
}