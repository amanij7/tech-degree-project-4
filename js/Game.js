/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed;
         this.phrases = this.createPhrases();
         this.activePhrase;
     }

     startGame() {
         const hideOverlay = document.getElementById('overlay');
         hideOverlay.style.display = "none";
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();

     }

     createPhrases () {

        const phraseObjects = [
            new Phrase('big smile'),
            new Phrase('cheesy grin'),
            new Phrase('happy face'),
            new Phrase('good vibes'),
            new Phrase('positive energy')
        ];
        return phraseObjects;
     }


     getRandomPhrase() {
         //this will return the phrase of the corresponding index number
         let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    
         return randomPhrase;
     }

     checkForWin() {
        let hidden = document.getElementsByClassName('hide');
        if (hidden.length === 0) {
            return true;
        } else {
            return false;
        }
     }

     removeLife() {
        let hearts = document.querySelector('img[src="images/record.png"]')

        if (this.missed < 4) {
            hearts.src = 'images/lostHeart.png';
            this.missed+= 1;
        } else {
            this.gameOver();
        }
     }

     gameOver(win) {
         const overlay = document.getElementById('overlay');
         const message = document.getElementById('game-over-message');

         if (win === true) {
            overlay.className = 'win';
            message.textContent = 'YOU WIN!';
         } else {
            overlay.className = 'lose';
            message.textContent = 'SORRY. YOU LOSE.';
         }
     }

     handleInteraction(clicked) {
        clicked.disabled = true;
        let letterClicked = clicked.textContent;

        if (this.activePhrase.checkLetter(letterClicked) === false) {
            clicked.className = 'wrong';
            this.removeLife();
            this.gameOver(false);
        } else {
            this.activePhrase.showMatchedLetter(letterClicked);
            clicked.className = 'chosen';
        } if (this.checkForWin()) {
            this.gameOver(true);
        }


     }
 }



