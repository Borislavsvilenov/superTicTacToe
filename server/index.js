const http = require('http').createServer();
const io = require('socket.io')(http, {cors: { origin: "*" }});

const Board = require('./js/board.js');

let game = new Board();
game.subDivide();

let player1 = undefined;
let player2 = undefined;

io.on("connection", (socket) => {
  if(player1 === undefined) {
    player1 = socket.id;
    console.log("Player 1 connected:", player1);
  } else if(player2 === undefined) {
    player2 = socket.id;
    console.log("Player 2 connected:", player2);
  } else {
    console.log("A spectator connected:", socket.id);
  }

  socket.on("in", msg => {
    if(socket.id === player1) {
      game.move(+1, msg);
    } else if(socket.id === player2) {
      game.move(-1, msg);
    }

    game.checkWin()
  });

  socket.on('disconnect', () => {
    if(socket.id === player1) {
      console.log("Player 1 disconnected:", player1);
      player1 = undefined;
    } else if(socket.id === player2) {
      console.log("Player 2 disconnected:", player2);
      player2 = undefined;
    } else {
      console.log("A spectator disconnected:", socket.id);
    }
  });
});

http.listen(8080, () => console.log('listening on http://localhost:8081'));
