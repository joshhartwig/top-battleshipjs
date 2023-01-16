import { cell } from "./cell";

export class board {
  cells = [];
  
  constructor(rows = 10, cols = 10){
    this.cells = create();

  }

  create(rows,cols) {
    for(let r = 0; r < rows; r++) {
      for(let c = 0; c < cols; c++) {
        this.cells.push(new cell('empty', r, c));
      }
    }
  }
}