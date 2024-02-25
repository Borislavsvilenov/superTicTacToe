const http = require('http').createServer();
const io = require('socket.io')(http, {cors: { origin: "*" }});

io.on("connection", socket => {
  
});
http.listen(8080, () => console.log('listening on http://localhost:8081'));
