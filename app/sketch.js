const socket = io(`http://${window.location.hostname}:8080`); 

let n = 2;
let boardSize = 300;
let canvasSize = boardSize * n;
let clicked = false;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(0);
  NestBoards(n, 0, 0, boardSize * n);
}

function draw() {
  socket.on("out", msg => {
    background(0);
    NestBoards(n, 0, 0, boardSize * n);
  });
  if(!clicked) {
    if(mouseIsPressed) {
      let idxes = [];

      socket.emit("in", calculateIndex(mouseX, mouseY, boardSize * n, n, idxes));
      clicked = true;
    }
  } else if(!mouseIsPressed) {
      clicked = false;
  }
}

