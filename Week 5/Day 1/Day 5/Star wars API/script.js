let findButton = document.getElementById("findButton");
let name1 = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let home = document.getElementById("home");
let waiting = document.getElementById("waiting");

findButton.addEventListener('click',randomPeople);
 
// Function to get data from API
function randomPeople() {
    waiting.style.display= 'block';
    // let rand = 17;
    let rand = Math.round(Math.random() * 82);
    // console.log(rand);
    
    async function fetchPeople(number) {
        try {
            const response = await fetch('https://swapi.dev/api/people/' + number + '/')
            const people = await response.json();
            // console.log(people);
            const planet = await fetch(people.homeworld);
            const planetData = await planet.json();
            // console.log(planetData);
            waiting.style.display ='none';
            name1.innerText=people.name;
            height.innerText="Height : " + people.height;
            gender.innerText="Gender : " + people.gender;
            birth.innerText="Birth Year : " + people.birth_year;
            home.innerText="Home World : " + planetData.name;
        }
        catch (err) {
            name1.innerText="Oh no, that person is not available";
            console.log(err);
            waiting.style.display ='none';
        }
    }
    fetchPeople(rand);
   
}