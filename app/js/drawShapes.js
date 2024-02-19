function plus(x ,y) {
  stroke(255);
  rect(x - 25, y - 3, 50, 6);
  rect(x -3, y - 25, 6, 50);
}


function O(x, y) {
  stroke(255)
  circle(x, y, 50);
  stroke(0);
  strokeWeight(40);
  point(x, y);
  strokeWeight(1);
}
