'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail.init({
    brandName: DataTypes.STRING,
    brandIconUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detail',
  });
  return detail;
};