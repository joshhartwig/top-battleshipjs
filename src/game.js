import { UI } from "./UI.js";
import { Player } from "./Player.js";

let player = null;
let ai = null;
let ui = null;
let playerShipPendingPlacement = true;
let attackShipFunctionHandlerSet = false;

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

    // TODO: fix this its broken.. the call stack will fill and this no is never accurate
    if (ai.gameboard.ships.length < 4) {
      ai.PlaceShipsAutomated(ui.updateBoards);
    }

    // ensure we only attach the attack ship function handler once
    if (!attackShipFunctionHandlerSet) {
      ui.attackShipFunctionHandler(
        ai.gameboard,
        ai.gameboard.board,
        ui.updateBoards
      );
      attackShipFunctionHandlerSet = true;
    }
    if (ai.gameboard.AllShipsSunk()) {
      console.log("player won");
    }
    requestAnimationFrame(gameLoop);
  }
};

setupGame();
requestAnimationFrame(gameLoop);

// game loop idea
// gameloop while pendingSetup = false
// function for pending setup is called in advance of gameloop
// for pending setup = true, player setup must be done, ai setup must be done
