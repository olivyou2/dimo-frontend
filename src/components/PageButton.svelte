<script lang="ts">
    import type { RenderPage } from "$lib/page";
    import { addBookmark, removeBookmark } from "$lib/bookmark";
    import { invalidate } from "$app/navigation";
    import { tagStore } from "../store/tagStore";
    import { userStore } from "../store/userStore";
    import emblaCarouselSvelte from "embla-carousel-svelte";
    import type { EmblaCarouselType } from "embla-carousel";
    import Shade from "./Shade.svelte";
    import { tokenStore } from "../store/tokenStore";

    export let page: RenderPage;
    export let clicked: boolean = false;
    export let collapsed: boolean = false;
    export let bookmarked: boolean = page.bookmark ? true : false;

    $: bookmarked = page.bookmark ? true : false;

    const on_click = () => {
        // window.open(page.link, "_blank");
    };

    const on_click_bookmark = async () => {
        if ($userStore.id === 0) {
            location.href = "/login";
            return;
        }

        bookmarked = !bookmarked;

        if (bookmarked) {
            await addBookmark(page.id, $tokenStore);
            // await invalidateAll();
            await invalidate("pages");
        } else {
            await removeBookmark(page.bookmark?.id);
            // await invalidateAll();
            await invalidate("pages");
        }
    };

    const on_click_tag = (tag: string) => {
        tagStore.set([...$tagStore, tag]);
    };

    let emblaApi: EmblaCarouselType;
    let ltrShade = false;
    let rtlShade = false;

    function onEmblaInit(event: CustomEvent<EmblaCarouselType>) {
        emblaApi = event.detail;

        emblaApi.on("scroll", (api, evt) => {
            const progress = emblaApi.scrollProgress();

            if (progress < 0.01) {
                ltrShade = false;
                rtlShade = true;
            } else if (progress > 0.99) {
                ltrShade = true;
                rtlShade = false;
            } else {
                ltrShade = true;
                rtlShade = true;
            }
        });
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    id="container"
    class="{clicked ? 'clicked' : ''} {collapsed ? 'collapsed' : ''}"
    on:click={() => on_click()}
>
    <div id="title_section">
        <div id="title">
            <div id="left">
                <img
                    src={`https://www.google.com/s2/favicons?domain=${page.link}&sz=256`}
                    alt=""
                    width="22"
                    height="22"
                />
                <div
                    id="embla_wrapper"
                    use:emblaCarouselSvelte={{
                        options: { dragFree: true },
                        plugins: [],
                    }}
                    on:emblaInit={onEmblaInit}
                >
                    <div id="embla_container">
                        <div id="text">
                            {page.title}
                        </div>
                        <div></div>
                    </div>

                    <Shade shade="leftToRight" shadeEnable={ltrShade} />
                    <Shade shade="rightToLeft" shadeEnable={rtlShade} />
                </div>
            </div>
            <div id="right">
                {#if bookmarked}
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <img
                        src="/bookmark_fill.svg"
                        alt=""
                        width="26"
                        height="38"
                        on:click={on_click_bookmark}
                        id="bookmark"
                    />
                {:else}
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <img
                        src="/bookmark.svg"
                        alt=""
                        width="26"
                        height="38"
                        on:click={on_click_bookmark}
                        id="bookmark"
                    />
                {/if}
            </div>
        </div>
        <a href={page.link} id="link" target="_blank">
            {page.link}
        </a>
    </div>

    <div id="content_section" class={collapsed ? "hide" : ""}>
        <div id="tag_section">
            {#each page.tags as tag}
                <div class="tag" on:click={() => on_click_tag(tag)}>
                    <!-- <span>:</span> -->
                    <span>{tag}</span>
                </div>
            {/each}
        </div>
        <div id="description">
            {page.description}
        </div>
    </div>
</div>

<style lang="scss">
    .hide {
        display: none !important;
    }
    #container {
        display: flex;
        padding: 0px 16px;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
        background: #fff;

        &.collapsed {
            padding-bottom: 6px;
        }

        /* border-radius: 8px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05); */

        box-sizing: content-box;
    }

    #title_section {
        display: flex;

        width: 240px;
        padding: 16px 4px 16px 4px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        // gap: 8px;
        max-width: 240px;
        box-sizing: border-box;
    }

    #title {
        padding-left: 4px;

        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    #left {
        display: flex;
        gap: 10px;
        height: 33px;
        align-items: center;

        width: 190px;
        position: relative;
    }

    #right {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #embla_wrapper {
        width: fit-content;
        overflow: scroll;
        position: relative;
        width: 158px;
        // display: flex;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    #embla_container {
        // width: fit-content;
        display: flex;
    }

    #text {
        color: rgba(0, 0, 0, 0.7);
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
        white-space: nowrap;
    }

    #link {
        color: rgba(0, 0, 0, 0.5);
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-left: 4px;

        line-break: anywhere;
        text-decoration: none;
    }

    #content_section {
        display: flex;
        padding: 16px 0px 16px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 12px;
        width: 240px;

        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding-left: 4px;
        box-sizing: border-box;
    }

    #tag_section {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 8px 6px;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .tag {
        display: flex;
        align-items: flex-start;
        gap: 4px;

        color: rgba(0, 0, 0, 0.5);
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        user-select: none;
        cursor: pointer;

        border-radius: 50px;
        padding: 5px 8px;
        background: rgba(0, 0, 0, 0.05);
    }

    #description {
        color: rgba(0, 0, 0, 0.5);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 25.6px */

        align-self: stretch;

        line-break: anywhere;
    }

    #container.clicked {
        background: rgba(0, 0, 0, 0.7);
        * {
            color: white;
        }

        #content_section {
            border-top: 1px solid white;
        }
    }

    #bookmark {
        cursor: pointer;
        width: 13px;
    }

    @media (max-width: 800px) {
        #title_section {
            width: calc(100vw - 72px);
            max-width: calc(100vw - 72px);
        }

        #content_section {
            width: calc(100vw - 72px);
            max-width: calc(100vw - 72px);
        }
    }
</style>
