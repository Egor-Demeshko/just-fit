<script>
    import { onMount } from "svelte";
    import { activeFilterElements } from "$lib/scripts/stores.js";
    import { menuOpen } from "../scripts/stores";

    let activeFilters = [];
    let filters = [
        /*{
            id: "hide",
            label: "спрятать панель фильтра",
            show: ""
        },*/
        {
            id: "stringy",
            label: "отобразить мужские стринги",
            show: "show"
        },
        {
            id: "sleepy",
            label: "отобразить мужские слипы",
            show: "show"
        },
        {
            id: "boxer",
            label: "отобразить мужские боксеры",
            show: "show"
        },
        {
            id: "special",
            label: "специальное кружевное мужское белье",
            show: "show"
        },
        {
            id: "filter_icon",
            label: "открыть панель фильтра",
            show: ""
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


    /*function changeShown(width){
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
    }*/


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
    //$: changeShown(innerWidth);

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
            const icon = target.closest('div');

            svg.classList.toggle('activated');
            icon.classList.toggle('activated');

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
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="filter {openAnimationClass}" on:click={handelClick} class:inactive>

    {#if innerWidth < 512}
      <div class="filter__heading">
        <h2>Фильтры</h2>
      </div>
    {/if}

    <div class="wrapper">
    {#each filters as {id, label, show} (id)}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div id={id} 
             class="icon {show}" 
             tabindex="0" 
             aria-label={label} 
             title={label}>
            <svg class={id} 
                 aria-disabled="true">
                <use href="/lib/icons/navigation.svg#{id}"></use>
            </svg>
        </div>
    {/each}
    </div>

    {#if innerWidth < 512}
      <div class="filter__bottom"></div>
    {/if}
</div>


<style>
    :root{
        --close: 97px;
        --open-height-standart: 33.5rem;
    }

    
    .filter__heading{
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      gap: .5rem;
      margin-bottom: 1rem;
    }
    
    h2{
      color: var(--icons-main-red);
      margin: 0;
      text-align: center;
      width: 100%;
      flex: 1;
    }

    .filter__heading::before,
    .filter__heading::after{
      content: "";
      height: 5px;
      border-radius: 2px;
      flex: 1;
      background-color: var(--icons-main-red);
    }

    .filter__bottom{
      background-color: var(--icons-main-red);
      height: 5px;
      border-radius: 2px;
      margin-top: 1rem;
    }

  .filter{
    box-sizing: border-box;
    bottom: var(--bar-height);
    border-radius: 6px;
    padding: 8px;
    /*animation: 600ms forwards filter_closing ease;*/
    overflow: hidden;
    background-color: transparent;
  }

  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 32px;
  }

  .icon{
    display: none;
    justify-content: center;
    align-items: center;
    transition: color 600ms ease, border 600ms ease;
    padding: .6rem;
    height: 5rem;
    width: 5rem;
    color: var(--background-grey);
    background-color: var(--icons-white);
    position: relative;
    border-radius: 4px;
  }

  .icon::before{
    content: "";
    background-image: linear-gradient(0, var(--background-grey), var(--background-grey));
    border-radius: 6px;
    position:absolute;
    top: -4px;
    left: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px); 
    z-index: -1;
  }

  .show{
    display: flex;
  }

  svg{
    height: 100%;
    transition: color 600ms ease;
  }

  /**активная иконка*/
  .activated{
    color: var(--icons-main-red);
  }

  .icon.activated::before{
    background-image: linear-gradient(-135deg, var(--icons-main-red) 0%, var(--background-green) 100%);
  }
  /************/

  .filter_open{
    animation: 600ms forwards filter_opening ease;
  }

  .inactive{
    display: none;
  }


  @media(min-width: 40em){
    .filter{
      position: fixed;
      bottom: 50%;
      left: 0;
      border-radius: 0 10px;
      background-color: var(--background-grey);
      width: 120px;
      transform: translateY(50%);
      animation: none;

    }

    .icon{
      height: 11vh;
      width: 100%;
      color: var(--icons-white);
      background-color: transparent;
      padding: 2px;
    }

    .icon.activated::before{
      background-image: none;
    }

    svg{
      transition: all 600ms ease;
    }

    .icon:hover svg{
      filter: drop-shadow(var(--orange-shadow));
    }
  }
</style>
