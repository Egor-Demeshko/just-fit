<script>
    import ProductCard from "$lib/components/ProductCard/Card.svelte";
    import Gallery from "$lib/components/Gallery.svelte";
    import Pros from "$lib/components/Pros.svelte";
    import GoodBottomBar from "$lib/components/GoodBottomBar.svelte";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";
    import GoodsContact from "../../../lib/components/GoodsContact.svelte";
    import { env } from "$env/dynamic/public";

    /**Данные с сервера, приходящие при загрузке страницке*/
    export let data;
    const PUBLIC_STRAPI_ORIGIN = env.PUBLIC_STRAPI_ORIGIN;
    let OGimageUrl;

    $: console.log("data on page", data.data[0].attributes);

    let {fitid:  id, images, name, advantages, description, SEO, prices} = data.data[0].attributes;
    console.log("images **************8 ", images); 
    console.log("**** images OGIMAGEURL ****", images.data[0].attributes); 
    if(images.data[0].attributes){
      OGimageUrl = images.data[0].attributes.formats.small.url;
    }
  
</script>

<svelte:head>

  <title>{SEO.seo_title}</title>
  <meta name="description" content={SEO.seo_description}/>
  <meta property="og:url" content="https://justfit.by">
  <meta property="og:title" content="Мужское нижнее белье {name} от JF">
  <meta property="og:description" content="{SEO.seo_description}">
  <meta property="og:image" content= {PUBLIC_STRAPI_ORIGIN}{OGimageUrl}>
  <meta property="og:locale" content="ru_RU">

</svelte:head>

<div class="goods" itemscope itemtype="https://schema.org/Product">
    <meta itemprop="{name}"/>
    <Gallery {id} {images}/>

    <div class="goods__images">
        <ProductCard goodPage={true} {id} {name} {images} {prices}/>
    </div>

    <div class="goods__info">
        <h2 class="goods__info-heading">Что точно понравится</h2>
        <Pros {advantages}/>

        <p class="goods__ready">Готовность до 7 дней
        </p>
        <p class="goods__sizes">Шьем по индивидуальному размеру.
          Размер, ваш fit-id. Можно по типовому размеру. Размеры от 42 до 60.
        </p>
    </div>

    <p class="goods__about">
      <meta itemprop="description" content="{description}"/>
      {description}
    </p>
    
</div>

<ErrorMessage/>

<GoodBottomBar {id} {name}/>
<GoodsContact/>

<style>
.goods{
    box-sizing: border-box;
    font-family: Ubuntu, sans-serif;
    font-size: 1rem;
    display: grid;
    grid-template: "gallery photo info" 37.19em
                   "desc desc desc" 1fr
                   ". . cart" 5rem / 6.25em 31.2em auto/*19.5em*/;
    gap: 2rem;
    margin: 0 auto;
    width: 70%;
    padding: calc(var(--pcWidth) + 1rem) 0;
  }

  .goods__info{
    grid-area: info;
    background-color: var(--goods-light-orange);
    border-radius: 5px;
  }

  .goods__about{
    grid-area: desc;
    background-color: var(--light-grey);
    padding: 1.5rem;
    margin: 0;
    border-radius: 5px;
    font-size: 1.3em;
    font-size: clamp(1rem, 0.4rem + 0.98vw, 1.3rem);
    font-weight: bold;
  }

  .goods__info-heading{
    text-align: center;
    font-size: 1.375em;
    margin-top: 1.625rem;
    margin-bottom: 0;
  }

  .goods__ready{
    padding: 1.75rem 1.5rem;
    text-align: center;
    background-color: var(--icons-main-red);
    color: var(--icons-white);
    font-weight: bold;
    font-size: var(--font-size);
    margin: 0;
  }

  .goods__sizes{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 1.5em;
    font-size: var(--font-size);
    font-weight: bolder;
    text-align: center;
    padding: 0.875rem 1rem 2.25rem;
    max-height: 12em;
  }
  

  @media (max-width: 85em){
    .goods{
      width: 90%;
      gap: 3rem 2rem;
    }
  }

  @media (max-width: 74em){
    .goods{
      width: 95%;
      gap: 3rem 2rem;
    }
  }

  @media (max-width: 60em){
    .goods{
      margin: 0;
      width: 100%;
    }
  }

  @media (max-width: 52em){
    .goods{
      grid-template: "photo  info"
                     "desc   desc"
                     ". return"/ 1fr 1fr;
    }
  }

  @media (max-width: 30em){
    .goods{
      padding: calc(var(--bar-height) * 1.3) 0 calc(var(--bar-height) * 2) 0;
      grid-template-columns: 1fr;
      grid-auto-rows: fit-content();
      grid-template-areas: "photo"
                     "info"
                     "desc"
                     "return";
      gap: 2rem;
      width: 100%;
    }
  }
</style>