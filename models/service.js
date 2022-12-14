'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  service.init({
    icon: DataTypes.STRING,
    title: DataTypes.STRING,
    descrition: DataTypes.STRING,
    linktest: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'service',
  });
  return service;
};