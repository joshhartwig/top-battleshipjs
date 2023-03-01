const UI = (_containerID, _devMode = true, _playerBoard, _aiBoard) => {
  const container = document.getElementById(_containerID);
  const developerMode = _devMode;
  const playerBoard = _playerBoard;
  const aiBoard = _aiBoard;

  const createUI = (container) => {
    const aiBoard = document.createElement("div");
    aiBoard.classList.add("ai_board");
    aiBoard.classList.add("board");
    aiBoard.setAttribute("id", "aiBoardID");

    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player_board");
    playerBoard.classList.add("board");
    playerBoard.setAttribute("id", "playerBoardID");

    const controls = document.createElement("div");
    controls.classList.add("controls");
    controls.setAttribute("id", "controlsID");

    container.appendChild(aiBoard);
    container.appendChild(playerBoard);
    container.appendChild(controls);
  };

  // Creates our gameboards, supply a board and a divID to hook into
  const buildBoard = (board, containerId, owner) => {
    const container = document.getElementById(containerId);
    const row = document.createElement("div");
    let counter = 0;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        const cell = document.createElement("div");
        cell.classList.add(`r:${r}`);
        cell.classList.add(`c:${c}`);
        cell.classList.add("cell");
        cell.setAttribute("id", `${owner}:${counter}`);
        counter++;
        //cell.innerText = board[r][c].ship;
        container.appendChild(cell);
      }
      //container.appendChild(row);
    }
  };

  // Loop through each element in our board and apply updates
  const updateBoard = () => {
    let counter = 0;
    for (let r = 0; r < playerBoard.length; r++) {
      for (let c = 0; c < playerBoard.length; c++) {
        if (playerBoard[r][c].ship) {
          console.log(`r:${r}-c:${c}`);
          const ship = document.getElementById(`p:${counter}`);
          ship.classList.add("ship");
        }
        if (playerBoard[r][c].hit) {
          const ship = document.getElementById(`p:${counter}`);
          ship.classList.add("hit");
        }
        counter++;
      }
    }
  };

  // Initialize UI object
  const init = (() => {
    createUI(container);
    buildBoard(playerBoard, "playerBoardID", "p");
    buildBoard(aiBoard, "aiBoardID", "a");
  })();

  return {
    updateBoard,
  };
};

export { UI };
