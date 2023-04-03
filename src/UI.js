import Utils from "./Utils.js";

const UI = (_containerID, _devMode = true, _playerBoard, _aiBoard, _game) => {
  const container = document.getElementById(_containerID);
  const developerMode = _devMode;
  const playerBoard = _playerBoard;
  const aiBoard = _aiBoard;
  const game = _game;

  const createUI = (container) => {
    container.innerHTML = "";
    const aiBoard = createBoard(["ai_board", "board"], "aiBoardID");
    const playerBoard = createBoard(["player_board", "board"], "playerBoardID");

    const notify = createNotify();

    container.appendChild(aiBoard);
    container.appendChild(playerBoard);
    container.appendChild(notify);
  };

  const createNotify = () => {
    const notify = document.createElement("div");
    notify.classList.add("notify");
    notify.setAttribute("id", "notify");
    return notify;
  };

  // returns a board with populated class lists and id
  const createBoard = (arr, attribId) => {
    const board = document.createElement("div");
    arr.forEach((cls) => {
      board.classList.add(cls);
    });
    board.setAttribute("id", attribId);
    return board;
  };

  // Creates our gameboards, supply a board and a divID to hook into
  const buildBoard = (board, containerId, owner) => {
    const container = document.getElementById(containerId);
    const row = document.createElement("div");

    let counter = 0;
    Utils.MapTwoDimArray(board, (data, a, b) => {
      const cell = document.createElement("div");
      cell.classList.add(`r:${a}`, `c:${b}`, `cell`);
      cell.setAttribute("id", `${owner}:${counter}`);
      cell.innerText = counter;
      counter++;
      container.appendChild(cell);
    });
  };

  const notify = (str, callbackfn) => {
    const notify = document.getElementById("notify");
    notify.innerText = str;
    callbackfn();
  };

  const placeShipFunctionHandler = (gameboard, board, callbackfn) => {
    let counter = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        const cell = document.getElementById(`p:${counter}`);
        cell.addEventListener("click", function () {
          gameboard.PlaceShip(r, c, 0, 3);
          callbackfn();
        });
        counter++;
      }
    }
  };

  const removeFunctionHandler = (gameboard, board, callbackfn) => {
    let counter = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        const cell = document.getElementById(`p:${counter}`);
        cell.parentElement.innerHTML = cell.parentElement.innerHTML;
        counter++;
      }
    }
  };

  const attackShipFunctionHandler = (gameboard, board, callbackfn) => {
    let counter = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        const cell = document.getElementById(`a:${counter}`);
        cell.addEventListener("click", function () {
          gameboard.ReceiveAttack(r, c);
          callbackfn();
        });
        counter++;
      }
    }
  };

  // Loop through each element in our board and apply updates
  const updateBoards = () => {
    let counter = 0;

    for (let r = 0; r < aiBoard.length; r++) {
      for (let c = 0; c < aiBoard.length; c++) {
        if (aiBoard[r][c].ship) {
          //if we find a ship at this element add a class element 'ship'
          const ship = document.getElementById(`a:${counter}`);
          ship.classList.add("ship");
        }
        if (aiBoard[r][c].hit) {
          // if we find a hit, add a class element hit
          const ship = document.getElementById(`a:${counter}`);
          ship.classList.add("hit");
        }
        counter++;
      }
    }

    counter = 0;

    for (let r = 0; r < playerBoard.length; r++) {
      for (let c = 0; c < playerBoard.length; c++) {
        if (playerBoard[r][c].ship) {
          //if we find a ship at this element add a class element 'ship'
          const ship = document.getElementById(`p:${counter}`);
          ship.classList.add("ship");
        }
        if (playerBoard[r][c].hit) {
          // if we find a hit, add a class element hit
          const ship = document.getElementById(`p:${counter}`);
          ship.classList.add("hit");
        }
        counter++;
      }
    }
  };

  const displayInstructions = (msg) => {};

  // Initialize UI object
  const init = (() => {
    createUI(container);
    buildBoard(playerBoard, "playerBoardID", "p");
    buildBoard(aiBoard, "aiBoardID", "a");
  })();

  return {
    updateBoards,
    notify,
    placeShipFunctionHandler,
    removeFunctionHandler,
    attackShipFunctionHandler,
  };
};

export { UI };
