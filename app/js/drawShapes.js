function plus(x ,y) {
  stroke(255);
  rect((100 * x) + 30, (100 * y) + 52, 50, 6);
  rect((100 * x) + 52, (100 * y) + 30, 6, 50);
}


function O(x, y) {
  stroke(255)
  circle((100 * x) + 55, (100 * y) + 55, 50);
  stroke(0);
  strokeWeight(40);
  point((100 * x) + 55, (100 * y) + 55);
  strokeWeight(1);
}

function board(x, y) {
  stroke(255);
  rect(x + 100, y + 20, 10, 270);
  rect(x + 200, y + 20, 10, 270);
  rect(x + 20, y + 100, 270, 10);
  rect(x + 20, y + 200, 270, 10);
}

function Boards() {
    rect(300, 0, 10, 900);
    rect(600, 0, 10, 900);
    rect(0, 300, 900, 10);
    rect(0, 600, 900, 10); 
    board(0, 0);
    board(300, 0);
    board(600, 0);
    board(0, 300);
    board(300, 300);
    board(600, 300);
    board(0, 600);
    board(300, 600);
    board(600, 600); 
}
