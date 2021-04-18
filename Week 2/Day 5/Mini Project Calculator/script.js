// let operator = prompt("Enter operator");

// let number1 = parseFloat(prompt("First number: "));
// let number2 = parseFloat(prompt("Second number: "));

// let result;

// if (operator == '+') {
//     result = number1 + number2;
// } else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// console.log(`${number1} ${operator} ${number2} = ${result}`);

// var a;
// var secondnumber;
// var result;
// var operations

// var num;
// function number(num) {

//     console.log(num);
// }

// var operator;
// function operator(operator) {
//     console.log(operator);
// }

// var equal;
// function equal() {

let firstNum = [];
let secondNum;
let operation;

function number(num) {
  firstNum.push(num);
  console.log(firstNum);
}

function operator(op) {
  secondNum = parseInt(firstNum.join(""));
  console.log(op);
  firstNum = [];
  operation = op;
  console.log(operation);
}

function equal() {
  firstNum = parseInt(firstNum.join(""));
  if (operation === '+') {
    console.log(secondNum + firstNum);
  } else if (operation === '-') {
    console.log(secondNum - firstNum);
  } else if (operation === '*') {
      console.log(secondNum * firstNum);
  } else {
    console.log(secondNum / firstNum);
  }

}


