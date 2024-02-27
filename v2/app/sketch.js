let game = new Board(900, 0, 0);
game.subdivide();


let turn = 1;
let restr = [[-1], [-1]]

function setup() {
  createCanvas(900, 900);
  background(0);
  game.drawBoard();
}

function draw() {
  background(0);
  game.drawBoard();
}

function mouseClicked() {
  let ret = true;
  if(game.winner == 0) {
    if(turn == 1) {
      ret = game.move(1, getIDX(game, mouseY, mouseX), restr);
      if(ret) {
        turn = -1;
        restr = game.restrictMoves(getIDX(game, mouseY, mouseX));
      }
    } else if(turn == -1) {
      ret = game.move(-1, getIDX(game, mouseY, mouseX), restr);
      if(ret) {
        turn = 1;
        restr = game.restrictMoves(getIDX(game, mouseY, mouseX));
      }
    }
  }
}



