const goods = {
    "bikini1": {
        "id": "bikini1",
        "name": "Трусики Бикини.JF",
        "quantity": "0",
        "images": [
          "трусики бикини с кружевом",
          "трусики бикини с кружевом другой вид"
        ],
        "prices": {
          "previous": "35",
          "current": "25"
        },
        "category": {"special": "special"},
        "advantages": {
                      "ids": ["soft", "fit", "light"],
                      "soft": "Мягкая ткань",
                      "fit": "Отлично садиться",
                      "light": "Дарит легки ощущения"},
        "description": "Пошив женского нижнего белья и домашней одежды по вашим меркам. Индивидуальный пошив позволяет учесть особенности и тип фигуры каждой девушки, что, в свою очередь, помогает добиться хорошего конечного результата при посадке белья. Правильно подобранное белье залог благородной осанки, красивой фигуры, физического здоровья и хорошего настроения. Хорошие материалы."
    },

    
    "bikini2": {
        "id": "bikini2",
        "name": "Трусики Изумруд.JF",
        "quantity": "0",
        "images": [
          "Бикини зеленные боковина",
          "Бикини зеленные изнанка",
          "Бикини зеленные спереди"
        ],
        "prices": {
          "previous": "30",
          "current": "25"
        },
        "category": {"special": "special"},
        "advantages": {
                       "ids": ["soft", "fit", "light"],
                       "soft": "Мягкая ткань",
                       "fit": "Отлично садиться",
                       "light": "Дарит легки ощущения"},
        "description": "Прекрасные зеленные бикини. Хорошая хлопковая ткань с добавление эластана."   
    }
  }


  /**@param id {number}
   * @param onlyCurrent {boolean}
   */
  export function getPrices(id, onlyCurrent){
    if(onlyCurrent) return goods[id].prices.current;
    return goods[id].prices;
  }


  export function getIDAndNames(){
    let arr = [];

    for(let key of Object.keys(goods)){
      arr.push([key, goods[key]["name"], goods[key]["category"]]);
    }

    return arr;
  }


  export function getProductName(id){
    return goods[id]["name"];
  }


  export function getPrice(id){
    return +goods[id]["prices"]["current"];
  };


  export function getAll(id){
    return goods[id];
  }
  