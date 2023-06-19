import Strapi from 'strapi-sdk-js';




export async function handle({ event, resolve }) {
    const strapi = new Strapi();
    
    if (event.url.pathname.startsWith('/good')) {
        event.locals = await strapi.find("goods", {
            "fitid": event.params.good,
            "populate": ["images"]
        });
    }

    const response = await resolve(event);
    return response;
}