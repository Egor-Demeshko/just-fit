import { K, T, LIST, POS, ORIGIN, TRELLOPATH } from "$env/static/private";
import { trello } from "$lib/server/trello.js";
import { fail } from "@sveltejs/kit";







export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
                
        let result = await trello(data, K, T, LIST, POS, ORIGIN, TRELLOPATH);

        if(result) return { success: true };
        if(!result) return fail(400, {message: "ошибка записи данных"});
    } 
}