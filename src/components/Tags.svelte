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
</script>

<div id="wrapper" use:emblaCarouselSvelte>
    <div id="container">
        {#each tags as tag}
            <Tag
                {tag}
                onClickHandler={(activated) => onClickTag(activated, tag)}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    #wrapper {
        overflow: hidden;
        width: 100%;
        max-width: 1224px;
    }

    #container {
        margin-top: 42px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 16px;
        width: 100%;
        max-width: 1224px;
    }

    @media (max-width: 800px) {
        #container {
            margin-top: 20px;
            gap: 10px;
        }
    }
</style>
