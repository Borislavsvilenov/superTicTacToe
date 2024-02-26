function getIDX(size, x, y) {
  let newX = Math.floor(x / size);
  let newY = Math.floor(y / size);
  return [newX, newY];
}

