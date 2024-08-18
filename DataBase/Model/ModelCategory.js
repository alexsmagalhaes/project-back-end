const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../Config/connection");

const Category = connection.define('TB_Category', {
    catId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    catName: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });
  
  module.exports = Category;