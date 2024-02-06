const server = require('./app');
const sequelize = require('./db/connection');
const express = require('express');
const cors = require('cors');
const PORT = 3005;

const app = express();

app.use(cors({origin: '*'}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database and table created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
