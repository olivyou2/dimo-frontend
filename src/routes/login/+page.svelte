<script lang="ts">
    export let data;

    const logoin_url = data.login_url;

    let checked: boolean = false;

    function on_click_login() {
        location.href = logoin_url;
    }

    function on_click_keep() {
        checked = !checked;
    }
</script>

<div id="wrapper">
    <div id="container">
        <div id="login_row">로그인하기</div>

        <div id="btn_row">
            <button id="btn" on:click={on_click_login}>
                <img src="/google.svg" alt="" id="google"/>
                구글 계정으로 로그인
            </button>
        </div>

        <div id="keep_login_row">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="chkbox" on:click={on_click_keep}>
                {#if checked}
                    <img src="/checked.svg" alt="" id="chk" />
                {/if}
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="label" on:click={on_click_keep}>로그인 상태 유지</div>
        </div>
    </div>
</div>

<style lang="scss">
    #wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100vh - 120px);
    }
    #container {
        #login_row {
            display: flex;
            justify-content: center;

            color: rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Pretendard;
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        #btn_row {
            margin-top: 120px;
            display: flex;
            justify-content: center;

            #btn {
                width: 318px;
                height: 82px;

                gap: 21px;
                display: flex;
                justify-content: center;
                align-items: center;

                color: rgba(0, 0, 0, 0.8);
                font-family: Pretendard;
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                border: 1px solid rgba(0, 0, 0, 0.2);
                background: #fff;

                cursor: pointer;
            }
        }

        #keep_login_row {
            margin-top: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            color: rgba(0, 0, 0, 0.8);
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            #chkbox {
                width: 20px;
                height: 20px;

                border: 1px solid rgba(0, 0, 0, 0.5);
                background: #fff;

                position: relative;
                cursor: pointer;

                #chk {
                    width: 16px;
                    height: 16px;

                    position: absolute;
                    top: 2px;
                    left: 2px;
                }
            }
            #label {
                cursor: pointer;
            }
        }
    }

    @media (max-width: 800px) {
        #login_row{
            font-size: 24px !important;
        }

        #google {
            width: 32px;
            height: 32px;
        }

        #btn {
            width: 190px !important;
            height: 41px !important;

            font-size: 12px !important;
        }

        #keep_login_row {
            font-size: 12px !important;
        }

        #chkbox {
            width: 16px !important;
            height: 16px !important;

            #chk {
                width: 12px !important;
                height: 12px !important;
                top: 2px !important;
                left: 2px !important;
            }
        }
    }
</style>
