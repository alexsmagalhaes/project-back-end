const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../Config/connection");

const Order = connection.define('TB_Order', {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderAmount: {
      type: DataTypes.DECIMAL(10, 2), // Use DECIMAL para valores monetários
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', // Nome do modelo User
        key: 'userId' // Chave estrangeira na tabela User
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product', // Nome do modelo Product
        key: 'productId' // Chave estrangeira na tabela Product
      }
    }
  }, {
    tableName: 'tb_order' // Opcional: Especificar o nome da tabela
  });
  
  module.exports = Order;