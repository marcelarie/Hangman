document.getElementById("secondMainPage").classList.add("hide-me");
document.getElementById("finalPage").classList.add("hide-me");

function prevent(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value;
    document.getElementById("welcome").classList.add("hide-me");
    document.getElementById("secondMainPage").classList.remove("hide-me");
}

document.getElementById("startButton").addEventListener("click", prevent);
