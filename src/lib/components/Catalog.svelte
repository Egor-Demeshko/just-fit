<script>
    import Card  from "$lib/components/ProductCard/Card.svelte";
    //import { setNames } from "$lib/goods/images";

    export let goods;
</script>

<main>
 {#each goods as {fitid: id, name, category, images, prices}}
    <Card {id} {name} {category} {images} {prices}/>
 {/each} 
</main>

<style>

main{
    display: flex;
    flex-flow: column;
    gap: 24px;
    padding: 120px 12px;
    overflow-y: scroll;
    align-items: center;
    justify-content: center;
}

/*.catalog__arrows-inner{
  color: var(--icons-main-red);
  width: 118px;
  height: 18px;
}*/


@media(min-width: 52em){
  main{
    flex-flow: row wrap;
    flex-wrap: wrap;
    padding: calc(var(--pcWidth) + 2em) 14em;
    gap: 3.25rem;
  }
}
</style>