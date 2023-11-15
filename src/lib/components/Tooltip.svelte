<!-- Tooltip.svelte -->
<script context="module">
    import { writable } from 'svelte/store';

    export const tooltipStore = writable(false);
</script>

<script>
    let tooltip;
    let tooltipText = "Скопированно в буфер обмена";
    let timeOutActive = false;

    $: active = $tooltipStore;

    $: if($tooltipStore){
        let {left, top, width, height} = $tooltipStore;
        tooltip.style.left = `${left + width / 2}px`;
        tooltip.style.top = `${top + height + 16}px`;

        if($tooltipStore && !timeOutActive){
            setTimeout(() => {
                timeOutActive = false;
                tooltipStore.set(false);
            }, 2000)
        }
    }

</script>

<div class="tooltip" 
class:active
bind:this={tooltip}>
    <span class="tooltip-text">{tooltipText}</span>
</div>

<style>
    .tooltip {
        position: absolute;
        display: none;
    }

    .active{
        display: block;
        text-align: center;
        color: var(--icons-white);
        background-color: var(--background-grey);
        opacity: .9;
        border-radius: 6px;
        padding: .4rem .875rem;
        font-size: 1rem;
        animation-name: show;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        text-wrap: nowrap;
        z-index: 100;
    }


    @keyframes show{
        0%{
            opacity: 0;
            transform: translate(-50%, 30px) scale(.7);
        }

        15%{
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
        }

        85%{
            opacity: 1;
            transform: translate(-50%, 0);
        }

        100%{
            opacity: 0;
            transform: translate(-50%, 20px);
        }
    }
</style>