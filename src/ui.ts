import { gameBoard } from './gameBoard';
import { game } from './game';

export class ui {
  container: HTMLElement;
  devMode: boolean;
  playerBoard: gameBoard;
  aiBoard: gameBoard;

  constructor(
    containerId: string,
    playerBoard: gameBoard
    aiBoard: gameBoard,
    game: game,
    devMode: boolean = true
  ) {
    this.container = document.getElementById(containerId)!;
    this.container.innerHTML = '';
    this.devMode = devMode;
    this.playerBoard = this.createBoard()
    this.aiBoard = aiBoard;
  }

  createBoard(arr: string[], attribId: string): HTMLDivElement {
    const board = document.createElement('div');
    arr.forEach((cls) => board.classList.add(cls));
    board.setAttribute('id', attribId);
    return board;
  }

  // iterate through our boards and make any updates we need to make based on gamestate changes
  updateBoards() {
    
  }

  
}
