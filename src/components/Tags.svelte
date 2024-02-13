<script>
    import Tag from "./Tag.svelte";
    import emblaCarouselSvelte from "embla-carousel-svelte";
    import { tagStore } from "../store/tagStore";

    /**
     * @type {string[]}
     */
    export let tags = [];

    /**
     *
     * @param {boolean} activated
     * @param {string} tag
     */
    function onClickTag(activated, tag) {
        if (activated) {
            tagStore.set([...$tagStore, tag]);
        } else {
            tagStore.set(
                $tagStore.filter((selected_tag) => selected_tag !== tag),
            );
        }
    }

    // tags = ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
</script>

<div id="wrapper" use:emblaCarouselSvelte={{ options: { dragFree: true, watchResize: true }, plugins: [] }}>
    <div id="container">
        {#each tags as tag}
            <Tag
                {tag}
                onClickHandler={(activated) => onClickTag(activated, tag)}
            />
        {/each}
        <div></div>
    </div>
</div>

<style lang="scss">
    #wrapper {
        overflow: scroll;
        width: 100%;
        max-width: 1160px;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    #container {
        margin-top: 36px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 8px;
        width: 100%;
        max-width: 1160px;
    }

    @media (max-width: 800px) {
        #container {
            margin-top: 20px;
            gap: 10px;
        }
    }
</style>
