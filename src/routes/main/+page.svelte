<script>
    import Filter from "../components/Filter.svelte";
    import Header from "../components/Header.svelte";
    import PageButton from "../components/PageButton.svelte";
    import Tags from "../components/Tags.svelte";

    export let data;

    const sites = data.pages;
    const tags = data.tags;
    const cats = data.cats;

    /** @type {typeof sites} */
    let show_sites = [];

    /** @type {"간단히" | "자세히"} query */
    let view_selected;

    /** @type {string} query */
    let sort_selected;

    /** @type {string[]} tag_selected*/
    let tag_selected = [];

    const cat = data.now_cat;

    let query = "";

    // Query filtering
    $: {
        [query, sort_selected, tag_selected],
            console.log(query, cat),
            ((show_sites = sites.filter((site) => {
                if (query === "") return true;

                return site.title.includes(query) || site.link.includes(query);
            })),
            console.log(show_sites),
            (show_sites = show_sites.sort((a, b) => {
                if (sort_selected === "가나다순") {
                    return a.title.localeCompare(b.title);
                } else if (sort_selected === "최신순") {
                    return b.id - a.id;
                } else {
                    return 0;
                }
            })),
            console.log(show_sites),
            (show_sites = show_sites.filter((site) => {
                if (tag_selected.length === 0) return true;

                return tag_selected.every((tag) => site.tags.includes(tag));
            })),
            console.log(show_sites));
    }
</script>

<Header categories={cats} selectedCategory={cat} />
<div id="layout">
    <Filter bind:query bind:view_selected bind:sort_selected />
    <Tags {tags} bind:selectedTags={tag_selected} />

    <div id="container">
        {#each show_sites as site}
            <PageButton
                title={site.title}
                link={site.link}
                tags={site.tags}
                description={site.description}
                collapsed={view_selected === "간단히"}
            />
        {/each}
    </div>
</div>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
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
