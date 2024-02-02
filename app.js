const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const socketConfig = require('./sockets/socket');

app.use(cors({ origin: '*' }));

const usersRouter = require('./routes/users');
app.use('/', usersRouter);

socketConfig(server);

module.exports = server;