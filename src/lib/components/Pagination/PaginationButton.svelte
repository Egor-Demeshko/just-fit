<script>

    export let total = 0;
    let active = false;

</script>

<svelte:document on:pagination_gange={ () => active = false}></svelte:document>

<div class="wrapper" on:click={ () => { 
    active = !active;
    
    if(active){
        document.dispatchEvent( new CustomEvent("pagination_all") );
    } else {
        document.dispatchEvent( new CustomEvent("pagination_gange", { detail: 1 }) );
    }
}}
title="Загрузить и отобразить полный перечень товаров или только часть" 
role="button" 
aria-label="Загрузить и отобразить весь перечень товаров или только часть">
    <div class="background"
    class:active>
    </div>
    {#if active}
        <p>Показать по частям</p>
    {:else}
        <p>Показать все, ({total})</p> 
    {/if}
</div>

<style>
    .wrapper{
        position: absolute;
        top: 160%;
        left: 50%;
        transform: translateX(-60%);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1.5rem; 
        margin-left: 1rem;
        cursor: pointer;
        height: 130%;
    }


    .background{
        position: absolute;
        transform: skewX(-22deg);
        width: 100%;
        height: 100%;
        background-color: var(--icons-main-red);
        border-radius: 6px;
        z-index: -1;
        transition: background 400ms ease;
        border: 1px solid var(--icons-main-red);
    }


    .background.active{
        background-color: var(--background-pink);
    }



    .wrapper:hover .background{
        background-color: var(--background-pink);
    }

    p{
        font-size: 1.125rem;
        font-weight: bold;
        color: var(--icons-white);
        margin: 0;
        cursor: pointer;
        pointer-events: none;
    }

    @media(min-width: 32em){
        .wrapper{
            top: 0;
            transform: translateX(0);
            height: 100%;
        }
    }
</style>


