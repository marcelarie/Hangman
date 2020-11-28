var level = 1;
var letterCount = 0;
var currentWord = '';

function incrementLetterCount(event) {
    if (event.target.classList.contains('visibilityHidden')) {
        letterCount += 1;
    }
    winOrLoss();
    let letter = event.target;
    letter.innertext;
}

function winOrLoss() {
    if (currentWord === levelWord) {
        var win = true;
        if (level<3){
            level += 1;
        }
        scoreRank(win)
    }
    else if (letterCount === 10) {
        var win = false;
        scoreRank(win)
    }
}

function scoreRank(win) {
    if(win){
        document.getElementById("lostMessage").classList.add("hide-me");
        document.getElementById("winMessage").classList.remove("hide-me");
    }
    else{
        document.getElementById("winMessage").classList.add("hide-me");
        document.getElementById("lostMessage").classList.remove("hide-me");
        
    }
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