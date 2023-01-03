'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ownerWorkLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED,
      },
      ownerId: {
        allowNull: false,
        references: { model: "Owners", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
      },
      laundryId: {
        allowNull: false,
        references: { model: "Laundries", key: "id" },
        type: Sequelize.BIGINT.UNSIGNED,
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
    await queryInterface.dropTable('ownerWorkLists');
  }
};