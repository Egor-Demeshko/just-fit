import { writable } from "svelte/store";


/* отслеживает какие элементы выбраны в фильтре для отображения */
export const activeFilterElements = writable([]);

export const menuOpen = writable(0);

export const submitPending = writable(false);

export const showError = writable(false);

export const popUpShow = writable({
    state: false,
    isMessage: false,
    isFalse: false
});