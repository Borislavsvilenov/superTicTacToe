const socket = io(`http://${window.location.hostname}:8080`); 

let game = new Board(900, 0, 0);
game.subdivide();

function setup() {
  createCanvas(900, 900);
  background(0);
  game.drawBoard();
}

function draw() {
  socket.on("update", msg) {
    for(let i = 0; i < msg.length i++) {
      game.move(msg[i][0], msg[i].slice(1));
    }
    background(0);
    game.drawBoard();
  }
}



