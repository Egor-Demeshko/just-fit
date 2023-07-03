<script>
    import { onMount } from "svelte";
    import { activeFilterElements } from "$lib/scripts/stores.js";
    import { menuOpen } from "../scripts/stores";
    import { fly } from "svelte/transition";

    let activeFilters = [];
    let filters = [
        {
            id: "hide",
            label: "спрятать панель фильтра",
            show: ""
        },
        {
            id: "stringy",
            label: "отобразить мужские стринги",
            show: ""
        },
        {
            id: "sleepy",
            label: "отобразить мужские слипы",
            show: ""
        },
        {
            id: "boxer",
            label: "отобразить мужские боксеры",
            show: ""
        },
        {
            id: "special",
            label: "специальное кружевное мужское белье",
            show: ""
        },
        {
            id: "filter_icon",
            label: "открыть панель фильтра",
            show: "show"
        }
    ];
    let innerWidth;
    let openAnimationClass = '';
    let inactive = '';


    $: if($menuOpen){
      inactive = "inactive";
    } else {
      inactive = "";
    }


    function changeShown(width){
        if(width >= 550){
            if(filters[1]['show']) return;

            filters.forEach((item)=> {
                item.show = (item.id === "filter_icon" || item.id === "hide")? "" : "show";
            });
        } else if(width < 550) {
            if(!filters[1]['show'] || filters[0]['show']) return;

            filters.forEach((item)=> {
                item.show = (item.id === "filter_icon")? "show" : "";
            });
        }

        filters = filters;
    }


    function changeShowOnClick(){
        if(openAnimationClass){
            filters.forEach( (item) => {
                if(item.id === "filter_icon") {
                    item.show = '';
                    return;
                };
                
                item.show = "show";
            });

        } else {
            filters.forEach( (item) => {
                if(item.id === "filter_icon"){
                    item.show = "show";
                    return;
                }

                item.show = "";
            });
        }

        filters = filters;
    }


    onMount( ()=>{
        let unsubscribe = activeFilterElements.subscribe((value) => {
            activeFilters = value;
        });

        return () => {
            unsubscribe();
        }
    });

    /*looking after changes of browser sizes, to draw right*/
    $: changeShown(innerWidth);

    function handelClick(event){
        let target = event.target;
         
        if(target.id === "filter_icon" || target.closest("#filter_icon")){
            openAnimationClass = "filter_open";
            setTimeout( changeShowOnClick, 600);
            return;
        }

        if(target.closest("#hide")){
            openAnimationClass = '';
            changeShowOnClick();
            return;
        }

        if(target.tagName === "svg" || target.tagName == "use"){
            let svg= target.closest('svg');
            let id = (target.closest('div')).id;

            svg.classList.toggle('activated');

            /*если activated тогда добавляем в store(activeFilterElements)*/
            if(svg.classList.contains('activated')){
                if(activeFilters.includes(id)) return;
                  /*console.log("activefilterS: ", activeFilters);*/
                  activeFilterElements.set([...activeFilters, id]);
                  /*console.log("store: ", $activeFilterElements);*/
            } else {
               activeFilters = activeFilters.filter( (value) => {
                    if(value != id) return value;
               });
               activeFilterElements.set([...activeFilters]);
               /*console.log("minus ", $activeFilterElements);*/
            }
        }
    }
</script>  


<svelte:window bind:innerWidth={innerWidth}/>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="filter {openAnimationClass}" on:click={handelClick} class:inactive>
    {#each filters as {id, label, show} (id)}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div id={id} 
             class="icon {show}" 
             tabindex="0" 
             aria-label={label} 
             title={label}>
            <svg class={id} 
                 aria-hidden>
                <use href="/lib/icons/navigation.svg#{id}"></use>
            </svg>
        </div>
    {/each}
</div>


<style>
    :root{
        --close: 97px;
        --open-height-standart: 33.5rem;
    }

  .filter{
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 32px;
    position: fixed;
    left: 0;
    bottom: var(--bar-height);
    border-radius: 0 40px 0 0;
    padding: 24px 8px 18px;
    background-color: var(--background-pink);
    box-shadow: var(--main-shadow-spread);
    z-index: 7;
    width: 93px;
    animation: 600ms forwards filter_closing ease;
    overflow: hidden;
  }

  .icon{
    display: none;
    justify-content: center;
    align-items: center;
    color: var(--icons-white);
    transition: color 600ms ease;
    padding: 2px;
    height: 3.75rem;
  }

  .show{
    display: flex;
  }

  svg{
    height: 100%;
    transition: color 600ms ease;
  }

  .activated{
    color: var(--icons-main-red);
  }

  .filter_open{
    animation: 600ms forwards filter_opening ease;
  }

  .inactive{
    display: none;
  }


  @media(min-width: 40em){
    .filter{
      bottom: 50%;
      border-radius: 0 10px;
      background-color: var(--background-grey);
      width: 120px;
      transform: translateY(50%);
      animation: none;
    }

    .icon{
      height: 11vh;
      max-width: 100%;
    }

    svg{
      transition: all 600ms ease;
    }

    .icon:hover svg{
      filter: drop-shadow(var(--orange-shadow));
    }
  }

  @keyframes filter_closing{
    from{
      height: var(--open-height-standart);
    }

    to{
      height: var(--close);
    }
  }

  @keyframes filter_opening{
    from{
      height: var(--close);
    }

    to{
      height: var(--open-height-standart);
    }
  }
</style>
