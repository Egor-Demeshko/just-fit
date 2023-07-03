<script>
    //import { getFirstImage } from "$lib/goods/images.js";
    //import { getProductName, getPrice } from "$lib/goods/goods.js";
    import { onMount } from 'svelte';
    import { removeGood, setQuantity/*, getImageUrl, getImageName */} from "$lib/scripts/cart.js";
    import { env } from "$env/dynamic/public";

    export let id = "";
    export let quantity = 0;
    export let total = 0;
    export let name = '';
    export let imageUrl = '';
    export let price;
    const PUBLIC_STRAPI_ORIGIN = env.PUBLIC_STRAPI_ORIGIN;
    let cartItem;

    /*console.log("imageURL: ", imageUrl);*/
    /**
     * Получение фотографий, согласно айди товара.
    */
    onMount( () => {
      
    });


    function handelClick(event){
      let target = event.target;

      if(target.closest('.cart-item__minus')){
        /*console.log("minus clicked");*/
          if(quantity == 1) {
            remove();
            return;
          };
          if(quantity > 1) quantity -= 1;
      }

      if(target.closest(".cart-item__plus")){
        quantity = +quantity + 1;
      }

      setQuantity(id, quantity);
    }


    async function remove(){
      let toDelete = confirm("Это приведет к удалению этого товара, вы точно хотите удалить элемент из корзины?");
      if(!toDelete) return;

      quantity = 0;
      await removeGood(id);
      if(cartItem) cartItem.remove();
      
    }

    
    /*$: if(quantity > 0)setQuantity(id, quantity);*/
    $: total = +(price * quantity).toFixed(2);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click={handelClick} bind:this={cartItem}>
    <div class="cart-item">
        <div class="cart-item__image-wrapper">
            <img src="{PUBLIC_STRAPI_ORIGIN}{imageUrl}" alt="{name} от JF" 
            class="cart-item__image" loading="lazy" width="1000" height="1190">
        </div>
   
        <div class="cart-item__info">
   
           <div class="cart-item__name">
             <span class="cart_item__text">{name}</span>
           </div>
   
           <div class="cart-item__control">
             <svg class="cart-item__minus">
               <use href="/lib/icons/general.svg#minus_small">
             </svg>
             <input type="text" inputtype="numeric" class="cart-item__quantity"
              value={quantity}>
             <svg class="cart-item__plus">
               <use href="/lib/icons/general.svg#plus_small">
             </svg>
           </div>
        </div>
   
        <div class="cart-item__summary">
          <span class="cart-item__total">{total}р.</span>
          <span class="cart-item__close" on:click|stopPropagation={remove}>X</span>
        </div>

      </div>
</li>

<style>
    .cart-item{
    font-size: 1rem;
    display: flex;
    flex-flow: row;
    border-radius: 5px;
    box-shadow: var(--main-shadow);
    background-color: var(--background-pink);
    box-sizing: border-box;
    max-height: 8em;
    max-block-size: 8em;
  }

/*блок фото*/
  .cart-item__image-wrapper{
    flex: 1;
  }

  .cart-item__image{
    width: 100%;
    height: 100%;
    border-radius: 5px 0 0 5px;
    border-right: 3px solid var(--icons-white);
  }

/*блок название и контрола*/
  .cart-item__info{
    flex: 3;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-right: 3px solid var(--icons-white);
  }

  .cart-item__name{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 3px 0;
    border-bottom: 3px solid var(--icons-white);
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-item__control{
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 3px 0;
  }

  .cart_item__text{
    font-family: "Ubuntu-bold", sans-serif;
    font-size: 1em;
  }

  .cart-item__minus{
    height: 9px;
    width: 28px;
    color: var(--icons-white);
    transition: all 600ms ease;
  }

  .cart-item__plus{
    height: 29px;
    width: 29px;
    color: var(--icons-white);
    transition: all 600ms ease;
  }

  .cart-item__minus:hover, .cart-item__plus:hover{  
    filter: drop-shadow(var(--orange-shadow));
  }

  .cart-item__quantity{
    font-family: LexendDeca, sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    color: var(--background-grey);
    text-align: center;
    appearance: textfield;
    width: 17%;
    height: 80%;
    outline: none;
    border: none;
    border-radius: 5px;
  }


/*блок итоговой суммы*/
  .cart-item__summary{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .cart-item__total{
    font-family: LexendDeca, sans-serif;
    font-weight: bold;
  }

  .cart-item__close{
    font-family: LexendDeca, sans-serif;
    padding: 2px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(20%, -30%);
    background: orange;
    width: 50%;
    box-shadow: var(--main-shadow);
    border-radius: 10px;
    transition: all 400ms ease;
  }

  .cart-item__close:hover{
    filter: grayscale(80%);
    transform: translate(20%, -30%) scale(110%);
    box-shadow: none;
  }


  @media(min-width: 52em){
    .cart-item__image-wrapper{
      flex: 0.5;
    }

    .cart_item__text{
      font-size: 1.3em;
    }

    .cart-item__total{
      font-size: 1.6em;
    }
  }
</style>  