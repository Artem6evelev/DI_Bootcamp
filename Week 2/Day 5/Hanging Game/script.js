// computer chooses a word
var player1_word = "hangman";

//Split in Array
var player1_array = player1_word.split(""); //Output: ["h", "a", "n", "g", "m", "a", "n"]
// console.log(player1_array);

//New Array
var array = [];
for (var i = 0; i < player1_array.length; i++) {
   array.push("*");
}
console.log((array.join(""))); //Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку. Output: ******* depend on the length of player1_word

//Prompt User
var player2_guess = prompt("guess a letter").toLowerCase();

//Function to check letter
function check_word(player2_guess){
  for (var i = 0; i < player1_array.length; i++) {
    if (player2_guess === player1_array[i]) {
      array[i] = player2_guess;
      console.log((array.join("")));
    }
  }
}

  //Loop our word that player one said
  for (var i = 0; i < 9; i++) {
    check_word(player2_guess);
    if ((array.join(""))===player1_word) {
        break;
      }
          player2_guess = prompt("choose another letter, you have "+(10-(i+1))+" more tries!").toLowerCase();
}

//10 attempts case
switch (true) {
  case i===9:
  alert("Looooser=)! the word was " + player1_word);
    break;
  default:  alert("Winner! the word was "+player1_word);
}

