import { writable } from "svelte/store";


/* отслеживает какие элементы выбраны в фильтре для отображения */
export const activeFilterElements = writable([]);
