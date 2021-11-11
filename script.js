var dictionary = [];

function addWord() {
  var word = document.getElementById("word-input").value;
  dictionary.push(word);
  return "The word was added succesfully";
}

function searchWord() {
  var wordToSearch = document.getElementById("search-input").value;
  for (let i = 0; i < dictionary.length; ++i) {
    if (wordToSearch.localeCompare(dictionary[i]) == 0) {
      alert("The searched word is found in the Dictionary!");
    } else {
      alert("The searched word is not in the Dictionary!");
    }
  }
}

console.log(dictionary);
