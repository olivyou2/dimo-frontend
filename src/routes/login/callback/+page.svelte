<script>
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        location.href = data.href;
    });
</script>
