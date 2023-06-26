<script>
  import { getTotalQuantity, subscribe } from "$lib/scripts/cart.js";
  import { fly } from "svelte/transition";
  import { menuOpen } from "$lib/scripts/stores"

  let quantity = 0;

  quantity = getTotalQuantity() || '';
  subscribe( () => {
    quantity = getTotalQuantity();
  });
</script>

{#if !$menuOpen}
<div class="side_buttons"
in:fly="{{x: -100}}"
out:fly="{{x: -100}}">
  <a class="to_catalog" href="/" aria-label="перейти на главную сраницу">
    <div class="goods__return-icon">
      <svg>
        <use href="/lib/icons/general.svg#catalog_small">
      </svg>
    </div>
    <span>Перейти в каталог</span>
  </a>

  <a class="to_cart" href="/cart" aria-label="перейти на главную сраницу">
    <div class="goods__return-icon">
      <svg>
        <use href="/lib/icons/navigation.svg#cart_icon">
      </svg>
    </div>
    <span >Перейти в корзину</span>
    <div class="quantity {(quantity) ? "active" : ""}">
      <span>{quantity}</span>
    </div>
  </a>
</div>
{/if}

<style>
    .side_buttons{    
        box-sizing: border-box;
        font-family: Ubuntu, sans-serif;
        position: fixed;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .to_catalog,
    .to_cart{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: var(--icons-white);
        background-color: var(--icons-main-red);
        gap: 0.5rem;
        text-decoration: none;
        font-size: 1.5em;
        padding: 1rem;
        border-radius: 5px;
        transition: background 600ms ease;
    }

    .to_cart{
      position: relative;
    }

    .to_catalog:hover,
    .to_cart:hover{
        background-color: var(--goods-light-orange);
    }

    .goods__return-icon{
        block-size: 3rem;
        inline-size: 3rem;
    }

    .goods__return-icon svg{
        width: 100%;
        height: 100%;
    }  

    .goods__return span{
        font-weight: bold;
    }

    .quantity{
      display: none;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background-color: var(--goods-accent-orange);
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 2rem;
      height: 2rem;
      box-shadow: var(--main-shadow);
    }

    .quantity.active{
      display: flex;
    }


    @media (max-width: 92em){

      .side_buttons{
        grid-area: return;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: static;
      }
    }
</style>