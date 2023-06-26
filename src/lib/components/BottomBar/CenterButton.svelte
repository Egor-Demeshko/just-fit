<script>
    import { subscribe, getTotalQuantity } from "$lib/scripts/cart.js";
    import { onMount } from "svelte";

    let total = 0;
    let active = '';

    $: if(total > 0) active = "active";

    onMount( () => {
        updateQuantity();
    });
    

    /** из контроллера cart забирает общее количество
     * этофанкция передает как коллбек в subscribe
    */
    function updateQuantity(){
        total = getTotalQuantity();
    }

    subscribe(updateQuantity);
</script>

<a href="/cart" role="button" aria-label="перейти на страницу корзины">
    <svg aria-hidden="true">
        <use href={"/lib/icons/navigation.svg#cart_icon"}></use>
    </svg>

    <div class="quantity_wrapper {active}">
        <span>{total}</span>
    </div>
</a>

<style>
    a{
        display: flex;
        width: 6.25rem;
        height: 6.25rem;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 50%;
        bottom: 14px;
        left: 50%;
        background-color: var(--icons-main-red);
        transform: translateX(-50%);
        box-shadow: var(--navigationBar-shadow);
        transition: all 600ms ease;
        text-decoration: none;
    }

    a:hover{
        filter: drop-shadow(var(--orange-shadow));
    }


    svg{
        width: 54px;
        height: 54px;
        color: var(--icons-white);
    }

    svg:active{
        color: var(--icons-main-red);
    }


   /* a TODO{
        background-color: var(--background-grey);
    }*/

    .quantity_wrapper{
        width: 39px;
        height: 39px;
        border-radius: 50%;
        display: none;
        justify-content: center;
        align-items: center;
        background-color: var(--goods-accent-orange);
        font-size: 24px;
        font-weight: bold;
        font-family: Inter, sans-serif;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(25%, -35%);
        box-shadow: var(--main-shadow);
    }

    .quantity_wrapper.active{
        display: flex;
    }

    span{
        color: var(--hard-black);
    }

    @media (max-width: 25em){
        a{
            width: 5.5rem;
            height: 5.5rem;
        }
    }

    @media (min-width: 56em){
        a{
            position: relative;
            grid-area: center;
            height: 75px;
            width: 75px;
            border-radius: 0;
            transform: none;
            box-shadow: none;
            bottom: unset;
            left: unset;
            background-color: transparent;
        }

        svg{
            width: 100%;
            height: 100%;
        }
    }
    
</style>