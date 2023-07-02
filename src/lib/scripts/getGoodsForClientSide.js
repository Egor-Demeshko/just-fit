import Strapi from "strapi-sdk-js";
import { env } from "$env/dynamic/public";

export async function getGoodsForClientSide(resolve, orders){
    let strapi = new Strapi({
        "url": env.PUBLIC_STRAPI_ORIGIN
    });

    let ids = orders.map( (item) => item[0]); 
    let promises = [];
    let dataFromDB;
    let imageNamePrepared;

    ids.forEach( (id) => {
        promises.push(
            new Promise( (resolve, reject) => {
                const data = strapi.find("goods", {
                    filters: {
                        "fitid": {
                            $eq: id
                        }
                    },
                    populate: ["images"]
                });

                resolve(data);
            })
        );
    });


    dataFromDB = await Promise.all(promises);
    
    imageNamePrepared = dataFromDB.map( (item) => {
        let obj = item.data[0];

        return {
            id: obj.attributes.fitid,
            name: obj.attributes.name,
            price: obj.attributes.prices.current,
            imageUrl: obj.attributes.images.data[0].attributes.formats.small.url
        }
    });
    
    resolve(imageNamePrepared)
    return true;
}