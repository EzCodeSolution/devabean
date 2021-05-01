'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Account.init({
    DisplayName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    DataJson: DataTypes.TEXT,
    Prefix: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Address: DataTypes.TEXT,
    Tel: DataTypes.STRING,
    Line: DataTypes.STRING,
    IsActive: DataTypes.BOOLEAN,
    Atype: DataTypes.INTEGER,
    GoogleAuth: DataTypes.STRING,
    FacebookAuth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};