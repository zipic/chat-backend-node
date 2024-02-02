const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
  timestamps: false, 
});

module.exports = Users;
