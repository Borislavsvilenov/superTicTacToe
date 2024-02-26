let game = new Board(900, 0, 0);
game.subdivide();

let turn = 1;

function setup() {
  createCanvas(900, 900);
  background(0);
  game.drawBoard();
}

function draw() {
  background(0);
  game.checkWin();
  game.drawBoard();
}

function mouseClicked() {
  if(turn == 1) {
    game.move(1, getIDX(game, mouseY, mouseX));
    turn = -1;
  } else if(turn == -1) {
    game.move(-1, getIDX(game, mouseY, mouseX));
    turn = 1;
  }
}



