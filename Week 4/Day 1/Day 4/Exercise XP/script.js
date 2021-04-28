// Exercise 1 : Location
// // Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// //I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// let user = {
//     first: "Elie", last:"Schoppik"
// }

// Exercise 2: Display Student Info

// let user = {
//     first: 'Elie', 
//     last:'Schoppik'
// }

// // let {first, last} = user
// function displayStudentInfo (obj) {
//     let {first, last} = obj
//     return `your full name is ${first} ${last}`
// }
// console.log(displayStudentInfo(user));

// Exercise 3: User & Id
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// const usersToArr = Object.entries(users)
// console.log(usersToArr);



// Exercise 4 : Person Class
// Analyze the code below. What will be the output?
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member); //object
  
// Exercise 5 : Dog Class
// Analyze the options below.
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
// // Which constructor will successfully extend the Dog class?
//  // 3
//  class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
