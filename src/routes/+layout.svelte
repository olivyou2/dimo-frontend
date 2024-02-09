<script lang="ts">
    import Header from '../components/Header.svelte';

    export let data;

    const cats = data.cats;
    const user = data.user;
    const isLogin = user !== null;

    const selectedCategory = data.selectedCategory;

    let profileUrl = "";

    if (user){
        profileUrl = user.profileUrl;
    }
</script>

<div id="body">
    <Header categories={cats} selectedCategory={selectedCategory} profileUrl={profileUrl} isLogin={isLogin}/>
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
