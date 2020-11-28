var level = 1;
var letterCount = 0;
var reference = 'adrhathatrhartrt';
var userWord = '';


function incrementLetterCount(event) {
    letterCount += 1;
    winOrLoss();
    let letter = event.target;
    letter.innertext;
}

function winOrLoss() {
    if (reference === userWord) {
        document.getElementById("secondMainPage").classList.add("hide-me");
        document.getElementById("scores").classList.remove("hide-me");
        document.getElementById("finalPage").classList.remove("hide-me");
        var win = true;
        level += 1;
        end=Date.now();
        score=(end-start)/1000;
    }
    else if (letterCount === 10) {
        document.getElementById("secondMainPage").classList.add("hide-me");
        document.getElementById("scores").classList.remove("hide-me");
        document.getElementById("finalPage").classList.remove("hide-me");
        win = false;
        end=Date.now();
        score=(end-start)/1000;
    }
}

document.getElementById("hangManLetters").addEventListener("click", incrementLetterCount);
