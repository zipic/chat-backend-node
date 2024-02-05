const server = require('./app');
const sequelize = require('./db/connection');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.queryInterface.showAllTables().then((tables) => {
  if (tables.includes('users')) {
    console.log('Tables already exist. Skipping database synchronization.');
  } else {
    sequelize.sync()
      .then(() => {
        console.log('Database and table created!');
      })
      .catch((error) => {
        console.error('Error syncing database:', error);
      });
  }
});
