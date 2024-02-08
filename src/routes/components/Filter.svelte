<script>
    import Search from "./Search.svelte";
    import Sort from "./Sort.svelte";

    /**
     * @type {string} query
     */
    export let query;
</script>

<div id="wrapper">
    <div id="container">
        <div id="search">
            <Search bind:query />
        </div>
        <div id="sort_container">
            <Sort />
            <Sort />
        </div>
    </div>
</div>

<style lang="scss">
    #wrapper {
        width: 100%;
        display: flex;
        justify-content: center;

        margin-top: 38px;
    }
    #container {
        display: flex;
        width: 100%;
        max-width: 1224px;
        justify-content: space-between;

        > #search {
        }

        > #sort_container {
            display: flex;
            gap: 21px;
        }
    }
</style>
