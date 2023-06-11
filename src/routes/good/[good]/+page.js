import { getAll } from "$lib/goods/goods.js";


export function load( {params} ){
    let goodData;

    if(params.good){
        goodData = getAll(params.good);
    } else {
        throw new Error(404, "Not found");
    }

    return goodData;
}