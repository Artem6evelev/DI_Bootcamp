// Exercise 1:
// Write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10.

// const compareToTen = (num) => {
//     return new Promise( (resolve,reject) => {
//       if(num > 10){
//         resolve('bal bla bla')
//       }
//       else{
//         reject('ha ha ha')
//       }
//     })
//     // return p;
//   }
//   // let myPromise = compareToTen(70);
//   compareToTen(11).then(data => {
//     console.log('aaaa',data);
//   })

//   .catch(err => {
//     console.log('bbbb',err);
//   })


// Exercise 2:
// Write two functions that use Promises that you can chain!
// The first function:
// makeAllCaps(), will take in an array of words
// and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.
// examples of array:
const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (arr) => {
    return new Promise( (resolve,reject) => {
        let uppercase = arr.map(function(item) {
            if(typeof item === 'string'){
                return item.toUpperCase();
            } else {
                reject('NOT ALL ITEMS IN ARRAY ARE STRINGS')
            }
        })
        resolve(uppercase)
    })
  }

  const sortWords = (array) => {
      return new Promise((resolve, reject) => {
          if(array){
              resolve(array.sort())
          } else {
              reject('something went wrong')
          }
      }) 
  }


  makeAllCaps(arrayOfWords).then(data => {
    return sortWords(data);
  })
  .then(sort => {
    console.log(sort);
})

.catch(err => {
    console.log(err);
  })



