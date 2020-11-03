/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase;
     }

    addPhraseToDisplay() {
        const ul = document.getElementsByTagName('ul');
        let splitPhrase = this.phrase.split('');
        //this will add the phrase to the display
        for (let i = 0; i < splitPhrase.length; i++) {
          if (splitPhrase[i] === " ") {
            let li = document.createElement("li");
            li.className = 'letter';
            li.className = 'hide';
            li.textContent = splitPhrase[i];
            ul[0].appendChild(li);
          } else if (splitPhrase[i] !== " ") {
            let spaceLi = document.createElement("li");
            spaceLi.className = 'space';
            spaceLi.textContent = splitPhrase[i];
            ul[0].appendChild(spaceLi);
          }
        }
        return ul;
      
      }

 }