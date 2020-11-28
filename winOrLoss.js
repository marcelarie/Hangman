var level = 1;
var letterCount = 0;
var reference = '';
var userWord = '';


function incrementLetterCount(event) {
    letterCount += 1;
    winOrLoss();
    let letter = event.target;
    letter.innertext;
}

function winOrLoss() {
    if (reference === userWord) {
        var win = true;
        level += 1;
    }
    else if (letterCount === 10) {
        win = false;
    }
}

document.getElementById("hangManLetters").addEventListener("click", incrementLetterCount);
