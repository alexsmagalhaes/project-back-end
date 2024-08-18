const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../Config/connection");

const User = connection.define(
  "TB_USERS",
  {
    USER_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    USER_NOME: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    USER_IDADE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    USER_EMAIL: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    USER_SENHA: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "TB_USERS",
  }
);

module.exports = User;
