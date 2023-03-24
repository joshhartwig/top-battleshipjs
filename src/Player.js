import { GameBoard } from "./GameBoard.js";
import Utils from "./Utils.js";

export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gameboard = new GameBoard(10, 10);
  }

  PlaceShipsAutomated(callbackfn) {
    for (let i = 0; i < 4; i++) {
      let r = Utils.GetRandomNumber(0, 9);
      let c = Utils.GetRandomNumber(0, 9);
      let l = Utils.GetRandomNumber(1, 4);
      let o = Utils.GetRandomNumber(0, 1);
      this.gameboard.PlaceShip(r, c, 0, l);
    }
  }
}
