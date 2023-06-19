<script>
    import Carousel from "./Carousel.svelte";
    import AddToCart from "./AddToCart.svelte";
    import Label from "./Label.svelte";
    import { onMount } from "svelte";
    import { activeFilterElements } from "/src/lib/scripts/stores";
    

    export let category = {};
    export let id = "bikini1";
    export let name = "Трусики от Just Fit";
    /**определяет находимся ли мы на страницу описание единицы товара*/
    export let goodPage = false;
    export let images;

    let card;
    let cardWidth;
    let inactive = '';
    let filters = [];

  

    activeFilterElements.subscribe( (array) => {

        console.log("category", category);

        for(let filter of Object.values(category)){
            
            if (array.length > 0){

                if(array.includes(filter)){
                    inactive = '';
                } else if(!array.includes(filter)){
                    inactive = 'inactive';
                };
                
            } else if(array.length == 0){
                    if(filter == "special"){
                        inactive = 'inactive';
                    } else {
                        inactive = '';
                    }
                }
        }
    });
 

    onMount(()=>{
        
    });

    function pendingGoodsPage(){
        /**prevent opening new page on goods description page*/
        if(goodPage) return;

        window.location.href = window.location.origin + `/good/${id}`;
    }
</script>





<div class="card_wrapper" bind:this={card} class:inactive>
    <div class="card">
        <Carousel {id} {card} {name} {images} on:gotogoodspage={pendingGoodsPage}/>

        {#if !goodPage}
            <AddToCart {id} {name}/>
        {/if}

        <Label {name}/>
    </div>
</div>

<style>
    .card{
        border-radius: var(--card-border-radius);
        box-shadow: var(--main-shadow);
        position: relative;
    }

    .card_wrapper.inactive{
        display: none;
    }

    @media(min-width: 52em){

        .card_wrapper{
            flex: 0 0 22rem;
            display: flex;
            flex-flow: column;
            position: relative;
            gap: 0.5rem;
        }
    }
</style>