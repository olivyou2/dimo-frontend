import type { PageServerLoad } from "./$types";

const url = import.meta.env.VITE_BACKEND_URL;

async function get_login_url() {
    const result = await fetch(`${url}/api/user/login/google`);

    /**
     * @description The tags database
     * @type {{url: string}}
     */
    const data = await result.json();

    return data.url;
}

export const load:PageServerLoad = async () => {
    return {
        login_url: await get_login_url()
    }
}