<!-- Import modules -->
<script>
  const url = import.meta.env.VITE_BACKEND_URL;

  export let data;

  const pages = data.pages;

  /**
   *
   * @param id {number}
   */
  async function remove_page(id) {
    try {
      const result = await fetch(`${url}/api/place/delete/${id}`, {
        method: "POST",
      });

      if (result.status === 200) {
        alert("삭제되었습니다.");
        location.href = "/admin";
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch (e) {
      alert("삭제에 실패했습니다.");
      console.log(e);
    }
  }


  function on_click_add() {
    location.href = "/admin/modify?usage=create";
  }

  /**
   *
   * @param idx {number}
   */
  function on_click_modify(idx) {
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
                remove_page(page.id);
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

  #remove,
  #modify {
    width: 40px;
  }
</style>
