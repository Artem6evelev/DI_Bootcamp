// Part 1
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
//Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
function getCarHonda (carInventory) {
// The function should loop through the array of object and return the first car with the name “Honda*.
    // let filter = carInventory.filter((item) => {
    //     return item.id === 3
    // })
    // return filter
    const find = carInventory.find(e => e.car_make === "Honda")
    return find
}
// console.log(getCarHonda(inventory))


function returnString (string) {
    let map = string.map((item) => {
        return `This is a ${item.car_make} ${item.car_model} from ${item.car_year}`
    })
    return map
}
// console.log(returnString);

// returnString(invertory).forEach(element => {
const newString = returnString(inventory)
// });
for (let index = 0; index < newString.length; index++) {
    console.log(newString[index]);
}


// Part 2
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

//Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
function sortCarInventoryByYear (carInventory) {
    let sort = carInventory.sort((a,b) => a.car_year - b.car_year)
    return sort
}
// console.log(inventory);
console.log(sortCarInventoryByYear(inventory));