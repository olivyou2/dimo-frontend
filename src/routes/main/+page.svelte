<script>
    import Filter from "../components/Filter.svelte";
    import Header from "../components/Header.svelte";
    import PageButton from "../components/PageButton.svelte";
    import Tags from "../components/Tags.svelte";

    export let data;

    const sites = data.pages;
    const tags = data.tags;
    const cats = data.cats;

    /**
     * @type {typeof sites} query
     */
    let show_sites = [];

    const cat = data.now_cat;

    let query = "";

    $: {
        [query],
            (show_sites = sites.filter((site) => {
                if (!cat) return;

                if (cat === "전체") {
                    return site.title.includes(query);
                } else {
                    return (
                        site.title.includes(query) && site.tags.includes(cat)
                    );
                }
            }));
    }
</script>

<div id="layout">
    <Header categories={cats} selectedCategory={cat} />
    <Filter bind:query />
    <Tags {tags} />

    <div id="container">
        {#each show_sites as site}
            <PageButton
                title={site.title}
                link={site.link}
                tags={site.tags}
                description={site.description}
            />
        {/each}
    </div>
</div>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #container {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 40px 24px;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1224px;
        margin-top: 30px;
    }
</style>
