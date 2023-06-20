<script>
    import { createEventDispatcher } from "svelte";
    import { constants } from "$lib/constants";
    import { page } from '$app/stores';
    import Prices from "./Prices.svelte";
    import Tips from "./Tips.svelte";

    export let id = "bikini1";
    export let card;
    export let name = '';
    export let imagesLocal;
    let label = "Галерея изображений изделия " + name;
    let cardWidth = 0;
    console.log("!!!!!!!CAROUSEL!!!!!!!!", imagesLocal);

    const dispatch = createEventDispatcher();

    /** переменная сам компонент*/
    let imagesElement;
    /** влияет на TIPS, определяем какой tip должен быть активным*/
    let imagePosition = 0;
    /** в зависимости от того где компонент находится, определяет отображение границ*/
    let borderRadiusClass = '';

    function arrowHandler(event){
        cardWidth = card.offsetWidth;
        var length = imagesLocal.length - 1;
        var target = event.target;

        if(target.closest('div').dataset.arrow === "left"){
            if(imagePosition === 0) {
                imagesElement.style.transform = `translateX(-${ cardWidth * length }px)`;
                imagePosition = length;
            } else if (imagePosition <= length){
                imagePosition -= 1;
                imagesElement.style.transform = `translateX(-${ cardWidth * imagePosition }px)`;
            }
        }

        if(target.closest('div').dataset.arrow === "right"){
            if(imagePosition === length){
                imagesElement.style.transform = `translateX(0)`;
                imagePosition = 0;
            } else if(imagePosition >= 0) {
                imagePosition += 1;
                imagesElement.style.transform = `translateX(-${ cardWidth * imagePosition}px)`;
            }
        }
    }


    function galleryImgClick(event){
        let imageToShow = imagesElement.querySelector(`img[alt="${event.detail}"]`);
        let offsetLeft = imageToShow.offsetLeft;
        let imagesWidth = imagesElement.offsetWidth;

      if(offsetLeft === 0){
        imagePosition = 0;
        imagesElement.style.transform = `translateX(0)`;
        return;
      }

      imagePosition = Number((offsetLeft / imagesWidth).toFixed(0));
      imagesElement.style.transform = `translateX(-${imagesElement.offsetWidth * imagePosition}px)`;
    }

        
    if($page.url.pathname.startsWith("/good")){
        borderRadiusClass = "border10__andBottom";
    } else {
        borderRadiusClass = "border10";
    }
    


</script>

<svelte:document on:gallery_imgclick={galleryImgClick}></svelte:document>

<div class="carousel radius10" >
    <div class="imagesElement" bind:this={imagesElement} aria-label={label}
    on:click={() => {
        dispatch('gotogoodspage');
    }}>
        {#each imagesLocal as image}
            <link itemprop="image" href={constants.ORIGIN}{image.url}/>
            <img src="{constants.ORIGIN}{image.url}" alt={image.name}
                loading="lazy" width='1000' height='1190' class="image {borderRadiusClass}"/>
        {/each}
    </div>

    <Prices/>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="arrows" on:click={arrowHandler}>
        <div class="arrow_wrapper" data-arrow="left" aria-label="Листать фотографии влево"
        role="button">
            <svg class="arrow" aria-disabled="true">
                <use href="/src/lib/icons/navigation.svg#left_arrow"></use>
            </svg>
        </div>

        <div class="arrow_wrapper" data-arrow="right" aria-label="Листать фотографии вправо"
        role="button">
            <svg class="arrow" aria-disabled="true">
                <use href="/src/lib/icons/navigation.svg#right_arrow"></use>
            </svg>
        </div>
    </div>

    <Tips {imagePosition} {imagesLocal}/>
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

    .imagesElement{
        display: flex;
        max-width: 1000px;
        transition: transform 600ms ease;
        background-color: var(--background-grey);
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

    .border10__andBottom{
        border-radius: 10px;
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