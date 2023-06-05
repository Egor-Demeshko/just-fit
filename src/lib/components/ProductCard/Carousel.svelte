<script>
    import { getImages } from "$lib/goods/images.js";
    import { getPrices } from "$lib/goods/goods.js";
    import Prices from "./Prices.svelte";
    import Tips from "./Tips.svelte";

    export let id = "bikini1";
    export let cardWidth = 0;

    /*@type Array*/
    const names = getImages(id);
    const {previous, current} = getPrices(id);


    let images;
    let imagePosition = 0;

    function arrowHandler(event){
        var length = names.length - 1;
        var target = event.target;

        if(target.closest('div').dataset.arrow === "left"){
            if(imagePosition === 0) {
                images.style.transform = `translateX(-${ cardWidth * length }px)`;
                imagePosition = length;
            } else if (imagePosition <= length){
                imagePosition -= 1;
                images.style.transform = `translateX(-${ cardWidth * imagePosition }px)`;
            }
        }

        if(target.closest('div').dataset.arrow === "right"){
            if(imagePosition === length){
                images.style.transform = `translateX(0)`;
                imagePosition = 0;
            } else if(imagePosition >= 0) {
                imagePosition += 1;
                images.style.transform = `translateX(${ cardWidth * imagePosition}px)`;
            }
        }
    }


</script>

<div class="carousel radius10" >
    <div class="images" bind:this={images}>
        {#each names as name}
            <img src="/goods/{id}/{name}_small.webp" alt={name}
                loading="lazy" width='1000' height='1190' class="image border10"/>
        {/each}
    </div>

    <Prices {current} {previous}/>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="arrows" on:click={arrowHandler}>
        <div class="arrow_wrapper" data-arrow="left">
            <svg class="arrow">
                <use href="/src/lib/icons/navigation.svg#left_arrow"></use>
            </svg>
        </div>

        <div class="arrow_wrapper" data-arrow="right">
            <svg class="arrow">
                <use href="/src/lib/icons/navigation.svg#right_arrow"></use>
            </svg>
        </div>
    </div>

    <Tips {imagePosition} {names}/>
</div>

<style>
    .carousel{
        position: relative;
        height: 89.21%;
        overflow-x: hidden;
        border-radius: 5px;
    }

    .radius10{
        border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
    }

    .images{
        display: flex;
        max-width: 1000px;
        transition: transform 600ms ease;
    }

    .image{
        flex: 1;
        max-inline-size: 100%;
        block-size: auto;
        border-radius: 5px;
        object-fit: contain;
    }

    .border10{
        border-radius: 10px 10px 0 0;
    }

    .arrows{
        position: absolute;
        top: 50%;
        transform: translateY(50%);
        left: 24px;
        right: 24px;
        display: flex;
        justify-content: space-between;
        z-index: 5;
    }

    .arrow{
        color: var(--background-grey);
        filter: drop-shadow(0 0 6px var(--black));
        width: 35px;
        height: 71px;
    }

    .arrow_wrapper{
        padding: 10px 0 10px 10px;
    }
</style>