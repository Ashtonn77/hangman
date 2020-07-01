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

let correctLetters = [];
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

//update wrong leters
function updateWrongLettersEl() {
  console.log("Update wrong");
}

//show pop up notification
function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

//keydown letter press
window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();
