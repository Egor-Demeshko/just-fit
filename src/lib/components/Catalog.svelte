<script>
    import Card  from "$lib/components/ProductCard/Card.svelte";

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

@media(min-width: 52em){
  main{
    flex-flow: row wrap;
    flex-wrap: wrap;
    padding: calc(var(--pcWidth) + 2em) 14em;
    gap: 3.25rem;
  }
}
</style>