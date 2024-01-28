<script>
    import PageButton from "../components/PageButton.svelte";
    import PageEdit from "../components/PageEditModal.svelte";
    import Sort from "../components/Sort.svelte";

    /**
     * @description tags
     * @type {string[]}
     */
    let tags = ["tag1", "tag2", "tag3"];

    /**
     * @description selected tags
     * @type {string[]}
     */
    let selected_tags = [];

    /**
     * @description selected pages
     * @type {{[key: number]: boolean}}
     */
    let selected_pages = {};

    /**
     * @description pages_database
     * @type {{title: string, link: string, tags: string[], description: string, id: number}[]}
     */
    let pages_database = [];

    /**
     * @description pages will be rendered
     * @type {{title: string, link: string, tags: string[], description: string, id: number}[]}
     */
    let pages = [];

    /**
     * @description search field
     * @type {string}
     */
    let search = "";

    /**
     * @description sort field
     * @type {string}
     */
    let sort = "가나다순";

    /**
     * @description add mockup tags
     * @returns {void}
     */
    let add_mockup_tags = () => {
        pages_database.push({
            title: "title",
            link: "link",
            tags: ["tag1", "tag2"],
            description: "description",
            id: 1,
        });

        pages_database.push({
            title: "title22222222222222222222222222222222",
            link: "link",
            tags: ["tag1", "tag2"],
            description: "description",
            id: 2,
        });

        pages_database.push({
            title: "title",
            link: "link22222222222222222222222222222222222222222",
            tags: ["tag1", "tag2"],
            description: "description",
            id: 3,
        });

        pages_database.push({
            title: "title",
            link: "link",
            tags: [
                "tag1",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
            ],
            description: "description",
            id: 4,
        });

        pages_database.push({
            title: "title",
            link: "link",
            tags: [
                "tag1",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag2",
                "tag3",
                "tag2",
                "tag2",
            ],
            description:
                "국내에서 가장 널리 사용되는 한글 무료 폰트 모음 사이트. 국내에서 가장 널리 사용되는 한글 무료 폰트 모음 사이트.",
            id: 5,
        });
    };

    /**
     * @description on tag update
     * @param updated_tags {string[]}
     * @param updated_search {string}
     * @param selected_pages {{[key: number]: boolean}}
     */
    const on_filter_updated = (
        updated_tags,
        updated_search,
        selected_pages,
    ) => {
        pages = [];

        if (updated_tags.length === 0 && updated_search === "") {
            pages = [...pages_database];
            return;
        }

        pages = pages_database.filter((page) => {
            if (updated_search !== "") {
                if (
                    !page.title.includes(updated_search) &&
                    !page.description.includes(updated_search)
                ) {
                    return false;
                }
            }

            if (updated_tags.length !== 0) {
                if (
                    !updated_tags.every((tag) => page.tags.includes(tag)) &&
                    !page.tags.some((tag) => updated_tags.includes(tag))
                ) {
                    return false;
                }
            }

            return true;
        });
    };

    /**
     * @description on click tag menu
     * @param tag {string}
     */
    const on_click_tag_menu = (tag) => {
        if (selected_tags.includes(tag)) {
            selected_tags = selected_tags.filter((t) => t !== tag);
        } else {
            selected_tags = [...selected_tags, tag];
        }
    };

    const on_click_add_menu = () => {
        page_edit_modal = true;
    };

    // if selected_tags or search updated, call on_filter_updated
    $: on_filter_updated(selected_tags, search, selected_pages);

    add_mockup_tags();

    let page_edit_modal = false;
</script>

<div id="container">
    <div id="top">
        <div id="search">
            <img src="/search.svg" alt="" />
            <input
                type="text"
                name="name"
                id="name"
                placeholder="페이지 검색"
                value={search}
                on:keydown={(e) => {
                    const target = e.currentTarget;
                    setTimeout(() => {
                        search = target.value;
                    }, 5);
                }}
            />
        </div>
        <Sort bind:selected={sort} />
    </div>
    <div id="bottom">
        <div id="tags">
            {#each tags as tag}
                <button
                    class="tag {selected_tags.includes(tag) ? 'activated' : ''}"
                    on:click={() => on_click_tag_menu(tag)}
                >
                    <span>#</span>
                    <span>{tag}</span>
                </button>
            {/each}
        </div>
        <div id="buttons">
            <button class="button" id="add" on:click={on_click_add_menu}>
                <span>페이지 추가</span>
            </button>
            <button class="button" id="delete">
                <span>페이지 제거</span>
            </button>
            <button class="button" id="modify">
                <span>페이지 수정</span>
            </button>
        </div>
        <div id="selected">
            {#if Object.values(selected_pages).filter((item) => item === true).length > 0}
                <span
                    >{Object.values(selected_pages).filter(
                        (item) => item === true,
                    ).length}개 선택됨</span
                >
            {/if}
        </div>
    </div>
    <div id="content">
        {#each pages as page}
            <PageButton
                title={page.title}
                link={page.link}
                tags={page.tags}
                description={page.description}
                clickable={true}
                bind:clicked={selected_pages[page.id]}
            />
        {/each}
    </div>
</div>

<PageEdit
bind:show={page_edit_modal}/>

<style lang="scss">
    #container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1224px;
        gap: 20px;

        > #top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            > #search {
                display: flex;
                align-items: center;
                gap: 10px;

                > #name {
                    border: none;
                    background: none;
                    color: rgba(0, 0, 0, 0.7);
                    font-family: Pretendard;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }

                > #name::placeholder {
                    color: rgba(0, 0, 0, 0.3);
                }

                > #name:focus {
                    outline: none;
                }
            }
        }

        > #bottom {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 15px;

            > #buttons {
                display: flex;
                gap: 10px;

                > .button {
                    background: white;
                    border: none;
                    border-radius: 0px;
                    padding: 10px 15px;

                    color: black;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;

                    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));

                    cursor: pointer;
                    user-select: none;
                }
            }

            > #tags {
                display: flex;
                flex-direction: row;
                gap: 10px;

                > .tag {
                    padding: 10px;
                    border-radius: 10px;
                    color: rgba(0, 0, 0, 0.7);
                    background-color: white;
                    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
                    user-select: none;
                    border: none;
                    cursor: pointer;
                    transition: all 0.1s ease-in-out;
                }

                > .tag.activated {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            }
        }

        > #content {
            display: flex;
            flex-wrap: wrap;
            gap: 40px 24px;
            align-items: flex-start;
            align-content: flex-start;
        }
    }
</style>
