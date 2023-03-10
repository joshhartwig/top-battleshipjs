import { GameBoard } from "./GameBoard.js";
import { UI } from "./UI.js";
import { Ship } from "./Ship.js";

let ai_score = 0;
let player_score = 0;
let game_ready = false;

const playerBoard = new GameBoard(10, 10);
const aiBoard = new GameBoard(10, 10);

let playerShips = [new Ship(4), new Ship(3), new Ship(2)];
let aiShips = [new Ship(4), new Ship(3), new Ship(2)];

const ui = UI("container", true, playerBoard.board, aiBoard.board);

playerBoard.PlaceShip(3, 2, 0, 3);
ui.updateBoard();
//TODO: add in ship selection 3 ships on the left size 4, 3, 2
//TODO: once there are no more ships to place start game
//TODO: While neither boards ships are sunk keep playing

//TODO:
const aiPlaceShip = () => {
  aiShips.forEach();
};
