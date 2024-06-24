// console.log(Math.floor(Math.random()*100 + 1))
let randomNumber = parseInt(Math.random() * 100 + 1);

// Accessing DOM Elements
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// Create p element
const p = document.createElement("p");
// Prev Guess
let prevGuess = [];
// numGuess
let numGuess = 1;
let totalGuess = 11;

// playGame
let playGame = true;

// Player able to play game
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// validate Guess
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    prevGuess.push(guess);
    if (numGuess === totalGuess) {
      cleanUpGuess(guess);
      displayMessage(`Game Over!! Random Number was : ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

// Check Guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You guessed the number in ${numGuess}/${totalGuess} attempts.`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guess is too low!");
  } else if (guess > randomNumber) {
    displayMessage("Your guess is too high!");
  }
}

// clean Up Method
function cleanUpGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  lastResult.innerHTML = `${totalGuess - numGuess}`;
}

// Display Message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End Game
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// New Game
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ` `
    lastResult.innerHTML = `${totalGuess - numGuess}`;
    lowOrHi.innerHTML = ``
    userInput.removeAttribute("disabled");
    startOver.removeChild(p)
    playGame = true;
  })
}
