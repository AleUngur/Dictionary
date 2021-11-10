var dictionary = [""];
var i = 1;

function addWord() {
  var word = document.getElementById("wordinput").value;
  dictionary.push(word);
  document.getElementById("wordInput") = "";
}

function searchWord() {}

for (let j = 0; j < dictionary.length; i++) {
  console.log(dictionary[j]);
}
