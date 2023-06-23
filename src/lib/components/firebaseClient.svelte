<script>
import { onMount } from "svelte";
import { popUpShow, circles, okbutton, isMeasureSubmit } from "$lib/scripts/stores.js";
import { dbController } from "../scripts/firebase";
import { validateCode } from "../scripts/validateCode";
import { submitPending } from "../scripts/stores";


export let buttonId;
export let button;
export let showInner; // используеся для удаления внутренней разметки кнопки
export let getSms;
export let userId;
export let form;

let auth = dbController.auth;

$: if($isMeasureSubmit){
  console.log("fireconsole answering on submiting request");
  gatherFormValues();
}
  

onMount( () => {
    if(window){
        console.log("firebaseclient - iniytializing recaptcha");
        window.recaptchaVerifier = new dbController.recaptcha( buttonId, {
            "size": "invisible",
            "badge": "bottomleft",
            "defaultCountry": "BY",
            "callback": () => {
                console.log("recapatcha SOLVED");
                //TODO start button animation
            }
        }, auth);
    } else {
        console.log("on recaptcha window undefined");
    }

});

export function showAndProceed(){
    console.log("SHOW AND PROCEED");
    //showInner = false;
    let verifier = window.recaptchaVerifier;

    let phoneNumber = '+' + document.getElementById("sms").value;
    //TODO verification
    let signInWithPhoneNumber = dbController.signInFunction;

    signInWithPhoneNumber(auth, phoneNumber, verifier)    //TEST +16505551234
        .then(async (confirmationResult)=>{
          phoneNumber = phoneNumber.replace('+', '');
          console.log("signing with new phonenumber: ", phoneNumber);
          /**store, показывает попап*/
          popUpShow.set({
              "state": true,
              "message": false,
              "sms": true
          });

          let smsCode = await getSms();
                      
          popUpShow.set({
              "state": false,
              "message": false,
              "sms": false
          });

          userId = await validateCode(confirmationResult, smsCode.code);

          userId = userId.user.uid;
          
          {
            dbController.preLoadMeasurements(phoneNumber, (measurements)=>{
              populateFormWithExistedData(measurements);
            });
          }
        })
      .then( () => {
          circles.set(false);
          button.disabled = 'true';
          okbutton.set(true);
          submitPending.set(false);
      })
      .catch( (error)=>{
          console.log(error.message);
      });


    function populateFormWithExistedData(measurements){
        for(const[key, value] of Object.entries(measurements)){
          if(key == 'uid') continue;
          form[key].value = value;
        }
      }
}

function gatherFormValues(){
    const measurementsToSend = {name: "empty"};

    if(!form) return;
    if(!form.checkValidity()) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        return;
    }


    let data = new FormData(form);
    let phone = "empty";
    if(data.get("sms")){
      phone = data.get("sms");
    }
    data.delete("sms");

    {
      if(!phone && !data) return;
      for(let [key, value] of data.entries()){

        if(value){
          measurementsToSend[key] = value;
        }
      }

      console.log("measurementsToSend: ", measurementsToSend);
      if (userId){
        dbController.writeToBase(measurementsToSend, phone, userId, button);
      } else {
        console.log("db write error: no id");
      }
    }

}

</script>

