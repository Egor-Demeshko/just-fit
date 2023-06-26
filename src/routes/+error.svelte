<script>
    import UpperBar from "$lib/components/UpperBar.svelte";
    import ContactBar from "$lib/components/ContactBar.svelte";
</script>


<svelte:head>
    <title>Страница ошибки загрузки данных</title>
    <description>Страница не смогла загрузиться. Будем рады если вы нам наберете!</description>
</svelte:head>


<UpperBar/>
<ContactBar/>
<div class="wrapper">
    <div class="error-message">
            <h1>УПС. <br> Не смогли загрузить данные</h1>
            <p>Добрый день! Нам очень жаль что мы не смогли загрузить запрошенную страницу. Смело пишит нам в мессендежры или звоните!</p>
            <span>😇😊</span>
            <div>
                <a href="tel:+375296107173" aria-label="Позвонить через оператора А1">+375296107173</a>
                <a href="tel:+375292158632" aria-label="Позвонить через оператора МТС">+375292158632</a>
            </div>
    
    </div>
</div>


<style>
    .wrapper{
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error-message{
        max-width: 200px;
        border: 3px solid var(--background-grey);
        text-align: center;
        border-radius: 10px;
        padding: 2rem;
    }

    a{
        display: inline-block;
        padding-top: 1rem;
        text-decoration: none;
        color: var(--hard-black)
    }

    span{
        font-size: 3rem;
    }
</style>