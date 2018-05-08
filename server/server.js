const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

//static middleware to make use of the public directory
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected.');

  socket.emit('newMessage', generateMessage('admin', 'welome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));

    callback('this is from the server');

    // socket.broadcast.emit('newMessage', {
    //     from: message.from,
    //     text: message.text,
    //     createdAt: new Date().getTime()
    // });

  });

  socket.on('disconnect', () => {
    console.log('client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`app running on port ${port}`);
});
