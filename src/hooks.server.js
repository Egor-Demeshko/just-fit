import Strapi from 'strapi-sdk-js';
import { env } from '$env/dynamic/private'


export async function handle({ event, resolve }) {
    let STRAPISDK_HOST = env.STRAPISDK_HOST;
    const strapi = new Strapi({
        "url": STRAPISDK_HOST
    });

    /*console.log("++++++event.params.good", event.params.good);*/
    

    if (event.url.pathname.startsWith('/good')) {

       /* console.log("good hook", )*/
        event.locals = await strapi.find("goods", {
            "filters": {
                "fitid": event.params.good
            },
            "populate": ["images", "SEO"]
        });
       /* console.log("good hook with locals", event.locals.data[0].attributes)*/
    }


    if(event.url.pathname == "/"){
        event.locals = await strapi.find("goods", {
            "populate": ["images", "SEO"]
        });
        event.pageMeta = await strapi.find("seo-straniczs", {
            "filters": {
                "page_id": "main"
            }
        });
        /*console.log("pageMETA: ", event.pageMeta);*/
    }


    if(event.url.pathname == "/what-is-it"){

        event.pageMeta = await strapi.find("seo-straniczs", {
            "filters": {
                "page_id": "what-is-it"
            }
        });
        /*console.log("pageMETA: ", event.pageMeta);*/
    }

    
    /*if(event.url.pathname == "/cart"){
        
        
        ids.forEach((id) => {
            promises.push(new Promise);
        });
    }*/



    const response = await resolve(event);
    return response;
}


export async function handleError({ error, event }) {

    console.log("hooks error", error.message);

    return {
        message: JSON.stringify(error)/*'mailto: JF-minsk@yandex.by'*/,
    };
}