import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { getDatabase, get, child, ref, set } from "firebase/database";
import { setErrorMessage, okbutton, submitPending } from "./stores.js";

export const dbController = inizializeDB();

function inizializeDB(){
  var auth;
  var db;

  {
    const firebaseConfig = {
      apiKey: "AIzaSyBPxPe7rOtwwuQ9UWpvkbTMBbVKMWqzvSg",
      authDomain: "bra-fit.firebaseapp.com",
      databaseURL: "https://bra-fit-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bra-fit",
      storageBucket: "bra-fit.appspot.com",
      messagingSenderId: "1072904683173",
      appId: "1:1072904683173:web:733f4497107baaae91974c",
      measurementId: "G-HLET8ZKDM9"
    };

    var app = initializeApp(firebaseConfig);
  }

  {
    auth = getAuth(app);
    auth.languageCode = "ru";
  }

  {
    db = getDatabase();
  }
  return {
    get app(){
      return app;
    },
    get auth(){
      return auth;
    },
    get recaptcha(){
      return RecaptchaVerifier;
    },
    get signInFunction(){
      return signInWithPhoneNumber;
    },
    writeToBase(data, phone, uid, button){
        data["uid"] = uid;
        set(ref(db, `measurements/${phone}`), data)
             .then( () => {
               return {
                     "name": data["name"],
                     "phone": phone
                   };
             })
             .then( (nextDataToBeWritten) => {
               return set(ref(db, `users/${uid}`), nextDataToBeWritten);
             })
             .then( () => {
              console.log("мерки записаны");
               setErrorMessage.set({
                "show": "show",
                "message": "Набирайте или пишите при возникновении вопросов и/или пожеланий",
                "title": "Мерки успешно сохранены"
               });
             }).catch(() => {
              setErrorMessage.set({
                "show": "show",
                "message": "Пожалуйста, попробуйте еще раз",
                "title": "Ошибка записи в базу"
              });
              okbutton.set(false);
              button.disabled = false;
              submitPending.set(false);
             });
    },
    preLoadMeasurements,
  }


  function preLoadMeasurements(phone, parseMesurements){
    console.log("preloadMeasurements: ", phone);
      get(child(ref(db), `measurements/${phone}`))
      .then((snapshot) => {
        console.log("preLOadMeasurements:", snapshot);
        if(snapshot.exists()){
          return snapshot.val();
        }
      })
      .then( (measurements) => {
        parseMesurements(measurements);
      })
      .catch( (error) => {
        console.log("measurements preload ERROR: ", error.message);
      });
  }
}