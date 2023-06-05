<script>

    import SimpleUpperBar from "../../lib/components/SimpleUpperBar.svelte";
    import LogIn from "$lib/components/Measurements/LogIn.svelte";
    import Input from "$lib/components/Measurements/Input.svelte";
    import Measurements from "$lib/components/Measurements/Measurements.svelte";
    import PopUp from "../../lib/components/PopUp.svelte";
    import { popUpShow } from "$lib/scripts/stores.js";

    export let data;
    let {fields, measurementsSectors, measurements} = data;
    let message = false;
    let sms = false;

    popUpShow.update( ( obj ) => {
        if(obj.state){
            if(obj.message){
                message = true;
            } else if (obj.sms){
                sms = true;
            }
        } else {
            message = false;
            sms = false;
        }
    });

</script>

<SimpleUpperBar/>
<main>
    <form>

        <LogIn {fields}/>
        <Input id={"height"} 
                type={"tel"}
                placeholder={"Цифры в СМ, формат 000"}
                text={"Рост"}
        />

        {#each measurementsSectors as sector (sector.id)}
            <Measurements {sector} measures={measurements[sector.id]}/>
        {/each}

    </form>
</main>

<PopUp/>


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

