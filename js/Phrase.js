/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase;
     }


    addPhraseToDisplay() {
        const ul = document.querySelector('[id=phrase] ul');
        let splitPhrase = this.phrase.split('');
   
        for(let i = 0; i < splitPhrase.length; i++) {
         const li = document.createElement('li');
         const character = splitPhrase[i];
         ul.appendChild(li);
         li.textContent = character;
         if(character === " ") {
           li.className = 'space';
         } else {
           li.className = `hide letter ${character}`;
    
         }
       }
     }
   


      checkLetter(letter) {
          if (this.phrase.includes(letter) === true) {
              return true;
          } else {
              return false;
          }
      }

      showMatchedLetter(letter) {
        const allLetters = document.getElementsByClassName(letter);
        for(let i = 0; i < allLetters.length; i++) {
          allLetters[i].className = `show letter ${letter}`;
        }
      }

 }