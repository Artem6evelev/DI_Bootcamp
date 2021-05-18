//* Connect button, Events

//1 On Click
// function send() {
//     let newBtn = document.createElement('button')
//     root.appendChild(newBtn)
//     newBtn.innerText = 'new button'
// }
// const root = document.getElementById("root");
//2 Event Listener
// const btn = document.createElement('button');
// btn.innerText = 'event listener'
// root.appendChild(btn)

// btn.addEventListener('click', function() {
//     console.log('hello');
// })

//3 Add input
// const input = document.createElement('input');
// root.appendChild(input)

//4 Create buttons dinamicly and listen input value
// input.addEventListener('input', function() {
//     console.log(input.value);
// })

// const createElements = () => {

//   //Create input
//   const input = document.createElement("input");
//   input.setAttribute("type", "text");
//   input.setAttribute("id", "myInput");
//   root.appendChild(input);

//   //Create button
//   const btn1 = document.createElement("button");
//   btn1.innerText = "input value";
//   root.appendChild(btn1);

//   //Listen input value
//   btn1.addEventListener("click", function send() {
//     inputValue();
//   });

// };

// createElements();


// let myLovelyArray = [];

// const inputValue = () => {
//     //1 Push input value to array
//   const myInput = document.getElementById("myInput");
//   myLovelyArray.push(myInput.value)
//   //using map method add new element to new array
//   let mynNewArr = myLovelyArray.map(function(item){
//       return item + " you are the BEST Developer "
//   })
//     //2
//     display(mynNewArr)
//     // display(myLovelyArray)
// };

// const parentDiv = document.createElement('div');
// root.appendChild(parentDiv);
// // Display value from the input
// function display(arr) {
//     parentDiv.innerHTML = '';
//     for (var i = 0; i < arr.length; i++) {
//         const div = document.createElement('div');
//         div.innerHTML = arr[i];
//         parentDiv.appendChild(div)
//     }
// }

// const btn1 = document.createElement('button');
// btn1.innerText = 'input value'
// root.appendChild(btn1)

// btn1.addEventListener('click', function send() {
//     console.log(input.value);
// })

//* Homework 18.05.2021
const cars = [
  {brand:'Porshe', price:'1000000'},
  {brand:'Audi', price:'500000'},
  {brand:'Toyota', price:'250000'},
]

console.log(cars);

cars.map(item => {
  item.pricePlusVat = item.price * 1.17;
})

// const newCars = [
//   {brand:'Porshe', price:'1000000',pricePlusVat:'1170000'},
//   {brand:'Audi', price:'500000',pricePlusVat:'570000'},
//   {brand:'Toyota', price:'250000',pricePlusVat:'320000'},
// ]