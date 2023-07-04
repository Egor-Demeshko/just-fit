<script>
    import { addToCart, removeFromCart } from "$lib/scripts/cart.js";

    export let id = "bikini1";
    export let name = "Трусики от Just Fit";
    /*export let smallImages;*/


    function handelClick(event){
        let target = event.target;
        let remove = target.closest('div[data-cart=remove]');
        let add = target.closest('div[data-cart=add]');

        if(remove && remove.getAttribute("role") === "button"){
            removeFromCart(id);
        }

        if(add && add.getAttribute("role") === "button"){

            addToCart(id);
        }
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="block" on:click={handelClick}>
    <div role="button" class="icon_wrapper left" data-cart="remove" aria-label="убрать одну единицу {name} из корзины">
        <svg aria-disabled="true" class="icon">
            <use href="/lib/icons/general.svg#minus"></use>
        </svg>
    </div>

    <div role="button" class="icon_wrapper right" data-cart="add" aria-label="добавить одну единицу {name} в корзину">
        <svg aria-disabled="true" class="icon">
            <use href="/lib/icons/general.svg#plus"></use>
        </svg>
    </div>
</div>

<style>
    .block{
        display: flex;
        width: 100%;
        height: 10.79%;
        justify-content: space-between;
        border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);
    }

    .icon_wrapper{
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 6px 0;
        background-color: var(--icons-light-red);
    }

    .right{
        border-left: 2px solid var(--icons-white);
        border-radius: 0 0 var(--card-border-radius) 0;
    }

    .left{
        border-right: 2px solid var(--icons-white);
        border-radius: 0 0 0 var(--card-border-radius);
    }

    .icon{
        width: 39px;
        height: 39px;
        color: var(--icons-white);
    }
</style>