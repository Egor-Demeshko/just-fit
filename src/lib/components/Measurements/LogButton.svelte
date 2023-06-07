<script>
    import { measureSMSvarificationState, circles, okbutton } from "$lib/scripts/stores.js";
    import FirebaseClient from "../firebaseClient.svelte";

    export let getSms;
    export let form;

    let buttonId = "process";
    let button;
    let showInner = true; // убирает внутренню разметку буттона, необходимо для recaptcha
    let showAndProceed;
    let green = '';

    function startProcess(){
        let input = document.getElementById("sms");
        
        if(input.checkValidity()){
          circles.set(true);
          showAndProceed();
        }
    }

    measureSMSvarificationState.subscribe( (verified) => {
        if(verified) circles = false;
    });

    $: green = ($okbutton) ? "green" : ''; 
</script>

<button bind:this={button} id={buttonId} type="button" 
aria-label="Получить смс код для поддверждения номера"
class:green
on:click={startProcess}>
<!--{#if showInner}-->
    {#if $circles}
        <div>
            <span class="big"></span>
            <span class="small"></span>
            <span class="big"></span>  
        </div>
    {:else}
        {#if $okbutton}
          <svg>
            <use href="/src/lib/icons/navigation.svg#ok"></use>
          </svg>
        {:else}
          <span>Получить СМС</span>
        {/if}
    {/if}
<!--{/if}-->

</button>

<FirebaseClient {buttonId} {button} bind:showInner={showInner} 
bind:showAndProceed={showAndProceed} {getSms} {form}/>


<style>
button{
    text-decoration: none;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--gap);
    gap: 4px;
    color: var(--icons-white);
    background-color: var(--icons-main-red);
    font-family: LexendDeca, sans-serif;
    letter-spacing: 0;
    font-size: 24px;
    font-weight: bold;
    padding: 14px 38px;
    border-radius: 10px;
    border: none;
    position: relative;
}

button:disabled{
    cursor: auto;
}


div{
    display: flex;
    gap: 4px;
    height: 24px;
    width: 80px;
    justify-content: space-around;
    align-items: center;
}

.big,
.small{
    background-color: var(--background-main-white);
    display: block;
    border-radius: 50%;
    box-sizing: border-box;
}


.small{
    padding: 8px;
    animation: makeBig alternate infinite 600ms;
}


.big{
    padding: 12px;
    animation: makeSmall alternate infinite 600ms;
}

.green{
  background-color: var(--border-dark-green);
}

use, svg{
  height: 100%;
  width: 100%;
}


@keyframes makeBig {
  from{
    padding: 8px;
  }
  to{
    padding: 12px;
  }
}

@keyframes makeSmall {
  from{
    padding: 12px;
  }
  to{
    padding: 8px;
  }
}
</style>
