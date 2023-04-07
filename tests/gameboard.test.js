//const GameBoard = require('../src/GameBoard');
import { GameBoard } from ('../src/GameBoard.js');

describe('#gameboard', () => {
  test('createboard creates 10x10 array', () => {
    let gb = new GameBoard(10, 10, 5);
    let rows = gb.board.length;
    let cols = gb.board[0].length;

    expect(rows).toBe(10);
    expect(cols).toBe(10);
  });
});
