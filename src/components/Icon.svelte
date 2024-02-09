<script>
    /**
     * @type {string}
     */
    export let title;

    /**
     * @type {string}
     */
    export let link;
</script>

<div
    id="container"
    on:click={() => {
        location.href = link;
    }}
>
    <div id="icon"></div>
    <div id="title">{title}</div>
</div>

<style lang="scss">
    #container {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 28px;
        align-items: center;

        > #icon {
            width: 100px;
            height: 100px;
            flex-shrink: 0;

            border-radius: 16px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            background: #fff;
            cursor: pointer;
        }

        > #title {
            color: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Pretendard;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            cursor: pointer;
        }
    }
</style>
