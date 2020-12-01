/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     //setting the initial state
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase;
     }
     //what happend when the start button in pressed
     //the overlay is gone and a random phrase appears
     startGame() {
         const hideOverlay = document.getElementById('overlay');
         hideOverlay.style.display = "none";
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();

     }
     //list of happy themed random phrases. 
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

     //using math.floor times the number of values in the phrase object to select a random new phrase
     getRandomPhrase() {
         //this will return the phrase of the corresponding index number
         let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        // the return is to show the result of the random selection
         return randomPhrase;
     }
     //if the li has a 'hide' class, that the letter hasn't yet been guessed
     //if there isn't a 'hide' class, the correct letter has been guess
     checkForWin() {
        let hidden = document.querySelectorAll('.hide');
        if (hidden.length === 0) {
            return true;
        } else {
            return false;
        }
     }
     //this method is to remove a heart if the letter is incorrect
     //if the letter is incorrect, it replace the current heart image with a new image
     //once that reached 5, the gameOver method is called
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
     //this is checking for a win or lose and changing the display based on the result
     gameOver(win) {
         const overlay = document.getElementById('overlay');
         const message = document.getElementById('game-over-message');
        //if there is a win, the display will change using the 'win' class
         if (win) {
            overlay.className = 'win';
            message.textContent = 'YOU WIN!';
            overlay.style.display = '';
            //if there isn't a win, the display will change using the 'lose' class
         } else {
            overlay.className = 'lose';
            message.textContent = 'SORRY. YOU LOSE.';
            overlay.style.display = '';  
         }
         this.resetGame();
     }
//this is to handle the clicked events during the current game
     handleInteraction(clicked) {
         //disables key once clicked
        clicked.disabled = true;
        let letterClicked = clicked.textContent;
//calling the other functions based on the result of if or not the letter clicked matches
        if (this.activePhrase.checkLetter(letterClicked) === false) {
            clicked.className = 'wrong';
            this.removeLife();
        } else if (this.activePhrase.checkLetter(letterClicked)) {
            this.activePhrase.showMatchedLetter(letterClicked);
            clicked.className = 'chosen';  
            if (this.checkForWin() === true) {
            this.gameOver(true);
            this.resetGame();
    }
  }
 }
//restarting everything to the initial state after the gameOver() is called
    resetGame() {
        //clearing the previous phrase
        const ul = document.querySelector('ul');
        const li = ul.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
              ul.removeChild(li[i]);
        }
        //changin all the heart back to to the initial image
        let heartsLost = document.querySelectorAll('#scoreboard img');
        for (let i = 0; i < heartsLost.length; i++) {
            heartsLost[i].src = 'images/liveHeart.png';
        }
        //enabling all the keys but on the click and keydown listeners
        let allKeys = document.querySelectorAll('#qwerty button');
        for (let i = 0; i < allKeys.length; i++) {
            allKeys[i].classList.remove('wrong', 'chosen');
            allKeys[i].classList.add('key');
            allKeys[i].disabled = false;
        }


    }
     
   
}



