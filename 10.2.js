// задание 2 

let x = 3; 
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    alert ("x- число");
    break;
  case "string":
    alert("x - строка");
    break;
  case "boolean":
   alert ("x - логическое");
    break;
  default:
    alert ("Тип x не определен");
}
