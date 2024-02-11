<script lang="ts">
    import type { Bookmark } from "$lib/page";
    import type { SortTypes, ViewTypes } from "$lib/sort";

    import Filter from "../../components/Filter.svelte";
    import Icon from "../../components/Icon.svelte";

    export let data;
    let edit = false;

    let bookmarks: Bookmark[];
    $: bookmarks = data.bookmarkPages;

    const logout = () => {
        location.href = "/logout";
    };

    const onedit = () => {
        edit = !edit;
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
    <div id="title">마이페이지</div>
    <Filter bind:sort_selected bind:query view_enable={false} />
    <div id="icons">
        {#each showBookmarks as bookmark}
            <div id={bookmark.id.toString()} class="icon">
                <Icon {bookmark} bind:edit />
            </div>
        {/each}
    </div>
</div>

<div id="footer-wrapper">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="footer">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="edit" on:click={onedit}>편집</div>

        <div id="email">designarinstudio@gmail.com</div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div id="logout" on:click={logout}>로그아웃</div>
    </div>
</div>

<style lang="scss">
    #container {
        padding: 0px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
            height: calc(100vh - 530px);
            overflow-y: scroll;
            padding-bottom: 120px;
            /* margin-bottom: 140px; */
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
        padding: 0px 36px;
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
        }

        > #logout {
            cursor: pointer;
            user-select: none;
        }
    }

    @media (max-width: 800px) {
        #footer {
            height: 70px !important;
        }

        #footer-wrapper {
            height: calc(70px - 50px) !important;
        }

        #icons {
            height: calc(100vh - 392px) !important;
            grid-template-columns: repeat(
                auto-fill,
                minmax(10px, 140px)
            ) !important;
        }
    }
</style>
