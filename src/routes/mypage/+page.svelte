<script lang="ts">
    import type { Bookmark } from "$lib/page";
    import type { SortTypes, ViewTypes } from "$lib/sort";

    import Filter from "../../components/Filter.svelte";
    import Icon from "../../components/Icon.svelte";

    export let data;
    export let email = "designarinstudio@gmail.com";
    let edit = false;

    let bookmarks: Bookmark[];
    $: bookmarks = data.bookmarkPages;

    const logout = () => {
        location.href = "/logout";
    };

    const onedit = () => {
        edit = !edit;
    };

    const onClickEmail = () => {
        navigator.clipboard.writeText(email);
        alert("이메일이 복사되었습니다.");
    };

    let showBookmarks: Bookmark[] = [];

    let sort_selected: SortTypes;
    let tag_selected: string[] = [];

    let query = "";

    // Query filtering
    $: {
        [query, sort_selected, tag_selected, data],
            ((showBookmarks = bookmarks.filter((bookmark) => {
                if (query === "") return true;

                return (
                    bookmark.place.title.includes(query) ||
                    bookmark.place.link.includes(query)
                );
            })),
            (showBookmarks = showBookmarks.sort((a, b) => {
                if (sort_selected === "가나다순") {
                    return a.place.title.localeCompare(b.place.title);
                } else if (sort_selected === "최신순") {
                    return b.id - a.id;
                } else {
                    return 0;
                }
            })));
    }
</script>

<div id="container">
    <!-- <div id="title">마이페이지</div> -->
    <Filter bind:sort_selected bind:query view_enable={false} />
    {#if showBookmarks.length === 0}
        <div id="empty">
            <img src="/bookmark.svg" width="38" alt="" />
            <div id="description">
                자주 가는 페이지를 저장하고<br />
                한 자리에 모아보세요
            </div>
        </div>
    {:else}
        <div id="top-shadow"></div>
        <div id="icons">
            {#each showBookmarks as bookmark}
                <div id={bookmark.id.toString()} class="icon">
                    <Icon {bookmark} bind:edit />
                </div>
            {/each}
        </div>
    {/if}
</div>

<div id="footer-wrapper">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="footer">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="edit" on:click={onedit}>편집</div>

        <div id="middle">
            <a
                id="site-info"
                href="https://untitledesign.notion.site/47a2245a4ac64ec695d7e9baa79e8f69?pvs=4"
                target="_blank"
            >
                사이트 소개
            </a>
            <span id="division">|</span>
            <span id="email">
                <a id="label" href="mailto:{email}"> 문의 </a>
                <span id="email" on:click={onClickEmail}> {email} </span>
            </span>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div id="logout" on:click={logout}>로그아웃</div>
    </div>
</div>

<style lang="scss">
    #empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;
        height: calc(100vh - 209px);
    }
    #description {
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 38px */
    }
    #middle {
        display: flex;
        gap: 10px;
        font-size: 14px;
        > #site-info {
            text-decoration: none;
            color: rgba(0, 0, 0, 0.5);
        }
        > #email {
            display: flex;
            gap: 5px;

            > #label {
                text-decoration: none;
                color: rgba(0, 0, 0, 0.5);
            }

            > #email {
                cursor: pointer;
            }
        }
    }
    #top-shadow {
        width: 100%;
        height: 60px;
        position: absolute;
        top: 57px;
        z-index: 10;

        background: linear-gradient(
            0deg,
            rgba(251, 251, 251, 0) 0%,
            #fbfbfb 60%
        );
    }
    #container {
        padding: 0px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .icon {
            height: fit-content;
        }
        #logout {
            cursor: pointer;
        }

        > #title {
            display: flex;
            justify-content: center;
            margin-top: 35px;
            margin-bottom: 11px;

            color: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Pretendard;
            font-size: 36px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        > #icons {
            padding-top: 66px;
            max-width: 1224px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(10px, 196px));
            row-gap: 75px;
            justify-content: center;
            height: calc(100vh - 393px);
            overflow-y: scroll;
            padding-bottom: 120px;
            grid-auto-rows: min-content;
            /* margin-bottom: 140px; */

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    #footer-wrapper {
        position: relative;
        height: calc(120px - 50px);
    }

    #footer {
        position: absolute;
        top: -50px;
        background: linear-gradient(
            180deg,
            rgba(251, 251, 251, 0) 0%,
            #fbfbfb 34.5%
        );
        height: 120px;
        width: 100%;

        box-sizing: border-box;
        padding: 64px 36px 30px 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        > #edit {
            cursor: pointer;
            user-select: none;
            width: 100px;
            text-align: left;
        }

        > #logout {
            cursor: pointer;
            user-select: none;
            width: 100px;
            text-align: right;
            white-space: nowrap;
        }
    }

    @media (max-width: 800px) {
        #top-shadow {
            top: 39px;
            height: 30px;
        }
        #title {
            font-size: 24px !important;
        }
        #container {
            padding: 0px 20px;
        }
        #footer {
            height: 83px !important;
            top: -31px !important;
            box-sizing: border-box;
            padding-top: 53px;
        }

        #footer-wrapper {
            height: calc(70px - 50px) !important;
        }

        #icons {
            padding-top: 35px !important;
            height: calc(100vh - 303px) !important;
            grid-template-columns: repeat(
                auto-fill,
                minmax(10px, 100px)
            ) !important;
            row-gap: 36px !important;
        }

        #edit {
            font-size: 14px !important;
            width: 60px !important;
            text-align: left;
        }

        #logout {
            font-size: 14px !important;
            width: 60px !important;
            text-align: right;
        }

        #division {
            display: none;
        }

        #middle > #email {
            display: none;
        }
    }
</style>
