'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('ServiceTypes', 'icon',
        {
          type: Sequelize.STRING(250),
          required: false,
          allowNull: true
        });
  },

  down: (queryInterface) => {
    return queryInterface
      .removeColumn('ServiceTypes', 'icon');
  }
};
