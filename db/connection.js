// const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize('chat', 'postgres', '//123456789', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
