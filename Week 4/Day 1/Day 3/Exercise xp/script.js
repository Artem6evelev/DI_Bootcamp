// Exercise 1 : Analyzing


// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits]; ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// console.log(result); 
// // ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// // ------2------
// const country = "USA";
// console.log([...country]);

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// Exercise 2 : Employees
// 1. Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

            //  let map = users.map((item) => {
            //     return "Hello " + item.firstName 
            //  })
            // console.log(map);
// Using the filter() method, congratulate only the Full Stack Residents.
            //  let filter = users.filter((item) => {
            //      return item.role === 'Full Stack Resident' 
            //  })
            //  let map1 = filter.map((item) => {
            //      return "Congratulation " + item.firstName
            //  })
            //  console.log(map1);


// Exercise 3 : Star Wars
// Use the reduce() method to combine all of these into a single string.
// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let reduce = epic.reduce((a, item) => {
//     return a + item + " "
// })
// console.log(reduce);


// Exercise 4 : Employees #2
// let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// //    Use the filter() method to congratulate the students that passed the course.
//                 let filter = student.filter((item) => {
//                     return item.isPassed // why it's not return all the items?
//                 })
//                 console.log(filter);

//                 let map = filter.map((item) => {
//                     return "Congratulation " + item.name + "You passed Exam"
//                 })
//                 console.log(map);

