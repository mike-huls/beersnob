'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('countrydata')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('countrydata');
  }
};