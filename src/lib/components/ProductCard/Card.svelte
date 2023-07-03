<script>
    import Carousel from "./Carousel.svelte";
    import AddToCart from "./AddToCart.svelte";
    import Label from "./Label.svelte";
    import { onMount } from "svelte";
    import { activeFilterElements } from "/src/lib/scripts/stores";
    import { setContext } from "svelte";
    

    /**все значения получаем из strapi*/
    export let category = {};
    export let id = "bikini1";
    export let name = "Трусики от Just Fit";
    /**определяет находимся ли мы на страницу описание единицы товара*/
    export let goodPage = false;
    export let images;
    export let prices;
    let imagesLocal = [];
    let smallImages = '';

    
    smallImages = images.data[0].attributes.formats.thumbnail.url;
    
    setContext("prices", prices)

    /*console.log("***********category", category);*/

    let card;
    let cardWidth;
    let inactive = '';
    let filters = [];
    let card_on_catalog = '';

    if(!goodPage){
        card_on_catalog = "card_on_catalog";
    }


    gainURLS();

    /**function to get images URLS and names that came from strapi. 
     * получаем на файле +page.server.js
    */
    function gainURLS(){
        imagesLocal = Array.from(images.data);
        /*console.log("LOCAL IMAGES on COMPONENT CARD inside gainURLS", imagesLocal);*/
    
        /*console.log("------------GAIN URLS", imagesLocal);*/
        imagesLocal.forEach((element, i, arr) => {
           /* console.log("------------GAIN URLS", element.attributes);*/
        if(!element.attributes) return;
        let name = element.attributes.name;
        let url;
                                             
        if(goodPage){
            url = element.attributes.url;
        } else {
            url = element.attributes.formats.small.url;
        }

        /*console.log("crafring name: ", name);*/
                                                
        arr[i] = {
            "url":  url,
            "name": name
        }
    });   
    }

/*
    console.log("smallImage on COMPONENT CARD ", smallImages);
    console.log("LOCAL IMAGES on COMPONENT CARD", imagesLocal);*/

  

    activeFilterElements.subscribe( (array) => {

        /*console.log("category", category);*/

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
    <div class="card {card_on_catalog}">

        <Carousel {id} {card} {name} {imagesLocal} on:gotogoodspage={pendingGoodsPage}/>


        {#if !goodPage}
            <AddToCart {id} {name} {smallImages}/>
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

    @media(max-width: 52em){
        .card{
            max-width: 430px;
        }
    }

    @media(min-width: 52em){

        .card_wrapper{
            flex: 0 0 22rem;
            display: flex;
            flex-flow: column;
            position: relative;
            gap: 0.5rem;
        }

        .card_on_catalog{
            height: 470px;
        }
    }
</style>