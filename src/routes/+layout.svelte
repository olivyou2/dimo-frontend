<div id="body">
    <div id="container">
        <slot />
    </div>
</div>

<style>
    @font-face {
        font-family: "Pretendard-Regular";
        src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
        font-weight: 400;
        font-style: normal;
    }

    #body {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #container {
        padding: 92px 40px 40px 40px;
        padding-top: 92px;
        max-width: 1224px;
        width: 100%;
    }
</style>
