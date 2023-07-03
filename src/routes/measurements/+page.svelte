<script>
    import SimpleUpperBar from "../../lib/components/SimpleUpperBar.svelte";
    import LogIn from "$lib/components/Measurements/LogIn.svelte";
    import Input from "$lib/components/Measurements/Input.svelte";
    import Measurements from "$lib/components/Measurements/Measurements.svelte";
    import PopUp from "../../lib/components/PopUp.svelte";
    import CartBottomBar from "$lib/components/CartElements/CartBottomBar.svelte";
    import { isMeasureSubmit } from "$lib/scripts/stores";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";
    import { submitPending } from "$lib/scripts/stores";


    export let data;
    let {fields, measurementsSectors, measurements} = data;
    let getSms; // временка для передачи функции
    let form;
    submitPending.set(true);

    function gatherData(){
        /*console.log('+page.svelte submitting form');*/
        submitPending.set(true);
        isMeasureSubmit.set(true);
    };
</script>

<svelte:head>
    <meta name="robots" content="noindex">
    <title>Страница для записи мерок в базу данных Just Fit</title>
</svelte:head>

<SimpleUpperBar/>
<main>
    <form bind:this={form}  on:submit|preventDefault={gatherData}>

        <LogIn {fields} {getSms} {form}/>
        <Input id={"height"} 
                type={"tel"}
                placeholder={"Цифры в СМ, формат 000"}
                text={"Рост"}
        />

        {#each measurementsSectors as sector (sector.id)}
            <Measurements {sector} measures={measurements[sector.id]}/>
        {/each}

        <CartBottomBar/>
    </form>
</main>

<PopUp bind:getSms={getSms}/>
<ErrorMessage/>

<style>
    *{
        box-sizing: border-box;
    }

    main{
        box-sizing: border-box;
        display: flex;
        flex-flow: column;
        align-items: center;
        /*height: 100vh;*/
        width: 100vw;
        background-color: var(--background-pink);
        padding: 23px;
    }

    form{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 32px;
        /*overflow: scroll;*/
        scrollbar-width: none;
    }

    @media(min-width: 52em){
        main{
            padding: calc(var(--pcWidth)) 20vw;
        }
    }

    @media(min-width: 82em){
        main{
            padding: calc(var(--pcWidth) + 40px) 25vw;
        }
    }
</style>

