// Exercise 2 : Transform The Sentence
let bold = document.getElementsByTagName("p")[0];

let boldF = function() {
    for(let i = 0; i < bold.length; i++) {
        console.log(bold[i].innerText);
    }
};
// Create a function called highlight() that changes the color of all the bold text to blue.

let hili = function () {
    for (let i = 0; i < bold.length; i++) {
        bold[i].style.color = "orange";
      }
    };
    console.log(hili());

    // Create a function called return_normal() that changes the color of all the bold text back to black.

    let return_normal = function()) {
        for (let i = 0; i < bold.length; i++) {
          bold[i].style.color = "black";
        }
      };

    //   ADD EVENT LISTENER HERE!!!!