class Board {
  constructor(size, x, y) {
    this.size = size;
    this.moves = [[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]];
    this.subD = false;
    this.winer = 0;
    this.x = x;
    this.y = y;
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
    if(this.moves[pos[0][0]][pos[1][0]] == 0) {
      this.moves[pos[0][0]][pos[1][0]] = mv;
    }
  }

  drawBoard() {
    if(this.subD) {
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
          if(typeof this.moves[i][j] == "object") {
            this.moves[i][j].drawBoard();
          }
        }
      }
    }
    stroke(255);
    strokeWeight(this.size * 0.02);
    let cellSize = this.size / 3;
    line(this.x + cellSize, this.y, this.x + cellSize, this.y + this.size);
    line(this.x + cellSize * 2, this.y, this.x + cellSize * 2, this.y + this.size);
    line(this.x, this.y + cellSize, this.x + this.size, this.y + cellSize);
    line(this.x, this.y + cellSize * 2, this.x + this.size, this.y + cellSize * 2);
  }
}
