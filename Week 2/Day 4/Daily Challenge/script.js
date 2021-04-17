// Daily Challenge: Words In The Stars

let sent = "Test Sentence for Daily Challenge";
text_arr = sent.split(" ");
console.log(text_arr);

const longest = get_longest(text_arr);
const border = new Array(longest + 5).join("*") 

console.log(border);
for (word of text_arr) {
    console.log("* " + word + new Array(longest - word.length + 1).join(" ") + " *");
}
console.log(border);

function get_longest (arr) {
    let longest = 0;

    for (word of arr) {
        if (word.length > longest) {
            longest = word.length
        }
    }
    return longest;
}
