'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category,{
        foreignKey:{
          name:'categoryid',
        }
      });
      this.belongsToMany(models.order,{
        through: models.order_product,
        foreignKey:'productId',
        otherKey:'orderId',
      })
    }
  }
  product.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    describe: DataTypes.STRING,
    categoryid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};