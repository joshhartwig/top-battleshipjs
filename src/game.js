import { UI } from './UI.js';
import Utils from './Utils.js';
import { Player } from './Player.js';

let player;
let ai;
let ui;
let currentPlayer;
let playerScore = 0;
let aiScore = 0;

let loadGameComplete = false;

// build our players, ui functionality
const load = () => {
  player = new Player('human');
  ai = new Player('ai');
  ui = UI(
    'gameboard_container',
    false,
    player.gameboard.board,
    ai.gameboard.board,
    this
  );
  ui.placeShipFunctionHandler(player.gameboard, player.gameboard.board, setup);
  loadGameComplete = true;
  console.log('load game complete');
  setup();
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

const loop = () => {
  if (ai.gameboard.AllShipsSunk() || player.gameboard.AllShipsSunk()) {
    console.log('someone won');
    calculateWinner();
  }
};

const aiAttackAndUpdate = () => {
  if (winner()) {
    reset();
  } else {
    const r = Utils.GetRandomNumber(0, 9);
    const c = Utils.GetRandomNumber(0, 9);

    player.gameboard.ReceiveAttack(r, c);
    ui.updateBoards();
  }
};

// return true if we found a winner
const winner = () => {
  if (ai.gameboard.AllShipsSunk() || player.gameboard.AllShipsSunk()) {
    ai.gameboard.AllShipsSunk() ? playerScore++ : aiScore++;
    return true;
  }
  return false;
};

const reset = () => {
  player.gameboard.Reset();
  ai.gameboard.Reset();
  load();
};

load();

//TODO: Idea for ship control
// 4 ships on the side each of varying sizes 1 - 5
// during setup while we are pending remaining ships in ship control
