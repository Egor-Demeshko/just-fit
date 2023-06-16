<script>
    import { addToCart, removeFromCart } from "$lib/scripts/cart.js";
    import { setErrorMessage } from "$lib/scripts/stores.js";
    import { menuOpen } from "$lib/scripts/stores.js";
    import { fly } from "svelte/transition";
    

    let hidebar = "";
    export let id;
    export let name;


    $: if($menuOpen){
        console.log("hiding");
        hidebar = "hidebar";
    } else {
        hidebar = "";
    }



    function removeOne(){
        removeFromCart(id);
        setErrorMessage.set({
            "show": "show",
            "title": "Товар удален",
            "message": `Одна единица товара ${name} удалена`
        })
    }

    function addOne(){
        addToCart(id);
        setErrorMessage.set({
            "show": "show",
            "title": "Товар добавлен",
            "message": `Одна единица товара ${name} добавлена`
        })
    }
</script>    

{#if !$menuOpen}
<div class="before_grey" class:hidebar aria-live="polite"
    in:fly={{y: 100}}
    out:fly={{y: 100}}>
    <button aria-label="Убрать данный товар из корзины" title="Убрать данный товар из корзины"
        class="left" on:click={removeOne}>
        <svg aria-disabled = "true">
            <use href="/src/lib/icons/general.svg#minus"></use>
        </svg>
    </button>
    <a class="center" href="/contacts" 
        aria-label="Перейти в корзину"
        title="Перейти на страницу корзины">
        <svg aria-disabled="true">
            <use class="message" href="/src/lib/icons/navigation.svg#message"></use>
        </svg>
    </a>
    <button class="right" aria-label="добавить товар в корзину"
    title="Добавить товар в корзину" on:click={addOne}>
        <svg aria-disabled="true">
            <use href="/src/lib/icons/general.svg#plus"></use>
        </svg>
    </button>
    <!--<button class="ok" class:inactive on:click={closeMenu} aria-label="Закрыть окно меню">
        <svg aria-disabled>
            <use href="/src/lib/icons/navigation.svg#ok"></use>
        </svg>
    </button>-->
</div>
{/if}

<style>
    button{
        appearance: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
        padding: 0;
        margin: 0;
    }

    div{
        position: fixed;
        bottom: 0rem;
        width: 100%;
        height: var(--bar-height);
        z-index: 10;
        background-color: var(--background-grey);
        display: flex;
        color: var(--icons-white);
        border-radius: 10px;
        box-shadow: var(--main-shadow);
    }

    .hidebar{
        display: none;
    }

    div *{
        box-sizing: border-box;
    }

    .before_grey::before{
        content: '';
        width: 3px;
        height: 16px;
        background-color: var(--background-grey);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }

    .left,
    .right,
    .center,
    .ok{
        max-block-size: 100%;
    }

    .right:disabled,
    .right:disabled:hover{
        background-color: var(--light-grey);
        color: var(--black);
        cursor: auto;
    }

    svg{
        height: 100%;
        width: 100%;
    }

    .center svg{
        width: 50px;
        height: 50px;
    }

    .left{
        flex: 1;
        display: flex;
        align-items: center;
        padding: 16px;
        background-color: var(--icons-main-red);
        transition: all 600ms ease;
        color: inherit;
    }

    .left:hover, 
    .right:hover{
        background-color: var(--background-grey);
        color: var(--hard-black);
    }

    .right{
        flex: 1;
        display: flex;
        align-items: center;
        padding: 16px;
        background-color: var(--background-green);
        color: inherit;
        transition: all 600ms ease;
    }

    .center{
        display: flex;
        width: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 50%;
        bottom: 14px;
        left: 50%;
        background-color: var(--background-grey);
        transform: translateX(-50%);
        box-shadow: var(--navigationBar-shadow);
        transition: all 600ms ease;
        color: inherit;
    }

    .center:hover{
        filter: drop-shadow(var(--orange-shadow));
    }

    .ok{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 14px;
        background-color: var(--background-green);
    }

    .inactive{
        display: none;
    }


    @media (min-width: 50em){
        div{
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            bottom: 2rem;
        }

        .left{
            border-radius: 10px 0 0 10px;
        }

        .right{
            border-radius: 0 10px 10px 0;
        }
    }

</style>