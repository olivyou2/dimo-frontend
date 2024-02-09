<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { setUserId } from "../../../states/loginState.js";

    export let data;

    onMount(() => {
        if (data.login) {
            setUserId(data.userId);
        }

        location.href = data.href;
    });
</script>
