'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laundry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Laundry.hasMany(models.ownerWorkList);
      models.Laundry.belongsTo(models.User, {
        foreignKey: "id",
      });
    }
  }
  Laundry.init({
    userId: DataTypes.BIGINT,
    laundryName: DataTypes.STRING,
    img: DataTypes.STRING,
    request: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Laundry',
  });
  return Laundry;
};