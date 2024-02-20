function calculateIndex(x, y, size, level, indices) {
  if (level === 0) {
    return indices;
  }
  
  let cellSize = size / 3;
  let row = floor(y / cellSize);
  let col = floor(x / cellSize);
  let index = row * 3 + col;
  indices.push(index);

  let newX = x % cellSize;
  let newY = y % cellSize;
  return calculateIndex(newX, newY, cellSize, level - 1, indices);
}

function X(x, y, size) {
  stroke(255);
  line(x, y, x + size, y + size);
  line(x + size, y, x, y + size);
}


function O(x, y, size) {
  stroke(255);
  strokeWeight(size);
  point(x + size / 2, y + size / 2);
  stroke(0);
  strokeWeight(size / 2);
  point(x + size / 2, y + size / 2);
}

function board(x, y, size) {
  stroke(255);
  strokeWeight(size / 100);
  let cellSize = size / 3;
  
  for(let i = 0; i < 3; i++) {
    line(x + cellSize, y + size / 10, x + cellSize, y + 9/10 * size);
    line(x + 2 * cellSize, y + size / 10, x + 2 * cellSize, y + 9/10 * size);
    line(x + size / 10, y + cellSize, x + 9/10 * size, y + cellSize);
    line(x + size / 10, y + 2 * cellSize, x + 9/10 * size, y + 2 * cellSize);
  }
}

function NestBoards(n, x, y, size) {
  board(x, y, size);

  if(n > 1) {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        NestBoards(n - 1, x + (i * size / 3), y + (j * size / 3), size / 3);
      }
    }
  }
}
