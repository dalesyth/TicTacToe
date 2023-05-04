const square = document.getElementsByClassName("square");
const restartButton = document.getElementById("restart-btn");
const bannerMessage = document.querySelector(".banner");
restartButton.addEventListener("click", restartGame);
let gameOver = true;
let currentPlayer = "X";

function startGame() {
  gameOver = false;
  // numberOfPlayers();
  for (let i = 0; i < square.length; i++) {
    square[i].innerHTML = "";
    square[i].addEventListener("click", updateSquare);
  }
}

// function numberOfPlayers() {
//   console.log("hello");
//   bannerMessage.setAttribute("id", "message");
//   bannerMessage.innerHTML = `Enter 1 or 2 players:`;
// }

function updateSquare(event) {
  if (event.target.innerHTML === "" && gameOver === false) {
    event.target.innerHTML = currentPlayer;
    checkWinConditions();
    switchPlayer();
  }
}

function checkWinConditions() {
  let squaresArray = [];
  for (let i = 0; i < square.length; i++) {
    squaresArray.push(square[i].innerHTML);
  }

  if (
    squaresArray[0] != "" &&
    squaresArray[0] === squaresArray[1] &&
    squaresArray[1] === squaresArray[2]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[3] != "" &&
    squaresArray[3] === squaresArray[4] &&
    squaresArray[4] === squaresArray[5]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[6] != "" &&
    squaresArray[6] === squaresArray[7] &&
    squaresArray[7] === squaresArray[8]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[0] != "" &&
    squaresArray[0] === squaresArray[3] &&
    squaresArray[3] === squaresArray[6]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[1] != "" &&
    squaresArray[1] === squaresArray[4] &&
    squaresArray[4] === squaresArray[7]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[2] != "" &&
    squaresArray[2] === squaresArray[5] &&
    squaresArray[5] === squaresArray[8]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[0] != "" &&
    squaresArray[0] === squaresArray[4] &&
    squaresArray[4] === squaresArray[8]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[6] != "" &&
    squaresArray[6] === squaresArray[4] &&
    squaresArray[4] === squaresArray[2]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[0] != "" &&
    squaresArray[1] != "" &&
    squaresArray[2] != "" &&
    squaresArray[3] != "" &&
    squaresArray[4] != "" &&
    squaresArray[5] != "" &&
    squaresArray[6] != "" &&
    squaresArray[7] != "" &&
    squaresArray[8] != ""
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.innerHTML = `It's a draw!`;
    gameOver = true;
  }
}

function switchPlayer() {
  if (currentPlayer === "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
}

function restartGame(event) {
  currentPlayer = "X";
  for (let i = 0; i < square.length; i++) {
    square[i].innerHTML = "";
  }
  bannerMessage.removeAttribute("id", "winner");
  bannerMessage.innerHTML = "";
  gameOver = false;
}

startGame();
