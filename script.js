var dictionary = [];

function addWord() {
  var word = document.getElementById("word-input").value;
  dictionary.push(word);
  document.getElementById("word-input").value = "";
  //console.log(dictionary);
}

function searchWord() {
  var wordToSearch = document.getElementById("search-input").value;
  for (var i = 0; i < dictionary.length; ++i) {
    if (wordToSearch.localeCompare(dictionary[i]) == 0) {
      message(1);
    }
  }
  message(0);
}

function message(x) {
  var div = document.getElementById("message-container");
  var mess = document.getElementById("message");
  if (x == 1) {
    mess.innerHTML = "The word IS in the dictionary!";
  } else if (x == 0) {
    mess.innerHTML = "The word IS NOT in the dictionary!";
  }
  div.appendChild(mess);
}

//preventing the page to auto-reload after pushing the buttons
var submitForm = document.getElementById("submit-form");
var searchForm = document.getElementById("search-form");
function handleForm(event) { 
  event.preventDefault();
}
submitForm.addEventListener("submit", handleForm);
searchForm.addEventListener("submit", handleForm);
