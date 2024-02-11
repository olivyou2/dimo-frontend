import type { Category } from "$lib/category";
import type { BookmarkPage, PageResponse, RenderPage } from "$lib/page";
import type { Tag } from "$lib/tag";
import type { PageServerLoad } from "./$types";

const url = import.meta.env.VITE_BACKEND_URL;

async function get_pages(category: string, userId?: string): Promise<RenderPage[]> {
    if (!userId) userId = "";
    const result = await fetch(`${url}/api/place?category=${category}&tags=&userId=${userId}`);
    const data = await result.json();

    const data_pages: PageResponse[] = data.places;

    return data_pages.map((page) => {
        let tags = page.tags.map((tag) => tag.tag);
        return {
            category: page.categories[0]?.categoryName || "",
            title: page.place.title,
            link: page.place.link,
            tags: tags,
            description: page.place.content,
            id: page.place.id,
            bookmark: page.bookmark
        };
    });
}

/**
 * 
 * @param {string} category 
 * @returns 
 */
async function get_tags(category = "") {
    const result = await fetch(`${url}/api/tag?category=${category}`);

    const data = await result.json();
    const tags: Tag[] = data.tags;

    return tags.map(tag => tag.tag);
}

export const load: PageServerLoad = async ({ cookies, url, depends }) => {
    depends("pages");

    const params = url.searchParams;
    let categoryParam = params.get("category") || "";
    let category: string = categoryParam;

    if (categoryParam === "전체") {
        category = "";
    }

    let userId = cookies.get("userId");

    return {
        pages: await get_pages(category, userId),
        tags: await get_tags(category),
        page: params.get("category"),

        now_cat: categoryParam,
    }
}