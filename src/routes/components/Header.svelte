<script>
    /**
     * @description The categories of the header
     * @type {string[]}
     */
    export let categories;
</script>

<div id="container">
    <div id="top">
        <div id="category_container">
            {#each categories as category, idx}
                {#if idx == 0}
                    <div class="category activated">{category}</div>
                {:else}
                    <div class="category">{category}</div>
                {/if}
            {/each}
        </div>
        <div id="logo">
            <img src="/logo.svg" alt="" />
        </div>
    </div>
    <div id="bottom">
        <div id="search">
            <div id="icon_wrapper">
                <img src="/search.svg" alt="" />
            </div>
            <div id="input_wrapper">
                <input id="input" type="text" placeholder="페이지 이름 검색" />
            </div>
        </div>
        <div id="sort">
            <div id="sortby">가나다순</div>
            <div id="icon_wrapper">
                <img src="/dropdown.svg" alt="" />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    #container {
        widows: 100%;

        display: flex;
        flex-direction: column;
        height: 150px;
        justify-content: space-between;

        > #top {
            display: flex;
            justify-content: space-between;
            > #category_container {
                display: flex;
                column-gap: 32px;

                > .category {
                    color: rgba(0, 0, 0, 0.5);
                    font-family: Pretendard;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;

                    user-select: none;
                    cursor: pointer;
                }

                > .category.activated {
                    color: rgba(0, 0, 0, 0.8);
                }
            }

            > #logo {
            }
        }

        > #bottom {
            display: flex;
            justify-content: space-between;

            > #search {
                display: flex;
                column-gap: 20px;
                flex: 1;

                > #input_wrapper {
                    flex: 1;
                }

                > #icon_wrapper,
                > #input_wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #input {
                    border: none;
                    background: none;

                    color: rgba(0, 0, 0, 0.7);
                    font-family: Pretendard;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    flex: 1;
                }

                #input:focus {
                    outline: none;
                }

                #input::placeholder {
                    color: rgba(0, 0, 0, 0.3);
                }
            }

            > #sort {
                display: flex;
                column-gap: 10px;
                align-items: center;

                > #sortby {
                    color: rgba(0, 0, 0, 0.5);
                    text-align: right;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }

                > #icon_wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>
