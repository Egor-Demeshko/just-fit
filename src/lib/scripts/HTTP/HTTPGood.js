import {PUBLIC_STRAPI_ORIGIN} from '$env/static/public';

export default class HTTPGood{
    /**получаем данные товаров с мета данными пагинации
     * @param {integer} pageNumber
     * @returns {object}
     */
    static async getNextGoods(pageNumber){
        try{
            const response = await fetch(`${PUBLIC_STRAPI_ORIGIN}/api/goods?pagination[page]=${pageNumber}&pagination[pageSize]=9&populate=images`);
            return await response.json();
        } catch(e) {
            console.error('[ОШИБКА ЗАПРОСА ДАННЫХ ПАГИНАЦИИ]', e.message );
            return null;
        }
    }

    /**Получаем полный список всех товаров*/
    static async getAllGoods(){
        try{
            const response = await fetch(`${PUBLIC_STRAPI_ORIGIN}/api/goods?populate=images`);
            return await response.json();
        } catch(e) {
            console.error('[ОШИБКА ЗАПРОСА ПОЛНЫХ ДАННЫХ]', e.message );
            return null;
        }    
    }
}