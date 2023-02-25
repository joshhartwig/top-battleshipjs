const UI = (_containerID, _devMode = true, _playerBoard, _aiBoard) => {
  const container = document.getElementById(_containerID);
  const developerMode = _devMode;
  const playerBoard = _playerBoard;
  const aiBoard = _aiBoard;

  const createUI = (container) => {
    const aiBoard = document.createElement("div");
    aiBoard.classList.add("ai_board");
    aiBoard.setAttribute("id", "aiBoardID");

    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player_board");
    playerBoard.setAttribute("id", "playerBoardID");

    const controls = document.createElement("div");
    controls.classList.add("controls");
    controls.setAttribute("id", "controlsID");

    container.appendChild(aiBoard);
    container.appendChild(playerBoard);
    container.appendChild(controls);
  };

  // Creates our gameboards, supply a board and a divID to hook into
  const buildBoard = (board, containerId) => {
    const container = document.getElementById(containerId);
    const row = document.createElement("div");
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        const cell = document.createElement("div");
        cell.classList.add(`r:${r}`);
        cell.classList.add(`c:${c}`);
        cell.classList.add("cell");
        cell.innerText = board[r][c].ship;
        container.appendChild(cell);
      }
      //container.appendChild(row);
    }
  };

  // Loop through each element in our board and apply updates
  const update = () => {
    //TODO: loop through each board and update any changes
  };

  // Initialize UI object
  const init = (() => {
    createUI(container);
    buildBoard(playerBoard, "playerBoardID");
    buildBoard(aiBoard, "aiBoardID");
  })();

  return {
    update,
  };
};

export { UI };
