<script lang="ts">
    /**
     * @type {string} query
     */
    export let query;
</script>

<div id="container">
    <img src="/search.svg" alt="" width="22" height="22" />
    <input
        type="text"
        id="search"
        placeholder="페이지 이름 검색"
        on:input={(e) => (query = e.currentTarget.value)}
    />
</div>

<style lang="scss">
    #container {
        display: flex;
        gap: 20px;
        align-items: center;

        > #search {
            color: black;
            font-family: Pretendard;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            background: none;
            border: none;

            &:focus {
                outline: none;
            }

            &::placeholder {
                color: rgba(0, 0, 0, 0.3);
            }
        }
    }
</style>
