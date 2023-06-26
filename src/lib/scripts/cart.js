
let cart = Object.create(null);
/**cart = {
 * id: quantity
 * } */
const subscribers = [];
const STORAGE_ID = "JF_CART";
let cartId = '';

/**
 * обьект для хранения ссылок на загрузку мелких фотографий для отображения в корзине
 * {
 *      id: {
 *              url: "smallImage",
 *              name: "imagename"
 *          }
 * }
 */
/*let imagesForCart = Object.create(null);*/

/**в storage отправляем обьект вида {
 * cartId: cartId значение,
 * goods: [] переменная cart
 * 
 * } */
let storage;


//при загрузке модуля пытаться обновить корзину из localStorage
updateCartFromStorage();


export function resetCart(){
    if(storage){
        storage.removeItem("JF_CART");
        cartId = '';
    }
}


export function addToCart(id, imageUrl, name){
    if(!id) return;
    if(!cartId) cartId = generateCartId();
    if(!cart) cart = {};
    if(!cart[id]){
        cart[id] = 1;
        /*console.log("SMALL IMAGE at cart.js", imageUrl);
        console.log("imagesForCart: ", imagesForCart);
        /*imagesForCart[id] = {};
        imagesForCart[id].url = imageUrl;
        imagesForCart[id].name = name;*/

        update();
        updateStorage();
        return;
    }
    
    cart[id] += 1;
    update();
    updateStorage();
}


export function removeFromCart(id){
    if(!id) return;
    if(!cart[id]) return;

    if(cart[id] == 1){
        delete cart[id];
        /*debugger;
            delete imagesForCart[id];*/
        update();
        updateStorage();
        return;
    }

    cart[id] -= 1;
    update();
    updateStorage();
}


export function removeGood(id){
    delete cart[id];

    if(isListEmpty()){
        storage.removeItem(STORAGE_ID);
        cartId = undefined;
        cart = null;
        /*imagesForCart = null;*/
        return true;
    }

    updateStorage();
    update();
    return true;
}


export function getQuantity(id){
    return cart[id];
}

export function getOrders(){
    let arr = [];
    if(!cart) return arr;
    for(let [id, quantity] of Object.entries(cart)){
        arr.push([id, quantity]);
    }

    return arr;
};

export function getCartId(){
    return cartId;
}


export function setQuantity(id, quantity){
    if(!cart) return;

    cart[id] = quantity;
    console.log("setQuantity",cart);
    update();
    updateStorage();
}


export function subscribe(callback){
    subscribers.push(callback);
}


function update(){
    subscribers.forEach((f) => f.call());
}


function updateStorage(){
    if(!cartId) cartId = generateCartId();

    if(isStorageAvailable() && !isListEmpty()){
        let objToBeSend = Object.create(null);
        objToBeSend["cartId"] = cartId;
        objToBeSend["goods"] = cart;
        /*objToBeSend["imagesForCart"] = imagesForCart;*/

        storage.setItem(STORAGE_ID, JSON.stringify(objToBeSend));
        console.log("storageUpdated", storage.getItem(STORAGE_ID));

        objToBeSend = null;
        return true;
    } else if(isStorageAvailable() && isListEmpty()){
        storage.removeItem(STORAGE_ID);
        cart = null;
    }
}

/*
export function getImagesList(){
    return imagesForCart;
}


export function getImageUrl(id){
    return imagesForCart[id].url;
}


export function getImageName(id){
    return imagesForCart[id].name;
}
*/

function updateCartFromStorage(){
    var cartFromStorage;
    if(isStorageAvailable()){

        cartFromStorage = JSON.parse(storage.getItem(STORAGE_ID));


      if (cartFromStorage && typeof cartFromStorage === "object"){
        cartId = cartFromStorage.cartId;
        /*imagesForCart = cartFromStorage.imagesForCart;*/


        {
            let localCart = cartFromStorage["goods"] || cart;
            
            for(let key of Object.keys(localCart)){
                cart[key] = +localCart[key];
            }

            localCart = null;
        }

        console.log("updateCart", cart);

        update();
      }
    }
  }


function isStorageAvailable(){
    if (!storage){
      storage = globalThis.localStorage;
    }
    return (storage)? true : false;
}  


function generateCartId(){
    let id = '';
    id += makeSimpleRandomNumber();
    id += new Date(Date.now()).getDate();
    id += makeSimpleRandomNumber();
    id += new Date(Date.now()).getMonth()+1;
    id += new Date(Date.now()).getFullYear();
    id += makeSimpleRandomNumber();
    return Number(id);

    function makeSimpleRandomNumber(){
        const max = 9;
        const min = 1;
        return Math.round(Math.random()*(max-min) + min);
    }
}


function isListEmpty(){
    return Array.from(Object.keys(cart)).length == 0;
}


export function getTotalQuantity(){
    let quantity = 0;
    if(!cartId) return 0;
    if(!cart) return 0;

    for(let value of Object.values(cart)){
        quantity += value;
    }
    return quantity;
}