'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Owner.hasMany(models.ownerWorkList);
    }
  }
  Owner.init({
    shopName: DataTypes.STRING,
    pwd: DataTypes.STRING,
    ownerEmail: DataTypes.STRING,
    ownerPhone: DataTypes.STRING,
    ownerAddress: DataTypes.STRING,
    ownerPoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};