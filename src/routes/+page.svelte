<script lang="ts">
    import type { RenderPage } from "$lib/page";
    import type { SortTypes, ViewTypes } from "$lib/sort";
    import AdsPageButton from "../components/AdsPageButton.svelte";
    import Filter from "../components/Filter.svelte";
    import Header from "../components/Header.svelte";
    import PageButton from "../components/PageButton.svelte";
    import Tags from "../components/Tags.svelte";
    import { tagStore } from "../store/tagStore";

    export let data;

    let sites: RenderPage[] = [];
    let tags: string[] = [];

    $: {
        sites = data.pages;
        tags = data.tags;
    }

    let show_sites: RenderPage[] = [];

    let view_selected: ViewTypes;
    let sort_selected: SortTypes;
    // let tag_selected: string[] = [];

    let query = "";

    // Query filtering
    $: {
        [query, sort_selected, $tagStore, data],
            ((show_sites = sites.filter((site) => {
                if (query === "") return true;

                return site.title.includes(query) || site.link.includes(query);
            })),
            (show_sites = show_sites.sort((a, b) => {
                if (sort_selected === "가나다순") {
                    return a.title.localeCompare(b.title);
                } else if (sort_selected === "최신순") {
                    return b.id - a.id;
                } else {
                    return 0;
                }
            })),
            (show_sites = show_sites.filter((site) => {
                if ($tagStore.length === 0) return true;

                return $tagStore.every((tag) => site.tags.includes(tag));
            })));
    }
</script>

<div id="layout">
    <Filter bind:query bind:view_selected bind:sort_selected />
    <Tags {tags} />

    <div id="container">
        {#each show_sites as site}
            <PageButton page={site} collapsed={view_selected === "간단히"} />
        {/each}
        <AdsPageButton />
    </div>
</div>

<style>
    #layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 40px;
        padding-bottom: 100px;
    }

    #container {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 24px;
        flex-wrap: wrap;
        width: 100%;
        max-width: 1160px;
        margin-top: 24px;
    }

    @media (max-width: 800px) {
        #layout {
            padding: 0px 20px;
            padding-bottom: 100px;
        }

        #container {
            justify-content: center;
            row-gap: 16px;
            margin-top: 20px;
        }
    }
</style>
