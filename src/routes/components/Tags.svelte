<script>
    import Tag from "./Tag.svelte";
    import emblaCarouselSvelte from "embla-carousel-svelte";

    /**
     * @type {string[]}
     */
    export let tags = [];

    /**
     * @type {string[]}
     */
    export let selectedTags = [];

    /**
     *
     * @param {boolean} activated
     * @param {string} tag
     */
    function onClickTag(activated, tag) {
        if (activated) {
            selectedTags = [...selectedTags, tag];
        } else {
            selectedTags = selectedTags.filter(
                (selected_tag) => selected_tag !== tag,
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
        overflow: visible;
    }
    #container {
        margin-top: 42px;
        display: flex;
        flex-direction: row;
        gap: 16px;
        width: 100%;
        max-width: 1224px;
    }
</style>
