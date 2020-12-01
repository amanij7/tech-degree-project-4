
let game;
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (e) => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keydown', (e) => {
    const keyboard = document.querySelectorAll('.key');
    for (let i = 0; i < keyboard.length; i++ ) {
        if (keyboard[i].textContent === e.key) {
            game.handleInteraction(keyboard[i]);
        }
        
    }
});
