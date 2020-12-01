/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase;
     }

//displays the phrase to the UI
    addPhraseToDisplay() {
        const ul = document.querySelector('[id=phrase] ul');
        let splitPhrase = this.phrase.split('');
   //Making a single element for each character and appending it to a ul
        for(let i = 0; i < splitPhrase.length; i++) {
         const li = document.createElement('li');
         const character = splitPhrase[i];
         ul.appendChild(li);
         li.textContent = character;
    //this ensures that each word stay seperated
         if(character === " ") {
           li.className = 'space';
         } else {
           li.className = `hide letter ${character}`;
    
         }
       }
     }
   

//checking to see if the letter guessed matched the letter in the current phrase
      checkLetter(letter) {
          if (this.phrase.includes(letter) === true) {
              return true;
          } else {
              return false;
          }
      }
//if the letter is correct, it should show on the UI
      showMatchedLetter(letter) {
        const allLetters = document.getElementsByClassName(letter);
        for(let i = 0; i < allLetters.length; i++) {
        //I got the idea of using the template literals for this line from online research
        //I thought it was a good idea becuase I'm able to ues the css class on the correct letter and display it in the same line
          allLetters[i].className = `show letter ${letter}`;
        }
      }

 }