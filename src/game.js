import { UI } from "./UI.js";
import { Player } from "./Player.js";

let player = null;
let ai = null;
let ui = null;
let playerShipPendingPlacement = true;

const setupGame = () => {
  player = new Player("human");
  ai = new Player("ai");
  ui = UI("container", true, player.gameboard.board, ai.gameboard.board, this);
  ui.placeShipFunctionHandler(
    player.gameboard,
    player.gameboard.board,
    ui.updateBoards
  );
};

const gameLoop = () => {
  if (player.gameboard.ships.length < 4) {
    ui.notify("place more ships to start the game", ui.updateBoards);
    requestAnimationFrame(gameLoop);
    return;
  } else {
    ui.notify("Attack one of the enemies cells", ui.updateBoards);
    ui.removeFunctionHandler(
      player.gameboard,
      player.gameboard.board,
      ui.updateBoards
    );
    ui.attackShipFunctionHandler(
      ai.gameboard,
      ai.gameboard.board,
      ui.updateBoards
    );
    ai.PlaceShipsAutomated(ui.updateBoards);
    requestAnimationFrame(gameLoop);
  }
};

setupGame();
requestAnimationFrame(gameLoop);
