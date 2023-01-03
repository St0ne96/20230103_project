'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      nickname: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50),
      },
      pwd: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userPhone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userAddress: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userPoint: {
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
    await queryInterface.dropTable('Users');
  }
};