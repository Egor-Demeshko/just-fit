/*import { getAll } from "$lib/goods/goods.js";*/






export function load( {params, locals} ){
    let goodData;
    console.log("start of loading function: ", locals);

    if(locals){
       /* goodData = getAll(params.good);*/
       /*goodData = strapi.find("goods", {
        "fitid": params.good
       });*/
       goodData = locals;
       console.log("goodDATA", goodData);
       console.log("goodData IMAGES");
    } else {
        throw new Error(404, "Not found");
    }

    return goodData;
}