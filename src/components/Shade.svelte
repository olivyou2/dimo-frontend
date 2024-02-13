<script lang="ts">
    type shadeDirection = 
        "leftToRight" |
        "rightToLeft"
    ;

    export let shadeEnable = true;
    export let shade: shadeDirection = "leftToRight";

    let className: string;

    $: {
        if (shadeEnable) {
            if (shade === "leftToRight"){
                className = "ltr";
            }else if (shade === "rightToLeft"){
                className = "rtl";
            }
        }

        console.log(className);
    }
</script>
<div id="shade" class={className}><span></span></div>

<style>
    #shade {
        position: absolute;
        width: 20px;
        top: 0px;
        height: 100%;
    }

    #shade.ltr{
        background: linear-gradient(270deg, rgba(251, 251, 251, 0.00) 0%, white 34.5%);
        left: -20px;

        /* left: calc(100% - 20px); */
    }

    #shade.rtl{
        background: linear-gradient(90deg, rgba(251, 251, 251, 0.00) 0%, white 34.5%);
    
        left: calc(100%);
    }
</style>