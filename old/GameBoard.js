import { Ship } from './Ship.js';

export class GameBoard {
  board = []; //2d array of cells for the board
  ships = []; // tracks our ship locations ex r3c4 = cell 33,34,etc..
  hits = []; // tracks hits

  constructor(rows = 10, cols = 10, shipLimit = 5) {
    this.rows = rows;
    this.cols = cols;
    this.CreateBoard();
    this.shipLimit = shipLimit;
  }

  /*method creates a new board by looping through each row and column and pushing
  a new cell object into a 2D array.*/
  CreateBoard() {
    for (let r = 0; r < this.rows; r++) {
      let row = [];
      for (let c = 0; c < this.cols; c++) {
        row.push({ ship: false, hit: false });
      }
      this.board.push(row);
    }
  }

  // returns a single array of all the numbers of our ships. Used for checking intersects during placement
  ReturnShipCoords() {
    let arr = [];
    this.ships.forEach((a) => {
      a.forEach((e) => {
        arr.push(e);
      });
    });
    return arr;
  }

  // returns true if one of the coords we want to place our ship at already has a ship
  checkIfIntersect(x) {
    const result = this.ReturnShipCoords();
    if (result.includes(x)) return true;
    return false;
  }

  // Prints out the current state of the board with each cell's ship and hit properties
  PrintBoard() {
    for (let r = 0; r < this.board.length; r++) {
      let f = ``;
      for (let c = 0; c < this.board[r].length; c++) {
        f += `|ship:${this.board[r][c].ship} hit:${this.board[r][c].hit}`;
      }
      console.log(`${f} \n`);
    }
  }

  // returns true if we are at our limit for ships as defined in ctor
  ShipLimit() {
    if (this.ships.length === this.shipLimit) return true;
    return false;
  }

  /* Method returns true if all of the ships on the board have been sunk, 
  by calling the isSunk() method on each ship object in the ships array.*/
  //
  AllShipsSunk() {
    return this.ships.every((e) => e.isSunk(this.hits));
  }

  /* method checks if the given row, column, orientation, and length are valid
   for placing a ship on the board. It returns true if the ship fits within the
   board boundaries, and false otherwise.*/
  CheckIfValidGrid(row, column, orientation, length) {
    if (row < 0 || column < 0 || row > this.rows || column > this.columns) {
      return false;
    }
    if (orientation === 0) {
      if (this.board[row][column + (length - 1)] !== undefined) {
        return true;
      }
      return false;
    }
    if (orientation === 1) {
      if (this.board[row + (length - 1)][column] !== undefined) {
        return true;
      }
      return false;
    }
  }

  Reset() {
    this.board = [];
    this.ships = [];
    this.hits = [];
  }

  /*
  method receives a row and column value representing a cell on the board
  and updates the hit property of the corresponding cell to true.*/
  ReceiveAttack(row, column) {
    if (this.board[row][column] !== undefined) {
      this.board[row][column].hit = true;
      this.hits.push(row * 10 + column);
    }
  }

  /*
  method places a ship on the board by updating the ship property of the corresponding
  cells in the board 2D array. It checks if the given row, column, orientation, and length
  are valid using the CheckIfValidGrid() method and pushes the ship location
  to the ships array using the Ship constructor.*/
  PlaceShip(row, column, orientation, length) {
    if (this.CheckIfValidGrid(row, column, orientation, length)) {
      let arr = []; //used to store the locations of our ship
      if (orientation === 0) {
        for (let s = 0; s < length; s++) {
          this.board[row][column].ship = true;
          let result = row * 10 + column;
          arr.push(result); // push the cell value ex row 3 col 4 = 33
          column += 1;
        }
      }
      if (orientation === 1) {
        for (let s = 0; s < length; s++) {
          this.board[row][column].ship = true;
          let result = row * 10 + (column - 1);
          arr.push(result);
          r -= 1;
        }
      }
      this.ships.push(new Ship(length, arr));
      return true;
    }
    return false;
  }
}
