<script>
    let form;
    let inactive = "inactive";
    let verified = "";
    let button;

export async function getSms(){
    var code;
    if(form.style.display === "none") return;

    return await new Promise( (resolve) => {
        form.addEventListener("keydown", controlKeyDown);
        form.addEventListener("keyup", controlKeyUp);
        form.addEventListener("submit", submitHandler);

    function controlKeyDown(e){
    e.preventDefault();
    e.stopPropagation();
    let number = parseInt(e.key) || "";
    if(!number || !Number.isInteger(number) || e.key === "Backspace"){
      return;
    }

    {
      e.target.value = e.key;
      e.target.classList.add("verified");
    }
  }


  function controlKeyUp(e){
    if(e.key === "Backspace"){
      e.preventDefault();
      e.stopPropagation();
      handleBackspace(e);
      return;
    }

    if(e.target.nextElementSibling && e.target.value && e.key != "Backspace"){
      code += e.key;
      e.target.nextElementSibling.focus();
    }
    else if(!e.target.nextElementSibling){
      code += e.key;

      if(button.tagName === "BUTTON"){
        button.removeAttribute("disabled");
        inactive = '';
        button.focus();
      }
    }

    }

    function handleBackspace(event){
    if(event.key != "Backspace") return;
    let activeElement = document.activeElement;

    if(activeElement.tagName === "INPUT" && activeElement.value){
      activeElement.value = "";
    }

    if(activeElement.previousElementSibling){
      activeElement.classList.remove("pop-up__input_verifed");
      activeElement.previousElementSibling.focus();
    } else {
      activeElement.classList.remove("pop-up__input_verifed");
    }


  }


  function submitHandler(event){
    var code = "";
    event.preventDefault();

    {
      let arrayOfInputsValues = Array.from(form.elements);
      arrayOfInputsValues.forEach( (element)=>{
        if(element.tagName !== "INPUT"){
          return;
        }
        code += element.value;
      });
    }

    resolve({"code": code});
  }  
  });
}



</script>

<form bind:this={form} >
    <span class="text">Введите код из смс</span>
    <div class="code-input">
      <input type="tel" name="sms1" maxlength="1" required autocomplete="off"
      class:verified autofocus>
      <input type="tel" name="sms2" maxlength="1" required autocomplete="off">
      <input type="tel" name="sms3" maxlength="1" required autocomplete="off">
      <input type="tel" name="sms4" maxlength="1" required autocomplete="off">
      <input type="tel" name="sms5" maxlength="1" required autocomplete="off">
      <input type="tel" name="sms6" maxlength="1" required autocomplete="off">
    </div>
    <button disabled class:inactive bind:this={button}>Проверить смс-код</button>
  </form>

<style>
    form{
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 24px;
    }


    .text{
        font-size: 1.5em;
    }


    .code-input{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    input{
        font-family: LexendDeca, sans-serif;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 54px;
        width: 100%;
        text-align: center;
    }

    input:focus,
    input:focus-visible{
        outline: 3px var(--goods-accent-orange) solid;
    }

    button{
        padding: 16px 24px;
        background-color: var(--icons-main-red);
        color: var(--icons-white);
        border: none;
        border-radius: 10px;
        font-family: "Ubuntu-Bold", sans-serif;
        font-size: 24px;
    }

    button:disabled{
      
    }

    .inactive{
        border: none;
        background-color: var(--background-pink);
    }

    .verified{
        outline: 3px solid var(--background-green);
    }

    @media screen and (min-width: 32em){
        input{
            height: 64px;
        }
    }
    
</style>