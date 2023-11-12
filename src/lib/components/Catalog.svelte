<script>
    import Card  from "$lib/components/ProductCard/Card.svelte";
    import Filter from '$lib/components/Filter.svelte';

    export let goods;
    let goodsChanged = false;

    $: if(goods){
      goodsChanged = !goodsChanged;
    }

</script>

<main>
  <Filter/>
  {#key goodsChanged}
      {#each goods as {fitid: id, name, category, images, prices}}
          <Card {id} {name} {category} {images} {prices}/>
      {/each}
  {/key}
</main>

<style>

main{
    display: flex;
    flex-flow: column;
    gap: 24px;
    padding: 2.5rem 12px 5.5rem;
    overflow-y: scroll;
    align-items: center;
    justify-content: center;
}

@media(min-width: 52em){
  main{
    flex-flow: row wrap;
    flex-wrap: wrap;
    padding: 0 14em 5.5rem;
    gap: 3.25rem;
  }
}
</style>