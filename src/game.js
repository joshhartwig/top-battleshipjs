import { GameBoard } from "./GameBoard.js";
import { UI } from "./UI.js";

let ai_score = 0;
let player_score = 0;
const playerBoard = new GameBoard(10, 10);
const aiBoard = new GameBoard(10, 10);
const ui = UI("container", true, playerBoard.board, aiBoard.board);
