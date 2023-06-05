<script>
    import { submitPending } from "$lib/scripts/stores.js";
    import { onMount } from "svelte";

    export let text = 'Поле';
    export let id = 'id';
    export let pattern = '';
    export let type = '';
    export let textarea = false;
    export let placeholder = '';
    export let maxlength = '';
    export let required = false;

    let valid = false;
    let invalid = false;
    let input;


    onMount( () => {
        {
            let validity = input.validity;
    
            if(validity.patternMismatch){
                input.setCustomValidity("Неправильный формат данных. Для почта надо в формате ***@***.com");
            } else if(validity.valueMissing){
                input.setCustomValidity("ПОЛЕ ОБЯЗАТЕЛЬНОЕ =)");
            } else {
                input.setCustomValidity("");
            }
        }
    });


    function startValidation(){
        let reg = new RegExp(pattern);

        if(!input.value && !required) {
            setValid();
            return;
        };

        if(reg.test(input.value) && input.checkValidity()){
            setValid();
        } else {
            setInvalid();
        }
    }

    function setValid(){
        invalid = false;
        valid = true; 
    }

    function setInvalid(){
        valid = false;
        invalid = true;
    }

    function blurHandler(){
        startValidation();
    }

    {
        /** когда форма submits мы сбрасываем стили валидации, так как
         * они работают через классы.
        */
        submitPending.subscribe( (isSubmitimg) => {
            if(isSubmitimg){
                invalid = false;
                valid = false;
            }
        });
    }

</script>

<div class:valid={valid} class:invalid={invalid}>
    {#if textarea}
        <label for="{id}">{text}</label>
        <textarea bind:this={input} class="input" type={type} name={id} id={id}
        placeholder="{placeholder}" maxlength={maxlength} required={required}
        
        on:keyup={startValidation}
        on:invalid={setInvalid}
        on:blur={blurHandler}></textarea>
    {:else}
        <label for={id}>{text}</label>
        <input bind:this={input} class="input" type={type} name={id} id={id}
        placeholder={placeholder} maxlength={maxlength} pattern={pattern}
        required={required} 
        on:keyup={startValidation}
        on:invalid={setInvalid}
        on:blur={blurHandler}>
     {/if}
</div>

<style>
    div{
        display: flex;
        gap: 28px;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        width: 100%;
        position: relative;
    }

    label{
        font-family: LexendDeca, sans-serif;
        font-size: 0.9em;
        font-weight: bold;
        text-align: left;
        flex: 1;
        position: relative;
    }

    .input{
        font-family: LexendDeca, sans-serif;
        font-size: 1.25em;
        font-weight: bold;
        width: 100%;
        padding: 6px 4px;
        border-radius: 10px;
        border: 1px solid var(--grey-border);
        /*outline: 2px white solid;*/
        flex: 2;
    }

    .input::placeholder{
        font-family: LexendDeca, sans-serif;
        font-size: 0.7em;
        font-weight: bold;
        color: var(--background-grey);
    }

    .valid .input{
        border: 1px var(--border-dark-green) solid;
        outline: 2px var(--border-dark-green) solid;
    }

    .invalid .input{
        border: 1px var(--icons-main-red) solid;
        outline: 2px var(--icons-main-red) solid;
    }

    .valid::after,
    .invalid::after{
        position: absolute;
        right: 1rem;  
        top: 50%;
        transform: translateY(-50%); 
    }

    .valid::after{
        content: "\2714";
        color: var(--border-dark-green);
    }

    .invalid::after{
        content: "\274C";
        color: var(--icons-main-red);
    }



    @media(min-width: 52em){
        div{
            max-width: 50rem;
        }

        .input{
            padding: 10px 8px;
        }
    }
</style>