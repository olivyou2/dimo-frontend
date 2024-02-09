<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import {
        saveToLocal,
        setUserId,
        loginState,
    } from "../../../states/loginState.js";

    export let data;

    onMount(() => {
        if (data.login) {
            setUserId(data.userId);
            saveToLocal($loginState);
        }

        location.href = data.href;
    });
</script>
