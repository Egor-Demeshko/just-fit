<script>
    import { onDestroy, onMount } from "svelte";
    import { blur } from "svelte/transition";

    let icon;
    let show = false;
    let remove = false;

    onMount( () => {
        /** получить данные о высоте экрана
         * записать эти данные в стиль top элемента icon
        */
       if(icon){
           let height = window.innerHeight;
           icon.style.top = (height - height/4) + "px";
       }
    });

    function scroll(){
        if(window.scrollY > 200){
            show = true;
        } else {
            if(show && window.scrollY <= 200){
                remove = true;
            }
            
            if(remove){
                setTimeout( () => {
                    remove = false;
                    
                    show = false
                }, 400);
            } else {
                show = false;
            }
        }
    }

  function click(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
</script>

<svelte:document on:scroll={scroll}/>


<div bind:this={icon}
class:show
class:remove
on:click={click}
aria-label="прокрутить до панели фильтра"
title="прокрутить до панели фильтра">
    <svg aria-disabled="true">
        <use 
        href="/lib/icons/navigation.svg#filter_icon"></use>
    </svg>
</div>

<style>
    div{
        display: none;
        width: 3rem;
        height: 3rem;
        position: fixed;
        right: 1%;
        transform: translateY(-50%);
        z-index: 100;
        background-color: var(--background-grey);
        padding: .8rem;
        border-radius: 15px;
        transform-origin: top right;
    }

    svg{
        color: var(--icons-white);
        width: 100%;
    }

    div.show{
        display: flex;
        justify-content: center;
        align-items: center;
        animation: reveal 400ms ease forwards;
    }

    div.remove{
        animation: remove 400ms ease forwards;
    }

    @media (min-width: 32em){
        div,
        div.show{
            display: none;
        }
    }

    @keyframes reveal{
        0%{
            opacity: 0;
            transform: rotateZ(-90deg);
        }
        100%{
            opacity: 1;
            transform: rotateZ(0);
        }
    }

    @keyframes remove{
        0%{
            opacity: 1;
            transform: rotateZ(0);
        }
        100%{
            opacity: 0;
            transform: rotateZ(-90deg);
        }
    }
</style>