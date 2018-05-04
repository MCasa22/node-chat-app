const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

//static middleware to make use of the public directory
app.use(express.static(publicPath));

io.on('connection', (socket) => {

  console.log('new user connected.');

  socket.emit('newMessage', {
    from: 'andrew@example.com',
    text: 'this is the text of the mail',
    createdAt: 1234
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`app running on port ${port}`);
});
