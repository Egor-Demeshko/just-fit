<script>
  import LeftButton from './LeftButton.svelte';
  import CenterButton from './CenterButton.svelte';
  import RightButton from './RightButton.svelte';
  import Feedback from './Feedback.svelte';
  import { menuOpen } from '$lib/scripts/stores';
  import { fly } from 'svelte/transition';

  let innerWidth = 0;
</script>

<svelte:window bind:innerWidth={innerWidth}></svelte:window>

{#if !$menuOpen}
<div class="bottom_bar__wrapper"
in:fly = "{{y: 200}}"
out:fly = "{{y: 200}}">
  <div class="bottom_bar__owner">
    <span class="bottom_bar__text">Демешко Егор Дмитриевич<br>
      УНП: СВ0166482<br>
      Дата регистрации: 19 июня 2023г.<br>
      Услуги по пошиву нижнего белья
    </span>
  </div>
  <div class="bottom_bar bottom_bar_before">
    <LeftButton/>

    <CenterButton/>

    {#if innerWidth > 400}
    <Feedback/>
    {/if}

    <RightButton/>
  </div>
</div>
{/if}


<style>
      .bottom_bar__wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: var(--bar-height);
    z-index: 10;
  }

  .bottom_bar__wrapper *{
    box-sizing: border-box;
  }

  .bottom_bar__owner{
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Ubuntu, sans-serif;
  }

  .bottom_bar__text{
    color: var(--icons-white);
  }

  .bottom_bar{
    background-color: var(--background-grey);
    display: flex;
    /* align-items: center; */
    /*box-sizing: border-box;*/
    box-shadow: var(--navigationBar-shadow);
    transition: background 400ms ease-in-out;
    /* height: var(--bar-height); */
  }

  body>.bottom_bar{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 90px;
      z-index: 10;
  }


  .bottom_bar_before::before{
    content: '';
    width: 3px;
    height: 16px;
    background-color: var(--icons-main-red);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .bottom_bar_before-grey::before{
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

  @media (min-width: 56em){
    .bottom_bar__wrapper{
      display: grid;
      grid-template-columns: 1fr 3.5fr;
      background-color: var(--background-green);
      height: calc(var(--pcWidth));
    }

    .bottom_bar__wrapper .bottom_bar__owner{
      display: flex;
      background-color: inherit;
      position: relative;
    }

    .bottom_bar__owner::after{
      content: "";
      position: absolute;
      right:0;
      bottom: 0;
      width: 6px;
      height: 100%;
      background-color: var(--icons-white);
    }

    .bottom_bar__text{
      font-size: 12px;
    }

    .bottom_bar__wrapper > .bottom_bar{
      display: grid;
      padding: 1.5rem 0 1.5rem 1.5rem;
      grid-template-columns: 0.8fr 2fr calc(var(--pcWidth));
      grid-template-areas: "left feed center";
      box-shadow: none;
      background-color: inherit;
      justify-items: center;
    }

    .bottom_bar__wrapper > .bottom_bar::before{
      display: none;
    }
  }

  @media(min-width: 71em){
    .bottom_bar__wrapper .bottom_bar{
      padding: 1.5rem 0 1.5rem 1.5rem;
      grid-template-columns: 1fr 1.7fr calc(var(--pcWidth));
    }

    .bottom_bar__text{
      font-size: 14px;
      font-weight: bold;
    }

  }
</style>    