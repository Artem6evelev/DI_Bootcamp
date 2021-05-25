const fs = require('fs');
// “>” means go right
// “<” means go left

let counter = 0;
let steps = 0;
let stepCounter = 0;

function q1() {
    fs.readFile('./right-left.txt', (err,data) => {
        const directions = data.toString();
        // console.log(directions);
        const directionsArray = directions.split('');
        // console.log(directionsArray);
        for(let i = 0; i < directionsArray.length; i++) {
            if(directionsArray[i] === '>') {
                counter++;
            }
            if (directionsArray[i] === '<') {
                counter--;
            }
        }
        console.log('Total Steps:', counter);   
    })
}

q1()

function q2() {
    fs.readFile('./right-left.txt', (err, data) => {
        const directions = data.toString();
        // console.log(directions);
        const directionsArray = directions.split('');
        // console.log(directionsArray);
        for(let i = 0; i < directionsArray.length; i++) {
            if (directionsArray[i] === '>') {
                steps++;
                stepCounter++;
            }
            if (directionsArray[i] === '<') {
                stepCounter++;
                steps--;
            }
            if (steps === -1) {
                break
            }
        }
        console.log(stepCounter);
        console.log(steps);
    })
}

q2()


// function counter() {
//     fs.readFile('./right-left.txt', (err, data) => {
//         const directions = data.toString();
//        //  console.log(directions);
//         const directionsArray = directions.split('');
//         // console.log(directionsArray);
//     let accumulator = 0
//     let counter = 0
//     const answer = directionsArray.forEach((currentItem) => { // look through the array and if it's matches will stop looping
//         if (currentItem === '>') {
//             accumulator += 1
//         } else if (currentItem === '<') {
//             accumulator -= 1
//         }
//         counter ++
//         return accumulator < 0;
//     }) 
//     console.log(answer);
// })
// }

// counter()