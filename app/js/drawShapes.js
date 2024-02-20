function plus(x ,y) {
  stroke(255);
  rect((100 * x) + 30, (100 * y) + 52, 50, 6);
  rect((100 * x) + 52, (100 * y) + 30, 6, 50);
}


function O(x, y) {
  stroke(255)
  circle((100 * x) + 55, (100 * y) + 55, 50);
  stroke(0);
  strokeWeight(40);
  point((100 * x) + 55, (100 * y) + 55);
  strokeWeight(1);
}

function board(x, y, size) {
  stroke(255);
  strokeWeight(size / 35);
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