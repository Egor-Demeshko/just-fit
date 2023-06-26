<script>
    import { onMount } from "svelte";
    import { setErrorMessage } from "$lib/scripts/stores";
    import ErrorMessage from "../../lib/components/ErrorMessage.svelte";
    import GreenOkSingleButton from "../../lib/components/GreenOkSingleButton.svelte";


    let measurement = false;
    let orderAccepted = false;
    let orderId = '';
    let descriptions = {
        'measurement': "Ваши мерки приняты.",
        'order': "Страница информирует вас о том что заказ принят. Номер заказа может быть скопирован с помощью кнопки. С вами обязательно свяжутся для уточнения деталей."
    }

    let show = "";

        onMount( () => {
            let ref = new URL(window.location.href);
            let isSimple = ref.searchParams.get("measurement") || false;
            
            orderId = ref.searchParams.get("id") || "";

            if(isSimple){
                measurement = true;
            } else {
                orderAccepted = true;
            }
        });

    function handelClick(){
        let clipboard = navigator.clipboard;

        clipboard.writeText(orderId)
                .then(()=>{
                    setErrorMessage.set({
                      "show": "show",
                      "title": "Ваш номер заказа скопирован в буфер обмена",
                      "description": ""
                    })
                });        
    };    

</script>


<svelte:head>
    <title>Ваш заказ принят.</title>
    <meta name="description" content={(orderAccepted) ? descriptions.order 
                                                    : descriptions.measurement}>    
</svelte:head>

<main class="accept">
    {#if orderAccepted}
    <div class="accept__cart">

      <h1 class="accept__heading">Заказ принят.</h1>

      <div class="accept__info">
        <div class="accept__info-heading">
          <h2 class="accept__id-heading">Ваш id заказа:</h2>
          <span class="accept__id">{orderId}</span>
          <button on:click={handelClick} class="accept__button" aria-label="Скопировать id заказа в Just Fit">
            <svg class="accept__icon" aria-disabled="true">
              <use href="/lib/icons/general.svg#copy">
            </svg>
          </button>
        </div>

        <div class="accept__text">
          <p class="accept__paragraph">Для подтверждения заказа и уточнения деталей с Вами обязательно
             свяжутся по указанным контактным данным. </p>

          <p class="accept__paragraph">Есть вопросы или пожелания свяжитесь с нами удобным для вас
            спосопобом по кнопке ниже.</p>
        </div>


        <a href="/contacts" class="accept__button" aria-label="Перейти на страницу контактов">КОНТАКТЫ</a>
      </div>
    </div>
    {:else}
    <div class="accept__measurements">
      <span class="accept__sentenсe">Мерки сохранены успешно</span>
    </div>
    {/if}

  </main>

  <ErrorMessage>
    <h3 slot="title">Идендификатор скопирован</h3>
    <span slot="message"></span>
  </ErrorMessage>

  <GreenOkSingleButton/>

  <style>
    .accept{
        box-sizing: border-box;
        height: 100vh;
        width: 100vw;
        background-color: var(--background-pink);
        padding: 120px 28px;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
  }


  .accept__heading{
    font-family: LexendDeca, Ubuntu-Bold, sans-serif;
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    color: var(--hard-black)
  }


  .accept__info{
    background-color: var(--icons-white);
    box-shadow: var(--inner-shadow);
    border-radius: 10px;
    padding: 26px 28px;
    display: flex;
    flex-flow: column;
    gap: 32px;
  }


  .accept__info-heading{
    display: flex;
    flex-flow: column;
    gap: 4px;
  }


  .accept__id-heading{
    font-family: LexendDeca, sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  
  .accept__id{
    margin: 0;
    font-family: LexendDeca, sans-serif;
    font-size: 24px;
    font-weight: bold;
  }

  .accept__text{
    display: flex;
    flex-flow: column;
    gap: 24px;
  }

  .accept__paragraph{
    font-family: Ubuntu, sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin: 0;
  }

  .accept__button{
    border: 2px solid var(--icons-main-red);
    clip:rect(0, 0, 0, 0);
    text-decoration: none;
    text-align: center;
    color: var(--icons-main-red);
    background-color: var(--icons-white);
    font-family: LexendDeca, sans-serif;
    letter-spacing: 0;
    font-size: 24px;
    font-weight: bold;
    padding: 14px 38px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }


  .accept__button:hover{
    color: var(--black);
    background-color: var(--background-grey);
  }


  .accept__button:active{
    color: var(--icons-white);
    background-color: var(--icons-main-red);
  }


  .accept__sentenсe{
    display: block;
    font-family: LexendDeca, sans-serif;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }


  .accept__icon{
    width: 3em;
    height: 3em;
  }

  </style>