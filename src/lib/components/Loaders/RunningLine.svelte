<script>
    import { animate } from "motion";


    function firstLine(element){
        animate([element], {x: [0, "40vw", "100vw"], width: ["1.7vw", "14.2vw", "1.7vw"]}, {
            duration: 2,
            easing: "linear",
            repeat: Infinity
        })

        return {
            destroy: animate.stop
        }
    }

</script>


<div class="lines">
    <span use:firstLine></span>
</div>

<style>
    .lines{
        position: relative;
        width: 100%;
        height: 4px;
        background-color: transparent;
    }


    span:nth-child(1){
        top: 0;
        position: absolute;
        display: block;
        background-color: var(--icons-main-red);
        height: 4px;
        border-radius: 4px;
    }
</style>