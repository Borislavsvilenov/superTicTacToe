const socket = io(`http://${window.location.hostname}:8080`); 

let n = 2;
let boardSize = 300;
let canvasSize = boardSize * n;
let clicked = false;

function getIdx(list) {
  
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(0);
  NestBoards(n, 0, 0, boardSize * n);
}

function draw() {
  socket.on("out", msg => {
    let paths = findAllPathsInNestedLists(msg);
    background(0);
    NestBoards(n, 0, 0, boardSize * n);
    for(let i = 0; i < paths.length; i++) {
      if(paths[i][0] == 1) {
        let pos = calculatePosFromIndex(paths[i], boardSize * n, n);
        X(pos.x, pos.y, boardSize / Math.pow(3, n-1));
      }
    }
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

