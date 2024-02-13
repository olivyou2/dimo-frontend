<script>
    import { tagStore } from "../store/tagStore";

    export let activated = false;
    export let tag = "";

    $: activated = $tagStore.includes(tag);

    /**
     * @description on click
     * @type {(activated: boolean) => void}
     */
    export let onClickHandler;

    function onClick() {
        activated = !activated;
        onClickHandler(activated);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tag {activated ? 'activated' : ''}" on:click={onClick} id={tag}>
    <img
        src="/tag/{activated ? 'remove.svg' : 'add.svg'}"
        alt=""
        id="indicator"
        width="8"
        height="8"
    />
    {tag}
</div>

<style>
    .tag {
        padding: 6px 12px;
        border-radius: 24px;
        /* border: 1px solid rgba(0, 0, 0, 0.2); */
        background: rgba(0, 0, 0, 0.05);

        color: rgba(0, 0, 0, 0.5);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;

        user-select: none;
        cursor: pointer;
        white-space: nowrap;

        &.activated {
            background: rgba(0, 0, 0, 0.8);
            color: white;
        }
    }

    @media (max-width: 800px) {
        .tag {
            padding: 6px 12px;
            font-size: 14px;
            gap: 8px;
        }

        #indicator {
            width: 8px;
            height: 8px;
        }
    }
</style>
