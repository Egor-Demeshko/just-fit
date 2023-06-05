<script>
    import { onMount } from "svelte";

    export let names = [];
    export let imagePosition = 0;

    const active = 'active';
    let tips;
    let collection;
    let activeElement;

    onMount( () => {
        collection = tips.children;
        activeElement = tips.querySelector('.active');
    });

    $: changeActive(imagePosition);

    function changeActive(imagePosition){
        if(!collection) return;

        let elementToBeActive = collection.item(imagePosition);

        activeElement.classList.toggle("active");
        elementToBeActive.toggle("active");
    }

</script>

<div class="tips" bind:this={tips}>
    {#each names as name, i (name)}
        {#if i == 0}
            <div class="element {active}">
            </div>
        {/if}
        <div class="element">
        </div>
    {/each}    

</div>

<style>
    .tips{
        position: absolute;
        display: flex;
        justify-content: center;
        width: 90%;
        gap: 8px;
        bottom: 18px;
        padding: 2px 9px;
        background-color: transparent;
        border-radius: 2px;
        left: 50%;
        transform: translateX(-50%);
    }

    .element{
        flex: 1 1;
        box-sizing: border-box;
        max-width: 50px;
        padding: 3px 19px;
        background-color: var(--icons-white);
        border-radius: 2px;
        transition: background 400ms ease;
        box-shadow: var(--main-shadow);
    }

    .active{
        background-color: var(--goods-accent-orange);
        transition: background 400ms ease;
    }
</style>
