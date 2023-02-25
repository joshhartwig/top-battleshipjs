export class GameBoard {
  board = [];

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
    }
  }

  PlaceShip(row, column, orientation, length) {
    if (this.checkIfValidGrid(row, column, orientation, length)) {
      let r = row;
      let c = column;
      if (orientation === 0) {
        for (let s = 0; s < length; s++) {
          this.board[r][c].ship = true;
          c++;
        }
      }
      if (orientation === 1) {
        for (let s = 0; s < length; s++) {
          this.board[r][c].ship = true;
          r--;
        }
      }
    }
  }
}
