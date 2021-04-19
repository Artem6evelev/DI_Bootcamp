// let solar_system = ["Earth", "Jupiter", "Neptune", "Saturn", "Mars", "Venus", "Uranus", "Mercury"];

// for (let i = 0; i < solar_system.length; i++) {
//     if (i == 0) {
//         planet = document.createElement("div");
//         planet.className = "planet, earth";
//         planet.innerHTML = solar_system[i]
//         planet.style.backgroundColor = "green"
//         console.log(planet);
//     } if (i == 1) {
//         planet = document.createElement("div");
//         planet.className = "planet, jupiter";
//         planet.innerHTML = solar_system[i]
//         planet.style.backgroundColor = "green"
//         console.log(planet);
//     } 
// }

let earth = document.createElement('div')
earth.classList.add('planet', 'earth');
earth.style.backgroundColor = "green";

let jupiter = document.createElement('div')
jupiter.classList.add('planet', 'jupiter')
jupiter.style.backgroundColor = "purple"

let neptune = document.createElement('div')
neptune.classList.add('planet', 'neptune')
neptune.style.backgroundColor = "blue"

const saturn = document.createElement('div')
saturn.classList.add('planet', 'saturn')
saturn.style.backgroundColor = "brown"

const mars = document.createElement('div')
mars.classList.add('planet', 'jupiter')
mars.style.backgroundColor = "red"

const venus = document.createElement('div')
venus.classList.add('planet', 'saturn')
venus.style.backgroundColor = "white"

const uranus = document.createElement('div')
uranus.classList.add('planet', 'uranus')
uranus.style.backgroundColor = "grey"

const mercury = document.createElement('div')
mercury.classList.add('planet', 'neptune')
mercury.style.backgroundColor = "mediumslateblue"

const section = document.querySelector('.listPlanets')
section.append(earth, jupiter, neptune, saturn, mars, venus, uranus, mercury)