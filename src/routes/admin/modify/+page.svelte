<script>
    // @ts-nocheck

    const url = import.meta.env.VITE_BACKEND_URL;
    import { browser } from "$app/environment";

    export let data = { categories: [] };

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

    let selected_categories = [];
    let selected_category;

    $: on_select_category(selected_category);
    $: console.log(selected_categories);

    /**
     *
     * @param category {string}
     */
    function on_select_category(category) {
        if (category === "" || !category) {
            return false;
        }
        if (selected_categories.includes(category)) {
            selected_categories = selected_categories.filter(
                (c) => c !== category,
            );
        } else {
            selected_categories = [...selected_categories, category];
        }
    }

    function on_delete_category(category) {
        selected_categories = selected_categories.filter((c) => c !== category);
    }
</script>

<div id="container">
    <div id="category_section">
        <ul id="category_list">
            {#each selected_categories as category}
                <li>
                    {category}
                    <span
                        on:click={() => on_delete_category(category)}
                        class="remove">X</span
                    >
                </li>
            {/each}
        </ul>
        <select name="category" id="category" bind:value={selected_category}>
            {#each categories as category}
                <option value={category.categoryName}
                    >{category.categoryName}</option
                >
            {/each}
        </select>
    </div>

    <div id="title_section">
        <input
            type="text"
            name="title"
            id="title"
            placeholder="title"
            class="inputbox"
        />
    </div>

    <div id="link_section">
        <input
            type="text"
            name="link"
            id="link"
            placeholder="link"
            class="inputbox"
        />
    </div>
    <div id="tag_section">
        <input
            type="text"
            name="tags"
            id="tags"
            placeholder="tags"
            class="inputbox"
        />
    </div>
    <div id="description_section">
        <input
            type="text"
            name="description"
            id="description"
            placeholder="description"
            class="inputbox"
        />
    </div>
    <div id="submit_box">
        <button
            on:click={() =>
                add_page(
                    document.getElementById("title").value,
                    document.getElementById("description").value,
                    document.getElementById("link").value,
                    selected_categories,
                    document
                        .getElementById("tags")
                        .value.split(",")
                        .map((t) => t.trim()),
                )}>{submit_text}</button
        >
        <button on:click={on_click_back}>뒤로</button>
    </div>
</div>

<style>
    .remove {
        cursor: pointer;
    }

    #container {
        padding: 20px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .inputbox {
        box-sizing: border-box;
        width: 100%;
        padding: 4px 10px;

        text-align: start;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        max-width: 350px;
        border: 2px solid rgba(0, 0, 0, 0.8);
    }
</style>
