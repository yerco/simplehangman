"use strict";
var highScore;
var attempts;
var currentScore;

/**
 * High score getter.
 * @returns {number}
 */
function getHighscore() {
    return parseInt(localStorage.getItem('highScore')) || 0;
}

/**
 * High score setter.
 * @param score {number} - High score.
 */
function setHighScore(score) {
    localStorage.setItem('highScore', parseInt(score));
}

/**
 * Attempts getter (number of guessing attempts).
 * @returns {number}
 */
function getAttempts() {
    return parseInt(localStorage.getItem('attempts')) || 0;
}

/**
 * Attempts setter.
 * @param attempts {number} - number of guessing attempts.
 */
function setAttempts(attempts) {
    localStorage.setItem('attempts', parseInt(attempts));
}

/**
 * Current score getter.
 * @returns {number}
 */
function getCurrentScore() {
    return parseInt(localStorage.getItem('currentScore')) || 0;
}

/**
 * Current score setter.
 * @param score {number} - current score.
 */
function setCurrentScore(score) {
    localStorage.setItem('currentScore', parseInt(score));
}

/**
 * Maximum attempts getter.
 * @returns {number} - Maximum number of attempts (setup) value.
 */
function getMaximumAttempts() {
    return parseInt(localStorage.getItem('maxtry'));
}

/**
 * Maximum attempts setter.
 * @param maximum {number} - Maximum number of attempts (setup) value.
 */
function setMaximumAttempts(maximum) {
    localStorage.setItem('maxtry', parseInt(maximum))
}

/**
 * Modifies HTML id(s) (current-score, high-score) showing score values after each guessing.
 */
function displayScores() {
    "use strict";
    document.getElementById("current-score").innerHTML = getCurrentScore();
    // high-score check/set
    if (getCurrentScore() >= getHighscore()) {
        setHighScore(getCurrentScore());
    }
    document.getElementById("high-score").innerHTML = getHighscore();
}

/**
 * Center div displaying information after each guessing.
 */
function warningAttempts() {
    "use strict";
    var boxTemplate = '<div class="row">';
    var remainingAttempts = getMaximumAttempts() - getAttempts();
    if (remainingAttempts > 0) {
        //boxTemplate += 'max: ' + getMaximumAttempts();
        boxTemplate += 'Opportunities left: ';
        boxTemplate += remainingAttempts;
    }
    else {
        boxTemplate += "Game Over";
        $("#keyboard li").unbind("click");
    }
    boxTemplate += "</div>";
    document.getElementById("remaining").innerHTML = boxTemplate;
}

/**
 * Checks if the word has been guessed correctly.
 * @returns {boolean} - word has been identified.
 */
function checkCompletion() {
    var complete = false;
    var word = getWord();
    var guessed = getGuessedLetters();
    for(var i =0; i < word.length; i++) {
        if (word[i] === guessed[i]) {
            complete = true;
        }
        else {
            return false;
        }
    }
    return complete;
}

function resetCurrentScore() {
    setCurrentScore(0);
    document.getElementById("current-score").innerHTML = getCurrentScore();
}

function resetHighScore() {
    setHighScore(0);
    document.getElementById("high-score").innerHTML = getHighscore();
}