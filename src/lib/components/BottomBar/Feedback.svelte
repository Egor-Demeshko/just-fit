<script>
    import { startStatements } from "./general_scripts/statements.js";
    import { onMount } from 'svelte';

    //TODO нормальный рандом

    let message;
    let id;



    onMount(() => {
        let interval;
        const {getStatement, getIds, getRandomId} = startStatements();

        changeView();

        interval = setInterval( changeView, 12000); 

        return () => {
            clearInterval(interval);
        }


        function changeView(){
                id = getRandomId();
                message = getStatement(id);
            return interval;
        }
    });



</script>


<div class="feedback">
    <div id={id}>
        {#if id}
        <img src="/src/lib/icons/general/{id}.svg#{id}" alt="логотип {id}"/>
        <div class="text_wrapper">
            <span class="message">
                {message}
            </span>
        </div>
        {/if}
    </div>
</div>

<style>
.feedback{
    display: none;
    background-color: var(--icons-white);
}

@media(min-width: 56em){
    .feedback{
        display: flex;
        align-items: center;
        font-family: Ubuntu, sans-serif;
        font-weight: bold;
        border-radius: 10px;
        padding: 0.2rem 1rem;
        border: 2px solid var(--icons-main-red);
        width: 100%;
        box-sizing: border-box;
    }

    div[id]{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        animation: 6s ease-in-out forwards unvisible;
    }

    .visible{
        display: flex;
        animation: 11s ease-in-out forwards makevisible;
    }

    .message{
        font-size: 0.75rem;
    }
}

@media(min-width: 71em){
    .feedback{
        padding: 0.6rem 2rem;
    }

    .message{
        font-size: 16px;
    }
}

@keyframes makevisible {
  0%{
    opacity: 0;
  }

  15%{
    opacity: 1;
  }

  85%{
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
}
</style>