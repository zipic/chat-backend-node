const socketIO = require('socket.io');

function socketConfig(server) {
  const io = socketIO(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  const users = new Map();

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join', (user) => {
      users.set(socket.id, user);
      io.emit('updated', Array.from(users.values()));
    });

    socket.on('disconnect', () => {
      users.delete(socket.id);
      io.emit('updated', Array.from(users.values()));
      console.log('User disconnected');
    });

    socket.on('message', (message) => {
      io.emit('message', message);
    });

    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', { user: data.user, isTyping: data.isTyping });
    });
  });
}

module.exports = socketConfig;
