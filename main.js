document.getElementById("secondMainPage").classList.add("hide-me");
document.getElementById("finalScreen").classList.add("hide-me");
var start;
var end;
var score;
var name="noName";

function prevent(event) {
    event.preventDefault();
    start=Date.now();
    name = document.getElementById("userName").value;
    document.getElementById("welcome").classList.add("hide-me");
    document.getElementById("secondMainPage").classList.remove("hide-me");
}

function playAgain(){
    document.getElementById("finalScreen").classList.add("hide-me");
    document.getElementById("welcome").classList.remove("hide-me");
    letterCount = 0;
    hangManLetters.forEach(e => {
        e.classList.remove('visibilityHidden');
    })
}

document.getElementById("startButton").addEventListener("click", prevent);
document.getElementById("playAgainButton").addEventListener("click", playAgain);