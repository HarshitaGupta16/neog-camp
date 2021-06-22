var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtInput");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
    // in return construct the serverURL by serverURL + "?" starts the query parameter + "text=" this is key in query + then the value that is input.
    // This will give the translation url
}
// console.log(btnTranslate)

function errorHandler(error) {
    console.log("error occured ", error)
    alert("something wrong with srver! try again after some time")
}

function clickHandler() {
    // outputDiv.innerText = "asasssksks " + txtInput.value This shows output on browser

    let inputText = txtInput.value; // taking input

    // calling server for processing //processing went to server in this program
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
// clickHandler will give callback to the function
