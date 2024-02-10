<script lang="ts">
    import { deleteCookie } from "$lib/cookie";
    import type { BookmarkPage } from "$lib/page";

    const url = import.meta.env.VITE_BACKEND_URL;

    import Filter from "../../components/Filter.svelte";
    import Icon from "../../components/Icon.svelte";
    
    export let data;

    let bookmarks: BookmarkPage[] = data.bookmarkPages;
    
    const logout = () => {
        deleteCookie("userId");
        location.href = "/";
    }
</script>

<div id="container">
    <div id="title">마이페이지</div>
    <Filter />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div id="logout" on:click={logout}>
        로그아웃
    </div>
    <div id="icons">
        {#each bookmarks as bookmark}
            <Icon title={bookmark.title} link={bookmark.link} />
        {/each}
    </div>
</div>

<style lang="scss">
    #container {
        padding: 0px 20px;
        display: flex;
        align-items: center;
        flex-direction: column;

        #logout {
            cursor: pointer;
        }

        > #title {
            display: flex;
            justify-content: center;
            margin-top: 91px;
            margin-bottom: 58px;

            color: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Pretendard;
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        > #icons {
            margin-top: 66px;
            max-width: 1224px;
            row-gap: 75px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
        }
    }
</style>
