const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../Config/connection");

const User = connection.define('TB_User', {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(30),   
  
      allowNull: false,
    },
    userAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    userPassword: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  });
  
  module.exports = User;