<script>
    import { env } from "$env/dynamic/public";
    import { onMount } from "svelte";
    
    export let images;
    /*console.log("-------------------gallery", images);*/
    let noafter = "gallery__no_after";
    let elem;
    let imagesArr = images.data;
    const PUBLIC_STRAPI_ORIGIN = env.PUBLIC_STRAPI_ORIGIN;


   function handelScroll(){
    let scrollHeight = elem.scrollHeight;
    let clientHeight = elem.clientHeight;
    let difference = scrollHeight - clientHeight;

    /*console.log("scrollHeight: ", scrollHeight);
    console.log("clientHeight: ", clientHeight);
    console.log("elem.scrollTop ", elem.scrollTop);*/

    if(difference === 0){
      noafter = "gallery__no_after";
      return;
    }

        if(difference < (elem.scrollTop*2)){
            noafter = "gallery__no_after";
        } else {
            noafter = "";
        }
   }

   onMount( () => handelScroll() );
   


    function imgClick(event){
        let target = event.target;
        if(target.tagName === "IMG"){
            let alt = target.getAttribute("alt");
            target.dispatchEvent( new CustomEvent("gallery_imgclick", { bubbles: true,
                                                                        detail: alt}));
        }
    }

</script>

<div class="gallery {noafter}" on:scroll={handelScroll} bind:this={elem}>

    <div class="gallery__wrapper">
        {#each imagesArr as imgObj}
            <div class="gallery__item">
                <img src="{PUBLIC_STRAPI_ORIGIN}{imgObj.attributes.formats.small.url}" 
                alt="{imgObj.attributes.name}"
                height="1190" width="1000" loading="lazy"
                on:click={imgClick}>
            </div>
        {/each}
    </div>
</div>

<style>
.gallery{
  box-sizing: border-box;
  font-size: 1rem;
  overflow: scroll;
  max-inline-size: 100%;
  position: relative;
  border-radius: 5px;
  grid-area: gallery;
}


.gallery::-webkit-scrollbar{
  display: none;
}


.gallery *{
  box-sizing: border-box;
}

.gallery::after{
  content: "";
  display: block;
  background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCA2MCAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU2LjU3OSAyLjU2MjVMMjkuOTE0NyAyMi41NjI1TDMuMjUwMzggMi41NjI1IiBzdHJva2U9IiNDOEJEQzAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=") no-repeat 50% 80%,
  linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7));
  color: var(--background-grey);
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7.5em;
  height: clamp(100px, 7.5em, 160px);
  z-index: 3;
  opacity: 1;
}

div[class*="no_after"]::after{
  display: none;
}

.gallery__wrapper{
  display: flex;
  flex-direction: column;
  gap: 38px;
  max-block-size: 100%;
}

.gallery__item{
  width: 100%;
  max-height: 100%;
  background-color: var(--goods-accent-orange);
}

img{
  display: block;
  max-width: 100%;
  height: 100%;
  transition: all 600ms ease;
}

img:hover{
  filter: grayscale(40%);
  opacity: 0.8;
}

@media (max-width: 52em){
  .gallery{
    display: none;
  }
}
</style>

