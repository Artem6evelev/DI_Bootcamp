// Exercise 1: Conversion
// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);
// async function getData() {
//     const api = await fetch("https://swapi.dev/api/starships/9/")
//     const jsonObj = await api.json()
//     console.log(jsonObj);
    
// }
// getData()


// Exercise 2: Analyze
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// calling and after 2 sec resolved