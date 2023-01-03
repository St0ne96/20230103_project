'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Laundries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      userId: {
        allowNull: false,
        references: { model: "Users", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      laundryName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING
      },
      request: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
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
    await queryInterface.dropTable('Laundries');
  }
};