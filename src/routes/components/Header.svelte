<script>
    /**
     * @description The categories of the header
     * @type {string[]}
     */
    export let categories;

    /**
     * @description The selected category
     * @type {string}
     */
    export let selectedCategory;

    /**
     * @description The function that is called when a category is clicked
     * @param {string} category The category that is clicked
     */
    function onClickCategory(category) {
        selectedCategory = category;

        // Change query parameter "category" to selectedCategory.

        location.href = `/main?category=${category}`;
    }

    categories = ["전체", ...categories];
</script>

<div id="container">
    <img src="/logo.svg" alt="" width="147" height="28" />

    <div id="categories">
        {#each categories as category}
            <button
                on:click={() => onClickCategory(category)}
                class="category {category === selectedCategory
                    ? 'activated'
                    : ''}">{category}</button
            >
        {/each}
    </div>

    <img src="/icon.svg" alt="" width="51" height="50" />
</div>

<style lang="scss">
    #container {
        width: calc(100vw - 85px);
        height: 120px;

        display: flex;
        flex-direction: row;

        padding-left: 52px;
        padding-right: 33px;

        align-items: center;
        justify-content: space-between;

        background-color: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        > #categories {
            display: flex;
            gap: 40px;
            > .category {
                color: rgba(0, 0, 0, 0.5);
                font-family: Pretendard;
                font-size: 24px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-decoration: none;

                background: none;
                border: none;
                padding: 0px;

                cursor: pointer;
            }

            > .category.activated {
                color: rgba(0, 0, 0, 0.8);
                font-weight: 700;
            }
        }
    }
</style>
