import { writable } from "svelte/store";


/* отслеживает какие элементы выбраны в фильтре для отображения */
export const activeFilterElements = writable([]);

export const menuOpen = writable(0);

export const submitPending = writable(false);

export const showError = writable(false);

export const popUpShow = writable({
    "state": false,
    "message": false,
    "sms": false
});

/**@type {store} 
 * @description переключатель. изменяется на странице measurements
 * используется для нотификации всех заитересованных в статусе
 * подтверждения sms
*/
export const measureSMSvarificationState = writable(false);

/**@type {store} перекчатель анимации кружков логина */
export const circles = writable(false);

export const okbutton = writable(false);

/** @description запускается ли submit form  */
export const isMeasureSubmit = writable(false);

/**@description задаем показывать ли сообщение и его название и описание*/
export const setErrorMessage = writable({"show": "",
    "title": "Сообщение",
    "message": "Сообщение"
});


/**SPINNER CONTROLLER FOR BUTTONS */
export const setSpinner = writable(false);