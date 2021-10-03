const cells = document.getElementsByClassName("cell");
let tern = "X";
const wins = [
  cells[0].innerHTML === cells[1].innerHTML &&
    cells[1].innerHTML === cells[2].innerHTML,
];
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (!cells[i].innerHTML && tern == "X") {
      cells[i].innerHTML = "X";
      tern = "O";
    } else if (!cells[i].innerHTML && tern == "O") {
      cells[i].innerHTML = "O";
      tern = "X";
    }
  });
}
console.log(cells[0].firstChild);

console.log();
const resetBTN = document.getElementById("rematch");
resetBTN.addEventListener("click", (e) => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[0].firstChild && cells[1].firstChild && cells[2].firstChild) {
      if (
        cells[0].firstChild == cells[1].firstChild &&
        cells[1].firstChild == cells[2].firstChild
      ) {
        console.log(true);
      }
    }
    console.log(cells[i].firstChild);
    tern = "X";
  }
});
