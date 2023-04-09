export class Gameboard {
  board: { ship: boolean; hit: boolean }[][];
  ships: number[][];
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
      a.forEach((e) => {
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
}
