<script>
    let sort_dropdown_visible = false;
    export let selected = "가나다순";
    export let options = [
        "가나다순",
        "최신순",
        "인기순",
        "조회수많은순",
        "평점높은순",
    ];

    function on_click_sort() {
        sort_dropdown_visible = !sort_dropdown_visible;
    }

    /**
     * @description on click option
     * @param option {string}
     * @param e {MouseEvent}
     */
    function on_click_option(option, e) {
        e.stopPropagation();

        selected = option;
        sort_dropdown_visible = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="sort" on:click={() => on_click_sort()}>
    <button id="sortby">{selected}</button>
    <div id="icon_wrapper">
        <img src="/dropdown.svg" alt="" />
    </div>

    {#if sort_dropdown_visible}
        <div id="sort_dropdown">
            {#each options as option}
                <button
                    class="option"
                    on:click={(e) => on_click_option(option, e)}
                    >{option}</button
                >
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    #sort {
        display: flex;
        column-gap: 6px;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;

        > #sortby {
            color: rgba(0, 0, 0, 0.5);
            text-align: right;
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            border: none;
            background: none;
            cursor: pointer;
        }

        > #icon_wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        > #sort_dropdown {
            top: 100%;
            right: 0px;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            background: white;
            border: 1px solid rgba(0, 0, 0, 0.3);

            > .option {
                border: none;
                background: none;
                width: 100px;
                height: 24px;
                padding: 5px 5px;
                box-sizing: content-box;

                color: rgba(0, 0, 0, 0.5);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                cursor: pointer;
            }
        }
    }
</style>
