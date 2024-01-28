<script>
    /**
     * @description The pages database
     * @type {{category: string, title: string, link: string, tags: string[], description: string, id: number}[]}
     */
    let pages = [
  {
    "id": 1,
    "category": "mock",
    "title": "ui design",
    "link": "https://uidesign.com",
    "tags": [
      "#free",
      "#easy_to_use"
    ],
    "description": "A free mock up tool for designing UI interfaces."
  },
  {
    "id": 2,
    "category": "icon",
    "title": "graphic design",
    "link": "https://icondesign.com",
    "tags": [
      "#premium",
      "#variety"
    ],
    "description": "A premium tool for a large variety of icon designs."
  },
  {
    "id": 3,
    "category": "illustration",
    "title": "artists",
    "link": "https://illustration.com",
    "tags": [
      "#creative",
      "#interactive"
    ],
    "description": "An interactive platform for artists to create and share illustrations."
  },
  {
    "id": 4,
    "category": "mock",
    "title": "web design",
    "link": "https://webdesignmock.com",
    "tags": [
      "#easy_to_use",
      "#professional"
    ],
    "description": "An easy to use tool for professional web designs."
  },
  {
    "id": 5,
    "category": "icon",
    "title": "app developer",
    "link": "https://appicon.com",
    "tags": [
      "#free",
      "#app_icons"
    ],
    "description": "A free tool designed for app developers to create unique app icons."
  },
  {
    "id": 6,
    "category": "illustration",
    "title": "children books",
    "link": "https://childrenbookart.com",
    "tags": [
      "#creative",
      "#colorful"
    ],
    "description": "A tool for creating colorful and creative illustrations for children's books."
  },
  {
    "id": 7,
    "category": "mock",
    "title": "product design",
    "link": "https://productmock.com",
    "tags": [
      "#3D_view",
      "#realistic"
    ],
    "description": "A realistic tool with 3D views for product designs."
  },
  {
    "id": 8,
    "category": "icon",
    "title": "graphic design",
    "link": "https://graphicicon.com",
    "tags": [
      "#customizable",
      "#wide_range"
    ],
    "description": "A customizable tool with a wide range of graphic icons."
  },
  {
    "id": 9,
    "category": "illustration",
    "title": "digital art",
    "link": "https://digitalillustration.com",
    "tags": [
      "#free",
      "#high_quality"
    ],
    "description": "A free tool for creating high-quality digital illustrations."
  },
  {
    "id": 10,
    "category": "mock",
    "title": "interior design",
    "link": "https://interiordesignmock.com",
    "tags": [
      "#interactive",
      "#design_ideas"
    ],
    "description": "An interactive tool for creating interior design ideas."
  },
  {
    "id": 11,
    "category": "icon",
    "title": "web design",
    "link": "https://webicon.com",
    "tags": [
      "#free",
      "#variety"
    ],
    "description": "A free tool for a large variety of web icons."
  },
  {
    "id": 12,
    "category": "illustration",
    "title": "comics",
    "link": "https://comicillustration.com",
    "tags": [
      "#creative",
      "#easy_to_use"
    ],
    "description": "A creative and easy to use tool for comic illustrations."
  },
  {
    "id": 13,
    "category": "mock",
    "title": "shirt design",
    "link": "https://mockshirt.com",
    "tags": [
      "#customizable",
      "#3D_view"
    ],
    "description": "A customizable tool with 3D views for shirt designs."
  },
  {
    "id": 14,
    "category": "icon",
    "title": "mobile apps",
    "link": "https://mobileicon.com",
    "tags": [
      "#premium",
      "#variety"
    ],
    "description": "A premium tool for diverse mobile app icons."
  },
  {
    "id": 15,
    "category": "illustration",
    "title": "portrait",
    "link": "https://portraitillustration.com",
    "tags": [
      "#interactive",
      "#detailed"
    ],
    "description": "An interactive tool for detailed portrait illustrations."
  },
  {
    "id": 16,
    "category": "mock",
    "title": "furniture design",
    "link": "https://furnituredesignmock.com",
    "tags": [
      "#easy_to_use",
      "#realistic"
    ],
    "description": "An easy to use tool for realistic furniture designs."
  },
  {
    "id": 17,
    "category": "icon",
    "title": "UI design",
    "link": "https://uicon.com",
    "tags": [
      "#free",
      "#user_friendly"
    ],
    "description": "A free and user-friendly tool for UI icons."
  },
  {
    "id": 18,
    "category": "illustration",
    "title": "magazine covers",
    "link": "https://magcoverillustration.com",
    "tags": [
      "#customizable",
      "#creative"
    ],
    "description": "A customizable and creative tool for magazine cover illustrations."
  },
  {
    "id": 19,
    "category": "mock",
    "title": "menu design",
    "link": "https://menumock.com",
    "tags": [
      "#easy_to_use",
      "#customizable"
    ],
    "description": "An easy to use and customizable tool for menu designs."
  },
  {
    "id": 20,
    "category": "icon",
    "title": "website",
    "link": "https://webicon.com",
    "tags": [
      "#wide_range",
      "#premium"
    ],
    "description": "A premium tool for a wide range of website icons."
  }
    ];

    function on_click_add(){
        location.href = "/admin/modify?usage=create";
    }

    /**
     * 
     * @param idx {number}
     */
    function on_click_modify(idx){
        location.href = `/admin/modify?usage=modify&idx=${idx}`;
    }
</script>

<div id="container">
    <div id="buttons">
        <button on:click={on_click_add}>페이지 추가</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>카테고리</th>
                <th>제목</th>
                <th>링크</th>
                <th>태그</th>
                <th>설명</th>
                <th>삭제</th>
                <th>수정</th>
            </tr>
        </thead>
        <tbody>
            {#each pages as page}
                <tr>
                    <td>{page.category}</td>
                    <td>{page.title}</td>
                    <td>{page.link}</td>
                    <td>{page.tags.join(", ")}</td>
                    <td>{page.description}</td>
                    <td id="remove">
                        <button
                            on:click={() => {
                                pages = pages.filter((p) => p.id !== page.id);
                            }}
                        >
                            삭제
                        </button>
                    </td>
                    <td id="modify">
                        <button
                            on:click={() => {
                                on_click_modify(page.id);
                            }}
                        >
                            수정
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        border-bottom: 1px solid #ddd;
        padding: 10px;
    }

    td {
        border-bottom: 1px solid #ddd;
        padding: 10px;
    }

    #remove,#modify{
        width: 40px;
    }
</style>