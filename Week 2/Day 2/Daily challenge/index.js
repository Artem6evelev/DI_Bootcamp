
let sentence = prompt("sentence with word not and bad")
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.
// let sentence = "The movie is not that bad, I like it";
// Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");
// Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad")

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


if (wordBad > wordNot) { 
    let newSen = sentence.replace("not that bad", "good")
    console.log(newSen);
} else if (wordBad < wordNot || wordBad === -1 || wordNot === -1) {
    console.log(sentence);
}


