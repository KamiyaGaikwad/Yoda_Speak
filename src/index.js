var btnn = document.querySelector("#btn");
var intext = document.querySelector("#t1");
var outp = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructorurl(intput1) {
  return serverURL + "?text=" + intput1;
}

function errorhandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! Please try again");
}

function clickhandler() {
  var intput1 = intext.value;
  fetch(constructorurl(intput1))
    .then((response) => response.json())
    .then((json) => {
      var answer = json.contents.translated;
      outp.innerText = answer;
    })
    .catch(errorhandler);
}

btnn.addEventListener("click", clickhandler);
