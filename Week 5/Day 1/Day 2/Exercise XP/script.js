// Exercise 1
let xhr = new XMLHttpRequest();

xhr.open('GET', ' "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"');

xhr.send();
xhr.responseType = 'json'

xhr.onload = function() {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
      } else { // show the result
            console.log(xhr.response);
  }
};

// Exercise 2
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// function filter (arr) {
//   arr.filter()
// }