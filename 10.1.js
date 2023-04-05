// задание 1  
 const res = +prompt ('введите четное число','')
if(typeof +res !=='number') {
alert('вы ошиблись')
} else if (isNaN(res % 2)) {
    alert('введено не число')
} else if (res % 2 === 0 ){
    alert('четное число')
} else {
    alert('нечетное число')
}