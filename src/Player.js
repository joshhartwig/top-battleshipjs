import { GameBoard } from "./GameBoard.js";

export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gameboard = new GameBoard(10, 10);
  }
}
