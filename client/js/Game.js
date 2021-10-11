/*
what do the game need in functionality
  1.switching turn //done//
  2.represent each cell //done//
  3.update each cell  //done// 
  4.wins and drows
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

  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else this.turn = "X";
  }

  aMove(i) {
    this.bourd[i] = this.turn;
  }
}
