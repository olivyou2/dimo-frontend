import { checkLogin } from "$lib/checklogin";
import type { PageServerLoad } from "../$types";

const url = import.meta.env.VITE_BACKEND_URL;

export const load: PageServerLoad = async ({ cookies }) => {
    await checkLogin(cookies);

    async function get_categories() {
        const result = await fetch(`${url}/api/place/cat/`);
        const data = await result.json();

        return data.categories;
    }

    return {
        categories: await get_categories()
    }
}