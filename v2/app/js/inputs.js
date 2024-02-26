function getIDX(board, x, y) {
  let newX = Math.floor(x / (board.size / 3));
  let newY = Math.floor(y / (board.size / 3));

  let c = [[], []];

  if(board.subD) {
    if(typeof board.moves[newX][newY] == "object") {
      c = getIDX(board.moves[newX][newY], x - newX * board.size / 3, y - newY * board.size / 3);
    }
  }

  c[0].unshift(newX);
  c[1].unshift(newY);

  return c;
}

