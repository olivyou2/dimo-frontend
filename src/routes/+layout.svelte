<script lang="ts">
    import Header from "../components/Header.svelte";
    import { tokenStore } from "../store/tokenStore";
    import { userStore } from "../store/userStore";

    export let data;

    const cats = data.cats;
    const user = data.user;
    const isLogin = user !== null;

    const selectedCategory = data.selectedCategory;

    let profileUrl = "";

    if (user && data.token) {
        profileUrl = user.profileUrl;
        userStore.set(user);
        tokenStore.set(data.token);
    }
</script>

<div id="body">
    <Header categories={cats} {selectedCategory} {profileUrl} {isLogin} />
    <slot />
</div>

<style>
    @font-face {
        font-family: "Pretendard-Regular";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }
</style>
