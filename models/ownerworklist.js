'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ownerWorkList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ownerWorkList.belongsTo(models.Owner, {
        foreignKey: "id",
      });
      models.ownerWorkList.belongsTo(models.Laundry, {
        foreignKey: "id",
      });
    }
  }
  ownerWorkList.init({
    ownerId: DataTypes.BIGINT,
    laundryId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'ownerWorkList',
  });
  return ownerWorkList;
};