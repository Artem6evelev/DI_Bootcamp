// Prompt the user for a number to begin counting down bottles.
var numberOfBottles = prompt("Give a number");

while(numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take 1 down, pass it around,");
	numberOfBottles--;
}




