let richard = document.getElementsByTagName("li")
richard[1].innerText = "Richard"
// console.log(richard);

let ulToMyName = document.getElementsByClassName('list');
ulToMyName[0].firstElementChild.textContent = "Artem";
ulToMyName[1].firstElementChild.textContent = "Artem";
// console.log(ulToMyName);

// At the end of each <ul> add a <li> that says “Hey students”.

let hey_students1 = document.createElement("li");
hey_students1.innerText = "Hey students";
// console.log(hey_students1);

let hey_students2 = document.createElement("li");
hey_students2.innerText = "Hey students";
// console.log(hey_students2);

ulToMyName[0].appendChild(hey_students1);
ulToMyName[1].appendChild(hey_students2);

let sarah = document.getElementsByTagName('li')[4];
sarah.remove()