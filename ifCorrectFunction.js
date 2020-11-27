/* Unifying content in a unique variable */
function theHangedMan () {

this.test = ['witch', 'wizard', 'satan','train'] /* Variable created to simulate the incoming input */
this.enigmaWord = "";
this.selectedLetter = [];
this.errorsLeft = 10;
this.enigmaWord = catchWord();

}

/* We catch a random word from a string*/
    theHangedMan.prototype.catchWord = function () {
    var random = Math.floor(Math.random() * this.test.length);
    return this.test[random];
};
/* Make the enigmaWord equal to the one catched from random selection*/


theHangedMan.prototype.pickLetter = function (letter) {
    /* Use capital letter to compare strings with the actual inserted letter*/
    letter = letter.toUpperCase();

    /* we use -1 if the item it's not present */
    if (this.selectedLetter.indexOf(letter) > -1){
        return;
    }

    this.selectedLetter.push(letter);
    let correct = enigmaWord.indexOf(letter) > -1;

    if (!correct) {
        this.errorsLeft -= 1
    }

    return correct;
}
/* Show the status of the current word */

theHangedMan.prototype.showHowIam = function () {
    let that = this;
    let wordStatus = [];
    let splitedWord = this.enigmaWord.split("");

    splitedWord.forEach(function (letter) {
        if (that.selectedLetter.indexOf(letter) > -1) {
            wordStatus.push(letter);
        } else {
            wordStatus.push("_");

        }
    });
    return wordStatus;
};

/*didIWin */
/* Given the circunstance no unserscores are in the word, we will be able to determine */
theHangedMan.prototype.youWon = function() {
    return this.showHowIam().indexOf("_") < 0;
};

/* We want to know if it lost, therefore, this will happen if the number of attempts are lost */
theHangedMan.prototype.youLose = function() {
    return this.errorsLeft === 0;
};

theHangedMan.prototype.didIWin = function() {
    if (youWon()){
        return "You Won!";
    } else if (youLose()){
        return "You Lost, GameOver!!!!";
    }
};




