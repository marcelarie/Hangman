let theHangMan;

let startNewGame = function () {
  theHangMan = new theHangedMan();
  insertChosenWord()
};

let resetCurrentWord = function () {
    /*We select the div where the chosen word would be stored*/
    let word = document.getElementById("hangManGuessLetters");
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
  };
/* we define the function which will insert the current word */
let insertChosenWord = function (word) {
    resetCurrentWord();

    let hangManGuessLetters = word || theHangMan.showHowIam();
    let hangManGuessLettersDom = document.getElementById("hangManGuessLetters");
/* Now we create a function that for each letter creates an span and a node */
    hangManGuessLetters.array.forEach(function (letter){
        let spanLetter = document.createElement("span");
        let content = document.createTextNode(letter);
        spanLetter.appendChild(content);
        hangManGuessLettersDom.appendChild(spanLetter);
    });
};

/*Now we will create the method to insert the letter once is pressed */
/*
let insertClickedLetter = function (e) {
    if (e.keyCode < 65 || e.keyCode > 90)
    return;
/*returns a string created by using the ASCII representation of the same*/
/*    let letter  = String.fromCharCode(e.keyCode);
    let correct = theHangman.pickLetter(letter);


/*We will add the wrong letter just if it is not in the container yet */
 /*if (correct !== undefined && !correct) {
    _addLetter(letter);
  } else {
    insertChosenWord();
  }
};*/

/* Creating EventListener for each key*/
/* }; */
/* document.getElementById("letterA").addEventListener("click", myFunction(){}) */




/* Event listener to listen the new input */
document.getElementById("startButton").addEventListener("click", startNewGame);