const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popUp = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMsg = document.getElementById("final-message");

let figureParts = document.querySelectorAll(".figure-part");

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
  //display wrong leters
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  //display body
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMsg.innerText = "Sorry...you lost!!!";
    popUp.style.display = "flex";
  }
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

playAgainBtn.addEventListener("click", () => {
  //empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popUp.style.display = "none";
});

displayWord();
