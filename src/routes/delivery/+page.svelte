<script>
    let copy = false;
    let active = '';

    function handelClick(){
        let clipboard = navigator.clipboard;
        clipboard.writeText("№12/12 1988 4523");
        copy = true;

        setTimeout( () => copy = false, 6000);
    }

    $: active = (copy) ? "active" : '';

</script>

<svelte:head>
    <title>Условия доставки на проекте Just Fit</title>
    <meta name="description" content="Описание сроков готовности и доставки на площадке Just Fit.">
</svelte:head>


<div class="delivery">
    <h1 class="delivery__head">Описание условий оплаты, доставки на портале JF</h1>
    <nav>
      <ul class="delivery__anchors">
        <a href="#payment" aria-label="Перейти к разделу оплата"><li>ОПЛАТА</li></a>
        <a href="#time" aria-label="Перейти к разделу срок изготовления"><li>СРОК ИЗГОТОВЛЕНИЯ</li></a>
        <a href="#delivery" aria-label="Перейти к разделу срок изготовлениядоставка"><li>ДОСТАВКА</li></a>
      </ul>
    </nav>


    <main class="delivery__info">

      <article class="delivery__info-block">
        <h2 id="payment">ОПЛАТА<a href="#payment">#</a></h2>
        <div class="delivery__card">
          <h3 class="delivery__heading">ЕРИП</h3>
          <p class="delivery__description">Возможна оплата заранее переводом на карту через ЕРИП.
             Навигация в древе ЕРИП: БАНКИ => БЕЛГАЗПРОМБАНК => Пополнение карт-счета</p>
          <span id="req">№12/12 1988 4523</span>
          <button class="delivery__button" class:active on:click={handelClick} aria-label="Скопировать данные карты">
            
            <div class="delivery__icon">
              <svg>
                <use href="/src/lib/icons/general.svg#copy"></use>
              </svg>
            </div>
            {#if !copy}
                <span>СКОПИРОВАТЬ</span>
            {:else}
                <span>СКОПИРОВАНО</span>
            {/if}         
          </button>
        </div>


        <div class="delivery__card">
          <h3 class="delivery__heading">Оплата наличными</h3>
          <p class="delivery__description">При доставке курьером по г. Минску возможна оплата наличными</p>
        </div>


        <div class="delivery__card">
          <h3 class="delivery__heading">Наложенный платеж</h3>
          <p class="delivery__description">Возможен наложенный платеж при отправке почтовым отправление или экпресс-доставкой.</p>
        </div>
      </article>


      <article class="delivery__info-block">
        <h2 id="time">СРОК ИЗГОТОВЛЕНИЯ<a href="#time">#</a></h2>
        <div class="delivery__card">
          <h3 class="delivery__heading">Информации о готовности</h3>
          <p class="delivery__description">Изделие изготавливается индивидуально для Вас, и по вашим
            <a href="/measurements" target="_blank" class="delivery__out" title="Перейти на страницу снятия мерок">
            МЕРКАМ</a>, срок готовности сейчас составляет до 7 рабочих дней.</p>
        </div>
      </article>


      <article class="delivery__info-block">
        <h2 id="delivery">ДОСТАВКА<a href="#delivery">#</a></h2>
        <div class="delivery__card">
          <h3 class="delivery__heading">Бесплатно</h3>
          <p class="delivery__description">По г.Минск возможна бесплатная доставка курьером</p>
        </div>

        <div class="delivery__card">
          <h3 class="delivery__heading">Почтовые сервисы</h3>
          <p class="delivery__description">Платная доставка почтовыми сервисами <a href="https://belpost.by" class="delivery__out" rel="external">
            БЕЛПОЧТА</a>, <a href="https://evropochta.by" class="delivery__out" rel="external">ЕВРОПОЧТА</a>, согласно тарифам почтового оператора.</p>
        </div>

        <div class="delivery__card">
          <h3 class="delivery__heading">Экспресс-Доставка</h3>
          <p class="delivery__description">Доставка курьерской службой, <a href="https://autolight.by" class="delivery__out" rel="external" aria-label="перейти на страницу курьерской службы СДЕК">Autolight</a></p>
        </div>

        <div class="delivery__card">
          <h3 class="delivery__heading">Доставка в Россию</h3>
          <p class="delivery__description">Возможна доставка в Россию через <a href="https://www.cdek.ru/ru/" class="delivery__out" rel="external" aria-label="перейти на страницу почтового оператора СДЕК">CDEK</a></p>
        </div>
      </article>

    </main>

    <p class="delivery__end">После оформления заказа мы с Вами свяжемся.</p>
  </div>

  <style>
:root{
  --green-shadow: 0 0 6px var(--border-dark-green);
  --red-shadow: 0 0 6px var(--icons-main-red);
  --black-shadow: 0 0 6px var(--black);
  --main-flow-width: clamp(16em, 90%, 22.75em);
}


.delivery__anchors a:first-child,
.delivery__info-block:first-child{
  box-shadow: var(--green-shadow);
  border-radius: 10px;
}

.delivery__anchors a:nth-child(2),
.delivery__info-block:nth-child(2){
  box-shadow: var(--red-shadow);
  border-radius: 10px;
}

.delivery__anchors a:nth-child(3),
.delivery__info-block:nth-child(3){
  box-shadow: var(--black-shadow);
  border-radius: 10px;
}

.delivery__info-block h2{
  width: 80%;
  justify-content: center;
}


.delivery__info-block h2,
.delivery__info-block h2>a{
  color: var(--icons-white);
}

.delivery__info-block:nth-child(1) h2{
  background-color: var(--border-dark-green);
}

.delivery__info-block:nth-child(2) h2{
  background-color: var(--icons-main-red);
}

.delivery__info-block:nth-child(3) h2{
  background-color: var(--hard-black);
}

.delivery{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: calc(var(--bar-height) + 20px + 1.125rem) 0;
  font-family: Ubuntu, sans-serif;
  color: var(--hard-black);
  background-color: var(--bachground-grey);
  background-image: var(--main);
  align-items: center;
}


.delivery__head{
  text-align: center;
  color: var(--hard-black);
  font-size: 1.5em;
  max-inline-size: var(--main-flow-width);
}


.delivery>nav{
  inline-size: var(--main-flow-width);
}


.delivery__anchors{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  color: var(--hard-black);
}

.delivery__anchors li{
  color: var(--hard-black);
  background-color: var(--icons-white);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.25em;
}

.delivery__anchors a{
  text-decoration: none;
  width: 100%;
}

.delivery__anchors a:visited{
  color: var(--hard-black);
}

.delivery__info{
  display: flex;
  flex-direction: column;
  align-items: center;
}


.delivery__info>*{
  margin-top: 3rem;
}


.delivery__info-block{
  position: relative;
  background-color: var(--icons-white);
  padding: 2.625rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  inline-size: var(--main-flow-width)
}

.delivery__info-block>h2{
  position: absolute;
  top: 0;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  background-color: var(--background-grey);
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
}

.delivery__info-block>h2>a{
  text-decoration: none;
}


.delivery__card{
  padding: 1.5rem 1.25rem 1.25rem;
  background-color: var(--background-grey);
  border-radius: 10px;
  text-align: center;
}

.delivery__card>*{
  margin: 1.125rem 0 0;
}


.delivery__card>span{
  display: block;
  font-weight: bold;
  font-size: 1.125rem;
}


.delivery__heading{
  color: var(--icons-white);
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
}


.delivery__description{
  line-height: 1.4;
}


.delivery__button{
  background-color: var(--icons-main-red);
  color: var(--icons-white);
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  border: none;
  padding: 0.5rem 1.125rem;
  border-radius: 10px;
  gap: 1rem;
  transition: background-color 600ms ease;
}

.delivery__button.active{
    background-color: var(--border-dark-green);
}

.delivery__icon{
  block-size: 1.75rem;
  inline-size: 1.75rem;
}

.delivery__icon>svg{
  max-inline-size: 100%;
  max-block-size: 100%;
}

.delivery__out{
  text-decoration: none;
  font-weight: bold;
  padding: 2px 4px;
  background-color: var(--icons-white);
  color: var(--hard-black);
  border-radius: 5px;
}

@media (min-width: 52em){
  .delivery{
    gap: 1em;
    margin-bottom: 0;
  }


  .delivery__head{
    padding: 1.125em 2.5em;
    background-color: var(--icons-white);
    max-inline-size: initial;
    border-radius: 10px;
  }


  .delivery__info{
    max-inline-size: 80em;
    flex-direction: row;
    gap: 5.9em;
    align-items: flex-start;
  }


  .delivery nav{
    display: none;
  }


  .delivery__end{
    font-size: 1.5em;
  }
}

  </style>