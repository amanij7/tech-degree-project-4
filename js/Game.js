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
        const hearts = document.getElementsByClassName('tries');

        if (this.missed < 4) {
            hearts.src = 'images/lostHeart.png';
            this.missed+= 1;
        } else {
            this.gameOver();
        }
     }

     gameOver(win) {
         const endOverlay = document.getElementById('overlay');
         const message = document.getElementById('game-over-message');

         if (win === true) {
             overLay.className = 'win';
             endOverlay.style.display = '';
             message.textContent = 'YOU WIN!';
         } else {
             overLay.className = 'lose';
             endOverlay.style.display = '';
             message.textContent = 'SORRY. YOU LOSE.';
         }
     }

     handleInteraction(clicked) {
        clicked.disabled = true;
        let letterClicked = clicked.textContent;

        if (this.activePhrase.checkLetter(letterClicked)) {
            this.activePhrase.showMatchedLetter(letterClicked);
            letterClicked.className = 'chosen';
        if(this.checkForWin()) {
            this.gameOver(true);
        } else if (this.activePhrase.checkLetter(letterClicked) === false) {
            letterClicked.className = 'wrong';
            this.removeLife();
            this.gameOver(false);
        }
    }


     }
 }



