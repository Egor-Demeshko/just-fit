<script>
    import { menuOpen } from "$lib/scripts/stores.js";
    import { onMount } from "svelte"; 


    
  function openMenu(){
      menuOpen.update( (value) => {
        if(value) return false;
        if(!value) return true;
      });
    }

    

    
</script>


<header class="upperBar">

    <address>
        <a class="contact" href="tel:+375296107173">+375296107173</a>
        <a class="contact" href="tel:+375292752562">+375292752562</a>
    </address>


    <a class="logo" title="Перейти на главную страницу" href='/'>
        <svg class="logo__inner" alt="логотип Just Fit">
            <use href="/src/lib/icons/logo/logo.svg#logo"></use>
        </svg>   
    </a>


    <div class="right">
        <a class="mail" href="mailto:contact@jf.by" aria-label="написать на почту"
        >contact@jf.by</a>
        <div class="menu" aria-label="открывает меню" role="button" on:click={openMenu}>
            <svg class="icon" aria-disabled="true">
                <use href="/src/lib/icons/navigation.svg#menu"></use>
            </svg>
        </div>
        <div class="delivery" aria-label="Перейти на описание условий доставки">
            <svg class="icon">
                <use href="/src/lib/icons/navigation.svg#delivery"></use>
            </svg>
        </div>
    </div>


</header>

<style>
    :root{
        --border: 2px var(--icons-white) solid;
    }

    .upperBar {
        padding: 18px 24px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        box-shadow: var(--main-shadow);
        position: fixed;
        top: 0;
        left: 0;
        gap: 2rem;
        width:100%;
        background-color: var(--background-main-white);
        z-index: 10;
    }

  .closed{
    animation: 600ms ease-in forwards upper-closed;
  }

  .opens{
    animation: 600ms ease-out forwards upper-opens;
  }

  .logo{
    color: var(--icons-main-red);
  }


  .logo__inner{
    width: 100%;
    max-block-size: 4.75rem;
  }


  .icon{
    display: flex;
    color: var(--goods-accent-orange);
    max-height: 45px;
    width: 74px;
  }

  .menu{
    display: flex;
  }

  .menu, .delivery{
    justify-content: center;
    align-items: center;
  }

  address{
    display: none;
    grid-template-columns: 1fr 1fr;
  }

  address, .mail{
    text-decoration: none;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-size: 1rem;
    color: inherit;
    text-align: center;
  }

  .mail:hover{
    text-shadow: var(--orange-shadow);
    transition: all 600ms ease;
  }

  .right{
    display: grid;
    grid-template-columns: auto, calc(var(--pcWidth)), calc(var(--pcWidth));
  }

  .mail{
    display: none;
  }

  .delivery{
    display: none;
  }


  @media(min-width: 32em){
    .upperBar{
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      background-color: var(--background-green);
      color: var(--icons-white);
      height: calc(var(--pcWidth));
    }

    .icon{
      color: var(--icons-white);
    }

    address{
      display: flex;
      flex-flow: column;
      align-items: center;
      color: inherit;
    }

    .contact, .mail{
      align-self: center;
      padding: 0.5rem 0.75rem;
      text-decoration: none;
      color: inherit;
    }

    .right{
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-items: center;
    }
  }

  @media(min-width: 40em){
    .contact, .mail{
      font-size: 1.2rem;
    }

    .mail{
      font-weight: bold;
    }

    .logo{
      transition: color 600ms ease;
    }

    .logo:hover{
      color: var(--goods-light-orange);
    }

    .delivery, .menu{
      display: flex;
    }

    .icon{
      transition: 600ms ease all;
    }

    .icon:hover{
      filter: drop-shadow(var(--orange-shadow));
    }
  }

  @media(min-width: 56em){
    .mail{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media(min-width: 71.5em){
    .upperBar{
      padding: 18px 0px 18px 24px;
    }

    address{
      flex-flow: row;
      justify-content: space-around;
      gap: 3rem;
    }

    .contact{
      flex: 1;
    }

    .contact, .mail{
      font-size: 1.5rem;
    }

    .contact{
      border-top: var(--border);
      border-bottom: var(--border);
      border-radius: 16px;
    }

    .contact:hover{
      color: var(--hard-black);
      background-color: var(--icons-white);
      transition: ease 600ms all;
    }

    .icon{
      max-height: 52px;
    }

    .right{
      grid-template-columns: 1fr calc(var(--pcWidth)) calc(var(--pcWidth));
    }
  }


@keyframes upper-closed {
  0%{
    opacity: 1;
    top: 0;
  }

  100%{
    opacity: 0;
    top: -200px;
  }
}

@keyframes upper-opens{
  0%{
    opacity: 0;
    top: -200px;
  }

  100%{
    opacity: 1;
    top: 0;
  }
}
</style>