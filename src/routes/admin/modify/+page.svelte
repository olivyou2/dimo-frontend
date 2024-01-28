<script>
    import {browser} from "$app/environment";
    let submit_text = "";
    let page_idx = -1;

    if (browser){
        // check query parameter whether for is modify or create
        const url = new URL(location.href);
        const is_modify = url.searchParams.get("usage") === "modify";
        submit_text = is_modify ? "수정" : "추가";
        
        const idx = url.searchParams.get("idx");

        if (is_modify && idx !== null){
            page_idx = parseInt(idx);
        }
    }

    function on_click_back(){
        history.back();
    }
</script>

<div id="container">
    <input type="text" name="category" id="category" placeholder="category">
    <input type="text" name="title" id="title" placeholder="title">
    <input type="text" name="link" id="link" placeholder="link">
    <input type="text" name="tags" id="tags" placeholder="tags">
    <input type="text" name="description" id="description" placeholder="description">
    <button>{submit_text}</button>
    <button on:click={on_click_back}>뒤로</button>
</div>