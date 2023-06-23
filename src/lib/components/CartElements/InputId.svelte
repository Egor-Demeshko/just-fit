<script>
    import { submitPending } from "$lib/scripts/stores.js";
    import { onMount } from "svelte";

    let valid;
    let invalid;
    let input;


   /* onMount( );*/

    
    function startValidation(){
        let reg = /\+\d{9,13}/;
        {
            let validity = input.validity;

            if(validity.patternMismatch){
                input.setCustomValidity("Неправильный формат номера. Вводите полностью номер с плюсом: +375292158632");
            } else if(validity.valueMissing){
                input.setCustomValidity("ПОЛЕ ОБЯЗАТЕЛЬНОЕ =)");
            } else {
                input.setCustomValidity("");
            }
        }
 

        if(input.reportValidity() && reg.test(input.value)){
            setValid();
        } else {
            setInvalid();
        }
    }

    function setValid(){
        invalid = false;
        valid = true; 
    }

    function setInvalid(e){
        valid = false;
        invalid = true;
    }

    function blurHandler(){
        startValidation();
    }

</script>    


<div class="input_wrapper metrics" class:valid class:invalid>
    <label for="idinput" class="signed" aria-disabled>
        <span>Ваш контактный номер:</span>
        <span class="label_required">*</span>
    </label>
    <input bind:this={input} id="id" class="required input" type="tel" name="id" 
    placeholder="Номер телефона +375..." maxlength="13" 
    required aria-label="Поля для ввода ID ваших мерок. Обычно это ваш номер телефона"
    pattern={"\\+\\d{9,13}"}
    on:keyup={startValidation}
    on:invalid={setInvalid}
    on:blur={blurHandler}/>
</div>


<div class="input_wrapper">
    <label for="idinput" class="signed" aria-disabled>
        <span>Если Вы заказываете по стандартному размеру, укажите его в поле справа:</span>
    </label>
    <input id="standart_size" class="input another_input" type="tel" name="standart_size" 
    placeholder="Обычный формат размера 44 или 50 ит.д." maxlength="2" 
    aria-label="Поле для вода стандартного размера" autocomplete="off"/>
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

    .metrics::after{
        content: "*Обязательное поле";
        position: absolute;
        bottom: -1.4em;
        left: 50%;
        font-family: LexendDeca, sans-serif;
        font-size: 0.8em;
        font-weight: bold;
        color: var(--background-grey);
        transform: translateX(-30%);
    }

    .signed::before{
        content: "Без пробелов";
        position: absolute;
        bottom: -1.4em;
        left: 0;
        font-family: LexendDeca, sans-serif;
        font-size: 0.8em;
        font-weight: bold;
        color: var(--background-grey);
    }

    .required{
        outline: 1px solid var(--goods-accent-orange);
    }

    .label_required{
        font-weight: bold;
        font-family: inherit;
        font-size: 1.5em;
        color: var(--goods-accent-orange);
    }

    label{
        font-family: LexendDeca, sans-serif;
        font-size: 1rem;
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

/*    .valid::after,
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
    }*/



    @media(min-width: 52em){
        div{
            max-width: 50rem;
        }

        .input{
            padding: 10px 8px;
        }
    }
</style>