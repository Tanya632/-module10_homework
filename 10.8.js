
//  задание 8 

let fruts = new Map();
fruts.set("ЯБЛОКО", "ЗЕЛЕНОЕ");
fruts.set("ГРУША", "ЖЕЛТАЯ");

for (let frut of fruts.keys()){
    console.log(` ключ - ${frut}; значение - ${fruts.get(frut)};`);
}