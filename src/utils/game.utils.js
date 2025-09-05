export const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const getEmptyCells = (board) => {
  return board
    .map((cell, idx) => (cell === null ? idx : null))
    .filter((i) => i !== null);
};

export const fillRandomCell = (board, player) => {
  const empty = getEmptyCells(board);
  if (empty.length === 0) return null;
  const idx = empty[Math.floor(Math.random() * empty.length)];
  board[idx] = player;
  return idx;
};
