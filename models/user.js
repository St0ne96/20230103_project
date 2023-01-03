'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Laundry);
    }
  }
  User.init({
    nickname: DataTypes.STRING,
    pwd: DataTypes.STRING,
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userPhone: DataTypes.STRING,
    userAddress: DataTypes.STRING,
    userPoint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};