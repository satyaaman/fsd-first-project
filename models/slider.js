'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class slider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  slider.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'slider',
  });
  return slider;
};