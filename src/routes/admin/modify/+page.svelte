<script>
    // @ts-nocheck

    const url = import.meta.env.VITE_BACKEND_URL;
    import { browser } from "$app/environment";

    export let data = {categories: []};

    /**
     * @description The pages database
     * @type {{categoryName: string, id: number}[]}
     */
    let categories = data.categories;

    /**
     *
     * @param title {string}
     * @param content {string}
     * @param link {string}
     * @param category {string}
     * @param tags {string[]}
     */
    async function add_page(title, content, link, category, tags) {
        const result = await fetch(`${url}/api/place`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
                link,
                category,
                tags,
            }),
        });

        if (result.status === 201) {
            alert("추가되었습니다.");
            location.href = "/admin";
        } else {
            console.log(await result.json());
            alert("추가에 실패했습니다.");
        }
    }

    let submit_text = "";
    let page_idx = -1;

    if (browser) {
        // check query parameter whether for is modify or create
        const url = new URL(location.href);
        const is_modify = url.searchParams.get("usage") === "modify";
        submit_text = is_modify ? "수정" : "추가";

        const idx = url.searchParams.get("idx");

        if (is_modify && idx !== null) {
            page_idx = parseInt(idx);
        }
    }

    function on_click_back() {
        history.back();
    }
</script>

<div id="container">
    <select name="category" id="category">
        {#each categories as category}
            <option value={category.categoryName}
                >{category.categoryName}</option
            >
        {/each}
    </select>
    <input type="text" name="title" id="title" placeholder="title" />
    <input type="text" name="link" id="link" placeholder="link" />
    <input type="text" name="tags" id="tags" placeholder="tags" />
    <input
        type="text"
        name="description"
        id="description"
        placeholder="description"
    />
    <button
        on:click={() =>
            add_page(
                document.getElementById("title").value,
                document.getElementById("description").value,
                document.getElementById("link").value,
                document.getElementById("category").value,
                document.getElementById("tags").value.split(","),
            )}>{submit_text}</button
    >
    <button on:click={on_click_back}>뒤로</button>
</div>
