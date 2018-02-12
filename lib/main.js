"use strict";
/**
 * Triggers the game on loading.
 */
$(function() {
    init();
    /* Keyboard events */
    $('#keyboard li').click(function(){
        var $this = $(this), character = $this.html();
        // Code for processing the key.
        setGuessedLetters(character);
        displayLetter(getWord(), character);
        warningAttempts();
        if(checkCompletion() === true){
            var boxTemplate = '<div class="row">';
            boxTemplate += getWord().join("") + "! next one...";
            boxTemplate += "</div>";
            document.getElementById("remaining").innerHTML = boxTemplate;
            init();
        }
    });
});

function init() {
    "use strict";
    initSetup();
    initGuessedLetters(getWord());
    setAttempts(-1);
    var letter = "_";
    setGuessedLetters(letter);
    displayLetter(getWord(), letter);
}