import Strapi from 'strapi-sdk-js';




export async function handle({ event, resolve }) {
    const strapi = new Strapi();

    console.log("++++++event.params.good", event.params.good);
    
    if (event.url.pathname.startsWith('/good')) {

        console.log("good hook", )
        event.locals = await strapi.find("goods", {
            "filters": {
                "fitid": event.params.good
            },
            "populate": ["images", "SEO"]
        });
        console.log("good hook with locals", event.locals.data[0].attributes)
    }

    if(event.url.pathname == "/"){
        event.locals = await strapi.find("goods", {
            "populate": ["images", "SEO"]
        });
    }

    const response = await resolve(event);
    return response;
}