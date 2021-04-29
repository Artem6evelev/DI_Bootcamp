

function printAnagrams(wordToCheck) {
  // split, join, sort
  wordToCheck = wordToCheck.split('').sort().join('');

  for (var word of wordList) {
    let wordSorted = word.split('').sort().join('');
    if (wordToCheck === wordSorted) {
      console.log(word);
    }
  }
}

printAnagrams("listen");
