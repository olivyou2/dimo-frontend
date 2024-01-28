<script>
    /**
     * @description The title of the page
     * @type {string}
     */
    export let title = "";

    /**
     * @description The link of the page
     * @type {string}
     */
    export let link = "";

    /**
     * @description The tags of the page
     * @type {string[]}
     */
    export let tags = [];

    /**
     * @description The description of the page
     * @type {string}
     */
    export let description = "";

    /**
     * @description Whether the page is shown or hide
     * @type {boolean}
     */
    export let show = false;

    /**
     * @description The title of the page
     * @param value {string}
     */
    const on_change_title = (value) => {
        setTimeout(() => {
            title = value;
        }, 10);
    }

    /**
     * @description The link of the page
     * @param value {string}
     */
    const on_change_link = (value) => {
        setTimeout(() => {
            link = value;
        }, 10);
    }

    /**
     * @description The tags of the page
     * @param value {string[]}
     */
    const on_change_tags = (value) => {
        setTimeout(() => {
            tags = value;
        }, 10);
    }

    /**
     * @description The description of the page
     * @param value {string}
     */
    const on_change_description = (value) => {
        setTimeout(() => {
            description = value;
        }, 10);
    }

    /**
     * @description The description of the page
     * @param e {MouseEvent}
     */
    function on_click_container(e){
        e.stopPropagation();
    }

    function on_click_screen(){
        show = false;
    }

    function on_click_submit(){
        show = false;
    }

    function on_click_cancel(){
        show = false;
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="screen" class="{show ? "show" : "hide"}" on:click={() => on_click_screen()}>
    <div id="container" on:click={(e) => on_click_container(e)}>
        <div id="title_section">
            <input type="text" id="title" on:keydown={(e) => on_change_title(e.currentTarget.value)}  placeholder="Title"/>
            <input type="text" id="link" on:keydown={(e) => on_change_link(e.currentTarget.value)} placeholder="Link"/>
        </div>
    
        <div id="content_section">
            <input type="text" id="tag_section" on:keydown={(e) => on_change_tags(e.currentTarget.value.split(" "))} placeholder="Tags"/>
            <input id="description" type="text" on:keydown={(e) => on_change_description(e.currentTarget.value)} placeholder="Description"/>
        </div>

        <div id="interact_section">
            <button id="submit" class="button" on:click={() => on_click_submit()}>수정/등록</button>
            <button id="cancel" class="button" on:click={() => on_click_cancel()}>취소</button>
        </div>
    </div>
</div>

<style lang="scss">
    #screen.hide{
        display: none;
    }

    #screen{
        width: 100vw;
        height: 100vh;

        top: 0px;
        left: 0px;

        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
    }

    #container {
        display: flex;
        padding: 0px 24px;
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
        padding: 32px 0px 28px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
    }

    #title {
        color: rgba(0, 0, 0, 0.7);
        font-family: Pretendard;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-left: 4px;

        line-break: anywhere;
        border: none;
        background: none;
        width: 100%;
    }

    #title::placeholder{
        color: rgba(0, 0, 0, 0.3);
    }

    #title:focus{
        outline: none;
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
        background: none;
        border: none;
        width: 100%
    }
    #link:focus{
        outline: none;
    }
    #link::placeholder{
        color: rgba(0, 0, 0, 0.3);
    }

    #content_section {
        display: flex;
        width: 240px;
        padding: 28px 0px 32px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;

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

        background: none;
        border: none;

        color: rgba(0, 0, 0, 0.7);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    #tag_section:focus{
        outline: none;
    }

    #tag_section::placeholder{
        color: rgba(0, 0, 0, 0.3);
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
        border: none;
        background: none;
    }

    #description:focus{
        outline: none;
    }

    #description::placeholder{
        color: rgba(0, 0, 0, 0.3);
    }

    #interact_section{
        display: flex;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding-bottom: 15px;
    }
    .button{
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;

        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 160%; /* 25.6px */
        padding: 3px 10px;
        cursor: pointer;
    }

</style>
