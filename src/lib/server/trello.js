export async function trello(formData, K, T, LIST, POS, ORIGIN, PATH){

      let {id, cartId, name, telephone, email, address, ...goods} = Object.fromEntries(formData.entries());
      let cardName = `НОВЫЙ ЗАКАЗ: ИМЯ ${name}, КОНТАКТ ${telephone}, ID заказа: ${cartId}`;
  
      let description = (`ID МЕРОК:${id} \u000A ИМЯ КЛИЕНТА:${name}\u000A Контактый телефон:${telephone} и ПОЧТА: ${email}\u000A
                  Клиент хочет приобрести: ${JSON.stringify(goods)} \u000A АДРЕС: ${address}`);
  
      let url = `${ORIGIN}${PATH}?idList=${LIST}&name=${cardName}&desc=${description}&
                 pos=${POS}&key=${K}&token=${T}`;
      url = encodeURI(url);
  
      return fetch(url, {method: "POST", headers:{"Accept":"application/json"}})
            .then((response)=>{
                console.log("response ", response.status);
                if(response.ok){
                    return true;
                }
      });
    
}