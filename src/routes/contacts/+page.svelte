<script>
</script>    

<svelte:head>
    <title>Страница контактов проекта Just FIt</title>
    <meta name="description" content="Страница всех контактов проекта Just-Fit. Звоните нам на
    А1 или МТС. Пишите в телеграм или вайбер. Отправьте ваше сообщение по почте. Также можете связать с менеджерами напрямую."/>
</svelte:head>

<address class="contacts-page">

    <div class="contacts-page__top">
      <div class="contacts-page__texts">
      <h1 class="contacts-page__heading">КОНТАКТЫ:</h1>
      <a href="tel: +375292752562" class="contacts-page__numbers">+375292752562</a>
      <a href="mailto: mail@pion.by" class="contacts-page__email">mail@pion.by</a>
    </div>
      <div class="contacts-page__icons">

      <a class="contacts-page__icon" href="tel:+375296107173" title="Позвонить на A1">
        <span class="contacts-page__a1">A1</span>
        <span class="contacts-page__under-heading">A1</span>
      </a>

      <a class="contacts-page__icon" href="https://t.me/egor_demeshko" target="_blank" rel="noopener noreferrer"
      aria-label="Напишите нам в Telegram"
      title="Написать нам в телеграм">
        <svg class="contacts-page__telegram-icon" aria-disabled="true">
          <use href="/src/lib/icons/general.svg#telegram">
        </svg>
        <span class="contacts-page__under-heading">TELEGRAM</span>
      </a>

      <a class="contacts-page__icon" href="viber://chat?number=+375292158632" target="_blank" rel="noopener noreferrer"
      title="Написать нам в вайбер">
        <svg class="contacts-page__viber-icon">
          <use href="/src/lib/icons/general.svg#viber">
        </svg>
        <span class="contacts-page__under-heading">VIBER</span>
      </a>

      <a class="contacts-page__icon" href="tel:+375292752562"
      title="Позвонить на МТС">
        <svg class="contacts-page__mts-icon">
          <use href="/src/lib/icons/general.svg#mts">
        </svg>
        <span class="contacts-page__under-heading">MTS</span>
      </a>

      <a class="contacts-page__icon" href="/" title="Вернуться на главную страницу">
        <svg class="contacts-page__cancel-icon">
          <use href="/src/lib/icons/general.svg#cancel">
        </svg>
      </a>

      <a class="contacts-page__icon" href="#managers"
      title="Посмотреть контакты менеджеров">
        <svg class="contacts-page__human-icon">
          <use href="/src/lib/icons/general.svg#human">
        </svg>
      </a>

    </div>
    </div>

    <div class="contacts-page__manager-list" id="managers">
      <h2 class="contacts-page__h2">Прямые контакты менеджеров:</h2>
      <div class="contacts-page__manager">

      <div class="contacts-page__manager-inner">
        <div class="contacts-page__info">
          <picture class="contacts-page__img-wrapper">
            <source srcset="/images/anastasiya.webp" type="image/webp">
            <img class="contacts-page__image" src="/images/anastasia.jpg" alt="Владыко Анастасия, ваш менеджер"
            height="550" width="550" loading="lazy">
          </picture>
          <span class="contacts-page__name">Анастасия Владыко</span>
        </div>

        <div class="contacts-page__buttons">
        <a class="button" href="https://t.me/anastasiya_vladyko" target="_blank" rel="noreferrer">
          <svg class="button__icon" aria-disabled="true">
            <use href="/src/lib/icons/general.svg#telegram">
          </svg>
          <span class="button__name">TELEGRAM</span>
        </a>

        <a class="button" href="viber://chat?number=+375292752562" target="_blank" rel="noreferrer">
          <svg class="button__icon" aria-disabled="true">
            <use href="/src/lib/icons/general.svg#viber">
          </svg>
          <span class="button__name">VIBER</span>
        </a>
      </div>

      </div>

      <div class="contacts-page__manager-inner">
        <div class="contacts-page__info">
          <picture class="contacts-page__img-wrapper">
            <source srcset="/images/egor.webp" type="image/webp">
            <img class="contacts-page__image" src="/images/megor.jpg" alt="Егор Демешко, ваш менеджер"
            height="550" width="550" loading="lazy">
          </picture>
          <span class="contacts-page__name">Егор Демешко</span>
        </div>

        <div class="contacts-page__buttons">
        <a class="button" href="https://t.me/egor_demeshko" target="_blank" rel="noreferrer nofollow">
          <svg class="button__icon" aria-disabled="true">
            <use href="/src/lib/icons/general.svg#telegram">
          </svg>
          <span class="button__name">TELEGRAM</span>
        </a>

        <a class="button" href="viber://chat?number=+375292158632" target="_blank" rel="noreferrer">
          <svg class="button__icon" aria-disabled="true">
            <use href="/src/lib/icons/general.svg#viber">
          </svg>
          <span class="button__name">VIBER</span>
        </a>
      </div>

      </div>


    </div>
    </div>

  </address>

  <style>
html, body{
  scroll-behavior: smooth;
}


address{
    font-style: normal;
}


.contacts-page{
  display: flex;
  flex-flow: column;
  gap: 200px;
  padding: 126px 8px;
  opacity: 1;
  animation: 500ms linear forwards contacts-page-opens;
}


.contacts-page-closes{
  animation: 500ms linear forwards contacts-page-closes;
}


.contacts-page-inactive{
  display: none;
}


.contacts-page__texts{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0px 2px 24px;
  gap: 28px;
}


.contacts-page__heading{
  font-family: "Ubuntu-Bold", sans-serif;
  font-weight: normal;
  font-size: 32px;
  color: var(--hard-black);
  margin: 0;
}


.contacts-page__numbers{
  color: var(--hard-black);
  font-family: LexendDeca, "Ubuntu-Bold", sans-serif;
  text-decoration: none;
  font-size: 32px;
}


.contacts-page__email{
  color: var(--hard-black);
  font-family: "Ubuntu-Bold", sans-serif;
  text-decoration: none;
  font-size: 32px;
}


.contacts-page__icons{
  border-radius: 5px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 50%);
  justify-content: center;
  grid-auto-flow: row;
  grid-template-rows: 1fr 1fr 0.5fr;
}


.contacts-page__icon{
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 12px;
  align-items: center;
  background-color: var(--icons-main-red);
  padding: 12px 42px;
  text-decoration: none;
  transition: background 400ms ease;
}

.contacts-page__icon:nth-child(1){
  border-radius: 5px 0 0 0;
}

.contacts-page__icon:nth-child(2){
  border-radius: 0 5px 0 0;
}

.contacts-page__icon:nth-child(5){
  border-radius: 0 0 0 5px;
}

.contacts-page__icon:nth-child(6){
  border-radius: 0 0 5px 0;
}

.contacts-page__icon:nth-child(odd)::after{
  content: "";
  padding: 0 1px;
  height: 50%;
  position: absolute;
  right: -1px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--icons-white);
  z-index: 5;
  border-radius: 2px;
}

.contacts-page__icon:nth-child(-n+4)::before{
  content: "";
  padding: 1px 0;
  width: 50%;
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--icons-white);
  z-index: 5;
  border-radius: 2px;
}


.contacts-page__icon:hover{
    background-color: var(--background-grey);
    color: var(--goods-accent-orange);
}


.contacts-page__a1{
  font-family: Inter, sans-serif;
  font-size: 78px;
  color: var(--icons-white);
  font-weight: bold;
  cursor: pointer;
}

.contacts-page__under-heading{
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: var(--icons-white);
}

.contacts-page__telegram-icon{
  color: var(--icons-white);
  width: 82px;
  height: 82px;
}

.contacts-page__viber-icon{
  color: var(--icons-white);
  width: 82px;
  height: 86px;
}

.contacts-page__mts-icon{
  color: var(--icons-white);
  width: 68px;
  height: 86px;
  cursor: pointer;
}

.contacts-page__cancel-icon{
  color: var(--icons-white);
  width: 46px;
  height: 46px;
}

.contacts-page__human-icon{
  color: var(--icons-white);
  width: 44px;
  height: 46px;
}


/*список менедежров*/
.contacts-page__manager-list{
  display: flex;
  flex-flow: column;
  gap: 24px;
  align-items: stretch;
}

.contacts-page__manager{
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 23px 20vw;
  border: 2px var(--grey-border) solid;
  border-radius: 10px;
}

.contacts-page__manager-inner{
  display: flex;
  flex-flow: column;
  gap: 24px;
}

.contacts-page__h2{
  text-align: center;
  margin: 0;
}

.contacts-page__info{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.contacts-page__buttons{
  display: flex;
  flex-flow: column;
  gap: 16px;
}

.contacts-page__name{
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.contacts-page__img-wrapper{
  max-inline-size: 60%;
  max-block-size: 60%;
}

.contacts-page__image{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}


.button{
  border: none;
  outline: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  background-color: var(--icons-main-red);
  border-radius: 10px;
  flex-wrap: wrap;
  text-decoration: none;
}

.button__icon{
  width: 36px;
  height: 36px;
  color: var(--icons-white);
}

.button__name{
  color: var(--icons-white);
  font-family: Ubuntu, sans-serif;
  font-size: clamp(1.125rem, calc(0.8rem + 2vw), 1.5rem);
  font-weight: bold;
}


@media (min-width: 52em) {
  .contacts-page{
    padding: calc(var(--pcWidth) + 2rem) 15vw;
    gap: 270px;
  }
}


@keyframes contacts-page-opens {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes contacts-page-closes {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
  </style>