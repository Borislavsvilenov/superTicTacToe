function createOutput(game) {
  let output = [];
  for(let i = 0; i < game.game.length; i++) {
    if(game.game[i] == -1 || game.game[i] == 0 || game.game[i] == 1) {
      output[i] = game.game[i];
    } else {
      output[i] = createOutput(game.game[i]);
    } 
  }
  return(output);
}

module.exports = createOutput;
