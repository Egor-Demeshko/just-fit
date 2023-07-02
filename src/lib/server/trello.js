

export async function trello(formData, K, T, LIST, POS, TRELLO_ORIGIN, TRELLO_PATH){

      let {id, cartId, name, phone, email, address, goods, standart_size} = Object.fromEntries(formData.entries());
      let cardName = `НОВЫЙ ЗАКАЗ: ИМЯ ${name}, ID заказа: ${cartId}`;
  
      let description = (`ID МЕРОК (КОНТАКТНЫЙ НОМЕР):${id} \u000A СТАНДАРТНЫЙ РАЗМЕР: ${standart_size}  ИМЯ КЛИЕНТА:${name}\u000A Контактый телефон:${phone} и ПОЧТА: ${email}\u000A
                  Клиент хочет приобрести: ${goods} \u000A АДРЕС: ${address}`);
  
      let url = `${TRELLO_ORIGIN}${TRELLO_PATH}?idList=${LIST}&name=${cardName}&desc=${description}&
                 pos=${POS}&key=${K}&token=${T}`;
      url = encodeURI(url);
  
      return fetch(url, {method: "POST", headers:{"Accept":"application/json"}})
            .then((response)=>{

                if(response.ok){
                    return true;
                }    
      }).catch( (err) => {throw new Error(err.message) });
    
}