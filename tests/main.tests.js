var assert = chai.assert;

describe('Dummy Array Test', function() {
    it('should start empty', function() {
        var arr = [];

        assert.equal(arr.length, 0);
    });
});

describe('words', function() {
    xit('should read the initial available words', function() {
        'use strict';
        var words = getInitWords();
        assert.deepEqual(arrayCapitalize(words), [
            '3DHUBS',
            'MARVIN',
            'PRINT',
            'FILAMENT',
            'ORDER',
            'LAYER'
        ])
    });

    xit('must have a method to set a target word', function() {
        "use strict";
        var word = "ELLOELLA";
        setWord(word);
        assert.deepEqual(getWord(), ['E','L','L','O','E','L','L','A']);
    });

    xit('must set an initial empty word - nothing guessed', function() {
        'use strict';
        initGuessedLetters('ALELUYA');
        var guessed = getGuessedLetters();
        assert.deepEqual(guessed, ['-','-','-','-','-','-','-']);
    });

    xit('must save the character guessed', function() {
        'use strict';
        var letter = 'L';
        var word = 'ALELUYA';
        // method for testing
        setWord(word);
        initGuessedLetters(word);
        setGuessedLetters(letter);
        assert.deepEqual(
            getGuessedLetters(),
            ["-", "L", "-", "L", "-", "-", "-"]
        );
    });

    /* Visual test */
    xit('must draw available boxes for the word to be guessed', function() {
        var word = wordToArray('MARVINIVRAM');
        var letter = '_';
        var hit = displayLetter(word, letter);
        assert.isFalse(hit);
    });
    /* Visual test */
    xit('must detect a letter and display it', function() {
        'use strict';
        var word = wordToArray('MARVINIVRAM');
        var letter = 'R';
        // console.log(removeLetter(word, letter));
        var hit = displayLetter(word, letter);
        assert.isTrue(hit);
    });
});

describe('score', function() {
    xit('setter and getter of high-score', function() {
        'use strict';
        var score = 900;
        setHighScore(score);
        assert.equal(getHighscore(), score);
    });

    xit('setter and getter of attempts', function() {
        'use strict';
        var attempts = 10;
        setAttempts(attempts);
        assert.equal(getAttempts(), attempts);
    });

    xit('setter and getter of score', function() {
        'use strict';
        var currentScore = 20;
        setCurrentScore(currentScore);
        assert.equal(getCurrentScore(), currentScore);
    });
});