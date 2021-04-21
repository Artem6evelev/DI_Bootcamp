
let input = document.getElementById("input");
let numb = /[0-9\/]+/;

input.addEventListener("keypress", event => {
    if(numb.test(event.key)) {
        event.preventDefault();
    }
})


