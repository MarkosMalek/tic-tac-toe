import Game from "./Game.js";
const newGame = new Game();

const turnP = document.getElementById("turn");
const cells = document.getElementsByClassName("cell");

newGame.initGame(cells, turnP);

const startXBTN = document.getElementById("startX");
startXBTN.addEventListener("click", (e) => {
  newGame.turn = "X";
  turnP.innerHTML = `It's "${newGame.turn}" turn`;
});
const startOBTN = document.getElementById("startO");
startOBTN.addEventListener("click", (e) => {
  newGame.turn = "O";
  turnP.innerHTML = `It's "${newGame.turn}" turn`;
});

const restartBTN = document.getElementById("rematch");
restartBTN.addEventListener("click", (e) => {
  e.preventDefault();
  newGame.resetGame(cells, turnP);
  newGame.initGame(cells, turnP);
});
