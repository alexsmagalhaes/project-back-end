const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../Config/connection");


const Product = connection.define('TB_Product', {
  proId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  proName: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  proPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  proDescription: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  catId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Category', // Nome do modelo da categoria
      key: 'catId' // Chave estrangeira na tabela Category
    }
  }
});

module.exports = Product;