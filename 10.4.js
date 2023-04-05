// задание 4 

function randomNumber(min,max) {
    min = Math.ceil(min);     //если надо только целые числа 
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log("Получено  число от  0 до 100 : ")
console.log(randomNumber(0,100));
