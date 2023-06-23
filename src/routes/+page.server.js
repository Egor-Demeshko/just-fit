import { strapi } from "strapi-sdk-js";


export function load({ locals, pageMeta }){

    if(!locals){
        throw new Error(404, "Goods not found");
    } 


    return {
        locals,
        pageMeta
    };
}