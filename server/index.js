const http = require('http').createServer();
const io = require('socket.io')(http, {cors: { origin: "*" }});

const Board = require('./js/board.js');

let player1;
let player2;

let game = new Board();

io.on("connection", (socket) => {
  if(player1 == 'undefined') {
    player1 = socket;
  } else if(player2 == 'undefined') {
    player2 = socket;
  }
});

http.listen(8080, () => console.log('listening on http://localhost:8081'));
