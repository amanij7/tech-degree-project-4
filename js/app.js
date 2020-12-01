
let game;
const startButton = document.getElementById('btn__reset');
//this will initate a new game from the 'game' class constructor when the player presses start
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});
//this event listener will give functionality to the keys on the UI when they are clicked

const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        //the key is passed to the handle interaction method to determine is the key guessed correctly
        game.handleInteraction(e.target);
    }
});
//this event listener is for when the key is pressed
//if the content from the key that is pressed is equal the content from the 'keyrow' class,
//...then it is passed to the handleInteraction method
document.addEventListener('keydown', (e) => {
    const keyboard = document.querySelectorAll('.key');
    for (let i = 0; i < keyboard.length; i++ ) {
        if (keyboard[i].textContent === e.key) {
            game.handleInteraction(keyboard[i]);
        }
        
    }
});
