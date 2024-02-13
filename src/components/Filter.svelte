<script>
    import Search from "./Search.svelte";
    import Sort from "./Sort.svelte";

    /**
     * @type {string} query
     */
    export let query = "";

    const sort_items = ["가나다순", "최신순"];

    /** @type {typeof view_selected[]} */
    const view_items = ["자세히", "간단히"];

    export let sort_selected = sort_items[0];

    /** @type {"간단히" | "자세히"} */
    export let view_selected = view_items[0];

    export let view_enable = true;
</script>

<div id="wrapper">
    <div id="container">
        <div id="search">
            <Search bind:query />
        </div>
        <div id="sort_container">
            <Sort options={sort_items} bind:selected={sort_selected} />

            {#if view_enable}
                <Sort options={view_items} bind:selected={view_selected} />
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    #wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        margin-top: 36px;
    }
    #container {
        display: flex;
        width: 100%;
        max-width: 1160px;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 12px;

        > #search {
        }

        > #sort_container {
            display: flex;
            gap: 21px;
        }
    }

    @media (max-width: 800px) {
        #wrapper {
            margin-top: 20px;
        }

        #container {
            padding: 0px 4px 0px 4px;
        }
    }
</style>
