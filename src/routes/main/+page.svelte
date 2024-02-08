<script>
    import Filter from "../components/Filter.svelte";
    import Header from "../components/Header.svelte";
    import PageButton from "../components/PageButton.svelte";
    import Tags from "../components/Tags.svelte";

    export let data;

    const sites = data.pages;
</script>

<div id="layout">
    <Header
        categories={["전체", "폰트", "목업", "소스", "아이콘", "레퍼런스"]}
    />
    <Filter />
    <Tags />

    <div id="container">
        {#each sites as site}
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
