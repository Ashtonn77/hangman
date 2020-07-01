const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popUp = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMsg = document.getElementById("final-message");

const figureParts = document.querySelectorAll("figure-part");

/*use an api instead of this simple array*/
const words = ["professional", "engineer", "wizard", "serendipity"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = ["w", "i", "z", "a", "r", "d"];
let wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
        ${selectedWord
          .split("")
          .map(
            (letter) => `
            <span class="letter">
             ${correctLetters.includes(letter) ? letter : ""}   
            </span>
            `
          )
          .join("")}    
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");
  console.log(innerWord);
  if (innerWord === selectedWord) {
    finalMsg.innerText = "Congratulations. You won!!!";
    popUp.style.display = "flex";
  }
}

displayWord();
