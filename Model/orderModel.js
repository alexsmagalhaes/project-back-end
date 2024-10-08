const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Order = connection.define('TB_ORDER', {
  ORD_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ORD_AMOUNT: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', 
        key: 'USER_ID' 
      }
    },
    PRO_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product', 
        key: 'PRO_ID' 
      }
    }
  }, {
    tableName: 'TB_ORDER' 
  });
  
  module.exports = Order;