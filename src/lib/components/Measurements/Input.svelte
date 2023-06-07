<script>
    import { popUpShow } from "$lib/scripts/stores.js";

    export let id = "standart";
    export let type = "text";
    export let placeholder = "Цифры в СМ, формат 000";
    export let required = false;
    export let pattern = '.*';
    export let question = false;
    export let text = "Введите данные";

    let valid = '';
    let invalid = '';
    let input;


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


    function showPopUp(){

            popUpShow.set( {
                "state": true,
                "message": true,
                "sms": false
            } );

    }
</script>

<div class="input__wrapper">
    <label for={id}>{text}</label>
    {#if question}
        <div class="question__wrapper">
            <span class="question" on:click={showPopUp}></span>
            <input bind:this={input}
                class:valid 
                class:invalid 
                type={type} name={id} id={id}
                placeholder={placeholder} pattern={pattern}
                required={required} autocomplete="tel"
                on:keyup={startValidation}
                on:invalid={setInvalid}
                on:blur={blurHandler}>
        </div>
    {:else}
        <input bind:this={input}
            class:valid 
            class:invalid 
            type={type} name={id} id={id}
            placeholder={placeholder} pattern={pattern}
            required={required} autocomplete="off"
            on:keyup={startValidation}
            on:invalid={setInvalid}
            on:blur={blurHandler}>
    {/if}
</div>

<style>
    .input__wrapper{
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 8px;
        width: 95%;
        margin-top: var(--gap);
    }

    .input__wrapper::after{
        content: " ";
        padding: 2.5px 0;
        width: 176px;
        background-color: var(--icons-main-red);
        border-radius: 3px;
    }

    label{
        font-family: LexendDeca, sans-serif;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    input{
        box-sizing: border-box;
        padding: 22px 16px;
        width: 100%;
        border: none;
        border-radius: 10px;
        color: var(--hard-black);
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        position: relative;
        font-family: inherit;
        box-shadow: var(--inner-shadow);
    }

    input::placeholder{
        font-family: LexendDeca, sans-serif;
        font-size: 16px;
        color: var(--background-grey);
        font-weight: bold;
    }

    
    .valid{
        outline: 4px solid var(--background-green);
    }


    .invalid{
        outline: 4px solid var(--icons-main-red);
    }


    .question__wrapper{
        position: relative;
        width: 100%;
    }


    .question{
        content: url(/question_mark.png);
        background-repeat: no-repeat;
        background-position: center;
        display: block;
        color: var(--icons-main-red);
        position: absolute;
        right: 12px;
        top: 50%;
        width: 32px;
        height: 32px;
        z-index: 50;
        cursor: pointer;
        transform: translateY(-50%);
    }



</style>