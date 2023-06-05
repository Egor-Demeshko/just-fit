<script>
    import Input from "./Input.svelte";

    export let fields;
</script>


<fieldset>
    <legend>Обязательные поля</legend>

    {#each fields as field (field.id)}
        <Input {...field}/>
    {/each}

    <button type="button" aria-label="Получить смс код для поддверждения номера">
        <span>Получить СМС</span>
    </button>
</fieldset>


<style>
    fieldset{
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 36px;
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


    button{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        color: var(--icons-white);
        background-color: var(--icons-main-red);
        font-family: LexendDeca, sans-serif;
        letter-spacing: 0;
        font-size: 24px;
        font-weight: bold;
        padding: 14px 38px;
        border-radius: 10px;
        border: none;
        position: relative;
    }

    @media(min-width: 52em){
    fieldset{
      width: 100%;
    }
  }
</style>