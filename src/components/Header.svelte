<script>
    // @ts-nocheck

    import emblaCarouselSvelte from "embla-carousel-svelte";

    /**
     * @description The categories of the header
     * @type {string[]}
     */
    export let categories;

    /**
     * @description The user profile url
     * @type {string | null}
     */
    export let profileUrl;

    if (!profileUrl) {
        profileUrl = "/icon.svg";
    }

    /**
     * @type {boolean}
     */
    export let isLogin;

    /**
     * @description The selected category
     * @type {string | null}
     */
    export let selectedCategory;

    /**
     * @description The function that is called when a category is clicked
     * @param {string} category The category that is clicked
     */
    function onClickCategory(category) {
        selectedCategory = category;

        // Change query parameter "category" to selectedCategory.

        location.href = `/?category=${category}`;
    }

    categories = ["전체", ...categories];

    // if (selectedCategory === "") {
    //     selectedCategory = "전체";
    // }
</script>

<div id="fake_header"></div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
        id="logo"
        src="/logo.svg"
        alt=""
        width="147"
        height="28"
        on:click={() => {
            location.href = "/";
        }}
    />
    <img
        id="logo_mobile"
        src="/logo_mobile.svg"
        alt=""
        width="28"
        height="17"
        on:click={() => {
            location.href = "/";
        }}
    />

    <div
        id="category_wrapper"
        use:emblaCarouselSvelte={{
            options: { dragFree: true, watchResize: true },
        }}
    >
        <div id="categories">
            {#each categories as category}
                <button
                    on:click={() => onClickCategory(category)}
                    class="category {category === selectedCategory
                        ? 'activated'
                        : ''}">{category}</button
                >
            {/each}
        </div>
    </div>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    {#if isLogin}
        <img
            id="icon"
            src={profileUrl}
            alt=""
            on:click={() => {
                location.href = "/mypage";
            }}
        />
    {:else}
        <div
            id="loginbtn"
            on:click={() => {
                location.href = "/login";
            }}
            class:activated={selectedCategory === "로그인"}
        >
            로그인
        </div>
    {/if}
</div>

<style lang="scss">
    #logo {
        position: relative;
        top: -3px;
    }
    #loginbtn {
        color: rgba(0, 0, 0, 0.8);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
    }
    #loginbtn.activated {
        font-weight: 600;
    }
    #fake_header {
        height: 80px;
    }
    #container {
        z-index: 10;
        top: 0px;
        position: fixed;
        width: 100%;
        height: 80px;

        display: flex;
        flex-direction: row;

        padding-left: 33px;
        padding-right: 33px;

        align-items: center;
        justify-content: space-between;

        background-color: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        box-sizing: border-box;

        > #logo {
            cursor: pointer;
            width: 96px;
        }

        > #logo_mobile {
            cursor: pointer;

            display: none;
        }

        > #category_wrapper {
            padding-left: 40px;
            padding-right: 40px;
            flex: 1;
            overflow: hidden;
            > #categories {
                display: flex;
                gap: 32px;
                // justify-content: center;
                > .category {
                    color: rgba(0, 0, 0, 0.5);
                    font-family: Pretendard;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    text-decoration: none;

                    background: none;
                    border: none;
                    padding: 0px;

                    cursor: pointer;
                    white-space: nowrap;
                    user-select: none;
                }

                > .category.activated {
                    color: rgba(0, 0, 0, 0.8);
                    font-weight: 600;
                }
            }
        }

        > #icon {
            border-radius: 25px;
            width: 40px;
            height: 40px;
            outline: 1px solid rgba(0, 0, 0, 0.2);
            overflow: clip;
            cursor: pointer;
        }
    }

    @media (max-width: 800px) {
        #fake_header {
            height: 57px;
        }
        #container {
            height: 56px;
            padding-left: 20px;
            padding-right: 18px;
            #logo {
                display: none;
            }

            #logo_mobile {
                display: block;
            }

            #icon {
                width: 28px;
                height: 28px;
            }

            .category {
                font-size: 16px !important;
            }

            #category_wrapper {
                padding-top: 0px;
                padding-left: 36px !important;

                > #categories {
                    gap: 28px !important;
                }
            }
        }
        #loginbtn {
            padding-top: 0px;
        }
    }
</style>
