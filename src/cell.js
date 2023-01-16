export class cell {
  // values empty, hit, occupied
  constructor(status = 'empty',row,col) {
    this.status = status;
    this.row = row;
    this.col = col
  }

  print() {
    return `r:${this.row}c:${this.col}s:${this.status}`;
  }
}