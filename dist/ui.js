"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ui = void 0;
class ui {
    constructor(containerId, playerBoard, aiBoard, game, devMode = true) {
        this.container = document.getElementById(containerId);
        this.container.innerHTML = '';
        this.devMode = devMode;
        this.playerBoard = this.createBoard(['player_board,[board]'], 'playerBoardID');
        this.aiBoard = this.createBoard(['ai_board', 'board'], 'aiBoardID');
        this.container.appendChild(this.playerBoard);
        this.container.appendChild(this.aiBoard);
    }
    createBoard(arr, attribId) {
        const board = document.createElement('div');
        arr.forEach((cls) => board.classList.add(cls));
        board.setAttribute('id', attribId);
        return board;
    }
    buildBoard(board, containerId, owner) {
        const container = document.getElementById(containerId);
        const row = document.createElement('div');
        let counter = 0;
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const cell = document.createElement('div');
                cell.classList.add(`r:${r}`, `c:${c}`, `cell`);
                cell.setAttribute('id', `${owner}:${counter}`);
                if (this.devMode)
                    cell.innerText = counter.toString();
                counter += 1;
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
    }
    updateBoard() {
        let counter = 0;
    }
}
exports.ui = ui;
