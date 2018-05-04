let socket = io();

socket.on('connect', function () {
  console.log('connected to server.');

  socket.emit('createMessage', {
    to: 'jen@example.com',
    text: 'hey whats up'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server.');
});

socket.on('newMessage', function (message) {
  console.log('new message.', message);
});
