
// Exercice 1

// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// let x = 5;
// let y = 2;

// if (x > y) {
//     console.log("correct");
// } else {
//     console.log("wrong");
// }
// You should display:
// x is the biggest number



// Exercise 2: Chihuahua
// let newDog = "Chihuahua"
// 1. Check and display how many letters are in newDog.
// console.log(newDog.length);
// 2. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());
// 3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// if (newDog === "Chihuahua") {
//     console.log("I love Chihuahuas, it’s my favorite dog breed’");
// } else {
//     console.log("I dont care, I prefer cats");
// }


// Exercise 3: Even Or Odd
// number = prompt(`enter a number to see if it is odd or even`);

// if (number % 2 === 0) {
//     console.log(`${number} is an even number`);
// } else if (number % 2 != 0) {
//     console.log(`${number} is an odd number`);
// }



// Exercise 4 : Switch Case
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//       case "forward":
//         break;
//         whatHappens = "you encounter a monster";
//       case "back":
//         whatHappens = "you arrived home";
//         break;
//         break;
//       case "right":
//         return (whatHappens = "you found a river");
//         break;
//       case "left":
//         break;
//         whatHappens = "you run into a troll";
//         break;
//       default:
//         whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
//   }
// Answer
// "forward" - you encounter a monster
// "back" - you arrived home
// "right" - you found a river
// "left" - you run into a troll
  

// Exercise 5
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// if (users.length === 0) {
//     console.log("no one is online");
// } else if (users.length === 1) {
//     console.log(`there is one user ${users[0]} is online`);
// } else if (users.length === 2) {
//     console.log(`there are  two users ${users[1]} and ${users[2]} are online`);
// } else if (users.length > 2) {
//     console.log(`${users[0]}, ${users[1]} and ${users.length - 2} are online`);
// }