/*
what do the game need in functionality
  1.switching turn //done//
  2.represent each cell //done//
  3.update each cell  //done// 
  4.wins and drows //done//
  5.new game
  6.score
extra fetures
  7.sign in and backend keep of the score
  8.online multiplayer
  9.chatting system
*/

export default class Game {
  constructor() {
    this.turn = "X";
    this.bourd = new Array(9).fill(null);
    this.iswin = false;
    this.isDrow = false;
  }
  /* reset() {
    this.turn = "X";
    this.bourd.fill(null);
    this.iswin = false;
    this.isDrow = false;
  }*/
  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else this.turn = "X";
  }

  aMove(i) {
    this.bourd[i] = this.turn;
    this.checkWinOrDrow();
  }

  checkWinOrDrow() {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //bad and confusing code not even working
    /*  wins.map((winComp) => {
      this.bourd.map((ele) => {
        if (this.bourd.indexOf(ele) == winComp[0]) {
          if (
            this.bourd.indexOf(winComp[1]) == winComp[1] &&
            this.bourd.indexOf(winComp[2]) == winComp[2]
          ) {
            this.iswin = true;
            console.log("someone won");
          } else console.log("the game is still on");
        }
        });
     });
    */
    //effecent and clear code
    for (const win of wins) {
      const [a, b, c] = win;
      if (
        this.bourd[a] &&
        this.bourd[a] === this.bourd[b] &&
        this.bourd[b] === this.bourd[c]
      ) {
        this.iswin = true;
        break;
      } else if (this.bourd.indexOf(null) < 0) {
        this.isDrow = true;
        break;
      }
    }
  }
}
