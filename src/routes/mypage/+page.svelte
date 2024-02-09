<script>
    const url = import.meta.env.VITE_BACKEND_URL;

    import Filter from "../../components/Filter.svelte";
    import Header from "../../components/Header.svelte";
    import Icon from "../../components/Icon.svelte";
    import { loginState } from "../../states/loginState.js";

    export let data;

    const cats = data.cats;

    /**
     * @type {{place: {id: number, title: string, content: string, link: string, createdAt: string}}[]}
     */
    let bookmarks = [];

    async function fetch_data() {
        const { userId } = $loginState;
        const res = await fetch(`${url}/api/bookmark/${userId}`);
        const data = await res.json();

        /**
         * @type {typeof bookmarks}
         */
        const bookmarks_data = data.bookmarks;
        bookmarks = bookmarks_data;
    }

    fetch_data();
</script>

<Header categories={cats} selectedCategory={""} />
<div id="container">
    <div id="title">마이페이지</div>
    <Filter />
    <div id="icons">
        {#each bookmarks as bookmark}
            <Icon title={bookmark.place.title} link={bookmark.place.link} />
        {/each}
    </div>
</div>

<style lang="scss">
    #container {
        padding: 0px 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        > #title {
            display: flex;
            justify-content: center;
            margin-top: 91px;
            margin-bottom: 58px;

            color: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Pretendard;
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        > #icons {
            margin-top: 66px;
            max-width: 1224px;
            row-gap: 75px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
        }
    }
</style>
