<script>
    import Input from "./Input.svelte";
    import LogButton from "./LogButton.svelte";

    export let fields;
    export let getSms;
    export let form;
</script>


<fieldset>
    <legend>Обязательные поля</legend>

    {#each fields as field (field.id)}
        <Input {...field} --gap="36px"/>
    {/each}

    <LogButton {form} {getSms} --gap="36px"/>
</fieldset>


<style>

    fieldset{
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 0.75em 0.15em;
        border: 3px solid var(--background-green);
        border-radius: 10px;
    }


    legend{
        border: 3px solid var(--background-green);
        border-radius: 10px;
        padding: 4px 8px;
        font: 16px LexendDeca, sans-serif;
        font-weight: bold;
    }

    @media(min-width: 52em){
    fieldset{
      width: 100%;
    }
  }
</style>