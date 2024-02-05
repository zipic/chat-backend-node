const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('defaultdb', 'avnadmin', 'AVNS_lbpjzWKBqfsexuuHiv6', {
  host: 'mysql-a24bd1-zpc23041988-7a1c.a.aivencloud.com',
  dialect: 'mysql',
  port: 18844
});

module.exports = sequelize;
