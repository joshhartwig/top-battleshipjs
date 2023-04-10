import { gameBoard } from './gameBoard';
import { game } from './game';

export class ui {
  container: HTMLElement;
  devMode: boolean;
  playerBoard: HTMLDivElement;
  aiBoard: HTMLDivElement;

  constructor(
    containerId: string,
    playerBoard: { ship: boolean; hit: boolean }[][],
    aiBoard: { ship: boolean; hit: boolean }[][],
    game: game,
    devMode: boolean = true
  ) {
    this.container = document.getElementById(containerId)!;
    this.container.innerHTML = '';
    this.devMode = devMode;
    this.playerBoard = this.createBoard(
      ['player_board,[board]'],
      'playerBoardID'
    );
    this.aiBoard = this.createBoard(['ai_board', 'board'], 'aiBoardID');

    this.container.appendChild(this.playerBoard);
    this.container.appendChild(this.aiBoard);
  }

  // this creates the initial layout in divs based on passed in array of element names
  createBoard(arr: string[], attribId: string): HTMLDivElement {
    const board = document.createElement('div');
    arr.forEach((cls) => board.classList.add(cls));
    board.setAttribute('id', attribId);
    return board;
  }

  buildBoard(board: [][], containerId: string, owner: string) {
    const container = document.getElementById(containerId)!;
    const row = document.createElement('div');
    let counter = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        const cell = document.createElement('div');
        cell.classList.add(`r:${r}`, `c:${c}`, `cell`);
        cell.setAttribute('id', `${owner}:${counter}`);
        if (this.devMode) cell.innerText = counter.toString();
        counter += 1;
        row.appendChild(cell);
      }
      container.appendChild(row);
    }
  }

  // iterate through our boards and make any updates we need to make based on gamestate changes
  updateBoard() {
    let counter = 0;
  }
}
