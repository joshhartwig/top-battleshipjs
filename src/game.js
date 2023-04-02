import { UI } from "./UI.js";
import Utils from "./Utils.js";
import { Player } from "./Player.js";

let player;
let ai;
let ui;
let currentPlayer;
let playerScore = 0;
let aiScore = 0;

let loadGameComplete = false;

// build our players, ui functionality
const load = () => {
  player = new Player("human");
  ai = new Player("ai");
  ui = UI("container", true, player.gameboard.board, ai.gameboard.board, this);
  ui.placeShipFunctionHandler(player.gameboard, player.gameboard.board, setup);
  loadGameComplete = true;
  console.log("load game complete");
};

// this is the pre gameloop stage for placing ships
const setup = () => {
  ui.updateBoards();
  // if we hit our ship limit remove the ability to place more
  if (player.gameboard.ShipLimit()) {
    ui.removeFunctionHandler(player.gameboard, player.gameboard.board, setup);

    // if we dont have enough ai ships, place more ships
    if (!ai.gameboard.ShipLimit()) {
      ai.PlaceShipsAutomated(setup);
    } else {
      ui.attackShipFunctionHandler(
        ai.gameboard,
        ai.gameboard.board,
        aiAttackAndUpdate
      );
      currentPlayer = player;
    }
  }
};

const switchPlayer = () => {
  currentPlayer = currentPlayer === player ? ai : player;
};

const loop = () => {
  if (ai.gameboard.AllShipsSunk() || player.gameboard.AllShipsSunk()) {
    console.log("someone won");
    calculateWinner();
  }
};

const aiAttackAndUpdate = () => {
  if (winner()) {
    reset();
  } else {
    let r = Utils.GetRandomNumber(0, 9);
    let c = Utils.GetRandomNumber(0, 9);

    player.gameboard.ReceiveAttack(r, c);
    ui.updateBoards();
  }
};

const winner = () => {
  //someone is a winner
  if (ai.gameboard.AllShipsSunk() || player.gameboard.AllShipsSunk()) {
    //condition ? exprIfTrue : exprIfFalse
    ai.gameboard.AllShipsSunk() ? aiScore++ : playerScore++;
    return true;
  }
  return false;
};

const reset = () => {
  load();
};

load();
setup();

//requestAnimationFrame(gameLoop);
//click attack updateUI, checkifwinner, triggeraiattackandupdate
