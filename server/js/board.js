class Board {
  constructor() {
    this.game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.winner = 0;
    this.subDivided = false;
  }

  move(action, idxes) {
    let Zeroidx = idxes[0];
    idxes.splice(0, 1);

    if(this.subDivided) {    
      this.game[Zeroidx].move(action, idxes);
    } else {
      this.game[Zeroidx] = action;
    }
  }

  checkWin() {
    let g = this.game;
    if(this.subDivided) {
      for(let i = 0; i < 9; i++) {
        if(g[i] !== 1 && g[i] !== -1) {
          g[i].checkWin();
          if(g[i].winner == 1 || g[i].winner == -1) {
            g[i] = g[i].winner;
          }
        }
      }
    }
    if (Math.abs(g[0] + g[1] + g[2]) === 3 ||
        Math.abs(g[3] + g[4] + g[5]) === 3 ||
        Math.abs(g[6] + g[7] + g[8]) === 3 ||
        Math.abs(g[0] + g[3] + g[6]) === 3 ||
        Math.abs(g[1] + g[4] + g[7]) === 3 ||
        Math.abs(g[2] + g[5] + g[8]) === 3 ||
        Math.abs(g[0] + g[4] + g[8]) === 3 ||
        Math.abs(g[2] + g[4] + g[6]) === 3) {
      this.win();
    }
  }

  win() { 
    let g = this.game;
    this.winner = (g[0] === 1 || g[1] === 1 || g[2] === 1 ||
                   g[3] === 1 || g[4] === 1 || g[5] === 1 ||
                   g[6] === 1 || g[7] === 1 || g[8] === 1) ? 1 : -1;
  }
  
  subDivide() {
    for(let i = 0; i < this.game.length; i++) {
      this.game[i] = new Board();
    } 
    this.subDivided = true;
  }
}

module.exports = Board;
