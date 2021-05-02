'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductType: {
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Subname: {
        type: Sequelize.STRING
      },
      DataJson: {
        type: Sequelize.TEXT
      },
      Price: {
        type: Sequelize.FLOAT
      },
      Discount: {
        type: Sequelize.FLOAT
      },
      Description: {
        type: Sequelize.TEXT
      },
      IsActive: {
        type: Sequelize.BOOLEAN
      },
      Status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Products');
  }
};