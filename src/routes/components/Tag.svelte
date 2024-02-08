<script>
    export let activated = false;
    export let tag = "";

    function onClick() {
        activated = !activated;
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="tag {activated ? 'activated' : ''}" on:click={onClick}>
    <img
        src="/tag/{activated ? 'remove.svg' : 'add.svg'}"
        alt=""
        width="12"
        height="12"
    />
    {tag}
</div>

<style>
    .tag {
        padding: 8px 16px;
        border-radius: 24px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background: white;

        color: rgba(0, 0, 0, 0.6);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 14px;

        user-select: none;
        cursor: pointer;
        white-space: nowrap;

        &.activated {
            background: rgba(0, 0, 0, 0.8);
            color: white;
        }
    }
</style>
