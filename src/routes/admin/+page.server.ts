import type { PageResponse } from "$lib/page";

const url = import.meta.env.VITE_BACKEND_URL;

async function get_pages() {
    const result = await fetch(`${url}/api/place?category=&tags`);
    const data: { places: PageResponse[] } = await result.json();

    const data_pages = data.places;

    return data_pages.map((page) => {
        let categories = "";

        for (let i = 0; i < page.categories.length; i++) {
            categories += page.categories[i].categoryName + (i === page.categories.length - 1 ? "" : " | ");
        }

        return {
            category: categories,
            title: page.place.title,
            link: page.place.link,
            tags: page.tags.map((tag) => tag.tag),
            description: page.place.content,
            id: page.place.id,
        };
    });
}

export async function load() {
    return {
        pages: await get_pages()
    }
}