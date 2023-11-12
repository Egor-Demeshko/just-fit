<script>
  import { onDestroy } from "svelte";

    export let number;
    export let active;
</script>

{#if number !== null && number !== undefined}
<div on:click={ () => document.dispatchEvent( new CustomEvent("pagination_gange", { detail: (number + 1) }))}
    role="button" title="Отобразить часть товара, страница {number + 1}">
    <svg class:active viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg"
    aria-disabled="true">
        <path d="M14.1091 0.5H37.8692C41.768 0.5 44.429 4.44438 42.969 8.05955L35.1925 27.3156C34.3528 29.3948 32.335 30.7561 30.0927 30.7561H6.14747C2.22924 30.7561 -0.432338 26.7755 1.06478 23.1546L9.02643 3.89851C9.8769 1.84156 11.8833 0.5 14.1091 0.5Z"/>
    </svg>
    <span>{number + 1}</span>
</div>
{/if}

<style>
    :root{
        --x_offset: 9px;
    }

    div{
        position: relative;
        height: 2rem;
    }

    svg{
        height: 100%;
        fill: var(--icons-main-red);
        stroke: var(--icons-main-red);
        stroke-width: 1;
        transition: fill 400ms ease, stroke 400ms ease;  
        cursor: pointer;
    }

    svg.active{
        fill: var(--background-pink);
    }

    svg:hover{
        fill: var(--background-pink);
        stroke: var(--background-pink);
    }

    span{
        display: block;
        color: var(--icons-white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.125rem;
        line-height: 1;
        font-weight: bold;
        cursor: pointer;
        pointer-events: none;
    }
</style>