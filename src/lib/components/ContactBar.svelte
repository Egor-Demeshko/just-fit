<script>
    let iconsNames = ["question_mark", "mail", "a1", "mts", "viber", "telegram"];
    let vocForAria = {
      "telegram": "написать в телеграм",
      "viber": "написать в вайбер",
      "a1": "позвонить по мобильному номеру а1",
      "mts": "позвонить по мобильному номеру мтс",
      "mail": "связаться по электронной почте",
      "question_mark": "Узнать больше на странице информации"
    };
    let hrefs = {
      "telegram": "https://t.me/egor_demeshko",
      "viber": "viber:chat?number=+375292752562",
      "mail": "mailto: jf-minsk@yandex.by",
      "a1": "tel: +375296107173",
      "mts": "tel: +375292752562",
      "question_mark": "/what-is-it"
    };

</script>

<address>
    {#each iconsNames as icon (icon)}
        <a target="_blank"
            rel="noreferer external"
            label={vocForAria[icon]}
            href={hrefs[icon]}>
                <svg class={icon}>
                    <use href="/src/lib/icons/general.svg#{icon}"></use>
                </svg>
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
    padding: 120px 20px;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: var(--background-grey);
  }

  a{
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  svg{
    height: 100%;
    color: var(--icons-white);
    width: 100%;
    transition: filter 600ms ease;
  }

  a:hover svg{
    transition: all 600ms ease;
    filter: drop-shadow(var(--orange-shadow));
  }
}
</style>