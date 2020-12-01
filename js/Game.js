/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
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
        let hidden = document.querySelectorAll('.hide');
        if (hidden.length === 0) {
            return true;
        } else {
            return false;
        }
     }

     removeLife() {
         console.log(this.missed);
        this.missed+= 1;
        let hearts = document.querySelector('img[src="images/liveHeart.png"]')
        if (this.missed < 5) {
            hearts.src = 'images/lostHeart.png';
        } else if (this.missed === 5){
            this.gameOver(false);
        }
     }

     gameOver(win) {
         const overlay = document.getElementById('overlay');
         const message = document.getElementById('game-over-message');

         if (win) {
            overlay.className = 'win';
            message.textContent = 'YOU WIN!';
            overlay.style.display = '';
            this.resetGame();
         } else {
            overlay.className = 'lose';
            message.textContent = 'SORRY. YOU LOSE.';
            overlay.style.display = '';
            this.resetGame();
         }
     }

     handleInteraction(clicked) {
        clicked.disabled = true;
        let letterClicked = clicked.textContent;

        if (this.activePhrase.checkLetter(letterClicked) === false) {
            this.removeLife();
            clicked.className = 'wrong';
        } else if (this.activePhrase.checkLetter(letterClicked)) {
            this.activePhrase.showMatchedLetter(letterClicked);
            clicked.className = 'chosen';    
        } if (this.checkForWin() === true) {
            this.gameOver(true);
    }
 }

    resetGame() {
        const ul = document.querySelector('ul');
        const li = ul.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
              ul.removeChild(li[i]);
        }

        let heartsLost = document.querySelectorAll('#scoreboard img');
        for (let i = 0; i < heartsLost.length; i++) {
            heartsLost[i].src = 'images/liveHeart.png';
        }
        let allKeys = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < allKeys.length; i++) {
            allKeys[i].classList.remove('wrong', 'chosen');
            allKeys[i].classList.add('key');
            allKeys[i].disabled = false;
        }


    }
     
   
}



