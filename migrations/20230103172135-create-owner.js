'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      shopName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pwd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerPhone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ownerPoint: {
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Owners');
  }
};