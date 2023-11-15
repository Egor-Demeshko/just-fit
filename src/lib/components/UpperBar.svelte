<script>
    import { menuOpen } from "$lib/scripts/stores.js";
    import RunningLine from "$lib/components/Loaders/RunningLine.svelte";
    import Tooltip, {tooltipStore} from "$lib/components/Tooltip.svelte";

    /**флаг который отвечает за лоадер*/
    let loaderActive = false;

    
  function openMenu(){
      menuOpen.update( (value) => {
        if(value) return false;
        if(!value) return true;
      });
  }

  function copyToClipboard(e){
    const target = e.target;
    const coors = target.getBoundingClientRect();
    const link = target.previousElementSibling;
    tooltipStore.set({left: coors.left, top: coors.top, width: coors.width, height: coors.height});

    navigator.clipboard.writeText(link.getAttribute("href"));
  }
    
    
</script>

<svelte:document on:loader={ () => loaderActive = !loaderActive }></svelte:document>


<header class="upperBar">

    <address>
        <Tooltip/>
        <div class="contact" >
          <a class="contact__link" href="tel:+375296107173">+375296107173</a>
          <svg viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={copyToClipboard}
          role="button" aria-label="Скопировать номер телефона +375296107173 в буфер обмена">
            <path d="M2.60076 5.42165L2.6 22.1C2.6 25.5463 5.28199 28.3661 8.67262 28.5862L9.1 28.6L20.5774 28.6018C20.0415 30.1156 18.5974 31.2 16.9 31.2H7.8C3.49218 31.2 0 27.7078 0 23.4V9.1C0 7.40163 1.08561 5.95682 2.60076 5.42165ZM22.1 0C24.2539 0 26 1.74609 26 3.9V22.1C26 24.2539 24.2539 26 22.1 26H9.1C6.94609 26 5.2 24.2539 5.2 22.1V3.9C5.2 1.74609 6.94609 0 9.1 0H22.1ZM22.1 2.6H9.1C8.38203 2.6 7.8 3.18203 7.8 3.9V22.1C7.8 22.818 8.38203 23.4 9.1 23.4H22.1C22.818 23.4 23.4 22.818 23.4 22.1V3.9C23.4 3.18203 22.818 2.6 22.1 2.6Z" fill="white"/>
          </svg>
        </div>
        <div class="contact">          
          <a class="contact__link" href="tel:+375292158632" aria-label="Позвонить через мобильного оператора МТС">+375292158632</a>
          <svg viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={copyToClipboard}
          role="button" aria-label="Скопировать номер телефона +375292158632 в буфер обмена">
            <path d="M2.60076 5.42165L2.6 22.1C2.6 25.5463 5.28199 28.3661 8.67262 28.5862L9.1 28.6L20.5774 28.6018C20.0415 30.1156 18.5974 31.2 16.9 31.2H7.8C3.49218 31.2 0 27.7078 0 23.4V9.1C0 7.40163 1.08561 5.95682 2.60076 5.42165ZM22.1 0C24.2539 0 26 1.74609 26 3.9V22.1C26 24.2539 24.2539 26 22.1 26H9.1C6.94609 26 5.2 24.2539 5.2 22.1V3.9C5.2 1.74609 6.94609 0 9.1 0H22.1ZM22.1 2.6H9.1C8.38203 2.6 7.8 3.18203 7.8 3.9V22.1C7.8 22.818 8.38203 23.4 9.1 23.4H22.1C22.818 23.4 23.4 22.818 23.4 22.1V3.9C23.4 3.18203 22.818 2.6 22.1 2.6Z" fill="white"/>
          </svg>
        </div>
    </address>


    <div class="logo__wrapper">
      <a class="logo" title="Перейти на главную страницу" href='/'>
          <svg class="logo__inner" alt="логотип Just Fit">
              <use href="/lib/icons/logo/logo.svg#logo"></use>
          </svg>   
      </a>
    </div>


    <div class="right">
        <!--<a class="mail" href="mailto:mail@just-fit.by" aria-label="Написать на почту mail@just-fit.by"
        >mail@just-fit.by</a>-->
        <div class="menu" aria-label="открывает меню" role="button" on:click={openMenu}>
            <svg class="icon" aria-disabled="true">
                <use href="/lib/icons/navigation.svg#menu"></use>
            </svg>
        </div>
    </div>


    {#if loaderActive}
      <div class="lines_wrapper">
        <RunningLine/>
      </div>
    {/if}


</header>

<style>
    :root{
        --border: 2px var(--icons-white) solid;
    }

    .upperBar {
        padding: 12px 24px;
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

  .logo{
    color: var(--icons-main-red);
  }


  .logo__inner{
    width: 100%;
    height: 3.5rem;
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

  .menu{
    justify-content: center;
    align-items: center;
  }

  address{
    display: none;
    grid-template-columns: 1fr 1fr;
    text-decoration: none;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-size: 1rem;
    color: inherit;
    text-align: center;
    position: relative;
  }

  .right{
    display: grid;
    grid-template-columns: auto, calc(var(--pcWidth)), calc(var(--pcWidth));
  }

  .lines_wrapper{
    width: 100%;
    position: absolute;
    bottom: 0;
  }


  @media(min-width: 32em){
    .upperBar{
      display: flex;
      align-items: center;
      align-content: center;
      background-color: var(--background-green);
      color: var(--icons-white);
      height: 4.25rem;
      gap: clamp(1rem, 15.8vw, 19rem);
      padding: 0;
      box-shadow: none;
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

    .contact{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 0.75rem;
      color: inherit;
      gap: 1rem;
      height: inherit;
    }

    .contact__link{
      text-decoration: none;
      cursor: pointer;
      color: inherit;
    }

    .contact svg{
      display: none;
    }

    .right{
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }

  @media(min-width: 40em){
    .logo__wrapper{
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--background-green);
      border-radius: 0 0 30px 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 21rem;
    }

    .contact{
      font-size: 1.2rem;
    }

    .logo{
      transition: color 600ms ease;
    }

    .logo:hover{
      color: var(--goods-light-orange);
    }


    .logo__inner{
      width: clamp(6.5rem, 12.65vw, 15.2rem);
      height: clamp(3.75rem, 3.9vw, 4.75rem);
    }

    .menu{
      display: flex;
      width: 7.5rem;
    }

    .icon{
      transition: 600ms ease all;
    }

    .icon:hover{
      filter: drop-shadow(var(--orange-shadow));
    }
  }

  @media(min-width: 52em){

    .upperBar{
      display: grid;
      grid-template-columns: 1fr 1fr;
      
    }

    .logo__wrapper{
      position: absolute;
      padding: 0 3rem .875rem;
    }

    address{
      height: inherit;
    }
  }

  @media(min-width: 71.5em){

    address{
      flex-flow: row;
      justify-content: space-around;
      gap: clamp(.5rem, 2.5vw, 3rem);
    }

    .contact{
      flex: 1;
    }

    .contact{
      font-size: 1.5rem;
    }

    .contact svg{
      display: block;
      height: 60%;
      cursor: pointer;
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