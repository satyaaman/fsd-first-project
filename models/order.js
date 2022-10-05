'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{
        foreignKey:'userId'
      })
      this.belongsToMany(models.product,{
        through: models.order_product,
        foreignKey:'orderid',
        otherKey:'productId',
      })
    }
  }
  order.init({
    status: DataTypes.STRING,
    delivery: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};