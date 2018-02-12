"use strict";

/**
 * Initial setup, before user begins playing.
 */
function initSetup() {
    var initWords = [
        "3dhubs",
        "marvin",
        "print",
        "filament",
        "order",
        "layer"
    ];
    // converting them to uppercase
    localStorage.setItem(
        "words", JSON.stringify(
            initWords.map(function (x) {
                return x.toUpperCase()
            })
        ))
    ;
    localStorage.setItem("word", JSON.stringify(pickAWord().split("")));
    localStorage.setItem("guessed", JSON.stringify([]));
    setMaximumAttempts(3);
}

/**
 *  Words available, one will be picked for the current game.
 *  @returns {Array} - pool of words.
 */
function getInitWords() {
    return JSON.parse(localStorage.getItem("words"));
}

/**
 * Function used for testing purposes.
 * Sets an initial word to guess.
 * @param word - word to be guessed.
 */
function setWord(word) {
    localStorage.setItem("word", JSON.stringify(word.split("")));
}

/**
 *  Get the current word being guessed.
 *  @returns {Array} - word as an array of char.
 */
function getWord() {
    return JSON.parse(localStorage.getItem("word"));
}

/**
 * Creates a empty array (guessed) with the same number of char as the target word.
 * @param word {string} - word to be guessed.
 */
function initGuessedLetters(word) {
    var temp = "";
    word.forEach(function() {
        temp += "-";
    });
    localStorage.setItem('guessed', JSON.stringify(temp.split("")));
}

/**
 * Getter, returns the letters found so far.
 * @returns {Array} - Letters discovered or hyphen.
 */
function getGuessedLetters() {
    return JSON.parse(localStorage.getItem('guessed')) || [];
}

/**
 * Setter, records the letter if correct.
 * @param letter {string} - the input letter.
 */
function setGuessedLetters(letter) {
    var temp = [];
    var hit = false;
    getWord().forEach(function(char) {
        if (letter === char) {
            hit = true;
            temp.push(letter);
        }
        else {
            temp.push('-');
        }
    });
    var guessed = getGuessedLetters();
    for(var i=0; i < guessed.length; i++) {
        if(temp[i] !== '-' && guessed[i] === '-') {
            guessed[i] = temp[i]
            // +10 per character discovered
            setCurrentScore(getCurrentScore() + 10);
        }
    }

    // Attempt successful or not
    if (hit === false) {
        setAttempts(getAttempts() + 1);
    }
    localStorage.setItem('guessed', JSON.stringify(guessed));
    // update scores and attempts
    displayScores();
}

/**
 * Capitalize an array of string.
 * @param ary {Array.<string>} - all letters uppercase.
 */
function arrayCapitalize(ary) {
    return ary.map(function(x) { return x.toUpperCase() });
}

/**
 * Pick random word from the pool of available ones.
 * @returns {string} - random word.
 */
function pickAWord() {
    var words = getInitWords();
    return words[Math.floor(Math.random() * words.length)];
}

// /**
//  * String to array = verbose but clearer IMHO :P
//  * @param word {string}
//  * @returns {Array} - exploded array.
//  */
function wordToArray(word) {
    return word.split("");
}

/**
 * Displays what has been guessed until that moment,
 * modifying id="main-word" inserting the mini template.
 */
function displayLetter() {
    "use strict";
    var guessed = getGuessedLetters();
    var boxTemplate = '<div class="row">';
    boxTemplate += '<ul class="guess-word">';
    guessed.forEach(function(char) {
        if (char === '-') {
            boxTemplate += "<li> _ </li>";
        }
        else {
            boxTemplate += "<li> " + char + " </li>";
        }
    });
    boxTemplate += "</ul>";
    boxTemplate += "</div>";
    document.getElementById("main-word").innerHTML = boxTemplate;
}
