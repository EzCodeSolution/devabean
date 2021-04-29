'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DisplayName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      DataJson: {
        type: Sequelize.TEXT
      },
      Prefix: {
        type: Sequelize.STRING
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.TEXT
      },
      Tel: {
        type: Sequelize.STRING
      },
      Line: {
        type: Sequelize.STRING
      },
      IsActive: {
        type: Sequelize.BOOLEAN
      },
      Atype: {
        type: Sequelize.NUMBER
      },
      GoogleAuth: {
        type: Sequelize.STRING
      },
      FacebookAuth: {
        type: Sequelize.STRING
      },
      LastLogin: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Accounts');
  }
};