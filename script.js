const square = document.getElementsByClassName("square");
const restartButton = document.getElementById("restart-btn");
const bannerMessage = document.querySelector(".banner");
let playerOne = document.getElementById("playerOneName");
let playerTwo = document.getElementById("playerTwoName");
restartButton.addEventListener("click", restartGame);
let gameOver = true;
let currentPlayer = "X";
let numPlayers;

function startGame() {
  gameOver = false;

  for (let i = 0; i < square.length; i++) {
    square[i].innerHTML = "";
    square[i].addEventListener("click", updateSquare);
  }
  numberOfPlayers();
}

function numberOfPlayers() {
  bannerMessage.setAttribute("id", "numPlayers");
  bannerMessage.innerHTML = `Enter 1 or 2 players: `;
  const inputPlayer = document.createElement("input");
  const closeButton = document.createElement("button");
  bannerMessage.appendChild(inputPlayer).setAttribute("id", "input-num");
  bannerMessage.appendChild(closeButton).setAttribute("id", "close-btn");
  closeButton.innerHTML = "CLOSE";
  closeButton.addEventListener("click", () => {
    bannerMessage.style.display = "none";
  });

  inputPlayer.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      numPlayers = Number(inputPlayer.value);
      // console.log(typeof numPlayers)
      console.log(typeof numPlayers);
      console.log(numPlayers);

      if (numPlayers !== 1 && numPlayers !== 2) {
        alert("Invalid number of players");
      } else if (numPlayers === 1 || numPlayers === 2) {
        enterPlayerNames();
        bannerMessage.style.display = "none";
      }
    }
  });
}

function enterPlayerNames() {
  if (numPlayers === 1) {
    alert("you have reached enterPlayerNames, and there is 1 player");
  } else if (numPlayers === 2) {
    alert("you have reached enterPlayerNames, and there are 2 players");
  }
}

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
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[3] != "" &&
    squaresArray[3] === squaresArray[4] &&
    squaresArray[4] === squaresArray[5]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[6] != "" &&
    squaresArray[6] === squaresArray[7] &&
    squaresArray[7] === squaresArray[8]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[0] != "" &&
    squaresArray[0] === squaresArray[3] &&
    squaresArray[3] === squaresArray[6]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[1] != "" &&
    squaresArray[1] === squaresArray[4] &&
    squaresArray[4] === squaresArray[7]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[2] != "" &&
    squaresArray[2] === squaresArray[5] &&
    squaresArray[5] === squaresArray[8]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[0] != "" &&
    squaresArray[0] === squaresArray[4] &&
    squaresArray[4] === squaresArray[8]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
    bannerMessage.innerHTML = `${currentPlayer} has won!`;
    gameOver = true;
  } else if (
    squaresArray[6] != "" &&
    squaresArray[6] === squaresArray[4] &&
    squaresArray[4] === squaresArray[2]
  ) {
    bannerMessage.setAttribute("id", "winner");
    bannerMessage.style.display = "flex";
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
    bannerMessage.style.display = "flex";
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
  numberOfPlayers();
}

startGame();
