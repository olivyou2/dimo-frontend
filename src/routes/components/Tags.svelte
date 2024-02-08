<script>
    import Tag from "./Tag.svelte";

    export let tags = ["tag1", "tag2", "tag3"];
</script>

<div id="container">
    {#each tags as tag}
        <Tag {tag} />
    {/each}
</div>

<style lang="scss">
    #container {
        margin-top: 42px;
        display: flex;
        flex-direction: row;
        gap: 16px;
        width: 100%;
        max-width: 1224px;
    }
</style>
