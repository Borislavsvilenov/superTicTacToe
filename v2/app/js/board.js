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

  checkWin() { 
    let g = this.moves;
    if(g[0][0] + g[0][1] + g[0][2] === 3 ||
       g[1][0] + g[1][1] + g[1][2] === 3 ||
       g[2][0] + g[2][1] + g[2][2] === 3 ||
       g[0][0] + g[1][0] + g[2][0] === 3 ||
       g[0][1] + g[1][1] + g[2][1] === 3 ||
       g[0][2] + g[1][2] + g[2][2] === 3 ||
       g[0][0] + g[1][1] + g[2][2] === 3 ||
       g[2][0] + g[1][1] + g[0][2] === 3) {this.winner = 1}
    
    if(g[0][0] + g[0][1] + g[0][2] === -3 ||
       g[1][0] + g[1][1] + g[1][2] === -3 ||
       g[2][0] + g[2][1] + g[2][2] === -3 ||
       g[0][0] + g[1][0] + g[2][0] === -3 ||
       g[0][1] + g[1][1] + g[2][1] === -3 ||
       g[0][2] + g[1][2] + g[2][2] === -3 ||
       g[0][0] + g[1][1] + g[2][2] === -3 ||
       g[2][0] + g[1][1] + g[0][2] === -3) {this.winner = -1}
  }

  restrictMoves(pos) {

    this.refreshMoves();

    let restriction = [[-1], [-1]];
    restriction[0] = pos[0].slice(1); 
    restriction[1] = pos[1].slice(1);
    
    if(typeof this.moves[restriction[0][0]][restriction[1][0]] !== "object") {
      restriction = [[-1], [-1]];
    }

    return restriction;
  }

  refreshMoves() {
    let g = this.moves;
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(typeof g[i][j] == "object") {
          g[i][j].checkWin();
          if(g[i][j].winner !== 0) {
            g[i][j] = g[i][j].winner;
          }
        }
      }
    }
    this.checkWin();
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
        this.moves[i][j] = new Board(this.size / 3, i * this.size / 3 + this.x, j * this.size / 3 + this.y);
      }
    }
    this.subD = true;
  }

  move(mv, pos, rest) {
    let ret = true;
    if(typeof this.moves[pos[0][0]][pos[1][0]] == "object") {
      if(pos[0][0] == rest[0][0] && pos[1][0] == rest[1][0]) {
        ret = this.moves[pos[0][0]][pos[1][0]].move(mv, [pos[0].slice(1), pos[1].slice(1)], [rest[0].slice(1), rest[1].slice(1)]); 
      } else if(rest[0][0] == -1 || rest[1][0] == -1) {
        ret = this.moves[pos[0][0]][pos[1][0]].move(mv, [pos[0].slice(1), pos[1].slice(1)], [rest[0].slice(1), rest[1].slice(1)]); 
      } else {
        ret = false;
      }
    } else {
      if(this.moves[pos[0][0]][pos[1][0]] == 0) {
        this.moves[pos[0][0]][pos[1][0]] = mv;
      } else {
        ret = false;
      }
    }

    return ret;
  }

  drawBoard() {
    let cellSize = this.size / 3;
    
    stroke(255);
    strokeWeight(this.size * 0.02);
    line(this.y + cellSize, this.x, this.y + cellSize, this.x + this.size);
    line(this.y + cellSize * 2, this.x, this.y + cellSize * 2, this.x + this.size);
    line(this.y, this.x + cellSize, this.y + this.size, this.x + cellSize);
    line(this.y, this.x + cellSize * 2, this.y + this.size, this.x + cellSize * 2);

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
