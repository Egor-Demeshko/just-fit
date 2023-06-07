<script>
    import Input from "./Input.svelte";
    export let sector = '';
    export let measures = '';

    let arrToBuiltInputs = [];
    for(let [id, text] of Object.entries(measures)){
        arrToBuiltInputs.push({"id": id, "text": text});
    }

</script>


<div class="measurements">
    <h2>{sector.text}</h2>
    {#each arrToBuiltInputs as item (item.id)}
        <Input {...item}/>
    {/each}
</div>




<style>
    *{
        box-sizing: border-box;
    }
    
    .measurements{
        padding: 16px 8px;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 32px;
        border: 1px var(--icons-main-red) solid;
        border-radius: 10px;
        box-shadow: var(--main-shadow);
        margin: 0 4px;
    }

    h2{
        margin: 0;
        text-transform: uppercase;
        text-align: center;
        font-family: LexendDeca, sans-serif;
    }

    @media(min-width: 52em){
        .measurements{
            width: 100%;
            padding: 2rem;
        }
    }
</style>