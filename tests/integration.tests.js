var assert = chai.assert;
"use strict";
// word to be guessed
setWord("WALKABOUT");

describe('Integration steps', function() {
  it('START setup arrays, attempts and score', function() {
      "use strict";
      initGuessedLetters(getWord());
      setCurrentScore(0);
      setAttempts(0);
      assert.equal(getGuessedLetters().length, getWord().length);
  });

  it('must show discovered letters and increase score', function() {
      "use strict";
      var letter = "A";
      setGuessedLetters(letter);
      displayLetter(getWord(), letter);
      // +10 points per correct letter - 2xA
      assert.equal(getCurrentScore(), 20);
  });

  it('must keep track of failed attempts', function() {
     "use strict";
     var letter = "Y";
      setGuessedLetters(letter);
      displayLetter(getWord(), letter);
      assert.equal(getAttempts(), 1);
  });

});



