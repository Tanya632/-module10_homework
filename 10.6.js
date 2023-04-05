
// задание 6

let arr = ["молоток", "гвозди", "веник", "1", "ведро", "лестница", "веник"]

let theElem = true;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (typeof(arr[i]) !== typeof(arr[j])) {
            theElem = false;
        }
    }
}
if (theElem) {
    console.log("одинаковые элементы");
} else {
    console.log("не одинаковые элементы");
}
