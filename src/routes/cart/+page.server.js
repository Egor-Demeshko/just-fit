import { env } from "$env/dynamic/private";
/*import { trello } from "$lib/server/trello.js";*/
import { fail } from "@sveltejs/kit";

let { K, T, LIST, POS, TRELLO_ORIGIN, TRELLO_PATH } = env;





export const actions = {
    default: async ({ request }) => {

        /**TRELLO обработчик пока отключен, так как на сервер с cpanel не работает запрос fetch. ошибку отследить сложно */
        /*console.error("REQUEST OBJ ON SERVER ", request );*/
        /*const data = await request.formData();*/
        /*console.error("DATA where formdata OBJ ON SERVER ", data );*/

        /*console.log("TRELLO_ORIGIN", TRELLO_ORIGIN);
        console.log("TRELLO_PATH", TRELLO_PATH);*/

       /* 

       try{
            let result = await trello(data, K, T, LIST, POS, TRELLO_ORIGIN, TRELLO_PATH);

            
    
           if(result) return { success: true,
                                message: JSON.stringify( {
                                    request: request,
                                    formdata: data[Object.getOwnPropertySymbols(data)[0]],
                                    trello: {
                                        K,
                                        T,
                                        LIST,
                                        POS,
                                        TRELLO_ORIGIN,
                                        TRELLO_PATH
                                    },
                                    "result": result,
                                } )};
       } catch (err){
            return fail(400, {message: err.message});
        }           
     */
    return {success: true}
    } 
}