"use strict";
/**
 * Used for testing keyboard input events.
 */
$(function() {
    /* Keyboard events */
    $('#keyboard li').click(function(){
        var $this = $(this), character = $this.html();
        // Code for processing the key.
        setGuessedLetters(character);
        displayLetter(getWord(), character);
    });
});


