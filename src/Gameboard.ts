import { ship } from './ship';
export class gameBoard {
  board: { ship: boolean; hit: boolean }[][];
  ships: ship[];
  hits: number[];

  rows: number = 0;
  cols: number = 0;
  shipLimit: number = 0;

  constructor(rows: number = 10, cols: number = 10, shipLimit: number = 5) {
    this.board = [];
    this.ships = [];
    this.hits = [];
    this.rows = rows;
    this.cols = cols;
    this.shipLimit = shipLimit;
    this.board = this.createBoard(rows, cols);
  }

  // create a new 2d array with ships and hits
  createBoard(rows: number, cols: number) {
    let temp = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push({
          ship: false,
          hit: false,
        });
      }
      temp.push(row);
    }
    return temp;
  }

  // returns an array of every ship coordinate
  returnShipCoords(): number[] {
    const arr: number[] = [];
    this.ships.forEach((a) => {
      a.locations.forEach((e) => {
        arr.push(e);
      });
    });
    return arr;
  }

  // pass in a coord and determine if there is an intersect
  checkIfIntersect(x: number): boolean {
    const result = this.returnShipCoords();
    if (result.includes(x)) return true;
    return false;
  }

  // simple board print array
  printBoard(arr: { ship: boolean; hit: boolean }[][]): void {
    for (let r = 0; r < arr.length; r++) {
      let f: string = ``;
      for (let c = 0; c < arr[r].length; c++) {
        f += `|ship:${arr[r][c].ship} hit:${arr[r][c].hit}`;
      }
      console.log(`${f} \n`);
    }
  }

  // returns true if we are at our ship limit
  shipLimits(): boolean {
    if (this.ships.length === this.shipLimit) return true;
    return false;
  }

  // returns true if all ships on the board have been sunk
  allShipsSunk() {
    return this.ships.every((e) => e.isSunk(this.hits));
  }

  // returns true if the placement requested is correct
  checkIfValidGrid(
    row: number,
    column: number,
    orientation: number,
    length: number
  ): boolean {
    if (row < 0 || column < 0 || row > this.rows || column > this.cols)
      return false;
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
    return false;
  }

  // claer our arrays
  reset(): void {
    this.board = [];
    this.ships = [];
    this.hits = [];
  }

  // take in a row and col and mark the board as hit
  recieveAttack(row: number, column: number): void {
    const e = this.board[row][column];
    if (e !== undefined) {
      e.hit = true;
      this.hits.push(row * 10 + column);
    }
  }

  // checks if requested placement is correct then sets each value on the board to ship
  placeShip(
    row: number,
    column: number,
    orientation: number,
    length: number
  ): void {
    if (this.checkIfValidGrid(row, column, orientation, length)) {
      const arr: number[] = [];
      if (orientation === 0) {
        for (let s = 0; s < length; s++) {
          this.board[row][column].ship = true;
          let result = row * 10 + column;
          arr.push(result);
          column += 1;
        }
      }
      if (orientation === 1) {
        for (let s = 0; s < length; s++) {
          this.board[row][column].ship = true;
          let result = row * 10 + (column - 1);
          arr.push(result);
          row -= 1;
        }
      }
      this.ships.push(new ship(length, arr));
    }
  }
}
