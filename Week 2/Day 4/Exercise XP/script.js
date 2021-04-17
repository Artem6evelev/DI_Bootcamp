// ----------Exercise 1: Keyless Car----------
// let user = +prompt("How old are you?");
// let userAge = user

// function checkDriverAge() {
//     if (userAge < 18) {
//         console.log("Sorry, you are too young to drive this car. Powering off");
//     } else if (userAge > 18) {
//         console.log("You are old enough to drive, Powering On. Enjoy the ride!");
//     } else if (userAge === 18) {
//         console.log("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// } 

// checkDriverAge(user)




// ----------Exercise 2 : What’s In My Wallet ?----------
// function changeEnough([quarers, dimes, nickels, pennies], price) {
//     let wallet = (quarers * 0.28) + (dimes * 0.14) + (nickels * 0.14) + (pennies * 0.14);
//     console.log(wallet)

//     if (wallet >= price) {
//         console.log(true)
//         return true
//     }
//     else {
//         console.log(false)
//         return false;
//     }
// }

// changeEnough([05, 02, 25, 8], 0.90);




// ----------Exercise 3: Find The Multiples Of 23 ----------
//Write a js function that console.logs all multiples of 23 less than 500, at the end return the sum of all the multiples.

// function multiplesOf23 (numbers, number) { 
//     var multiples = []; 
//     for (var i = 0; i < numbers; i++) {
//       if (numbers[i] * number === 0) { 
//         multiples.push(numbers[i]); 
//       }
//     }
  
//     return multiples;
//   }
  
//   console.log(multiplesOf23([23], 2));




// ----------Exercise 4 : Amazon Shopping ----------
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket() {
//     let item = prompt("write item that already in your basket!");
//     if (item in amazonBasket) {
//         console.log(`Yout ${item} is in the basket`);
//     } else {
//         console.log(`bla bla bla`);
//     }

// }




// ----------Exercise 5 : Shopping List----------
// Create a function called myBill() that takes no arguments.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "watermellon"]

// function myBill() {
//     let price = 0;
//     for(i in shoppingList) {
//         console.log(shoppingList[i]);
//         if(stock[shoppingList[i]] > 0) {
//             price += prices[shoppingList[i]];
//             stock[shoppingList[i]]
//         }
//     }
//     console.log(price)
//     console.log(stock)
// }

// myBill(shoppingList)

// ----------Exercise 6 : Tips----------
// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// function calcTip (bill) {
//     let tip = 0;

//     if(bill < 50) {
//         tip = bill * 0.2;
//     } else if (bill >= 50 && bill <=200) {
//         tip = bill * 0.15;
//     } else if (bill > 200) {
//         tip = bill * 0.1;
//     }
    
//     let askJohn = +prompt("How many bills did you get?According this information we will calculate your tip amount and final bill");
//     let total =  askJohn;
//     console.log(`Your tip is ${tip}`);
//     console.log(`Your total bill, tip included, is ${total}`);

// }

// calcTip();