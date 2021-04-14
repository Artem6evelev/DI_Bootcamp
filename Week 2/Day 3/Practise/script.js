// For Loop
// for (statement 1; statement 2; statement 3) {
//     // code block to be executed
//   }
// Statement 1 : marks the start of a for loops
// Statement 2 : defines the condition for executing the code block. Must return a boolean value.
// Statement 3 : is executed (every time) after the code block has been executed.
// When the condition becomes false, the loop terminates marking the end of its life cycle.

// Iterator++ - iterator + 1 = iterator
// for (let i = 0; i < 5; i++) {
//     console.log("the current number is " + i)
//     the current number is 0
// script.js:12 the current number is 1
// script.js:12 the current number is 2
// script.js:12 the current number is 3
// script.js:12 the current number is 4
// }

// Exersice 1
// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output: //"0 is even" //"1 is odd" //"2 is even"
// for (let i = 0; i <= 15; i++) {
//     if(i % 2 == 0) {
//         console.log(i + "The number is even.");
//     }
//     else {
//         console.log(i + "The number is odd.");
//     }
// }


// For/In Loop
// let person = {
//     fname:"John", 
//     lname:"Doe", 
//     age:25
// };

// for (let x in person) {
//   console.log(x) //fname lname age
//   console.log(person[x]) // John Doe 25
// }


// --------------
// Exercise 2
// let names= ["john", "sarah", 23, "Rudolf",34]

// for (let i = 0; i < names.length; i++) {
