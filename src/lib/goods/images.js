const images = {
    "bikini1": ["трусики бикини с кружевом", "трусики бикини с кружевом другой вид"],
    "bikini2": ["Бикини зеленные боковина", "Бикини зеленные изнанка", "Бикини зеленные спереди"]
}

export function getImages(id){
    return images[id];
}

export function getFirstImage(id){
    return images[id][0];
}