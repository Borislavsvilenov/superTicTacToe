class Board {
  constructor() {
    this.game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.winner = 0;
  }

  move(action, x, y) {
    let idx = x + 3 * y;
    
    if(this.game[idx] === 0) {
      this.game[idx] = action;
      return 0;
    } else {
      return -1;
    }
  }

  checkWin() {
    let g = this.game;
    if (Math.abs(g[0] + g[1] + g[2]) === 3 ||
        Math.abs(g[3] + g[4] + g[5]) === 3 ||
        Math.abs(g[6] + g[7] + g[8]) === 3 ||
        Math.abs(g[0] + g[3] + g[6]) === 3 ||
        Math.abs(g[1] + g[4] + g[7]) === 3 ||
        Math.abs(g[2] + g[5] + g[8]) === 3 ||
        Math.abs(g[0] + g[4] + g[8]) === 3 ||
        Math.abs(g[2] + g[4] + g[6]) === 3) {
      this.winner = (g[0] === 1 || g[1] === 1 || g[2] === 1 ||
                     g[3] === 1 || g[4] === 1 || g[5] === 1 ||
                     g[6] === 1 || g[7] === 1 || g[8] === 1) ? 1 : -1;
      return true;
    }
    return false;
  }
}

module.exports = Board;
