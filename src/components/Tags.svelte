<script lang="ts">
    import Tag from "./Tag.svelte";
    import emblaCarouselSvelte, {
        type EmblaCarouselSvelteType,
    } from "embla-carousel-svelte";
    import { tagStore } from "../store/tagStore";
    import type { EmblaCarouselType } from "embla-carousel";

    export let tags: string[] = [];

    let tagAvailable: string[] = [];
    $: tagAvailable = tags.filter((tag) => !$tagStore.includes(tag));

    function onClickTag(activated: boolean, tag: string) {
        if (activated) {
            tagStore.set([...$tagStore, tag]);
        } else {
            tagStore.set(
                $tagStore.filter((selected_tag) => selected_tag !== tag),
            );
        }
    }

    let emblaApi: EmblaCarouselType;

    function onInit(event: CustomEvent<EmblaCarouselType>) {
        emblaApi = event.detail;
        // console.log(emblaApi.slideNodes()); // Access API
    }
</script>

<div
    id="wrapper"
    use:emblaCarouselSvelte={{
        options: { dragFree: true, watchResize: true },
        plugins: [],
    }}
    on:emblaInit={onInit}
>
    <div id="container">
        {#each $tagStore as tag}
            <Tag
                {tag}
                onClickHandler={(activated) => onClickTag(activated, tag)}
            />
        {/each}
        {#each tagAvailable as tag}
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
