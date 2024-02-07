const url = import.meta.env.VITE_BACKEND_URL;

export async function load(){
    async function get_categories() {
        const result = await fetch(`${url}/api/place/cat/`);
        const data = await result.json();
    
        return data.categories;
    }
    
    return {
        categories: await get_categories()
    }
}