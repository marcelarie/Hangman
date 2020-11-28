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
        var win = true;
        level += 1;
        scoreRank()
    }
    else if (letterCount === 10) {
        var win = true;
        scoreRank()
    }
}

function scoreRank() {
    document.getElementById("secondMainPage").classList.add("hide-me");
    document.getElementById("finalScreen").classList.remove("hide-me");
    end=Date.now();
    score=(end-start)/1000;

    var parent=document.getElementById("scores");
    var newUser=document.createElement("span");
    newUser.innerHTML=name+" : "+score;
    parent.appendChild(newUser);
}

document.getElementById("hangManLetters").addEventListener("click", incrementLetterCount);