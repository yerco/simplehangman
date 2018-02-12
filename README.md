Simple hangman game (logic) from scratch.

Documentation Check folder `out`.

## Folders
- `lib`: game JS files.
- `tests`: testing using mocha/chai.
- `out`: documentation.
- at the root `index.html`

## Rationale
Inspiration: MVC design pattern.

### Model
*words*, *attempts*, *scores* are stored using JS's 
`localStorage` 
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
</a>

### Controller
All the functions distributed in the files:
- `words.js`: concerning word being guessed and the progress so far. 
- `score.js`: concerning scoring.
- `main.js`: triggers the game on (re)load.

### View
The standalone page itself `index.html`.

### Tools

#### Documentation 
- JSDoc 3.5.5
- Check folder `out`.

#### Scaffolding
- bootstrap 3.3

#### Tests
- jQuery v2.1.4
- expect.js v0.3.1
- mocha v2.2.5
- chai v4.1.2

### Testing
Folder *tests*
- `tests/main.tests.js`: tests functions at `words.js` and `score.js`.
- `tests/user.js`: just checks user input keyboard events. 
- `tests/integration.tests.js`: checks the modules working together.


