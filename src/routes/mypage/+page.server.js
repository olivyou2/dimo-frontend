const url = import.meta.env.VITE_BACKEND_URL;

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
    }
}