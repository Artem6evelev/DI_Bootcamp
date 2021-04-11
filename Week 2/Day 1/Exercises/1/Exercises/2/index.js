// Exercise 1 : Favorite Color
let me = ["my","favorite","color","is","blue"];

console.log(me.join(' '));

// Exercise 2 : Mixup

let str1 = "mix";
let str2 = "pod";

let slice1 = str1.slice(1);
let slice2 = str2.slice(1);
console.log(slice1);
console.log(slice2);

let ix = "x"
let od = "p"

let newWord = od + slice1 + " " + ix + slice2
console.log(newWord);

// Exercise 3 : Calculator

let num1 = parseInt(prompt("first nunmber"));
console.log(num1);

let num2 = parseInt(prompt("second number"));
console.log(num2);

alert(num1 + num2);