const url = import.meta.env.VITE_BACKEND_URL;

async function get_pages() {
const result = await fetch(`${url}/api/place?category=&tags`);
const data = await result.json();

/**
 * @description The pages database
 * @type {{category: {id: number, categoryName: string}, title: string, link: string, tags: {tag: string, id: number}[], content: string, id: number}[]}
 */
const data_pages = data.places;
return data_pages.map((page) => {
    return {
    category: page.category.categoryName,
    title: page.title,
    link: page.link,
    tags: page.tags.map((tag) => tag.tag),
    description: page.content,
    id: page.id,
    };
});
}

export async function load(){
    return {
        pages: await get_pages()
    }
}