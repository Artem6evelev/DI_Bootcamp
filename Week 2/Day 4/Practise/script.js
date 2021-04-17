
// function sayHi () {
//     console.log("Helo");
//     console.log("How are you");
// }

// sayHi();

// ALWAYS CALL A FUNCTION with ()
// function userInfo1 (name, age) {
//     name = prompt("What is your name?") // string
//     age = +prompt("How old are you?") // number
//     console.log("My name is " + name + " my age is " + age)
// }
// // inside of brackets parameters
// userInfo1() //calling a function



// function userInfo2 (fname, age) {
//     console.log("My name is " + fname + " my age is " + age)
// }
// userInfo2()


// ----------Exercise 1----------
// 1. Create a structured html file linked to a js file
// 2. Write a JS function that takes a parameter: myAge
// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)
// 4. Call the function
// function parentsAge(myAge) {
//     let momAge = myAge*2;
//     let myDad = momAge*1.2;
//     console.log("My mum is " + momAge + "My dad is " + myDad*1.2);
// }

// parentsAge(26);


// ----------Return from function----------
// function userInfo(name, age) {
//     let result = "My name is" + name + "my age is"  + age 
//     return result 
// }

// let girlInfo = userInfo("Sarah", 22)
// console.log(girlInfo) // girl  = result 

// ----------

// function userInfo(name, age) {
//     if (name == "Sarah") {
//         let result = "Hey " + name 
//         return result 
//     } else {
//         return "You are not the right person"
//     }
// }

// let girlInfo = userInfo("Sarah", 22)
// console.log(girlInfo) // girl  = Hey Sarah


// ----------Exercise 1----------
// function parentsAge(myAge) {
//     let myMom = myAge*2;
//     return myMom
// }
// let myMom = parentsAge(25)
// console.log(myMom);




// ----------Functions----------
// console.log("Helooooo", "How are you?");

// 1.Function Declaration
// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// 2. Function Expression
// var sayBye = function() { //Anonymous Function
//     console.log("Bye");
// }

// sayBye();
 
// 3. Arguments
// function sing(song) {
//     console.log(song);
// }

// sing("Laaa deee daaa");
// sing("heloooooo");
// sing("backstreets back alright");

// function sing2() {
//     console.log("laaa deee daaa");
//     console.log("laaaaaaa");
// }

// sing2();

// function multiply(a, b) {
//     if (a > 10 || b > 10) {
//         return "that's too hard";
//     } else {
//         return a * b;
//     }

// }

// multiply(5, 10);

//Function in variable
// var a = function (a, b) {
//     if (a > 10 || b > 10) {
//         return "that's too hard";
//     } else {
//         return a * b;
//     }

// }

// a()

// ----------JS Terminology----------
//1. function declaration
// function newFunction() {

// }

//2. function expression
// var newFucntion = function() {

// };

//3. expresiion
// 1+3;
// var a=2;
// return

//4. calling or invoking a function
// alert();
// newFunction(param1, param2);

//5. assign a variable
// var a = true;

//6. function vs method
// function thiIsAFunction () {

// }

// var obj = {
//     thisIsMethod: function() {

//     }
// }

// thiIsAFunction() //function
// obj.thisIsMethod //method


// ----------Build Facebook----------
// var database = [
//     {
//         username: "andrei",
//         password: "supersecret"
//     },
//     {
//         username: "sally",
//         password: "123"
//     },
//     {
//         username: "ingrid",
//         password: "777"
//     }

// ];

// var newsFeed = [
//     {
//         username: "Bobby",
//         timeline: "So tired from all that learning!"
//     },
//     {
//         username: "Sally",
//         timeline: "Javascript is sooooo cool!"
//     }
// ];

// function isUserValid (username, password) {
//     for ( var i = 0; i < database.length; i++) {
//         if (database[i].username === username &&
//             database[i].password === password) {
//                 return true; 
//             } 
//     }
//     return false;
// } 


// function signIn (username, password) {    
//     if (isUserValid(username, password)) {
//         console.log(newsFeed); 
//         } else {
//         alert ("Sorry, wrong username and password!");  
//     }
// }

// var userNamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("What\'s your password?");

// signIn(userNamePrompt, passwordPrompt);

