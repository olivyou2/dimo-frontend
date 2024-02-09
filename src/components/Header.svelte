<script>
    // @ts-nocheck

    import emblaCarouselSvelte from "embla-carousel-svelte";

    /**
     * @description The categories of the header
     * @type {string[]}
     */
    export let categories;

    /**
     * @description The selected category
     * @type {string | null}
     */
    export let selectedCategory;

    /**
     * @description The function that is called when a category is clicked
     * @param {string} category The category that is clicked
     */
    function onClickCategory(category) {
        selectedCategory = category;

        // Change query parameter "category" to selectedCategory.

        location.href = `/?category=${category}`;
    }

    categories = ["전체", ...categories];

    if (selectedCategory === "") {
        selectedCategory = "전체";
    }
</script>

<div id="container">
    <img src="/logo.svg" alt="" width="147" height="28" />

    <div
        id="category_wrapper"
        use:emblaCarouselSvelte={{ options: { dragFree: true } }}
    >
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

        > #category_wrapper {
            flex: 1;
            display: flex;
            justify-content: center;
            overflow: hidden;
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
                    white-space: nowrap;
                    user-select: none;
                }

                > .category.activated {
                    color: rgba(0, 0, 0, 0.8);
                    font-weight: 700;
                }
            }
        }
    }
</style>
