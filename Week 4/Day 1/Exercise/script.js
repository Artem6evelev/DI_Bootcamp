// What is the value of a in all the following functions.


// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// Answer: 3

//#2
// var a = 0;
// function q2() {
//     a = 5;
// }
// // Answer: undefined because it doesn't return anything

// function q22() {
//     alert(a);
// }
// Answer: 0

//#3
// function q3() {
//     window.a = "hello";
// }
// // Answer: undefined

// function q32() {
//     alert(a);
// }
//Answer : alert with Hello because when we run the first function we save hello in global scop and it will keep it there forever till that moment when i will overight it

//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// Answer: alert test


//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// Answer : 5


// Exercise 2 : Ternary Operator
// -----------------------------

// Change the conditional into a ternary and assign the function to a variable called experiencePoints.
// function experiencePoints() {
//     if (winBattle) {
//         return 10;
//     } else {
//         return 1;
//     }
// }


// let experiencePoints = winBattle => {
//     return (winBattle ? '10' : '1')

// }
// console.log(experiencePoints(true));
// console.log(experiencePoints(false));

// function winBattle() {
//     return false;
// }
// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

// Exercise 3 : Colors
// -------------------
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//  colors.forEach((item,i) => {
//      colors[i] = `#${i++} choice is ` + item
//  })


// Exercise 4 : Colors #2
// -------------------
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

color.forEach((item,i,newarr) => {
    let newstr = (i<3) ? ordinal[i+1] : ordinal[0]
    newarr[i] = `${i+1}${newstr} choise is ${item}`;
})
console.log(color);

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// let arr = [];
// color.forEach(function(item, i ,newarr) {
// //    if(i === 0) {
// //     arr.push(`My ${i+1}${ordinal[1]} choice is ${color[i]}.`)
// //    } else if (i === 1) {
// //     arr.push(`My ${i+1}${ordinal[2]} choice is ${color[i]}.`)
// //    } else if (i === 2) {
// //     arr.push(`My ${i+1}${ordinal[3]} choice is ${color[i]}.`)
// //    } else if (i >= 3) {
// //     arr.push(`My ${i+1}${ordinal[0]} choice is ${color[i]}.`)
// //    }

// // (i===0) ? arr[i].push(`My ${i+1}${ordinal[1]} choice is ${color[i]}.`) : (i === 1) ? arr[i].push(`My ${i+i}${ordinal[2]} choice is ${color[i]}.`)
//     let newstr = (i<3) ? ordinal[i+1] : ordinal[0]
//     newarr[i] = `${i+1}${newstr} choise is ${item}`;
//     // console.log(newarr);

// })
// console.log(color);


// Exercise 5 : Is It A String ?
// ----------------------------
// Write a JavaScript function that checks whether the value of an input is a string or not.
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// function checkValue(val){
//   return (typeof val === 'string') ? true : false;
// }
// console.log(is_string('hello'));
// console.log(is_string([1,2,4]));


// Exercise 6 : Bank Details ?
// ----------------------------
// var bankAmount = 10000;
