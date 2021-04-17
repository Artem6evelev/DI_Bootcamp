// First Part
function playTheGame() {
    let ask_user = confirm()

    if (ask_user === false) {
        alert("No problem, Goodbye")
    } else if (ask_user === true) {
        var ask_number = prompt("Write number between 0 and 10");
    } while (isNaN(ask_number)) {
        alert("Sorry Not a number, Goodbye")
    } while (ask_number > 10 || ask_number < 0) {
        alert("Sorry it’s not a good number, Goodbye")
    } while (ask_number < 10 || ask_number > 0) {
        var computerNumber = Math.floor(Math.random() * 11); 
        console.log(computerNumber);
    }
}


// Second Part
function test (userNumber, computerNumber) {
    if (userNumber === computerNumber) {
        alert("WINNER")
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then computer's, guess again")
        prompt("Try again")
    } else if (userNumber < computerNumber) {
        alert("Your number is smaller then the computer’s, guess again")
        prompt("Try again")
    } else if (count === 3) {
        alert("out of chances")
    }
}

console.log(test(1, 1));
