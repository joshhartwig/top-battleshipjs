export class ui {
  container: HTMLElement;
  devMode: boolean;
  rows: number;
  cols: number;

  constructor(
    containerId: string,
    devMode: boolean = true,
    rows: number,
    cols: number
  ) {
    this.container = document.getElementById(containerId)!;
    this.devMode = devMode;
    this.createUI(this.container);
    this.rows = rows;
    this.cols = cols;
  }

  createUI(container: HTMLElement) {
    const playerBoard = document.createElement('div');
    const aiBoard = document.createElement('div');
    playerBoard.classList.add('player_board', 'board');
    aiBoard.classList.add('ai_board', 'board');
    container.appendChild(playerBoard);
    container.appendChild(aiBoard);

    const buildBoard = (board: HTMLElement, owner: string) => {
      const row = document.createElement('div');
      let counter = 0;

      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          const cell = document.createElement('div');
          cell.classList.add(`r:${r}`, `c:${c}`, `cell`);
          cell.setAttribute('id', `${owner}:${counter}`);
          if (this.devMode) cell.innerText = counter.toString();
          counter += 1;
          board.appendChild(cell);
        }
      }
    };

    buildBoard(playerBoard, `p`);
    buildBoard(aiBoard, `ai`);
  }

  removeFunctionHandler(callbackFn: Function, owner: string): void {
    for (let c = 0; c < this.rows * this.cols; c++) {
      const cell = document.getElementById(`${owner}:${c}`)!;
      if (cell?.parentElement?.innerHTML != undefined) {
        cell.parentElement.innerHTML = cell?.parentElement?.innerHTML!; // hacky way to remove anonymous function handlers
      }
    }
  }

  attachFunctionHandler(
    event: string,
    fn: Function,
    callbackfn: Function,
    owner: string
  ): void {
    for (let c = 0; c < this.rows * this.cols; c++) {
      const cell = document.getElementById(`${owner}:${c}`);
      cell?.addEventListener(`${event}`, function () {
        fn(c, 0, 3); // TODO: This is a ref to placeship function which takes a row, col, length, and orientation. These are all static set here. This is broke
        callbackfn();
      });
    }
  }

  // loop through gameboard array and set any hit or miss
  updateBoard(board: { ship: boolean; hit: boolean }[][], owner: string): void {
    let counter = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c].ship) {
          const ship = document.getElementById(`${owner}:${counter}`);
          ship?.classList.add('player_ship');
        }
        if (board[r][c].hit) {
          const ship = document.getElementById(`${owner}:${counter}`);
          ship?.classList.add('hit');
        }
        counter += 1;
      }
    }
  }
}
