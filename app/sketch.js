const socket = io(`http://${window.location.hostname}:8080`); 

function setup() {
  createCanvas(900, 900);
  background(0);
  Boards();
}

function draw() {
  socket.on("update", msg => {
    background(0);
    Boards();
  });

  if(mouseIsPressed == true) {

  } 
}

