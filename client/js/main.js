import Game from "./Game.js";
const newGame = new Game();

const cells = document.getElementsByClassName("cell");
const turnP = document.getElementById("turn");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (!cells[i].innerHTML && !newGame.iswin && !newGame.isDrow) {
      newGame.aMove(i);
      cells[i].innerHTML = newGame.turn;
      newGame.nextTurn();
      turnP.innerHTML = `It's ${newGame.turn} turn`;
    }
  });
}
if (newGame.iswin) {
  turnP.innerHTML = `${newGame.turn} Wins`;
} else if (newGame.isDrow) {
  turnP.innerHTML = `It's a Drow`;
}
const startXBTN = document.getElementById("startX");
startXBTN.addEventListener("click", (e) => {
  newGame.turn = "X";
  turnP.innerHTML = `It's ${newGame.turn} turn`;
});
const startOBTN = document.getElementById("startO");
startOBTN.addEventListener("click", (e) => {
  newGame.turn = "O";
  turnP.innerHTML = `It's ${newGame.turn} turn`;
});
