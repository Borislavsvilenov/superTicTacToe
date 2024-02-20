const socket = io(`http://${window.location.hostname}:8080`); 

let n = 6;
let boardSize = 300;
let canvasSize = boardSize * n;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(0);
  NestBoards(n, 0, 0, boardSize * n);
}

function draw() {
  socket.on("update", msg => {
    background(0);
    NestBoards(n, 0, 0, boardSize * n);
  });

  if(mouseIsPressed == true) {

  } 
}

