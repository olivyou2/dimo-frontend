<script>
    /**
     * @description The title of the page
     * @type {string}
     */
    export let title;

    /**
     * @description The link of the page
     * @type {string}
     */
    export let link;

    /**
     * @description The tags of the page
     * @type {string[]}
     */
    export let tags;

    /**
     * @description The description of the page
     * @type {string}
     */
    export let description;

    /**
     * @description Whether the page is clickable
     * @type {boolean}
     */
    export let clickable = false;

    /**
     * @description Whether the page is clicked
     * @type {boolean}
     */
    export let clicked = false;

    /**
     * @description Whether the page is collapsed
     * @type {boolean}
     */
    export let collapsed = false;

    const on_click = () => {
        if (clickable) {
            clicked = !clicked;
        }
    };

    $: console.log(collapsed);
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
                <div id="text">
                    {title}
                </div>
                <img src="/favicon.svg" alt="" width="17" />
            </div>
            <div id="right">
                <img src="/bookmark.svg" alt="" width="26" height="38" />
            </div>
        </div>
        <div id="link">
            {link}
        </div>
    </div>

    <div id="content_section" class={collapsed ? "hide" : ""}>
        <div id="tag_section">
            {#each tags as tag}
                <div class="tag">
                    <span>#</span>
                    <span>{tag}</span>
                </div>
            {/each}
        </div>
        <div id="description">
            {description}
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
        color: rgba(0, 0, 0, 0.7);
        font-family: Pretendard;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
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
    }

    #text {
        /* line-break: anywhere; */
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
</style>
