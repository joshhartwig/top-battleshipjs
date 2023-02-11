// returns a gameboard, one per player one for ai
const gameboard = (rows = 10,cols = 10) => {
  let board = []; // our board 10x10 100 cells
  let ships = []; // contains array of ships that have their coords and hits counts
  const createBoard = () => {
    for(let r = 0; r < rows; r++) {
      let row = []
      for(let c = 0; c < cols; c++) {
        row.push({hasShip:false, hit:false});
      }
      board.push(row);
    }
  };
  const printBoard = () => {
    for(let r = 0; r < board.length; r++) {
      let f = ``
      for(let c = 0; c < board[r].length; c++) {
        f += `${board[r][c]  }`;
      }
      console.log(`${f} \n`);
    }
  }
  // check if the zone is valid then push the ship to array and update board
  const placeShip = (r,c,orientation, length) => {
    if(checkIfValidGrid(r,c,orientation,length)) {
      ships.push(ship(length,orientation,{r:r,c:c}));
      update();
    }
  }

  const update = () => {
    ships.forEach(e => {
      r = e.r;
      c = e.c;
      board[r][c].hasShip = true;
    });
  }

  // returns true if valid grid location
  const checkIfValidGrid = (r,c, orientation, length) => {
    if(r < 0 || c < 0 ) { // check for < 0
      return undefined;
    } else if ( r > rows || c > cols) { // dont exceed rows or cols
      return undefined;
    } else {  // we are on the board now check if our location + length exceeds + orien is out of bounds
      if(orientation === 0) {
        if(board[r][c + (length - 1)] !== undefined){
          return true;
        } else {
          return false;
        }
      }
      if(orientation === 1) {
        if(board[r (length - 1)][c] !== undefined) {
          return true;
        }
        else {
          return false;
        }
      }
    }
  }
  return { board, createBoard, printBoard, placeShip, checkIfValidGrid }
}
