<script lang="ts">
    import { invalidate, invalidateAll } from "$app/navigation";
    import { removeBookmark } from "$lib/bookmark";
    import type { Bookmark } from "$lib/page";

    export let edit: boolean = false;
    export let bookmark: Bookmark;

    const onClickRemove = async () => {
        if (edit) {
            await removeBookmark(bookmark.id);
            await invalidate("mypage");
        }
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
    id="container"
    on:click={() => {
        if (!edit) {
            location.href = bookmark.place.link;
        }
    }}
>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
        id="icon"
        src={`https://www.google.com/s2/favicons?domain=${bookmark.place.link}&sz=256`}
        class={edit ? "edit" : ""}
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
        id="delete"
        src="./delete.svg"
        alt=""
        class={edit ? "visible" : "unvisible"}
        on:click={onClickRemove}
    />
    <div id="title">{bookmark.place.title}</div>
</div>

<style lang="scss">
    #container {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        position: relative;
        height: fit-content;

        > #icon {
            width: 70px;
            height: 70px;
            flex-shrink: 0;

            border-radius: 16px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            background: #fff;
            cursor: pointer;

            transition: all 0.1s ease-in-out;
        }

        > #icon.edit {
            /* alpha to 0.5 */
            opacity: 0.5;
            cursor: default !important;
        }

        > #delete {
            position: absolute;
            right: 31px;
            top: -14px;
            cursor: pointer;

            transition: all 0.1s ease-in-out;
        }

        > #delete.visible {
            /* alpha to 1 */
            /* opacity: 1; */
        }

        > #delete.unvisible {
            /* alpha to 0 */
            /* opacity: 0; */
            transform: scale(0);
            /* top: -24px; */
        }

        > #title {
            color: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Pretendard;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            cursor: pointer;
            user-select: none;
        }
    }

    @media (max-width: 800px) {
        #icon{
            width: 52px !important;
            height: 52px !important;
        }

        #title {
            font-size: 16px !important;
        }

#delete {
    position: absolute;
    right: 15px !important;
    top: -8px !important;
    width: 20px;
    cursor: pointer;

    transition: all 0.1s ease-in-out;
}
    }
</style>
