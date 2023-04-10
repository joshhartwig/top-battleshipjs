"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameBoard = void 0;
const ship_1 = require("./ship");
class gameBoard {
    constructor(rows = 10, cols = 10, shipLimit = 5) {
        this.rows = 0;
        this.cols = 0;
        this.shipLimit = 0;
        this.board = [];
        this.ships = [];
        this.hits = [];
        this.rows = rows;
        this.cols = cols;
        this.shipLimit = shipLimit;
        this.board = this.createBoard(rows, cols);
    }
    createBoard(rows, cols) {
        let temp = [];
        for (let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < cols; c++) {
                row.push({
                    ship: false,
                    hit: false,
                });
            }
            temp.push(row);
        }
        return temp;
    }
    returnShipCoords() {
        const arr = [];
        this.ships.forEach((a) => {
            a.locations.forEach((e) => {
                arr.push(e);
            });
        });
        return arr;
    }
    checkIfIntersect(x) {
        const result = this.returnShipCoords();
        if (result.includes(x))
            return true;
        return false;
    }
    printBoard(arr) {
        for (let r = 0; r < arr.length; r++) {
            let f = ``;
            for (let c = 0; c < arr[r].length; c++) {
                f += `|ship:${arr[r][c].ship} hit:${arr[r][c].hit}`;
            }
            console.log(`${f} \n`);
        }
    }
    shipLimits() {
        if (this.ships.length === this.shipLimit)
            return true;
        return false;
    }
    allShipsSunk() {
        return this.ships.every((e) => e.isSunk(this.hits));
    }
    checkIfValidGrid(row, column, orientation, length) {
        if (row < 0 || column < 0 || row > this.rows || column > this.cols)
            return false;
        if (orientation === 0) {
            if (this.board[row][column + (length - 1)] !== undefined) {
                return true;
            }
            return false;
        }
        if (orientation === 1) {
            if (this.board[row + (length - 1)][column] !== undefined) {
                return true;
            }
            return false;
        }
        return false;
    }
    reset() {
        this.board = [];
        this.ships = [];
        this.hits = [];
    }
    recieveAttack(row, column) {
        const e = this.board[row][column];
        if (e !== undefined) {
            e.hit = true;
            this.hits.push(row * 10 + column);
        }
    }
    placeShip(row, column, orientation, length) {
        if (this.checkIfValidGrid(row, column, orientation, length)) {
            const arr = [];
            if (orientation === 0) {
                for (let s = 0; s < length; s++) {
                    this.board[row][column].ship = true;
                    let result = row * 10 + column;
                    arr.push(result);
                    column += 1;
                }
            }
            if (orientation === 1) {
                for (let s = 0; s < length; s++) {
                    this.board[row][column].ship = true;
                    let result = row * 10 + (column - 1);
                    arr.push(result);
                    row -= 1;
                }
            }
            this.ships.push(new ship_1.ship(length, arr));
        }
    }
}
exports.gameBoard = gameBoard;
