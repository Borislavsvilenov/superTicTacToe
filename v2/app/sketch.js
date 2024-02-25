const socket = io(`http://${window.location.hostname}:8080`); 

function setup() {
  let game = new Board(900, 0, 0);
  game.subdivide();
  createCanvas(900, 900);
  background(0);
  game.drawBoard();
}

function draw() {
  
}



