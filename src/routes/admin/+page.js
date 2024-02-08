const url = import.meta.env.VITE_BACKEND_URL;

async function get_pages() {
    const result = await fetch(`${url}/api/place?category=&tags`);
    const data = await result.json();

    /**
    * @description The pages database
    * @type {{categories: {id: number, categoryName: string}[], place: {category: {id: number, categoryName: string}, title: string, link: string, tags: {tag: string, id: number}[], content: string, id: number}}[]}
    */

    const data_pages = data.places;

    return data_pages.map((page) => {
        let categories = "";

        for (let i = 0; i < page.categories.length; i++) {
            categories += page.categories[i].categoryName + (i === page.categories.length - 1 ? "" : ", ");
        }

        return {
            category: categories,
            title: page.place.title,
            link: page.place.link,
            tags: page.place.tags.map((tag) => tag.tag),
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