import { getUserProfile } from "$lib/user";
import type { ServerLoad } from "@sveltejs/kit";
import { type LayoutServerLoad } from "./$types";

const url = import.meta.env.VITE_BACKEND_URL;

type Category = {
    categoryName: string,
    id: number
}

async function get_categories() {
    const result = await fetch(`${url}/api/place/cat/`);

    const data = await result.json();
    const categories : Category[] = data.categories;
    return categories.map(category => category.categoryName);

}

export const load:ServerLoad = async (payload) => {
    const { params, cookies, url } = payload;

    const cats = await get_categories();
    const userId = cookies.get("userId");

    let user = null;
    let selectedCategory = "전체";

    if (userId) {
        user = await getUserProfile(parseInt(userId));
    } 

    url.searchParams.get("category") && (selectedCategory = url.searchParams.get("category") as string);

    return {
        user,
        cats, 
        
        selectedCategory
    };
} ;