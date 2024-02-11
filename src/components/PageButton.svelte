<script lang="ts">
    import { invalidate, invalidateAll } from "$app/navigation";
    import { addBookmark, removeBookmark } from "$lib/bookmark";
    import type { RenderPage } from "$lib/page";
    import { userStore } from "../store/userStore";

    export let page: RenderPage;
    export let clickable: boolean = false;
    export let clicked: boolean = false;
    export let collapsed: boolean = false;
    export let bookmarked: boolean = page.bookmark ? true : false;

    $: bookmarked = page.bookmark ? true : false;

    const on_click = () => {
        if (clickable) {
            clicked = !clicked;
        }
    };

    const on_click_bookmark = async () => {
        if ($userStore.id === 0) {
            location.href = "/login";
            return;
        }

        bookmarked = !bookmarked;

        if (bookmarked) {
            await addBookmark(page.id, $userStore.id);
            // await invalidateAll();
            await invalidate("pages");
        } else {
            await removeBookmark(page.bookmark?.id);
            // await invalidateAll();
            await invalidate("pages");
        }
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    id="container"
    class={clicked ? "clicked" : ""}
    on:click={() => on_click()}
>
    <div id="title_section">
        <div id="title">
            <div id="left">
                <a href={page.link} id="text">
                    {page.title}
                </a>
                <img
                    src={`https://www.google.com/s2/favicons?domain=${page.link}&sz=256`}
                    alt=""
                    width="22"
                    height="22"
                />
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
        <a href={page.link} id="link">
            {page.link}
        </a>
    </div>

    <div id="content_section" class={collapsed ? "hide" : ""}>
        <div id="tag_section">
            {#each page.tags as tag}
                <div class="tag">
                    <span>:</span>
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

        /* border-radius: 8px;
        background: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05); */

        box-sizing: content-box;
    }

    #title_section {
        display: flex;

        width: 240px;
        padding: 32px 4px 28px 4px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
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
        gap: 7px;
        height: 33px;
        align-items: center;
    }

    #text {
        color: rgba(0, 0, 0, 0.7);
        font-family: Pretendard;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    #link {
        color: rgba(0, 0, 0, 0.5);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-left: 4px;

        line-break: anywhere;
        text-decoration: none;
    }

    #content_section {
        display: flex;
        padding: 28px 0px 32px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
        width: 240px;

        border-top: 1px solid rgba(0, 0, 0, 0.2);
        padding-left: 4px;
        box-sizing: border-box;
    }

    #tag_section {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 4px 16px;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .tag {
        display: flex;
        align-items: flex-start;
        gap: 4px;

        color: rgba(0, 0, 0, 0.7);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    #description {
        color: rgba(0, 0, 0, 0.5);
        font-family: Pretendard;
        font-size: 16px;
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
