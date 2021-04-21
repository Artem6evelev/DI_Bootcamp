// Instructions
// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.
let object = null;

function myMove () {
    let cube = document.getElementById("animate");
    let position = 0;
    clearInterval(object)
    object = setInterval(frame, 5);
    function  frame() {
        if (position == 350) {
            clearInterval(object);
        } else {
            position++;
            cube.style.top = pos + "px";
            cube.style.left = pos + "px";
        }
    }
}