<script lang="ts">
    /**
     * @type {string} query
     */
    export let query;
</script>

<div id="container">
    <img id="search_icon" src="/search.svg" alt="" width="16" height="16" />
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
        gap: 12px;
        align-items: center;

        > #search {
            color: black;
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            width: 100%;

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

    @media (max-width: 800px) {
        #container {
            gap: 10px;
        }
        #search_icon {
            width: 14px;
            height: 14px;
        }
        #search {
            font-size: 14px !important;
        }
    }
</style>
