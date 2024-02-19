const socket = io(`http://${window.location.hostname}:8080`); 

function setup() {
  createCanvas(900, 900);
  background(0);
  stroke(255, 255, 255);
  rect(300, 0, 10, 900);
  rect(600, 0, 10, 900);
}

function draw() {
  socket.on("update", msg => {
    background(0);
    rect(300, 0, 10, 900);
    rect(600, 0, 10, 900);
  });
}


