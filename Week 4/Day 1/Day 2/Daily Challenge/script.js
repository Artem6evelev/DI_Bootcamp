// let groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         payed : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }

// // Copy this object using the method that was taught in today’s lesson.
// let obj1 = {...groceries};
// // console.log(obj1);
// // Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// obj1.totalPrice = "35$"
// // console.log(obj1);
// // Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?
// let objJSON = JSON.stringify(obj1)
// // console.log(objJSON);
// let obj2 = JSON.parse(objJSON)
// // console.log(obj2);
// obj2.other.payed = false;
// console.log(obj2);