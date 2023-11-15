<script>
    let iconsNames = ["delivery", "question_mark", "mail", "a1", "mts", "viber", "telegram"];
    let vocForAria = {
      "telegram": "написать в телеграм",
      "viber": "написать в вайбер",
      "a1": "позвонить по мобильному номеру а1",
      "mts": "позвонить по мобильному номеру мтс",
      "mail": "связаться по электронной почте",
      "question_mark": "Узнать больше на странице информации",
      "delivery": "перейти на страницу описания условий доставки"
    };
    let hrefs = {
      "telegram": "https://t.me/just_fit_belarus",
      "viber": "viber:chat?number=+375292752562",
      "mail": "mailto: mail@just-fit.by",
      "a1": "tel: +375296107173",
      "mts": "tel: +375292752562",
      "question_mark": "/what-is-it",
      "delivery": "/delivery"
    };
    let labels = {
      "telegram": "на телеграм",
      "viber": "на вайбер",
      "a1": "на а1",
      "mts": "на мтс",
      "mail": "на почту",
      "question_mark": "Обо мне",
      "delivery": "Доставка"
 
    }

</script>

<address>
    {#each iconsNames as icon (icon)}
        <a target="_blank"
            rel="noreferer external"
            aria-label={vocForAria[icon]}
            href={hrefs[icon]}>
                <svg class={icon}>
                    <use href="/lib/icons/general.svg#{icon}"></use>
                </svg>
                <span>{labels[icon]}</span>
        </a>
    {/each}
</address>

<style>
address{
  display: none;
  height: 100vh;
  z-index: 3;
}

@media (min-width: 52em){
  address{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: calc(var(--pcWidth));
    padding: 50px 22px 110px;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: var(--background-grey);
    background-image: linear-gradient(to bottom, var(--background-green) 10%, var(--dark-grey) 40%,  var(--dark-grey) 60%, var(--background-green) 90%);
  }

  a{
    height: 8vh;
    text-decoration: none;
    color: var(--icons-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    text-align: center;
    font-size: .875rem;
    font-weight: bold;
    font-style: normal;
  }

  svg{
    height: 100%;
    color: var(--icons-white);
    width: 100%;
    transition: filter 600ms ease;
  }

  a:hover svg,
  a:hover span{
    transition: all 600ms ease;
    filter: drop-shadow(var(--orange-shadow));
  }
}
</style>