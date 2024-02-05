const server = require('./app');
const sequelize = require('./db/connection');
const express = require('express');
const PORT = 18844 || 3005;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync()
  .then(() => {
    console.log('Database and table created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

