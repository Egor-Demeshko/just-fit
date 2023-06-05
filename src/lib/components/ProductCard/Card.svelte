<script>
    import Carousel from "./Carousel.svelte";
    import AddToCart from "./AddToCart.svelte";
    import Label from "./Label.svelte";
    import { onMount } from "svelte";

    export let id = "bikini1";
    export let name = "Трусики от Just Fit";
    let card;
    let cardWidth;

    onMount(()=>{
        cardWidth = card.offsetWidth;
    })
</script>


<div class="card_wrapper" bind:this={card}>
    <div class="card">
        <Carousel {id} {cardWidth}/>
        <AddToCart {id} {name}/>
        <Label {name}/>
    </div>
</div>

<style>
    .card{
        border-radius: var(--card-border-radius);
        box-shadow: var(--main-shadow);
        position: relative;
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