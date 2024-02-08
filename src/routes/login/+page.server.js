const url = import.meta.env.VITE_BACKEND_URL;
import { page } from '$app/stores';

async function get_login_url() {
    const result = await fetch(`${url}/api/user/login/google`);

    /**
     * @description The tags database
     * @type {{url: string}}
     */
    const data = await result.json();

    return data.url;
}

async function get_categories() {
    const result = await fetch(`${url}/api/place/cat/`);

    /**
     * @description The categories database
     * @type {{categories: {categoryName: string, id: number}[]}}
     */
    const data = await result.json();
    return data.categories.map(category => category.categoryName);

}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export async function load({ url }) {
    return {
        cats: await get_categories(),
        login_url: await get_login_url()
    }
}