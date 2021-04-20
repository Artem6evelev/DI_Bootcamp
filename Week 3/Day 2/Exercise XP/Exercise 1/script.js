// 1. Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let last_para = document.getElementsByTagName("p")[3].remove();
// 2. Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let h2 = document.querySelector("h2");
h2.addEventListener("click", changeColor)

function changeColor () {
    h2.style.backgroundColor = "orange";

}
// 3. Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
let h1 = document.querySelector("h1");
h1.addEventListener("click", randomSize)

function randomSize () {
    h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`; 
}
// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display property).
let h3 = document.querySelector("h3");
h3.addEventListener("click", hide)

function hide () {
    h3.style.display = "none"; 
}


// ----------Not working----------
// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let createBtn = document.createElement("button")
// let form = document.querySelector("form");
// let btn = form.appendChild(createBtn)

// btn.addEventListener("click", boldP)

// function boldP () {
//     let myNodeList = document.querySelectorAll("p");
//     myNodelist[1].innerHTML;

//     // p.innerText.style.fontWeight = "400";
// }


// 6. When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
// then append them to a HTML table, in the div, below the form.
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

let input = function () {
    if (fname.value === "" && lname.value === "") {
      alert(`the inputs are empty`);
    } else {
      let div = document.querySelector(".usersAnswer");
      let table = document.createElement("table");
      let tbody = document.createElement("tbody");
      let tr = document.createElement("tr");
      let text = document.createTextNode(`${fname.value} ${lname.value}`);
  
      div.appendChild(table);
      table.appendChild(tbody);
      tbody.appendChild(tr);
      tr.appendChild(text);
      console.log(fname.value, lname.value, "sucess");
    }
  };


