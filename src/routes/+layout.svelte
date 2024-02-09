<script>
    import { browser } from "$app/environment";
    import {
        loginState,
        saveToLocal,
        unsetLoginState,
    } from "../states/loginState.js";
    import { userState } from "../states/userState.js";

    if (browser) {
        const localState = localStorage.getItem("loginState");

        if (localState) {
            loginState.set(JSON.parse(localState));
        } else {
            saveToLocal($loginState);
        }
    }

    const url = import.meta.env.VITE_BACKEND_URL;

    const userid = $loginState.userId;

    const loadData = async () => {
        const result = await fetch(`${url}/api/user/${userid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await result.json();

        /**
         * @type {{profileUrl: string}}
         */
        const user = data.user;
        userState.set({ profileUrl: user.profileUrl });
    };

    if (userid !== -1) {
        loadData();
    }
    // return false;
</script>

<div id="body">
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
