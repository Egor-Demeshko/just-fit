<script>
    import { popUpShow } from "$lib/scripts/stores.js";


    export let message = false;
    export let sms = false;

    let active = "";

    $: if($popUpShow) {
        active = "active";
    } else {
        active = "";
    }
    
</script>

<div class="pop-up" class:active>
    <div class="pop-up__inner">

        {#if message}
            <p class="pop-up__text">Все Ваши мерки хранятся под идентификацонным номером.
            Мы предполагаем Вам выбор, какой идентификацонный номер использовать.
            Можно использовать сгенерированный сайтом  или использовать номер вашего мобильного телефона как ID. </p>
            <p class="pop-up__text">Для того чтобы использовать номер вашего мобильного телефона как
                идендификационный номер (учетный номер) для хранения ваших мерок,
                достаточно в поле ввести ваш мобильный номер, без знака +, т.е. в формате <i>375291111111</i>.
            </p>
            <p class="pop-up__text">Чтобы получить сгенерированный сайтом номер нажмите кнопку получить ID.
            </p>
            <button type="button" class="pop-up__button" on:click={ () => active = ''}>ПОНЯТНО</button>
        {/if}

    </div>
  </div>


  <style>
    
    .pop-up{
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        background-color: var(--transparent);
        padding: 120px 32px;
        display: none;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        gap: 44px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
  }


  .active{
    display: flex;
  }


  .pop-up__inner{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: var(--icons-white);
    border-radius: 10px;
    border: none;
    box-shadow: var(--main-shadow);
    padding: 24px 16px;
  }


  .pop-up__text{
    font-family: "Ubuntu-Bold", sans-serif;
  }

  .pop-up__text_big{
    font-size: 1.5em;
  }


  .pop-up__button{
    padding: 16px 24px;
    background-color: var(--icons-main-red);
    color: var(--icons-white);
    border: none;
    border-radius: 10px;
    font-family: "Ubuntu-Bold", sans-serif;
    font-size: 24px;
  }


  .pop-up__button:not(.pop-up__button_inactive):active{
    background-color: var(--icons-white);
    color: var(--black);
  }


  .pop-up__button_inactive{
    border: none;
    background-color: var(--background-pink);
  }


  .pop-up__id{
    color: var(--icons-main-red);
    font-size: 22px;
  }

  .pop-up__code-input{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .pop-up__sms-input{
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 24px;
  }

  .pop-up__input{
    font-family: LexendDeca, sans-serif;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    width: 100%;
    text-align: center;
  }

  .pop-up__input_verifed{
    outline: 3px solid var(--background-green);
  }

  .pop-up__cancel{
    width: 100%;
    padding: 16px;
    background-color: var(--icons-main-red);
    border: none;
    border-radius: 10px;
  }

  .pop-up__cancel-icon{
    color: var(--icons-white);
    width: 46px;
    height: 46px;
  }


  .pop-up__buttons-wrapper{
    display: flex;
    flex-flow: column;
    padding: 5%;
    gap:24px;
    flex: 1;
  }


  .pop-up__text-wrapper{
    flex: 2;
  }

  @media screen and (max-width: 350px) {
    .pop-up__text{
      font-size: 14px;
    }
  }
  </style>
