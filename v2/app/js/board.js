class Board {
  constructor(size, x, y) {
    this.size = size;
    this.moves = [[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]];
    this.subD = false;
    this.winner = 0;
    this.x = x;
    this.y = y;
  }

  X(x, y) {
    let cellSize = this.size / 3;
    stroke(255);
    strokeWeight(10);
    line(y, x, y + cellSize, x + cellSize);
    line(y, x + cellSize, y + cellSize, x);
  }

  O(x, y) {
    let cellSize = this.size / 3;
    stroke(255);
    strokeWeight(cellSize);
    point(y + cellSize/2, x + cellSize/2);
    strokeWeight(cellSize - 20);
    stroke(0);
    point(y + cellSize/2, x + cellSize/2);
  }

  subdivide() {
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        this.moves[i][j] = new Board(this.size / 3, i * this.size / 3, j * this.size / 3);
      }
    }
    this.subD = true;
  }

  move(mv, pos) {
    if(typeof this.moves[pos[0][0]][pos[1][0]] == "object") {
      this.moves[pos[0][0]][pos[1][0]].move(mv, [pos[0].slice(1), pos[1].slice(1)]); 
    } else {
      if(this.moves[pos[0][0]][pos[1][0]] == 0) {
        this.moves[pos[0][0]][pos[1][0]] = mv;
      }
    }
  }

  drawBoard() {
    let cellSize = this.size / 3;
    
    stroke(255);
    strokeWeight(this.size * 0.01);
    line(this.x + cellSize, this.y, this.x + cellSize, this.y + this.size);
    line(this.x + cellSize * 2, this.y, this.x + cellSize * 2, this.y + this.size);
    line(this.x, this.y + cellSize, this.x + this.size, this.y + cellSize);
    line(this.x, this.y + cellSize * 2, this.x + this.size, this.y + cellSize * 2);

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(typeof this.moves[i][j] == "object") {
          this.moves[i][j].drawBoard();
        } else if(typeof this.moves[i][j] == typeof 0) {
          if(this.moves[i][j] == 1) {
            this.X(i*cellSize + this.x, j*cellSize + this.y);
          } else if(this.moves[i][j] == -1) {
            this.O(i*cellSize + this.x, j*cellSize + this.y);
          }
        }
      }
    }
  }
}
