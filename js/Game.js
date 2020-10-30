/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed;
         this.phrases = this.createPhrases();
         this.activePhrase;
     }

     createPhrases () {
        const phraseObjects = [
            {phrase: 'big smile'},
            {phrase: 'cheesy grin'},
            {phrase: 'happy face'},
            {phrase: 'good vibes'},
            {phrase: 'positive energy'}
        ];
        return phraseObjects;
     }
 }



