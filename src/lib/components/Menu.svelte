<script>
    import { menuOpen } from "$lib/scripts/stores.js";
    import { fly } from "svelte/transition";

    let opens = '';
    let closes = '';

    menuOpen.subscribe( (value) => {
        if(value){
            opens = "opens";
        } else if (value === 0){
            return value;
        } else {
            opens = "";
            closes = "closes";
        }

        setTimeout(()=>{
            closes = "";
        }, 600);
    });


    function close(){
        menuOpen.set(false);
    }


    function handelClick(event){
      /*debugger;*/
        if(event.target.tagName === "A"){
          menuOpen.set(false);
        }
    }
</script>


<div class="menu" class:opens class:closes 
in:fly="{{ x:200}}"
out:fly="{{ y:200}}">
    <div class="menu__big-logo-outer">
      <svg class="menu__big-logo" alt="Большой логотип магазина PION">
        <use href="/lib/icons/logo/logo.svg#logo"></use>
      </svg>
    </div>


    <nav class="menu__navigation" on:click={handelClick}>
      <ul class="menu__options-list">
        <li class="menu__option"><span class="menu__text"><a href="/what-is-it" 
            aria-label="перейти на страницу описания компании JUST FIT">О проекте
        </a></span></li>
        <li class="menu__option"><span class="menu__text"
            aria-label="перейти на страницу описания условий доставки"
            title="страница описания условий доставки"><a  href="/delivery">Оплата<br>Доставка
        </a></span></li>
        <li class="menu__option"><span class="menu__text"><a href="/contacts"
            aria-label="На страницу контактов проекта Just-Fit">Контакты
        </a></span></li>
        <li class="menu__option"><span class="menu__text"><a href="/">Каталог
        </a></span></li>
        <button class="menu__button" on:click={close}>Закрыть</button>
      </ul>
    </nav>
</div>


<style>
.menu{
  display: none;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 12px 77px 25vh;
  overflow: hidden;
  box-shadow: 2px 2px 5px black;
  background-color: var(--icons-white);
  z-index: 10;
}

.menu__big-logo-outer{
    height: 100%;
    max-width: 100%;
}

.menu__big-logo{
    width: 100%;
    height: 100%;
}

.opens{
  animation: 600ms ease-in forwards menu-opens;
  display: flex;
}

.closes{
  display: flex;
  animation: 600ms ease-out forwards menu-closes;
}

.menu__options-list{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  max-width: 200px;
  gap: 7.5vh;
}

.menu__option{
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.menu__option::after{
  position: absolute;
  bottom: -16px;
  content: '';
  padding: 3px 103px;
  background-color: var(--background-grey);
  border-radius: 3px;
}

a{
  text-decoration: none;
  color: var(--hard-black);
}

a:visited{
  color: var(--hard-black);
}

.menu__text{
  text-decoration: none;
  font-family: "Ubuntu-Bold", sans-serif;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
}

.menu__button{
    display: block;
    bottom: 0;
    border: none;
    box-shadow: none;
    padding: 1rem 2rem;
    background-color: var(--icons-main-red);
    color: var(--icons-white);
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
    border-radius: 10px;
    transition: background-color 600ms ease;
  }

/*
  .nonactive{
    display: none;
  }*/


@media(min-width: 32em){


  .menu__button:hover{
    background-color: var(--goods-light-orange);
  }
}


@keyframes menu-opens {
  0%{
    height: 0vh;
    opacity: 0;
  }

  100%{
    height: 100vh;
    opacity: 1;
  }
}

@keyframes menu-closes{
  0%{
    height: 100vh;
    opacity: 1;
  }

  100%{
    height: 0vh;
    opacity: 0;
  }
}

</style>