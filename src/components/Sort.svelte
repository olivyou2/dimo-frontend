<script>
    import { browser } from "$app/environment";

    export let selected = "가나다순";
    export let options = ["가나다순", "최신순"];

    /**
     * @description on click sort
     * @param e {MouseEvent}
     */
    function on_click_sort(e) {
        if (selected === options[0]) {
            selected = options[1];
        } else {
            selected = options[0];
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="sort" class="sort" on:click={(e) => on_click_sort(e)}>
    <div id="icon_wrapper">
        <img src="/switch.svg" alt="" width="10" height="8" />
    </div>
    <button id="sortby">{selected}</button>
</div>

<style lang="scss">
    #sort {
        display: flex;
        // column-gap: 6px;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        white-space: nowrap;

        > #sortby {
            color: rgba(0, 0, 0, 0.5);
            text-align: right;
            font-family: Pretendard;
            font-size: 12px;
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
            z-index: 2;
            top: calc(100% + 4px);
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

    @media (max-width: 800px) {
        #sortby {
            font-size: 12px !important;
        }

        #sort_dropdown {
            > .option {
                font-size: 12px !important;
                height: 20px !important;
                width: 60px !important;
            }
        }
    }
</style>
