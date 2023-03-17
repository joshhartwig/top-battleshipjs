import Utils from "./Utils.js";
import { Ship } from "./Ship.js";

export class GameBoard {
  board = []; //2d array of cells for the board
  ships = []; // tracks our ship locations ex r3c4 = cell 33,34,etc..
  hits = []; // tracks hits

  constructor(rows = 10, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.CreateBoard();
  }

  // create a new board using rows and cols (defaults to 100)
  CreateBoard() {
    for (let r = 0; r < this.rows; r++) {
      let row = [];
      for (let c = 0; c < this.cols; c++) {
        row.push({ ship: false, hit: false });
      }
      this.board.push(row);
    }
  }

  // print board details
  PrintBoard() {
    for (let r = 0; r < this.board.length; r++) {
      let f = ``;
      for (let c = 0; c < this.board[r].length; c++) {
        f += `|ship:${this.board[r][c].ship} hit:${this.board[r][c].hit}`;
      }
      console.log(`${f} \n`);
    }
  }

  PrintShips() {
    this.ships.forEach((e) => console.log(e));
  }

  // return true if all of our ships are sunk
  AllShipsSunk() {
    let result = false;

    this.ships.forEach((e) => {
      result = e.isSunk(this.hits);
    });
    return result;
  }

  // if the row + length or col + length is out of bounds return false
  CheckIfValidGrid(row, column, orientation, length) {
    if (row < 0 || column < 0) {
      return false;
    } else if (row > this.rows || column > this.columns) {
      return false;
    } else {
      if (orientation === 0) {
        if (this.board[row][column + (length - 1)] !== undefined) {
          return true;
        } else {
          return false;
        }
      }
      if (orientation === 1) {
        if (this.board[row + (length - 1)][column] !== undefined) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  ReciveAttack(row, column) {
    if (this.board[row][column] !== undefined) {
      this.board[row][column].hit = true;
      this.hits.push[r * 10 + c - 1];
    }
  }

  PlaceShip(row, column, orientation, length) {
    if (this.CheckIfValidGrid(row, column, orientation, length)) {
      let r = row;
      let c = column;
      let arr = []; //used to store the locations of our ship
      if (orientation === 0) {
        for (let s = 0; s < length; s++) {
          this.board[r][c].ship = true;
          let result = r * 10 + (c - 1);
          arr.push(result); // push the cell value ex row 3 col 4 = 33
          c++;
        }
      }
      if (orientation === 1) {
        for (let s = 0; s < length; s++) {
          this.board[r][c].ship = true;
          let result = r * 10 + (c - 1);
          arr.push(result);
          r--;
        }
      }
      this.ships.push(new Ship(length, arr));
      this.PrintShips();
    }
  }
}
