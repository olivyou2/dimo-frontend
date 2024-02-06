<script>
    /**
     * @description The categories of the header
     * @type {string[]}
     */
    export let categories;

    let selectedCategory = categories[0];

    /**
     * @description The function that is called when a category is clicked
     * @param {string} category The category that is clicked
     */
    function onClickCategory(category) {
        selectedCategory = category;
    }
</script>

<div id="container">
    <img src="/logo.svg" alt="" />

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

    <img src="/icon.svg" alt="" />
</div>

<style lang="scss">
    #container {
        width: calc(100vw - 57px);
        height: 80px;

        display: flex;
        flex-direction: row;

        padding-left: 34px;
        padding-right: 23px;

        align-items: center;
        justify-content: space-between;

        background-color: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        > #categories {
            display: flex;
            gap: 26px;
            > .category {
                color: rgba(0, 0, 0, 0.5);
                font-family: Pretendard;
                font-size: 16px;
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
