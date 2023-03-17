import { GameBoard } from "./GameBoard.js";
import { UI } from "./UI.js";
import { Ship } from "./Ship.js";

let ai_score = 0;
let player_score = 0;
let ship_selected = false;
let game_over = false;
let ships_placed = false;

let playerBoard;
let aiBoard = null;
let ui = null;

const gameLoop = () => {
  if (!ships_placed) {
    ui.notify("You must place 3 ships");
    return;
  }
};

const setupGame = () => {
  playerBoard = new GameBoard(10, 10);
  aiBoard = new GameBoard(10, 10);
  ui = UI("container", true, playerBoard.board, aiBoard.board, this);
  ui.updateBoards();
};

const placeShips = () => {
  console.log("enter placeships");
  ui.placeShipFunctionHandler(playerBoard, playerBoard.board);
  while (pending_ship_placement) {
    console.log(`entering while pending ship placement`);
    if (playerBoard.ships.length === 3) {
      ships_placed = true;
    }
  }
};

setupGame();
gameLoop();
