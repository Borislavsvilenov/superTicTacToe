const socket = io(`http://${window.location.hostname}:8080`); 

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  socket.on("update", msg => {
    background(0);

  });
}


