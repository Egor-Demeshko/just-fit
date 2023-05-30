export function startStatements(){
    var statements = {
      "jf": [
        "Белье, которое всегда подходит",
        "Я больше не слышу \'нет в наличии\'"
      ],
      "kufar": [
        "Вы просто умница! Все сшито в размер. Белье село идеально 😊.\
        Буду заказывать ещё и рекомендовать 👍"
      ],
      "instagram": [
        "Отзыв из инстаграмм"
      ],
    }
    return {
      getStatement,
      getIds,
      getRandomId
    };
  
  
    function getStatement(id){
      let array = statements[id];
      let whatStatementToReturn = Math.floor(Math.random() * array.length);
      return array[whatStatementToReturn];
    }
  
  
    function getIds(){
      return Object.keys(statements);
    }
  
  
    function getRandomId(){
      let ids = getIds();
      let random = Math.floor(Math.random() * ids.length);
      return ids[random];
    }
  }